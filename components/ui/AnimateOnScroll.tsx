
'use client';

import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'fade' | 'slide-up' | 'scale' | 'fade-gold';
  rangeStart?: string;
  rangeEnd?: string;
}

const AnimateOnScroll = forwardRef<HTMLDivElement, AnimateOnScrollProps>(
  (
    {
      children,
      className,
      variant = 'slide-up',
      rangeStart = 'entry 0%',
      rangeEnd = 'cover 35%',
      ...props
    },
    ref
  ) => {
    const animationKeyframes = {
      fade: `
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `,
      'slide-up': `
        @keyframes slide-up-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
      scale: `
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `,
      'fade-gold': `
        @keyframes fade-gold-in {
          from { opacity: 0; transform: translateY(20px); filter: brightness(0.5) sepia(1) hue-rotate(-50deg); }
          to { opacity: 1; transform: translateY(0); filter: brightness(1) sepia(0) hue-rotate(0deg); }
        }
      `,
    };

    const animationName = `${variant}-in`;

    return (
      <div
        ref={ref}
        className={cn(className)}
        style={{
          animationTimeline: 'view()',
          animationRange: `${rangeStart} ${rangeEnd}`,
          animationFillMode: 'both',
          animationName: animationName,
          animationDuration: '1s', // Default duration, can be overridden if needed
          animationTimingFunction: 'ease-out', // Default timing, can be overridden
        }}
        {...props}
      >
        <style jsx global>{`
          ${animationKeyframes[variant]}
        `}</style>
        {children}
      </div>
    );
  }
);

AnimateOnScroll.displayName = 'AnimateOnScroll';

export { AnimateOnScroll };
