'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import BackgroundPaths from './BackgroundPaths';

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, y: 0, 
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const } 
    },
  };

  return (
    <section 
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 bg-white overflow-hidden" 
      aria-labelledby="hero-heading"
    >
      <BackgroundPaths />
      
      <motion.div 
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="container-custom relative"
      >
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Trust Badge */}
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/80 backdrop-blur-sm border border-emerald-200/60 rounded-full mb-8 shadow-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-40 animate-[ping_1.5s_ease-in-out_infinite]" />
                <span className="relative rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-emerald-700 tracking-wide">200+ Numbers Online Now</span>
            </div>
          </motion.div>

          {/* Main H1 */}
          <motion.h1 
            variants={fadeUp}
            id="hero-heading" 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-5"
          >
            <span className="text-gradient-hero">Receive SMS Online</span>
            <span className="block text-gradient-accent mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold">Free & Instant</span>
          </motion.h1>

          {/* H2 Subheading */}
          <motion.h2 
            variants={fadeUp}
            className="text-lg md:text-xl text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Get temporary phone numbers from 50+ countries for SMS verification.{' '}
            Works with WhatsApp, Telegram, Google, and more.
          </motion.h2>

          {/* Trust Signals */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
            {['No registration required', 'Instant access'].map((text) => (
              <span key={text} className="inline-flex items-center gap-1.5 text-sm text-slate-500">
                <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {text}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <Link 
              href="/free-sms-numbers" 
              className="btn-accent px-8 py-3.5 text-base shimmer-btn hover:shadow-glow-indigo transition-all duration-300"
            >
              Get a Free Number
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link 
              href="#how-it-works" 
              className="btn-secondary px-8 py-3.5 text-base"
            >
              How It Works
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-10 md:gap-16 pt-10 border-t border-slate-100/80"
          >
            {[
              { value: '10M+', label: 'SMS Received' },
              { value: '50+', label: 'Countries' },
              { value: '99.9%', label: 'Uptime' },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label} 
                className="text-center group cursor-default"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
