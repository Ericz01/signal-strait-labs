import { notFound } from 'next/navigation';
import { services } from '@/lib/services-data';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { FAQAccordion } from '@/components/FAQAccordion';
import Link from 'next/link';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.title} | Signal Strait Labs`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);
  const Icon = service.icon;

  return (
    <main className="bg-ssl-light-bg min-h-screen py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <AnimateOnScroll variant="slide-up">
          <div className="mb-12 flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-ssl-blue/10 text-ssl-blue">
              <Icon className="h-8 w-8" />
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-ssl-bg md:text-5xl">{service.title}</h1>
            <p className="text-lg text-slate-600">{service.description}</p>
          </div>
        </AnimateOnScroll>

        <div className="space-y-16">
          {[
            { label: 'The Problem', content: service.problem },
            { label: 'Our Approach', content: service.approach },
            { label: 'The Outcome', content: service.outcomes },
          ].map((section, idx) => (
            <AnimateOnScroll key={section.label} variant="slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <section>
                <h2 className="mb-4 text-2xl font-bold text-ssl-bg">{section.label}</h2>
                <div className="glass-card-light rounded-xl p-8">
                  <p className="text-slate-600 leading-relaxed">{section.content}</p>
                </div>
              </section>
            </AnimateOnScroll>
          ))}

          <AnimateOnScroll variant="slide-up" style={{ animationDelay: '0.3s' }}>
            <section>
              <h2 className="mb-8 text-2xl font-bold text-ssl-bg text-center">Common Questions</h2>
              <FAQAccordion items={service.faqs} />
            </section>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll variant="slide-up" className="mt-20">
          <section>
            <h2 className="mb-8 text-center text-2xl font-bold text-ssl-bg">Related Services</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedServices.map((related) => (
                <Link key={related.slug} href={`/services/${related.slug}`}>
                  <Card className="flex h-full flex-col p-6 hover:border-ssl-blue/40">
                    <h3 className="font-semibold text-white">{related.title}</h3>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </AnimateOnScroll>

        <AnimateOnScroll variant="slide-up" className="mt-20 text-center">
          <Button asChild size="lg" className="bg-ssl-blue hover:bg-ssl-blue/90">
            <Link href="/#contact">Start a Project</Link>
          </Button>
        </AnimateOnScroll>
      </div>
    </main>
  );
}
