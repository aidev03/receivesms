import Link from 'next/link';
import EmailSubscribe from './EmailSubscribe';

/**
 * Footer Component
 * AdSense-compliant footer with legal pages and trust signals
 * Contains site links, legal pages required for AdSense approval
 * SEO-friendly with proper semantic markup and internal linking
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  // SEO-optimized internal links with keyword-rich anchor text
  const footerLinks = {
    navigation: [
      { href: '/', label: 'Home' },
      { href: '/free-sms-numbers', label: 'Free Temporary Phone Numbers' },
      { href: '/#how-it-works', label: 'How It Works' },
      { href: '/#faq', label: 'FAQ' },
    ],
    services: [
      { href: '/free-sms-numbers', label: 'Receive SMS Online Free' },
      { href: '/free-sms-numbers#numbers', label: 'Temp Phone Numbers' },
      { href: '/free-sms-numbers', label: 'Burner Phone Numbers' },
      { href: '/free-sms-numbers', label: 'Virtual Phone Numbers' },
    ],
    useCases: [
      { href: '/free-sms-numbers', label: 'WhatsApp Verification' },
      { href: '/free-sms-numbers', label: 'Telegram Verification' },
      { href: '/free-sms-numbers', label: 'Google/Gmail Verification' },
      { href: '/free-sms-numbers', label: 'TikTok Verification' },
    ],
    legal: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms-of-service', label: 'Terms of Service' },
      { href: '/disclaimer', label: 'Disclaimer' },
      { href: '/contact', label: 'Contact Us' },
    ],
  };

  return (
    <footer className="bg-slate-900 text-slate-300" role="contentinfo">
      {/* Email Subscribe Section */}
      <div className="border-b border-slate-800">
        <div className="container-custom py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">
                Get Free SMS Numbers Updates
              </h2>
              <p className="text-slate-400">
                Be the first to know when we add new temporary phone numbers and features.
              </p>
            </div>
            <div className="lg:max-w-md lg:ml-auto">
              <EmailSubscribe />
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 md:py-16">
        {/* Main Footer Content - 5 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-xl font-bold text-white mb-4"
            >
              <svg 
                className="w-8 h-8 text-primary-400" 
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
              SMS Verify Online
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Receive SMS online for verification instantly. Free temporary phone numbers 
              from 50+ countries for all your verification needs. No registration required.
            </p>
            {/* Trust Signals */}
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Secure
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href + link.label}>
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - SEO Keyword Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href + link.label}>
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases - SEO Keyword Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Use Cases</h3>
            <ul className="space-y-3">
              {footerLinks.useCases.map((link) => (
                <li key={link.href + link.label}>
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links - Required for AdSense */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href + link.label}>
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} SMS Verify Online. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/privacy-policy" className="text-slate-500 hover:text-white transition-colors">
                Privacy
              </Link>
              <span className="text-slate-700">•</span>
              <Link href="/terms-of-service" className="text-slate-500 hover:text-white transition-colors">
                Terms
              </Link>
              <span className="text-slate-700">•</span>
              <Link href="/disclaimer" className="text-slate-500 hover:text-white transition-colors">
                Disclaimer
              </Link>
              <span className="text-slate-700">•</span>
              <Link href="/contact" className="text-slate-500 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          {/* AdSense Disclosure */}
          <p className="mt-6 text-xs text-slate-600 text-center">
            This site may contain affiliate links and advertisements. We may earn a commission from qualifying purchases at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
