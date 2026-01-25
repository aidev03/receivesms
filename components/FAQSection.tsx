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
      className="section bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="badge mb-4">FAQ</span>
            <h2 id="faq-heading" className="heading-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-body">
              Find answers to common questions about our SMS verification service.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div 
            className="space-y-4"
            itemScope 
            itemType="https://schema.org/FAQPage"
          >
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden"
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question"
              >
                {/* Question Button */}
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 
                    className="text-lg font-semibold text-slate-900 pr-8"
                    itemProp="name"
                  >
                    {faq.question}
                  </h3>
                  <span 
                    className={`flex-shrink-0 w-6 h-6 text-primary-600 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  itemScope 
                  itemProp="acceptedAnswer" 
                  itemType="https://schema.org/Answer"
                >
                  <div className="p-5 pt-0 text-slate-600 leading-relaxed" itemProp="text">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12 p-8 bg-slate-50 rounded-2xl">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-slate-600 mb-4">
              Our support team is here to help you 24/7.
            </p>
            <a 
              href="/contact" 
              className="btn-secondary"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
