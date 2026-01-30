import Link from 'next/link';
import EmailSubscribe from './EmailSubscribe';

/**
 * Footer Component - Clean Minimal Design
 * SEO structure and links preserved
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { href: '/free-sms-numbers', label: 'Free Numbers' },
      { href: '/#how-it-works', label: 'How It Works' },
      { href: '/#features', label: 'Features' },
      { href: '/#faq', label: 'FAQ' },
    ],
    useCases: [
      { href: '/free-sms-numbers', label: 'WhatsApp Verification' },
      { href: '/free-sms-numbers', label: 'Telegram Verification' },
      { href: '/free-sms-numbers', label: 'Google Verification' },
      { href: '/free-sms-numbers', label: 'TikTok Verification' },
    ],
    legal: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms-of-service', label: 'Terms of Service' },
      { href: '/disclaimer', label: 'Disclaimer' },
      { href: '/contact', label: 'Contact' },
    ],
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200" role="contentinfo">
      {/* Newsletter */}
      <div className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Get Updates
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Be the first to know when we add new numbers.
            </p>
            <EmailSubscribe />
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <span className="font-bold text-slate-900">Receive SMS</span>
            </Link>
            <p className="text-sm text-slate-600 mb-4">
              Free temporary phone numbers for SMS verification. 50+ countries.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Secure
              </span>
              <span className="inline-flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free
              </span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Product</h3>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Use Cases</h3>
            <ul className="space-y-2.5">
              {footerLinks.useCases.map((link, index) => (
                <li key={link.label + index}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} Receive SMS Online. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-600 transition-colors" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
