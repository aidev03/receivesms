'use client';

import { ReactNode, useRef, useEffect, useState } from 'react';

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  speed = 30,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}: MarqueeProps) {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth);
    }
  }, [children]);

  const animationDirection = direction === 'left' ? 'normal' : 'reverse';
  const duration = contentWidth / speed;

  return (
    <div
      className={`overflow-hidden ${pauseOnHover ? 'group' : ''} ${className}`}
      style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}
    >
      <div
        className={`flex gap-4 w-max ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection,
        }}
      >
        <div ref={contentRef} className="flex gap-4 shrink-0">
          {children}
        </div>
        <div className="flex gap-4 shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
