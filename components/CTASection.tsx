import Link from 'next/link';

/**
 * CTA Section - Clean High-Conversion Design
 * SEO structure preserved
 */
export default function CTASection() {
  return (
    <section id="numbers" className="py-16 lg:py-20 bg-slate-900" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-sm font-medium text-white/90">100+ Numbers Available</span>
          </div>

          {/* Heading */}
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Receive SMS For Free?
          </h2>

          {/* Description */}
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            No registration required. Choose from 50+ countries and get your verification code instantly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
            <Link href="/free-sms-numbers" className="btn-accent">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Browse Numbers
            </Link>
            <Link href="#how-it-works" className="px-5 py-2.5 text-white font-medium rounded-lg border border-white/30 hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '100+', label: 'Numbers' },
              { value: '50+', label: 'Countries' },
              { value: '10M+', label: 'SMS Received' },
              { value: '99.9%', label: 'Uptime' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
