'use client';

import { useState } from 'react';
import { faqData } from '@/lib/faq-data';

/**
 * FAQ Section - Clean Accordion Design
 * SEO structure preserved
 */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-16 lg:py-20 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full mb-4">
              FAQ
            </span>
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600">
              Quick answers about our SMS verification service.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl border transition-all duration-200 ${
                  openIndex === index 
                    ? 'border-indigo-200 shadow-soft' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Question Button */}
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-sm font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  <span 
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                      openIndex === index 
                        ? 'bg-indigo-600 rotate-180' 
                        : 'bg-slate-100'
                    }`}
                    aria-hidden="true"
                  >
                    <svg 
                      className={`w-4 h-4 ${openIndex === index ? 'text-white' : 'text-slate-600'}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Answer Content */}
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
