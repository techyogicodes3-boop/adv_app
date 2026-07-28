'use client';
import { useState } from 'react';
import { Mail, MessageCircle, Phone, X } from 'lucide-react';
import { CONTACT_EMAIL, WHATSAPP_URL } from '@/lib/constants';

const actions = [
  {
    label: 'WhatsApp',
    href: WHATSAPP_URL,
    icon: <MessageCircle className="h-5 w-5" aria-hidden />,
    external: true,
  },
  {
    label: 'Call now',
    href: 'tel:+919029022697',
    icon: <Phone className="h-5 w-5" aria-hidden />,
  },
  {
    label: 'Email',
    href: `mailto:${CONTACT_EMAIL}`,
    icon: <Mail className="h-5 w-5" aria-hidden />,
  },
];

export default function FloatingContactWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex flex-col gap-2">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.external ? '_blank' : undefined}
              rel={action.external ? 'noopener noreferrer' : undefined}
              aria-label={action.label}
              title={action.label}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0D1B2A] shadow-lg ring-1 ring-[#EDE8DF] transition hover:bg-[#B8952A] hover:text-white"
            >
              {action.icon}
            </a>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Close contact options' : 'Open contact options'}
        title={open ? 'Close' : 'Contact'}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#B8952A] text-white shadow-xl shadow-black/20 transition hover:bg-[#8B6914]"
      >
        {open ? <X className="h-6 w-6" aria-hidden /> : <MessageCircle className="h-6 w-6" aria-hidden />}
      </button>
    </div>
  );
}
