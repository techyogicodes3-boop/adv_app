import LanguageThemeWidget from '@/components/layout/LanguageThemeWidget';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <LanguageThemeWidget />
    </>
  );
}
