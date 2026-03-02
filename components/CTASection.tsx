'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="numbers" className="py-16 lg:py-20 bg-slate-900 relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Aurora animated background */}
      <div 
        className="absolute inset-0 opacity-30 animate-aurora"
        style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.3) 0%, rgba(139,92,246,0.2) 25%, rgba(16,185,129,0.15) 50%, rgba(99,102,241,0.2) 75%, rgba(139,92,246,0.3) 100%)',
          backgroundSize: '400% 400%',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-slate-900/60" aria-hidden="true" />

      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            id="cta-heading" 
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-b from-white via-white to-slate-300 bg-clip-text text-transparent"
          >
            Ready to Receive SMS For Free?
          </h2>

          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            No registration required. Choose from 50+ countries and get your verification code instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
            <Link href="/free-sms-numbers" className="btn-accent shimmer-btn hover:shadow-glow-indigo transition-all duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Browse Numbers
            </Link>
            <Link href="#how-it-works" className="px-5 py-2.5 text-white font-medium rounded-lg border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300">
              Learn More
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '100+', label: 'Numbers' },
              { value: '50+', label: 'Countries' },
              { value: '10M+', label: 'SMS Received' },
              { value: '99.9%', label: 'Uptime' },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label} 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
