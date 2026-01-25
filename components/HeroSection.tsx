import Link from 'next/link';

/**
 * Hero Section Component
 * Primary above-the-fold content with SEO-optimized H1
 * Features animated elements and clear CTA
 */
export default function HeroSection() {
  return (
    <section 
      className="relative overflow-hidden bg-gradient-primary"
      aria-labelledby="hero-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-100 rounded-full opacity-50 blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="py-20 md:py-28 lg:py-36">
          <div className="max-w-4xl mx-auto text-center">
            {/* Rent Badge */}
            <div className="inline-flex items-center gap-2 badge mb-4 animate-fade-in">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Rent Temporary Phone Number</span>
            </div>

            {/* Main H1 - SEO Optimized */}
            <h1 
              id="hero-heading"
              className="heading-1 mb-4 animate-slide-up"
            >
              Receive SMS Online{' '}
              <span className="text-gradient">– Free & Instant</span>
            </h1>

            {/* H2 Subheading */}
            <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-6 animate-slide-up">
              Temporary phone numbers from 50+ countries
            </h2>

            {/* Value Proposition */}
            <p className="text-body max-w-2xl mx-auto mb-8 animate-slide-up">
              Our platform offers a complimentary service for receiving SMS messages online without any need for registration. 
              Simply choose a phone number from our list to receive messages from WhatsApp, Telegram, Google, Facebook, and more. 
              Completely free and private – no signup required.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Link href="/free-sms-numbers" className="btn-primary text-lg px-8 py-4">
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
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" 
                  />
                </svg>
                Get a Number Now
              </Link>
              <Link href="#how-it-works" className="btn-secondary text-lg px-8 py-4">
                Learn How It Works
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-4">Trusted by thousands of users worldwide</p>
              <div className="flex flex-wrap justify-center gap-8 items-center">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 font-medium">10M+ SMS Received</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 font-medium">50+ Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 font-medium">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
