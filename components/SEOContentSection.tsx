/**
 * SEO Content Section - Clean Readable Design
 * SEO structure and keywords preserved
 */
export default function SEOContentSection() {
  return (
    <section 
      className="py-16 lg:py-20 bg-slate-50"
      aria-labelledby="seo-content-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full mb-4">
              About
            </span>
            <h2 
              id="seo-content-heading" 
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-3"
            >
              Worldwide GEO Phone Numbers – Receive SMS Online
            </h2>
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 space-y-6">
            {/* Section 1 */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  Registration Free – Receive SMS Online In Seconds
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-11">
                Our platform offers a complimentary service for <strong>receiving SMS messages online</strong> without 
                any need for registration. Simply choose a phone number from our list to receive messages from various 
                platforms. Whether you need to <strong>receive SMS online</strong> for WhatsApp, Telegram, Google, or 
                Facebook verification, our service provides instant delivery with no signup required.
              </p>
            </div>

            <hr className="border-slate-100" />

            {/* Section 2 */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  Are the Numbers on Our Platform Temporary?
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-11">
                Yes! Our <strong>temporary phone numbers</strong> are designed for short-term use, perfect for 
                <strong> SMS verification</strong> without exposing your personal number. These <strong>virtual phone 
                numbers</strong> are regularly refreshed to ensure availability. When you use a temporary 
                phone number from us, you get instant access to receive verification codes from any service.
              </p>
            </div>

            <hr className="border-slate-100" />

            {/* Section 3 */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  Receive SMS From Any Country You Choose
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-11">
                Our <strong>worldwide GEO phone numbers</strong> span over 50 countries including USA, 
                UK, Germany, France, Canada, Australia, and many more. You can <strong>receive SMS for free</strong> on 
                any number from the country of your choice. This is perfect for accessing region-locked services or 
                verifying accounts that require specific country codes.
              </p>
            </div>

            <hr className="border-slate-100" />

            {/* Section 4 */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  Privacy & Security First
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-11">
                Our platform protects your <strong>privacy</strong> by never requiring personal information. 
                Use our <strong>burner phone numbers</strong> for one-time verifications, keeping your real 
                number completely private. All messages are automatically deleted for your security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
