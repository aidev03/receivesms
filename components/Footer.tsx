import Link from 'next/link';
import EmailSubscribe from './EmailSubscribe';

/**
 * Footer Component - Modern Clean Design
 * SEO structure and links preserved
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-slate-900 text-slate-300 relative overflow-hidden" role="contentinfo">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.1),transparent_70%)]" />
      
      {/* Newsletter Section */}
      <div className="relative border-b border-slate-800/50">
        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Get Free SMS Numbers Updates
                  </h2>
                  <p className="text-slate-400">
                    Be the first to know when we add new temporary phone numbers and features.
                  </p>
                </div>
                <div>
                  <EmailSubscribe />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-16 relative">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">Receive SMS</span>
                <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-[0.2em]">Online</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Receive SMS online for verification instantly. Free temporary phone numbers from 50+ countries. No registration required.
            </p>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Secure
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free
              </span>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-white font-semibold mb-5">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Use Cases</h3>
            <ul className="space-y-3">
              {footerLinks.useCases.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} Receive SMS Online. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/privacy-policy" className="text-slate-500 hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms-of-service" className="text-slate-500 hover:text-white transition-colors">Terms</Link>
              <Link href="/disclaimer" className="text-slate-500 hover:text-white transition-colors">Disclaimer</Link>
              <Link href="/contact" className="text-slate-500 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
