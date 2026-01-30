'use client';

import { useState } from 'react';
import { faqData } from '@/lib/faq-data';

/**
 * FAQ Section Component
 * Accordion-style FAQ with schema-friendly markup
 * Designed for SEO with proper semantic HTML
 */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-20 md:py-28 bg-white relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-cyan-100 to-blue-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-6">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">FAQ</span>
            </div>
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Find answers to common questions about our SMS verification service.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-blue-200 shadow-lg shadow-blue-500/10' 
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {/* Question Button */}
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-8">
                    {faq.question}
                  </h3>
                  <span 
                    className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 rotate-180' 
                        : 'bg-slate-100'
                    }`}
                    aria-hidden="true"
                  >
                    <svg 
                      className={`w-5 h-5 ${openIndex === index ? 'text-white' : 'text-slate-600'}`} 
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
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-14 text-center p-8 md:p-10 bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl border border-slate-200">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 mb-6">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              Our support team is here to help you 24/7. Get in touch and we'll respond as soon as possible.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Contact Support
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
