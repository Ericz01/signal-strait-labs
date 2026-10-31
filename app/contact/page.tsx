import { ContactSection } from '@/components/ContactSection';
import { getServiceOptions } from '@/lib/services-data';
import { pageMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = pageMetadata({
  title: 'Contact',
  description: 'Contact Signal Strait Labs about your website, search visibility, data or sales pipeline. Send a message, email us or call our Nairobi team.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="pt-24">
      <ContactSection services={getServiceOptions()} />
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
