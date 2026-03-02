'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function FloatingPath({ d, delay, duration, opacity }: { d: string; delay: number; duration: number; opacity: number }) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeOpacity={opacity}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        pathLength: { duration, delay, ease: 'easeInOut' },
        opacity: { duration: 0.5, delay },
      }}
    />
  );
}

export default function BackgroundPaths() {
  const paths = [
    { d: 'M-100,200 C100,100 300,300 500,200 S700,100 900,200 S1100,300 1300,200', delay: 0, duration: 3, opacity: 0.08 },
    { d: 'M-100,300 C150,200 350,400 550,300 S750,200 950,300 S1150,400 1350,300', delay: 0.3, duration: 3.5, opacity: 0.06 },
    { d: 'M-100,400 C200,300 400,500 600,400 S800,300 1000,400 S1200,500 1400,400', delay: 0.6, duration: 4, opacity: 0.04 },
    { d: 'M-50,150 C100,250 350,150 500,250 S750,150 900,250 S1150,150 1300,250', delay: 0.2, duration: 3.2, opacity: 0.07 },
    { d: 'M-50,350 C120,450 380,350 520,450 S780,350 920,450 S1120,350 1320,450', delay: 0.5, duration: 3.8, opacity: 0.05 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Radial gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/40 via-transparent to-transparent" />
      
      <svg
        className="absolute inset-0 w-full h-full text-indigo-400"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {paths.map((path, i) => (
          <FloatingPath key={i} {...path} />
        ))}
      </svg>

      {/* Dot grid with fade mask */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, #c7d2fe 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black 30%, transparent 70%)',
        }}
      />
    </div>
  );
}
