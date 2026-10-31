import { ContactSection } from '@/components/ContactSection';
import { pageMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = pageMetadata({
  title: 'Contact',
  description: 'Connect with Signal Strait Labs to analyze your current tech stack bottlenecks or request a targeted market attack infrastructure plan.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="pt-24">
      <ContactSection />
      <p className="bg-ssl-light-bg px-6 pb-20 text-center text-sm text-slate-600">
        Want to know more first? See{' '}
        <Link href="/services" className="font-semibold text-ssl-blue underline-offset-4 hover:underline">
          our services
        </Link>{' '}
        or read{' '}
        <Link href="/about" className="font-semibold text-ssl-blue underline-offset-4 hover:underline">
          about us
        </Link>
        .
      </p>
    </div>
  );
}
