import Link from 'next/link';
import { Button, type ButtonProps } from '@/components/ui/Button';
import { BOOKING_URL, isExternalUrl } from '@/lib/site-config';

type BookCallButtonProps = Omit<ButtonProps, 'asChild' | 'children'> & {
  label?: string;
};

// "Book a Discovery Call" CTA. Opens the scheduling page in a new tab when an
// external booking URL is set, otherwise links to the contact page.
export function BookCallButton({ label = 'Book a Discovery Call', variant = 'primary', size = 'lg', ...props }: BookCallButtonProps) {
  const external = isExternalUrl(BOOKING_URL);
  return (
    <Button asChild variant={variant} size={size} {...props}>
      {external ? (
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
          {label}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : (
        <Link href={BOOKING_URL}>{label}</Link>
      )}
    </Button>
  );
}
