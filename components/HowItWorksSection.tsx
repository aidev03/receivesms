import Link from 'next/link';

/**
 * How It Works Section - Modern Step Design
 * SEO structure preserved
 */
export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Choose a Number',
      description: 'Browse our list of available virtual phone numbers from different countries. Select the one that fits your needs.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-400',
    },
    {
      number: '02',
      title: 'Receive SMS Online',
      description: 'Use the number for any service that requires SMS verification. Messages appear instantly on your screen.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-400',
    },
    {
      number: '03',
      title: 'Complete Verification',
      description: 'Copy the verification code from the SMS and paste it into your app. Account verified in seconds!',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-400',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden" aria-labelledby="how-it-works-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm mb-6">
            <span className="text-sm font-semibold text-slate-600">Simple Process</span>
          </div>
          <h2 id="how-it-works-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            How to Receive SMS Online
          </h2>
          <p className="text-lg text-slate-600">
            No registration required – get your verification code in seconds with just 3 simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-slate-300 to-transparent" aria-hidden="true" />
              )}

              {/* Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-xl shadow-slate-900/5 border border-slate-100 hover:shadow-2xl hover:border-slate-200 transition-all duration-500 hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-sm font-bold shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/free-sms-numbers" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
            Start Now – It&apos;s Free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
