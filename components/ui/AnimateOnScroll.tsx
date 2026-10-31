import React, { forwardRef, HTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'fade' | 'slide-up' | 'scale';
  /**
   * Put the reveal on the child element instead of a wrapper div. Use this
   * when the child is a glass card: an animated wrapper stops the card's
   * backdrop blur from seeing the page behind it.
   */
  asChild?: boolean;
}

// Scroll reveal using CSS scroll-driven animations (`.reveal` in globals.css).
// Browsers without support, and visitors who prefer reduced motion, simply see
// the content with no animation.
const AnimateOnScroll = forwardRef<HTMLDivElement, AnimateOnScrollProps>(
  ({ children, className, variant = 'slide-up', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return (
      <Comp ref={ref} className={cn('reveal', `reveal-${variant}`, className)} {...props}>
        {children}
      </Comp>
    );
  }
);

AnimateOnScroll.displayName = 'AnimateOnScroll';

export { AnimateOnScroll };
