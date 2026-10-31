import { ContactSection } from '@/components/ContactSection';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Contact',
  description: 'Connect with Signal Strait Labs to analyze your current tech stack bottlenecks or request a targeted market attack infrastructure plan.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <main className="pt-24">
      <ContactSection />
    </main>
  );
}
