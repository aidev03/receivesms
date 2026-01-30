'use client';

import NumbersGrid, { FreeNumber } from './NumbersGrid';

/**
 * Sample numbers for homepage preview
 * Shows limited numbers for non-authenticated users
 */
const PREVIEW_NUMBERS: FreeNumber[] = [
  // Free numbers (shown to everyone)
  { id: 'us-15415805923', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (541) 580-5923', status: 'available', lastMessage: '2 min ago', messageCount: 1247 },
  { id: 'gb-447418319486', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7418 319486', status: 'available', lastMessage: '3 min ago', messageCount: 892 },
  { id: 'de-4915207829731', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 1520 7829731', status: 'available', lastMessage: '1 min ago', messageCount: 1534 },
  // Premium numbers (locked for non-authenticated)
  { id: 'us-17373786349', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (737) 378-6349', status: 'available', lastMessage: '1 min ago', messageCount: 2103 },
  { id: 'nl-3197010280076', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 970 102 80076', status: 'available', lastMessage: '4 min ago', messageCount: 678 },
  { id: 'es-34697839410', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 697 839 410', status: 'available', lastMessage: '5 min ago', messageCount: 456 },
  { id: 'fr-33756963058', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 7 56 96 30 58', status: 'available', lastMessage: '2 min ago', messageCount: 987 },
  { id: 'it-393511234567', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 351 123 4567', status: 'available', lastMessage: '6 min ago', messageCount: 345 },
];

/**
 * Numbers Preview Section
 * Shows limited numbers with freemium upsell
 */
export default function NumbersPreviewSection() {
  return (
    <section className="py-16 bg-white" id="numbers-preview">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Available Now
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Free SMS Verification Numbers
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose from our collection of virtual phone numbers. Get instant SMS verification for WhatsApp, Telegram, Google, and more.
          </p>
        </div>

        {/* Numbers Grid with Freemium */}
        <NumbersGrid numbers={PREVIEW_NUMBERS} showPremiumBadge={true} />
      </div>
    </section>
  );
}
