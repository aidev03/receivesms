/**
 * How It Works Section
 * 3-step process visualization for user onboarding
 * Clean design with numbered steps
 */
export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Choose a Number',
      description: 'Browse our list of available virtual phone numbers from different countries. Select the one that fits your needs.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Receive SMS Online',
      description: 'Use the number for any service that requires SMS verification. Messages appear instantly on your screen.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Complete Verification',
      description: 'Copy the verification code from the SMS and paste it into your app. Account verified in seconds!',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section 
      id="how-it-works" 
      className="section bg-white"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge mb-4">Simple Process</span>
          <h2 id="how-it-works-heading" className="heading-2 mb-4">
            How to Receive SMS Online – Quick & Easy
          </h2>
          <p className="text-body">
            Registration free – receive SMS online in seconds. No downloads, 
            no hassle – just instant SMS delivery with speed and reliability.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative group"
            >
              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div 
                  className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-200 to-primary-100"
                  aria-hidden="true"
                />
              )}

              {/* Step Card */}
              <div className="card text-center relative z-10 h-full">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>

                {/* Step Label */}
                <span className="text-xs font-bold text-primary-600 tracking-wider uppercase mb-2 block">
                  Step {step.number}
                </span>

                {/* Step Title */}
                <h3 className="heading-3 mb-3">{step.title}</h3>

                {/* Step Description */}
                <p className="text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="/free-sms-numbers" className="btn-primary">
            Start Now – It&apos;s Free
          </a>
        </div>
      </div>
    </section>
  );
}
