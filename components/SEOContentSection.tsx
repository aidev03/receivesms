'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SEOContentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const sections = [
    {
      title: 'Registration Free – Receive SMS Online In Seconds',
      content: 'Our platform offers a complimentary service for <strong>receiving SMS messages online</strong> without any need for registration. Simply choose a phone number from our list to receive messages from various platforms. Whether you need to <strong>receive SMS online</strong> for WhatsApp, Telegram, Google, or Facebook verification, our service provides instant delivery with no signup required.',
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
      borderColor: 'border-l-amber-400',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
    },
    {
      title: 'Are the Numbers on Our Platform Temporary?',
      content: 'Yes! Our <strong>temporary phone numbers</strong> are designed for short-term use, perfect for <strong>SMS verification</strong> without exposing your personal number. These <strong>virtual phone numbers</strong> are regularly refreshed to ensure availability. When you use a temporary phone number from us, you get instant access to receive verification codes from any service.',
      iconBg: 'bg-violet-50',
      iconColor: 'text-violet-600',
      borderColor: 'border-l-violet-400',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
    {
      title: 'Receive SMS From Any Country You Choose',
      content: 'Our <strong>worldwide GEO phone numbers</strong> span over 50 countries including USA, UK, Germany, France, Canada, Australia, and many more. You can <strong>receive SMS for free</strong> on any number from the country of your choice. This is perfect for accessing region-locked services or verifying accounts that require specific country codes.',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-l-blue-400',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
    {
      title: 'Privacy & Security First',
      content: 'Our platform protects your <strong>privacy</strong> by never requiring personal information. Use our <strong>burner phone numbers</strong> for one-time verifications, keeping your real number completely private. All messages are automatically deleted for your security.',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      borderColor: 'border-l-emerald-400',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    },
  ];

  return (
    <section 
      className="py-16 lg:py-20 bg-slate-50/50"
      aria-labelledby="seo-content-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 
              id="seo-content-heading" 
              className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-3"
            >
              Worldwide GEO Phone Numbers – Receive SMS Online
            </h2>
          </motion.div>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`flex gap-5 items-start p-6 bg-white rounded-2xl border border-slate-200/80 border-l-4 ${section.borderColor} hover:shadow-medium transition-all duration-300 ${
                  index % 2 === 1 ? 'md:flex-row-reverse md:border-l-0 md:border-r-4' : ''
                }`}
              >
                <div className={`w-10 h-10 ${section.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <svg className={`w-5 h-5 ${section.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {section.icon}
                  </svg>
                </div>
                <div className={index % 2 === 1 ? 'md:text-right' : ''}>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">
                    {section.title}
                  </h3>
                  <p 
                    className="text-sm text-slate-500 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
