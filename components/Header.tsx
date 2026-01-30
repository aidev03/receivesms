'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Header Component
 * Modern glassmorphism navigation - SEO structure preserved
 */
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch('/api/auth/me', { credentials: 'include' });
        setIsLoggedIn(response.ok);
      } catch {
        setIsLoggedIn(false);
      } finally {
        setCheckingAuth(false);
      }
    }
    checkAuth();
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/free-sms-numbers', label: 'Free Numbers' },
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/#faq', label: 'FAQ' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/90 backdrop-blur-2xl shadow-lg shadow-slate-900/5' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Receive SMS Online - Home">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative w-11 h-11 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold text-slate-900 leading-tight">Receive SMS</span>
              <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-[0.2em]">Online</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center bg-slate-100/80 backdrop-blur-sm rounded-full p-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActiveLink(link.href)
                    ? 'text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md shadow-blue-500/25'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                aria-current={isActiveLink(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {checkingAuth ? (
              <div className="w-20 h-9 bg-slate-100 rounded-full animate-pulse" />
            ) : isLoggedIn ? (
              <Link href="/dashboard" className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                Dashboard
              </Link>
            ) : (
              <Link href="/sign-in" className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                Sign In
              </Link>
            )}
            <Link href="/free-sms-numbers" className="relative group px-6 py-2.5 overflow-hidden rounded-full bg-slate-900 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
              <span className="relative z-10">Get a Number</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-2xl bg-slate-100 hover:bg-slate-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="relative w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-slate-700 rounded-full transition-all duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 bg-slate-700 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`block h-0.5 bg-slate-700 rounded-full transition-all duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${isMobileMenuOpen ? 'max-h-[400px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-5 py-3 rounded-2xl text-sm font-medium transition-all ${
                  isActiveLink(link.href) ? 'text-white bg-gradient-to-r from-blue-600 to-cyan-500' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-200/80 space-y-2">
              {!checkingAuth && (
                isLoggedIn ? (
                  <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="block px-5 py-3 text-center text-sm font-medium text-blue-600 bg-blue-50 rounded-2xl">
                    Dashboard
                  </Link>
                ) : (
                  <Link href="/sign-in" onClick={() => setIsMobileMenuOpen(false)} className="block px-5 py-3 text-center text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-2xl">
                    Sign In
                  </Link>
                )
              )}
              <Link href="/free-sms-numbers" onClick={() => setIsMobileMenuOpen(false)} className="block px-5 py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl shadow-lg shadow-blue-500/25">
                Get a Number
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
