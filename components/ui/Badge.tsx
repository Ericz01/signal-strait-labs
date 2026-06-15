import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'muted';
}

const Badge: React.FC<BadgeProps> = ({ className, variant = 'default', ...props }) => {
  const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';

  const variantStyles = {
    default: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    secondary: 'bg-blue-600/10 text-blue-400 border border-blue-600/20',
    outline: 'border border-slate-700 text-slate-300 dark:border-slate-800 dark:text-slate-400',
    muted: 'bg-slate-800 text-slate-300 border border-slate-700/50',
  };

  return (
    <div className={cn(baseStyles, variantStyles[variant], className)} {...props} />
  );
};

export { Badge };
