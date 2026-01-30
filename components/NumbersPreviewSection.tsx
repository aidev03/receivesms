'use client';

import NumbersGrid, { FreeNumber } from './NumbersGrid';

/**
 * Sample numbers for homepage preview
 * SEO structure and IDs preserved
 */
const PREVIEW_NUMBERS: FreeNumber[] = [
  { id: 'us-15415805923', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (541) 580-5923', status: 'available', lastMessage: '2 min ago', messageCount: 1247 },
  { id: 'uk-447417477095', country: 'United Kingdom', countryCode: 'GB', flag: '🇬🇧', number: '+44 7417 477095', status: 'available', lastMessage: '3 min ago', messageCount: 892 },
  { id: 'de-4915511026848', country: 'Germany', countryCode: 'DE', flag: '🇩🇪', number: '+49 155 1102 6848', status: 'available', lastMessage: '1 min ago', messageCount: 654 },
  { id: 'us-17373786349', country: 'United States', countryCode: 'US', flag: '🇺🇸', number: '+1 (737) 378-6349', status: 'available', lastMessage: '1 min ago', messageCount: 2103 },
  { id: 'nl-31630826396', country: 'Netherlands', countryCode: 'NL', flag: '🇳🇱', number: '+31 63 082 6396', status: 'available', lastMessage: '4 min ago', messageCount: 298 },
  { id: 'es-34639710702', country: 'Spain', countryCode: 'ES', flag: '🇪🇸', number: '+34 639 710 702', status: 'available', lastMessage: '5 min ago', messageCount: 445 },
  { id: 'fr-33752989028', country: 'France', countryCode: 'FR', flag: '🇫🇷', number: '+33 7 52 98 90 28', status: 'available', lastMessage: '2 min ago', messageCount: 312 },
  { id: 'it-393509899247', country: 'Italy', countryCode: 'IT', flag: '🇮🇹', number: '+39 350 989 9247', status: 'available', lastMessage: '6 min ago', messageCount: 312 },
];

/**
 * Numbers Preview Section - Modern Card Design
 */
export default function NumbersPreviewSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative" id="numbers-preview">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm font-semibold text-green-700">Live Now</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Free SMS Verification Numbers
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose from our collection of virtual phone numbers. Get instant SMS verification for WhatsApp, Telegram, Google, and more.
          </p>
        </div>

        {/* Numbers Grid */}
        <NumbersGrid numbers={PREVIEW_NUMBERS} showPremiumBadge={true} />
      </div>
    </section>
  );
}
