import './globals.css';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import LayoutWrapper from '@/components/layout/LayoutWrapper';

export const metadata: Metadata = {
  title: 'Adv. Meet Shah & Associates',
  description: 'Strategic Legal Representation for Real Estate, Wealth & Commercial Disputes in Mumbai.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Toaster position="top-right" richColors />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
