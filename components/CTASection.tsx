import Link from 'next/link';

/**
 * CTA Section Component
 * Final conversion-focused call-to-action before footer
 * Designed to drive user action
 */
export default function CTASection() {
  return (
    <section 
      id="numbers"
      className="section bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Worldwide GEO Phone Numbers Available
          </span>

          {/* Heading */}
          <h2 
            id="cta-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Receive SMS For Free – Get Started Now
          </h2>

          {/* Description */}
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Registration free – receive SMS online in seconds. Choose from 50+ countries 
            and get your verification code instantly with speed and reliability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/free-sms-numbers"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-colors shadow-lg text-lg"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
              Browse Numbers
            </Link>
            <Link 
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 transition-colors text-lg"
            >
              Learn More
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-primary-200 text-sm">Active Numbers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-primary-200 text-sm">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">10M+</div>
              <div className="text-primary-200 text-sm">SMS Received</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-primary-200 text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
