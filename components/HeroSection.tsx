import Link from 'next/link';

/**
 * Hero Section Component
 * Modern gradient design with animated elements
 * SEO structure preserved - H1 and H2 intact
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50" aria-labelledby="hero-heading">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-gradient-to-r from-purple-400/20 to-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container-custom relative pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Live Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg mb-8 animate-fade-in">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-sm font-medium text-slate-700">200+ Active Numbers Ready</span>
          </div>

          {/* Main H1 - SEO Optimized */}
          <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-slate-900">Receive SMS Online</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[size:200%] animate-gradient">
              Free & Instant
            </span>
          </h1>

          {/* H2 Subheading */}
          <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-6 max-w-2xl mx-auto">
            Temporary phone numbers from 50+ countries for instant verification
          </h2>

          {/* Value Proposition */}
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Get free temporary phone numbers for SMS verification. Works with WhatsApp, Telegram, Google, Facebook, and more. 
            <span className="text-slate-700 font-medium"> No registration required.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/free-sms-numbers" className="group relative px-8 py-4 bg-slate-900 text-white text-lg font-semibold rounded-2xl shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-slate-900/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Get a Number Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link href="#how-it-works" className="group px-8 py-4 text-slate-700 text-lg font-semibold rounded-2xl border-2 border-slate-200 hover:border-slate-300 hover:bg-white transition-all duration-300 flex items-center gap-2">
              Learn How It Works
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
            {[
              { value: '10M+', label: 'SMS Received' },
              { value: '50+', label: 'Countries' },
              { value: '200+', label: 'Active Numbers' },
              { value: '99.9%', label: 'Uptime' },
            ].map((stat) => (
              <div key={stat.label} className="group p-4 md:p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:bg-white transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-slate-400 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
