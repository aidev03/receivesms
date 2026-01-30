import Link from 'next/link';

/**
 * Hero Section Component
 * Compact modern design with clean aesthetics
 * SEO structure preserved - H1 and H2 intact
 */
export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-12 lg:pt-24 lg:pb-16 overflow-hidden bg-gradient-to-b from-slate-50 to-white" aria-labelledby="hero-heading">
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-cyan-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Live Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs font-medium text-slate-600">200+ Numbers Active</span>
          </div>

          {/* Main H1 - SEO Optimized */}
          <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-slate-900">Receive SMS Online </span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Free & Instant</span>
          </h1>

          {/* H2 Subheading */}
          <h2 className="text-base md:text-lg text-slate-600 mb-4 max-w-xl mx-auto">
            Temporary phone numbers from 50+ countries for instant verification
          </h2>

          {/* Value Proposition */}
          <p className="text-sm text-slate-500 max-w-lg mx-auto mb-8">
            Works with WhatsApp, Telegram, Google, Facebook, and more. <span className="text-slate-700 font-medium">No registration required.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
            <Link href="/free-sms-numbers" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Get a Number Now
            </Link>
            <Link href="#how-it-works" className="flex items-center gap-2 px-6 py-3 text-slate-700 font-medium rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200">
              How It Works
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Trust Stats - Compact */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { value: '10M+', label: 'SMS Received' },
              { value: '50+', label: 'Countries' },
              { value: '200+', label: 'Numbers' },
              { value: '99.9%', label: 'Uptime' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl md:text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
