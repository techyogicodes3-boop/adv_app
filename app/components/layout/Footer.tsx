import Link from 'next/link';
import Image from 'next/image';
import {
  CONTACT_EMAIL,
  GOOGLE_BUSINESS_URL,
  OFFICE_ADDRESS,
  SOCIAL_LINKS,
  WHATSAPP_URL,
} from '@/lib/constants';

const practiceAreas = [
  'Real Estate & Property Disputes',
  'Housing Society & Redevelopment Matters',
  'Land Acquisition & Due Diligence',
  'Wealth & Succession Planning',
  'Commercial Litigation & Arbitration',
  'NRI Property Advisory',
];

const socialIcons = [
  {
    name: 'LinkedIn',
    href: SOCIAL_LINKS.linkedin,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: SOCIAL_LINKS.facebook,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: SOCIAL_LINKS.instagram,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-12 w-12 rounded-full p-0.5 drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
                <Image src="/logo.png" alt="Adv. Meet Shah & Associates" width={44} height={44} className="h-full w-full object-contain" />
              </div>
              <div>
                <span className="text-white font-semibold text-base leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>Adv. Meet Shah & Associates</span>
                <span className="text-[#B8952A] text-[10px] block tracking-wider">TRUSTED COUNSEL</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-5">
              Trusted Counsel. Strategic Solutions. Enduring Relationships.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md mb-5">
              Strategic legal representation in real estate, wealth, and commercial disputes for individuals, families, HNIs, NRIs, businesses, and institutions across Mumbai and beyond.
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1A2E42] flex items-center justify-center text-gray-400 hover:text-[#B8952A] hover:bg-[#B8952A]/10 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {[{ href: '/', label: 'Home' }, { href: '/about', label: 'About Us' }, { href: '/services', label: 'Practice Areas' }, { href: '/blog', label: 'Insights & Articles' }, { href: '/contact', label: 'Contact Us' }].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#B8952A] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wider uppercase">Practice Areas</h4>
            <ul className="space-y-2.5">
              {practiceAreas.map((area) => (
                <li key={area} className="text-sm text-gray-400 leading-relaxed">
                  {area}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-wider uppercase">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-[#B8952A] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="leading-relaxed text-justify">{OFFICE_ADDRESS}</span>
              </li>
              <li className="flex gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-[#B8952A] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#B8952A] transition-colors break-all">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <div className="flex gap-2 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-[#B8952A] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#B8952A] transition-colors">
                    WhatsApp
                  </a>
                  <span>|</span>
                  <a href="tel:+919029022697" className="hover:text-[#B8952A] transition-colors">
                    9029022697
                  </a>
                </div>
              </li>
              <li>
                <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="flex gap-2 text-sm text-gray-400 hover:text-[#B8952A] transition-colors">
                  <svg className="w-4 h-4 text-[#B8952A] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Google Business
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#1A2E42] mt-10 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Adv. Meet Shah & Associates. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
