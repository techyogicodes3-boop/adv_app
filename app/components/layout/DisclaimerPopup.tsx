'use client';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

export default function DisclaimerPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const agreed = sessionStorage.getItem('disclaimer_agreed');
    if (!agreed) setShow(true);
  }, []);

  const handleAgree = () => {
    sessionStorage.setItem('disclaimer_agreed', 'true');
    setShow(false);
  };

  const handleDisagree = () => {
    toast.error('Please accept the disclaimer to continue.');
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="bg-white max-w-2xl w-full rounded-xl shadow-2xl overflow-hidden border border-[#D4AF37]/30">
        <div className="bg-[#0D1B2A] px-8 py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-[#B8952A]/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#B8952A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <span className="text-[#B8952A] text-sm font-medium tracking-wider uppercase">Legal Disclaimer</span>
          </div>
          <h2 className="text-white text-xl font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>Adv. Meet Shah & Associates — Important Notice</h2>
        </div>
        <div className="px-8 py-6">
          <div className="bg-[#F8F4EE] rounded-lg p-5 border-l-4 border-[#B8952A]">
            <p className="text-[#2C2C2C] text-sm leading-relaxed">
              The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner.
              By accessing this website, you acknowledge and confirm that you are seeking information relating to{' '}
              <strong className="text-[#0D1B2A]">Adv. Meet Shah & Associates</strong> of your own accord and that there has been no form
              of solicitation, advertisement or inducement by the firm or its members. This website is only for{' '}
              <strong className="text-[#0D1B2A]">Educative and awareness purpose.</strong>
            </p>
          </div>
        </div>
        <div className="px-8 py-5 bg-[#F8F4EE] border-t border-gray-200 flex flex-col sm:flex-row gap-3 justify-end">
          <button onClick={handleDisagree} className="px-6 py-2.5 rounded-lg border border-gray-300 text-[#6B7280] text-sm font-medium hover:bg-gray-100 transition-colors">I Disagree</button>
          <button onClick={handleAgree} className="px-8 py-2.5 rounded-lg bg-[#B8952A] text-white text-sm font-medium hover:bg-[#8B6914] transition-colors shadow-md">I Agree - Proceed</button>
        </div>
      </div>
    </div>
  );
}
