'use client';
import { useCallback, useState } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import DisclaimerPopup from './DisclaimerPopup';
import FloatingContactWidget from './FloatingContactWidget';
import LanguageThemeWidget from './LanguageThemeWidget';
import SplashScreen from './SplashScreen';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [splashDone, setSplashDone] = useState(false);
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');
  const handleSplashComplete = useCallback(() => setSplashDone(true), []);

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <SplashScreen onComplete={handleSplashComplete} />
      {splashDone && <DisclaimerPopup />}
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
      <LanguageThemeWidget />
      <FloatingContactWidget />
    </>
  );
}
