import Link from 'next/link';

/**
 * Hero Section Component
 * Clean, high-conversion SaaS hero
 * SEO structure preserved - H1 and H2 intact
 */
export default function HeroSection() {
  return (
    <section 
      className="relative pt-24 pb-16 md:pt-28 md:pb-20 bg-white" 
      aria-labelledby="hero-heading"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-50" aria-hidden="true" />
      
      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full mb-6">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute h-2 w-2 rounded-full bg-emerald-400 opacity-75" />
              <span className="relative rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-emerald-700">200+ Numbers Online Now</span>
          </div>

          {/* Main H1 - SEO Optimized */}
          <h1 
            id="hero-heading" 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-4"
          >
            Receive SMS Online
            <span className="block text-slate-400 mt-1">Free & Instant</span>
          </h1>

          {/* H2 Subheading - SEO */}
          <h2 className="text-lg md:text-xl text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            Get temporary phone numbers from 50+ countries for SMS verification. 
            Works with WhatsApp, Telegram, Google, and more.
          </h2>

          {/* Trust Signals */}
          <p className="text-sm text-slate-500 mb-8">
            <span className="inline-flex items-center gap-1">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No registration required
            </span>
            <span className="mx-3 text-slate-300">•</span>
            <span className="inline-flex items-center gap-1">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Instant access
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link 
              href="/free-sms-numbers" 
              className="btn-primary px-8 py-3 text-base"
            >
              Get a Free Number
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link 
              href="#how-it-works" 
              className="btn-secondary px-8 py-3 text-base"
            >
              How It Works
            </Link>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-8 border-t border-slate-100">
            {[
              { value: '10M+', label: 'SMS Received' },
              { value: '50+', label: 'Countries' },
              { value: '99.9%', label: 'Uptime' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
