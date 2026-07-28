'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Check, Languages, Moon, Palette, Sun, X } from 'lucide-react';

type ThemeMode = 'light' | 'dark';
type LanguageCode = 'en' | 'hi' | 'gu';
type ScriptStatus = 'loading' | 'ready' | 'blocked';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'gu', label: 'ગુજરાતી' },
] satisfies { code: LanguageCode; label: string }[];

const themes: { value: ThemeMode; icon: React.ReactNode }[] = [
  { value: 'light', icon: <Sun className="h-4 w-4" aria-hidden /> },
  { value: 'dark', icon: <Moon className="h-4 w-4" aria-hidden /> },
];

const uiCopy: Record<LanguageCode, {
  panelTitle: string;
  panelSubtitle: string;
  languageLabel: string;
  themeLabel: string;
  light: string;
  dark: string;
  close: string;
  trigger: string;
  loading: string;
  blocked: string;
  machineNote: string;
}> = {
  en: {
    panelTitle: 'Language & Theme',
    panelSubtitle: 'Choose translation and display mode',
    languageLabel: 'Language',
    themeLabel: 'Theme',
    light: 'Light',
    dark: 'Dark',
    close: 'Close',
    trigger: 'Language / Theme',
    loading: 'Translation is loading. Your choice will apply automatically.',
    blocked: 'Translation service is blocked by the browser or network.',
    machineNote: 'Machine translation may not preserve legal nuance.',
  },
  hi: {
    panelTitle: 'भाषा और थीम',
    panelSubtitle: 'अनुवाद और प्रदर्शन मोड चुनें',
    languageLabel: 'भाषा',
    themeLabel: 'थीम',
    light: 'लाइट',
    dark: 'डार्क',
    close: 'बंद करें',
    trigger: 'भाषा / थीम',
    loading: 'अनुवाद लोड हो रहा है। आपका विकल्प अपने आप लागू होगा।',
    blocked: 'अनुवाद सेवा ब्राउज़र या नेटवर्क द्वारा अवरुद्ध है।',
    machineNote: 'मशीन अनुवाद कानूनी अर्थ पूरी तरह सुरक्षित नहीं रख सकता।',
  },
  gu: {
    panelTitle: 'ભાષા અને થીમ',
    panelSubtitle: 'અનુવાદ અને પ્રદર્શન મોડ પસંદ કરો',
    languageLabel: 'ભાષા',
    themeLabel: 'થીમ',
    light: 'લાઇટ',
    dark: 'ડાર્ક',
    close: 'બંધ કરો',
    trigger: 'ભાષા / થીમ',
    loading: 'અનુવાદ લોડ થઈ રહ્યો છે. તમારી પસંદગી આપમેળે લાગુ થશે.',
    blocked: 'અનુવાદ સેવા બ્રાઉઝર અથવા નેટવર્ક દ્વારા અવરોધિત છે.',
    machineNote: 'મશીન અનુવાદ કાનૂની અર્થ સંપૂર્ણ રીતે સાચવી શકે નહીં.',
  },
};

const isLanguageCode = (value: string | null): value is LanguageCode =>
  value === 'en' || value === 'hi' || value === 'gu';

const getCookieValue = (name: string) =>
  document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1] || '';

const getCookieLanguage = (): LanguageCode | null => {
  const cookie = decodeURIComponent(getCookieValue('googtrans'));
  const code = cookie.split('/').filter(Boolean).pop();
  return isLanguageCode(code || null) ? code as LanguageCode : null;
};

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    __translateDomGuardInstalled?: boolean;
    google?: {
      translate?: {
        TranslateElement: new (
          options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
          element: string
        ) => void;
      };
    };
  }
}

