import { ContactSection } from '@/components/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Signal Strait Labs',
  description: 'Connect with Signal Strait Labs to analyze your current tech stack bottlenecks or request a targeted market attack infrastructure plan.',
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      <ContactSection />
    </main>
  );
}
