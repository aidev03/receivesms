'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Header Component
 * Clean, minimal SaaS navigation (Stripe/Linear style)
 * SEO structure preserved
 */
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
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
    { href: '/free-sms-numbers', label: 'Numbers' },
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/#faq', label: 'FAQ' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-xs' 
          : 'bg-white border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-slate-900 hover:text-slate-700 transition-colors"
            aria-label="Receive SMS Online - Home"
          >
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <svg className="w-4.5 h-4.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <span className="font-semibold text-sm sm:text-base">Receive SMS Online</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActiveLink(link.href)
                    ? 'text-slate-900 bg-slate-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
                aria-current={isActiveLink(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth & CTA */}
          <div className="hidden md:flex items-center gap-3">
            {checkingAuth ? (
              <div className="w-16 h-8 bg-slate-100 rounded-md animate-pulse" />
            ) : isLoggedIn ? (
              <Link 
                href="/dashboard" 
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Dashboard
              </Link>
            ) : (
              <Link 
                href="/sign-in" 
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Sign in
              </Link>
            )}
            <Link 
              href="/free-sms-numbers" 
              className="btn-primary text-sm py-2"
            >
              Get a Number
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-slate-100 animate-fade-in">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    isActiveLink(link.href)
                      ? 'text-slate-900 bg-slate-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="pt-3 mt-3 border-t border-slate-100 space-y-2">
                {!checkingAuth && (
                  isLoggedIn ? (
                    <Link 
                      href="/dashboard" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <Link 
                      href="/sign-in" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md"
                    >
                      Sign in
                    </Link>
                  )
                )}
                <Link 
                  href="/free-sms-numbers" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full btn-primary text-center"
                >
                  Get a Number
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
