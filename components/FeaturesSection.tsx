/**
 * Features Section (Why Choose Us)
 * Highlights key benefits and differentiators
 * Grid layout with icon cards - SEO optimized
 */
export default function FeaturesSection() {
  const features = [
    {
      title: 'Speed and Reliability',
      description: 'Receive SMS messages within seconds. Our real-time system ensures lightning-fast delivery with 99.9% uptime you can count on.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      title: 'Registration Free',
      description: 'Receive SMS online in seconds without creating an account. No email, no password, no personal information needed ever.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'Worldwide GEO Numbers',
      description: 'Access phone numbers from 50+ countries including USA, UK, Canada, Germany, France, and many more worldwide locations.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Keep Your Privacy',
      description: 'Protect your personal number from databases and spam. Messages auto-delete and we never store your personal data.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'bg-purple-100 text-purple-600',
    },
    {
      title: '24/7 Availability',
      description: 'Our service runs around the clock. Receive verification codes anytime, day or night, from anywhere in the world.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      title: 'Completely Free',
      description: 'Receive SMS for free – no hidden fees, no premium charges. Our service is completely free for all verification needs.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'bg-emerald-100 text-emerald-600',
    },
  ];

  return (
    <section 
      id="features" 
      className="section bg-slate-50"
      aria-labelledby="features-heading"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge mb-4">Advantages of Receiving SMS</span>
          <h2 id="features-heading" className="heading-2 mb-4">
            Receive SMS For Free – Keep Your Privacy
          </h2>
          <p className="text-body">
            Speed and reliability you can count on. Join thousands of users who trust our platform 
            for fast, secure SMS verification. Here&apos;s what makes us different.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <article 
              key={feature.title}
              className="card group hover:border-primary-200"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="heading-3 mb-2">{feature.title}</h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
