import Link from 'next/link';

/**
 * How It Works Section - Clean SaaS Design
 * SEO structure preserved
 */
export default function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Choose a Number',
      description: 'Browse our list of available virtual phone numbers from different countries.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      number: '2',
      title: 'Receive SMS Online',
      description: 'Use the number for any service that requires SMS verification.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      number: '3',
      title: 'Complete Verification',
      description: 'Copy the verification code and paste it into your app. Done!',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-20 bg-white" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full mb-4">
            Simple Process
          </span>
          <h2 id="how-it-works-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            How to Receive SMS Online
          </h2>
          <p className="text-slate-600">
            Get your verification code in seconds — no registration required.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[60%] w-full h-px bg-slate-200" aria-hidden="true" />
              )}

              {/* Card */}
              <div className="relative bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-soft transition-all duration-200">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/free-sms-numbers" className="btn-primary">
            Start Now – Free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
