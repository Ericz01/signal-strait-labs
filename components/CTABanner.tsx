import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

// On the home page the default '#contact' scrolls to the form below; other
// pages pass href="/contact".
export default function CTABanner({ href = '#contact' }: { href?: string }) {
  return (
    <section className="mesh-light px-4 py-16 sm:px-6 md:py-24">
      <AnimateOnScroll variant="scale">
        <div className="relative isolate mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-ssl-bg shadow-2xl shadow-ssl-bg/30">
          <Image
            src="/images/blur-blue-amber-1200.webp"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="-z-20 object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ssl-bg/40" />
          <div className="glass-card-dark m-3 rounded-[1.6rem] px-6 py-14 text-center sm:m-4 md:px-16 md:py-20">
            <h2 className="mb-5 text-fluid-h2 font-extrabold tracking-tight text-white">
              Ready to Talk About Your Project?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Tell us what you want to improve and we will suggest where to start.
            </p>
            <Button asChild variant="primary" size="lg" className="px-10 text-base shadow-lg shadow-ssl-gold/25">
              <Link href={href}>Start a Project</Link>
            </Button>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
