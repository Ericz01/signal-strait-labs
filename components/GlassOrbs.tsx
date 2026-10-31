import { cn } from '@/lib/utils';

// Soft colour shapes placed behind glass cards. Frosted glass only reads as
// glass when there is something with shape and colour behind it to blur.
// Plain radial gradients (no CSS filter), so they are cheap to paint.
// The parent needs `relative isolate`.
export function GlassOrbs({ className, tone = 'light' }: { className?: string; tone?: 'light' | 'dark' }) {
  const strong = tone === 'dark';
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
      <div
        className={cn(
          'absolute -left-32 top-[8%] h-[28rem] w-[28rem] rounded-full',
          strong
            ? 'bg-[radial-gradient(circle,rgba(26,89,204,0.55),transparent_65%)]'
            : 'bg-[radial-gradient(circle,rgba(26,89,204,0.32),transparent_65%)]'
        )}
      />
      <div
        className={cn(
          'absolute -right-24 top-[38%] h-[30rem] w-[30rem] rounded-full',
          strong
            ? 'bg-[radial-gradient(circle,rgba(197,160,89,0.45),transparent_65%)]'
            : 'bg-[radial-gradient(circle,rgba(197,160,89,0.38),transparent_65%)]'
        )}
      />
      <div
        className={cn(
          'absolute bottom-[-6rem] left-[30%] h-[24rem] w-[24rem] rounded-full',
          strong
            ? 'bg-[radial-gradient(circle,rgba(56,189,248,0.35),transparent_65%)]'
            : 'bg-[radial-gradient(circle,rgba(56,189,248,0.22),transparent_65%)]'
        )}
      />
    </div>
  );
}
