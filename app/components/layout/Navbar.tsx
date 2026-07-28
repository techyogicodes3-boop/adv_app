'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { getUser, removeUser } from '@/lib/auth';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState<ReturnType<typeof getUser>>(null);
  const pathname = usePathname();
  const router = useRouter();
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setUser(getUser()); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setProfileOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleLogout = () => { removeUser(); setUser(null); setProfileOpen(false); router.push('/'); };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0D1B2A] shadow-lg' : 'bg-[#0D1B2A]/95 backdrop-blur-sm'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="h-11 w-11 rounded-full p-0.5 drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]">
            <Image src="/logo.png" alt="Adv. Meet Shah & Associates" width={40} height={40} className="h-full w-full object-contain" priority />
          </div>
          <div>
            <span className="text-white font-semibold text-base leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>Adv. Meet Shah</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={`text-sm font-medium transition-colors ${pathname === link.href ? 'text-[#B8952A]' : 'text-gray-300 hover:text-[#B8952A]'}`}>{link.label}</Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="relative" ref={profileRef}>
            <button onClick={() => setProfileOpen(!profileOpen)} className="w-9 h-9 rounded-full bg-[#1A2E42] border border-[#B8952A]/30 flex items-center justify-center hover:border-[#B8952A] transition-colors">
              <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                {user ? (
                  <>
                    <div className="px-4 py-3 bg-[#F8F4EE] border-b border-gray-100">
                      <p className="text-xs text-[#6B7280]">Signed in as</p>
                      <p className="text-sm font-semibold text-[#0D1B2A] truncate">{user.name}</p>
                    </div>
                    {user.role === 'admin' && <Link href="/admin" onClick={() => setProfileOpen(false)} className="block px-4 py-2.5 text-sm text-[#2C2C2C] hover:bg-[#F8F4EE] hover:text-[#B8952A] transition-colors">Admin Dashboard</Link>}
                    <button onClick={handleLogout} className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors">Sign Out</button>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={() => setProfileOpen(false)} className="block px-4 py-2.5 text-sm text-[#2C2C2C] hover:bg-[#F8F4EE] hover:text-[#B8952A] transition-colors">Login</Link>
                    <Link href="/register" onClick={() => setProfileOpen(false)} className="block px-4 py-2.5 text-sm text-[#2C2C2C] hover:bg-[#F8F4EE] hover:text-[#B8952A] transition-colors">Register</Link>
                  </>
                )}
              </div>
            )}
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden w-9 h-9 flex items-center justify-center text-gray-300">
            {menuOpen ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-[#0D1B2A] border-t border-[#1A2E42] px-4 py-4">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={`block py-2.5 text-sm font-medium transition-colors ${pathname === link.href ? 'text-[#B8952A]' : 'text-gray-300 hover:text-[#B8952A]'}`}>{link.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
