import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'fade' | 'slide-up' | 'scale';
}

// Scroll reveal using CSS scroll-driven animations (`.reveal` in globals.css).
// Browsers without support, and visitors who prefer reduced motion, simply see
// the content with no animation. Callers' `style` and `className` are merged in.
const AnimateOnScroll = forwardRef<HTMLDivElement, AnimateOnScrollProps>(
  ({ children, className, variant = 'slide-up', ...props }, ref) => (
    <div ref={ref} className={cn('reveal', `reveal-${variant}`, className)} {...props}>
      {children}
    </div>
  )
);

AnimateOnScroll.displayName = 'AnimateOnScroll';

export { AnimateOnScroll };
