'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 3000);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-[#0D1B2A] px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,149,42,0.18),transparent_34rem)]" />
      <div className="relative flex flex-col items-center text-center">
        <div className="relative mb-7">
          <div className="absolute inset-[-18px] rounded-full border border-[#B8952A]/25 splash-orbit" />
          <div className="absolute inset-[-32px] rounded-full border border-[#B8952A]/10 splash-orbit-reverse" />
          <div className="h-28 w-28 rounded-full p-0.5 drop-shadow-[0_16px_28px_rgba(0,0,0,0.45)]">
            <Image src="/logo.png" alt="Adv. Meet Shah & Associates" width={96} height={96} className="h-full w-full object-contain" priority />
          </div>
        </div>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.28em] text-[#B8952A]">Adv. Meet Shah & Associates</p>
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>
          Trusted Counsel. Strategic Solutions. Enduring Relationships.
        </h2>
        <div className="mt-8 h-1 w-56 overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-[#B8952A] splash-progress" />
        </div>
      </div>
    </div>
  );
}
