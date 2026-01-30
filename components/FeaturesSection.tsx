/**
 * Features Section - Modern Bento Grid Design
 * SEO structure preserved
 */
export default function FeaturesSection() {
  const features = [
    {
      title: 'Lightning Fast',
      description: 'Receive SMS messages within seconds. Real-time delivery with 99.9% uptime.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-amber-400 to-orange-500',
      size: 'md:col-span-1',
    },
    {
      title: 'No Registration',
      description: 'Start receiving SMS instantly. No email, no password, no personal data required.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      gradient: 'from-green-400 to-emerald-500',
      size: 'md:col-span-1',
    },
    {
      title: '50+ Countries',
      description: 'Access numbers from USA, UK, Germany, France, Canada, and many more worldwide locations.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-blue-400 to-cyan-500',
      size: 'md:col-span-1',
    },
    {
      title: 'Complete Privacy',
      description: 'Your personal number stays private. Messages auto-delete and we never store personal data.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: 'from-purple-400 to-violet-500',
      size: 'md:col-span-1',
    },
    {
      title: '24/7 Available',
      description: 'Our service runs around the clock. Get verification codes anytime, day or night.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-indigo-400 to-blue-500',
      size: 'md:col-span-1',
    },
    {
      title: '100% Free',
      description: 'No hidden fees, no premium charges. Completely free for all your verification needs.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-teal-400 to-green-500',
      size: 'md:col-span-1',
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-white" aria-labelledby="features-heading">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
            <span className="text-sm font-semibold text-slate-600">Why Choose Us</span>
          </div>
          <h2 id="features-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Receive SMS For Free – Keep Your Privacy
          </h2>
          <p className="text-lg text-slate-600">
            Speed and reliability you can count on. Join thousands who trust our platform for secure SMS verification.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <article 
              key={feature.title}
              className={`group relative bg-slate-50 rounded-3xl p-6 lg:p-8 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 ${feature.size}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>

              {/* Hover Glow */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
