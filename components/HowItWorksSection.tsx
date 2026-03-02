'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const steps = [
    {
      number: '1',
      title: 'Choose a Number',
      description: 'Browse our list of available virtual phone numbers from different countries.',
      color: 'bg-indigo-600',
      iconBg: 'bg-indigo-50 text-indigo-500',
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
      color: 'bg-violet-600',
      iconBg: 'bg-violet-50 text-violet-500',
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
      color: 'bg-emerald-600',
      iconBg: 'bg-emerald-50 text-emerald-500',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-12 lg:py-16 bg-white" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 id="how-it-works-heading" className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-3">
            How to Receive SMS Online
          </h2>
          <p className="text-slate-500">
            Get your verification code in seconds — no registration required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10 relative">
          {/* Animated connector line */}
          <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px overflow-hidden" aria-hidden="true">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-indigo-200 via-violet-200 to-emerald-200 origin-left"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="relative bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-medium transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 ${step.color} text-white rounded-lg flex items-center justify-center text-sm font-bold shadow-sm`}>
                    {step.number}
                  </div>
                  <div className={`w-10 h-10 ${step.iconBg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link href="/free-sms-numbers" className="btn-primary shimmer-btn">
            Start Now – Free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