export default function LanguageThemeWidget() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [language, setLanguageState] = useState<LanguageCode>('en');
  const [scriptStatus, setScriptStatus] = useState<ScriptStatus>('loading');
  const pendingLanguageRef = useRef<LanguageCode | null>(null);
  const languageRef = useRef<LanguageCode>('en');
  const reapplyTimerRef = useRef<number | null>(null);
  const pathname = usePathname();
  const copy = uiCopy[language];

  const hideGoogleTranslateChrome = useCallback(() => {
    document.documentElement.style.marginTop = '0px';
    document.body.style.top = '0px';
    document.body.style.minHeight = '100%';

    document
      .querySelectorAll<HTMLElement>(
        'body > .skiptranslate, .goog-te-banner-frame, .goog-te-balloon-frame, .VIpgJd-ZVi9od-ORHb, .VIpgJd-ZVi9od-ORHb-OEVmcd'
      )
      .forEach((element) => {
        element.style.display = 'none';
        element.style.visibility = 'hidden';
        element.style.height = '0';
      });

    document
      .querySelectorAll<HTMLIFrameElement>('iframe.skiptranslate, iframe.goog-te-banner-frame, iframe.VIpgJd-ZVi9od-ORHb')
      .forEach((frame) => {
        frame.style.display = 'none';
        frame.style.visibility = 'hidden';
        frame.style.height = '0';
      });
  }, []);

  const clearTranslateCookie = useCallback(() => {
    const expires = 'expires=Thu, 01 Jan 1970 00:00:00 GMT';
    const host = window.location.hostname;
    document.cookie = `googtrans=; path=/; ${expires}`;
    document.cookie = `googtrans=; path=/; domain=${host}; ${expires}`;
    if (host.includes('.')) {
      document.cookie = `googtrans=; path=/; domain=.${host}; ${expires}`;
    }
  }, []);

  const setTranslateCookie = useCallback((code: LanguageCode) => {
    const value = code === 'en' ? '/en/en' : `/en/${code}`;
    const host = window.location.hostname;
    document.cookie = `googtrans=${value}; path=/; SameSite=Lax`;
    if (host !== 'localhost' && host !== '0.0.0.0' && !/^\d+\.\d+\.\d+\.\d+$/.test(host)) {
      document.cookie = `googtrans=${value}; path=/; domain=${host}; SameSite=Lax`;
      if (host.includes('.')) {
        document.cookie = `googtrans=${value}; path=/; domain=.${host}; SameSite=Lax`;
      }
    }
  }, []);

  const installDomGuard = useCallback(() => {
    if (window.__translateDomGuardInstalled) return;
    window.__translateDomGuardInstalled = true;

    const originalInsertBefore = Node.prototype.insertBefore;
    const originalRemoveChild = Node.prototype.removeChild;
    const originalReplaceChild = Node.prototype.replaceChild;

    Node.prototype.insertBefore = function insertBeforeGuard<T extends Node>(newNode: T, referenceNode: Node | null): T {
      if (referenceNode && referenceNode.parentNode !== this) {
        return this.appendChild(newNode) as T;
      }

      return originalInsertBefore.call(this, newNode, referenceNode) as T;
    };

    Node.prototype.removeChild = function removeChildGuard<T extends Node>(child: T): T {
      if (child.parentNode !== this) {
        return child;
      }

      return originalRemoveChild.call(this, child) as T;
    };

    Node.prototype.replaceChild = function replaceChildGuard<T extends Node>(newChild: Node, oldChild: T): T {
      if (oldChild.parentNode !== this) {
        this.appendChild(newChild);
        return oldChild;
      }

      return originalReplaceChild.call(this, newChild, oldChild) as T;
    };
  }, []);

  const applyGoogleLanguage = useCallback((code: LanguageCode, attempt = 0) => {
    const combo = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (!combo && attempt < 160) {
      window.setTimeout(() => applyGoogleLanguage(code, attempt + 1), 250);
      return;
    }
    if (!combo) {
      pendingLanguageRef.current = code;
      setScriptStatus('blocked');
      return;
    }

    pendingLanguageRef.current = null;
    setScriptStatus('ready');
    if (code === 'en') clearTranslateCookie();
    setTranslateCookie(code);
    document.documentElement.lang = code;
    const hasEnglishOption = Array.from(combo.options).some((option) => option.value === 'en');
    combo.value = code === 'en' ? (hasEnglishOption ? 'en' : '') : code;
    combo.dispatchEvent(new Event('input', { bubbles: true }));
    combo.dispatchEvent(new Event('change'));
    combo.dispatchEvent(new Event('change', { bubbles: true }));
    window.setTimeout(hideGoogleTranslateChrome, 50);
    window.setTimeout(hideGoogleTranslateChrome, 400);
    window.setTimeout(hideGoogleTranslateChrome, 1000);
  }, [clearTranslateCookie, hideGoogleTranslateChrome, setTranslateCookie]);

  const scheduleRouteReapply = useCallback(() => {
    if (languageRef.current === 'en') return;
    if (reapplyTimerRef.current) window.clearTimeout(reapplyTimerRef.current);
    reapplyTimerRef.current = window.setTimeout(() => {
      applyGoogleLanguage(languageRef.current);
    }, 900);
  }, [applyGoogleLanguage]);

  const applyTheme = useCallback((nextTheme: ThemeMode) => {
    setTheme(nextTheme);
    window.localStorage.setItem('site_theme', nextTheme);
    document.documentElement.dataset.siteTheme = nextTheme;
  }, []);

  const applyLanguage = useCallback((code: LanguageCode) => {
    setLanguageState(code);
    languageRef.current = code;
    window.localStorage.setItem('site_language', code);
    document.documentElement.lang = code;
    pendingLanguageRef.current = code;

    if (code === 'en') {
      clearTranslateCookie();
      setTranslateCookie('en');
      applyGoogleLanguage('en');
      document.documentElement.classList.remove('translated-ltr', 'translated-rtl');
      document.body.classList.remove('translated-ltr', 'translated-rtl');
      hideGoogleTranslateChrome();
      return;
    }

    document.documentElement.classList.remove('translated-ltr', 'translated-rtl');
    document.body.classList.remove('translated-ltr', 'translated-rtl');
    setTranslateCookie(code);
    window.setTimeout(() => applyGoogleLanguage(code), 0);
    applyGoogleLanguage(code);
  }, [applyGoogleLanguage, clearTranslateCookie, hideGoogleTranslateChrome, setTranslateCookie]);

  useEffect(() => {
    installDomGuard();

    const savedTheme = window.localStorage.getItem('site_theme') as ThemeMode | null;
    applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

    const storedLanguage = window.localStorage.getItem('site_language');
    const migratedLanguage = storedLanguage === 'mr' ? 'gu' : storedLanguage;
    if (storedLanguage === 'mr') {
      window.localStorage.setItem('site_language', 'gu');
      clearTranslateCookie();
      setTranslateCookie('gu');
    }

    const initialLanguage = isLanguageCode(migratedLanguage)
      ? migratedLanguage
      : getCookieLanguage() || 'en';

    setLanguageState(initialLanguage);
    languageRef.current = initialLanguage;
    document.documentElement.lang = initialLanguage;
    pendingLanguageRef.current = initialLanguage !== 'en' ? initialLanguage : null;

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate) {
        setScriptStatus('blocked');
        return;
      }

      if (!document.querySelector('.goog-te-combo')) {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en', includedLanguages: 'en,hi,gu', autoDisplay: false },
          'google_translate_element'
        );
      }

      setScriptStatus('ready');
      const queuedLanguage = pendingLanguageRef.current || languageRef.current;
      if (queuedLanguage !== 'en') applyGoogleLanguage(queuedLanguage);
    };

    const existingScript = document.getElementById('google-translate-script') as HTMLScriptElement | null;
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onerror = () => setScriptStatus('blocked');
      script.onload = () => window.setTimeout(() => {
        if (!document.querySelector('.goog-te-combo')) window.googleTranslateElementInit?.();
      }, 150);
      document.body.appendChild(script);
    } else if (window.google?.translate) {
      window.googleTranslateElementInit?.();
    }

    if (initialLanguage !== 'en') {
      setTranslateCookie(initialLanguage);
      applyGoogleLanguage(initialLanguage);
    }

    const chromeObserver = new MutationObserver(hideGoogleTranslateChrome);
    chromeObserver.observe(document.documentElement, { childList: true, subtree: true });

    const interval = window.setInterval(() => {
      hideGoogleTranslateChrome();
      const combo = document.querySelector<HTMLSelectElement>('.goog-te-combo');
      const comboLanguage = combo?.value || 'en';
      if (isLanguageCode(comboLanguage) && comboLanguage !== languageRef.current) {
        setLanguageState(comboLanguage);
        languageRef.current = comboLanguage;
        window.localStorage.setItem('site_language', comboLanguage);
        document.documentElement.lang = comboLanguage;
      }
    }, 900);

    const handleStorage = (event: StorageEvent) => {
      if (event.key === 'site_theme') {
        applyTheme(event.newValue === 'dark' ? 'dark' : 'light');
      }
      if (event.key === 'site_language') {
        const nextLanguage = event.newValue === 'mr' ? 'gu' : event.newValue;
        applyLanguage(isLanguageCode(nextLanguage) ? nextLanguage : 'en');
      }
    };

    const handleNavigationReapply = () => scheduleRouteReapply();
    window.addEventListener('storage', handleStorage);
    window.addEventListener('popstate', handleNavigationReapply);
    window.addEventListener('pageshow', handleNavigationReapply);
    hideGoogleTranslateChrome();

    return () => {
      chromeObserver.disconnect();
      window.clearInterval(interval);
      if (reapplyTimerRef.current) window.clearTimeout(reapplyTimerRef.current);
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('popstate', handleNavigationReapply);
      window.removeEventListener('pageshow', handleNavigationReapply);
    };
  }, [
    applyGoogleLanguage,
    applyLanguage,
    applyTheme,
    clearTranslateCookie,
    hideGoogleTranslateChrome,
    installDomGuard,
    scheduleRouteReapply,
    setTranslateCookie,
  ]);

  useEffect(() => {
    scheduleRouteReapply();
  }, [pathname, scheduleRouteReapply]);

  const statusText = scriptStatus === 'loading' ? copy.loading : scriptStatus === 'blocked' ? copy.blocked : copy.machineNote;

  return (
    <div className="notranslate fixed bottom-24 right-5 z-50 flex flex-col items-end gap-3" translate="no">
      <div id="google_translate_element" className="hidden" />

      {open && (
        <div className="w-72 rounded-xl border border-[#EDE8DF] bg-white p-4 text-[#0D1B2A] shadow-2xl shadow-black/20">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">{copy.panelTitle}</p>
              <p className="text-xs text-[#6B7280]">{copy.panelSubtitle}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={copy.close}
              title={copy.close}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F4EE] text-[#0D1B2A] transition hover:bg-[#B8952A] hover:text-white"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          </div>

          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B8952A]">
              <Languages className="h-4 w-4" aria-hidden />
              {copy.languageLabel}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => applyLanguage(item.code)}
                  className={`flex min-h-9 items-center justify-center gap-1 rounded-lg border px-2 py-2 text-xs font-medium leading-tight transition ${
                    language === item.code
                      ? 'border-[#B8952A] bg-[#B8952A] text-white'
                      : 'border-[#EDE8DF] bg-[#F8F4EE] text-[#0D1B2A] hover:border-[#B8952A]'
                  }`}
                >
                  {language === item.code && <Check className="h-3 w-3 shrink-0" aria-hidden />}
                  <span className="break-words">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B8952A]">
              <Palette className="h-4 w-4" aria-hidden />
              {copy.themeLabel}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {themes.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => applyTheme(item.value)}
                  className={`flex min-h-9 items-center justify-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition ${
                    theme === item.value
                      ? 'border-[#B8952A] bg-[#B8952A] text-white'
                      : 'border-[#EDE8DF] bg-[#F8F4EE] text-[#0D1B2A] hover:border-[#B8952A]'
                  }`}
                >
                  {item.icon}
                  {item.value === 'light' ? copy.light : copy.dark}
                </button>
              ))}
            </div>
          </div>

          <p className={`mt-4 text-[11px] leading-relaxed ${scriptStatus === 'blocked' ? 'text-red-600' : 'text-[#6B7280]'}`}>
            {statusText}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={copy.trigger}
        title={copy.trigger}
        className="flex max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-[#0D1B2A] shadow-xl shadow-black/20 ring-1 ring-[#EDE8DF] transition hover:bg-[#B8952A] hover:text-white"
      >
        <Languages className="h-5 w-5 shrink-0" aria-hidden />
        <span className="truncate">{copy.trigger}</span>
      </button>
    </div>
  );
}
