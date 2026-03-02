'use client';

import NumbersGrid, { FreeNumber } from './NumbersGrid';
import MotionWrapper from './MotionWrapper';

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

export default function NumbersPreviewSection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-slate-50/80 to-white" id="numbers-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-emerald-50/80 border border-emerald-200/60 rounded-full mb-4 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-40 animate-[ping_1.5s_ease-in-out_infinite]" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-emerald-700 tracking-wide">Live Numbers</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Free SMS Verification Numbers
              </h2>
              <p className="text-slate-500 mt-2 max-w-xl">
                Virtual phone numbers from 50+ countries. No registration required.
              </p>
            </div>
            <a 
              href="/free-sms-numbers" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors group"
            >
              View All Numbers
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </MotionWrapper>

        <MotionWrapper delay={0.15}>
          <NumbersGrid numbers={PREVIEW_NUMBERS} showPremiumBadge={false} />
        </MotionWrapper>
      </div>
    </section>
  );
}
