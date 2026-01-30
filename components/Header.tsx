'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Header Component
 * Responsive navigation with mobile menu and active page highlighting
 * AdSense-compliant clear navigation structure
 */
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const pathname = usePathname();

  // Check if user is logged in
  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch('/api/auth/me', {
          credentials: 'include',
        });
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
    { href: '/free-sms-numbers', label: 'Free SMS Numbers' },
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/#faq', label: 'FAQ' },
  ];

  /**
   * Check if the current path matches the link for active highlighting
   */
  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-xl font-bold text-slate-900"
            aria-label="SMS Verify Online - Home"
          >
            {/* SMS Icon */}
            <svg 
              className="w-8 h-8 text-primary-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
              />
            </svg>
            <span className="hidden sm:inline">SMS Verify</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors animated-underline ${
                  isActiveLink(link.href)
                    ? 'text-primary-600'
                    : 'text-slate-600 hover:text-primary-600'
                }`}
                aria-current={isActiveLink(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth & CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {checkingAuth ? (
              <div className="w-16 h-4 bg-slate-200 rounded animate-pulse"></div>
            ) : isLoggedIn ? (
              <Link 
                href="/dashboard" 
                className="font-medium text-primary-600 hover:text-primary-700 transition-colors"
              >
                Dashboard
              </Link>
            ) : (
              <Link 
                href="/sign-in" 
                className="font-medium text-slate-600 hover:text-primary-600 transition-colors"
              >
                Sign In
              </Link>
            )}
            <Link href="/free-sms-numbers" className="btn-primary">
              Get a Number
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu" 
            className="md:hidden border-t border-slate-100 py-4 animate-fade-in"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 font-medium transition-colors ${
                    isActiveLink(link.href)
                      ? 'text-primary-600'
                      : 'text-slate-600 hover:text-primary-600'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={isActiveLink(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
              {checkingAuth ? (
                <div className="py-2 w-16 h-4 bg-slate-200 rounded animate-pulse"></div>
              ) : isLoggedIn ? (
                <Link 
                  href="/dashboard" 
                  className="py-2 font-medium text-primary-600 hover:text-primary-700 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
              ) : (
                <Link 
                  href="/sign-in" 
                  className="py-2 font-medium text-slate-600 hover:text-primary-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              )}
              <Link 
                href="/free-sms-numbers" 
                className="btn-primary text-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Number
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
