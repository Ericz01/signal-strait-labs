import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { ConsentMap } from '@/components/ConsentMap';
import { PageHero } from '@/components/PageHero';
import { GlassOrbs } from '@/components/GlassOrbs';
import CTABanner from '@/components/CTABanner';
import { pageMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = pageMetadata({
  title: 'About Us',
  description: 'Signal Strait Labs started in Nairobi in 2022. We help growing companies with websites, search visibility, data systems and sales pipelines.',
  path: '/about',
});

const story = [
  {
    title: 'Why We Started',
    body: 'We kept seeing the same problem. Growing companies in Kenya and across Africa had to choose between local agencies that knew the market and international firms with stronger technical skills. We started Signal Strait Labs to offer both in one team.',
  },
  {
    title: 'What We Do',
    body: 'We help companies grow by fixing the systems behind growth: fast websites, search visibility, clean data and a sales pipeline that works. We judge our work by the leads and revenue it brings in.',
    link: { href: '/services', label: 'See what we do' },
  },
  {
    title: 'Based in Nairobi',
    body: 'Our office is in Thome, Nairobi. We work with clients in Kenya, across Africa and further afield, and we know what it takes to serve both local and international customers.',
  },
];

// Placeholder team cards pending real bios and photos.
const team = ['Founder', 'Lead Engineer', 'Growth Strategist', 'Design Lead'];

export default function AboutPage() {
  return (
    <>
      {/* Stock photo (Unsplash, Ninthgrid). Replace with a real team photo when available. */}
      <PageHero
        title="About Signal Strait Labs"
        description="We started in Nairobi in 2022 to give growing companies the kind of technical and marketing support that is usually only available to large firms."
        breadcrumbs={[{ label: 'About' }]}
        image={{ base: '/images/team-meeting', smallWidth: 640, largeWidth: 1600 }}
      />

      <div className="mesh-light relative isolate px-4 pb-24 sm:px-6">
        <GlassOrbs />

        <div className="relative z-10 mx-auto -mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {story.map((item, idx) => (
            <AnimateOnScroll key={item.title} asChild variant="slide-up">
              <section
                className={
                  idx === 1
                    ? 'glass-card-dark rounded-2xl p-7 md:p-8'
                    : 'glass-card-light glass-edge rounded-2xl p-7 md:p-8'
                }
              >
                <h2 className={idx === 1 ? 'mb-3 text-xl font-bold text-white' : 'mb-3 text-xl font-bold text-ssl-bg'}>
                  {item.title}
                </h2>
                <p className={idx === 1 ? 'leading-relaxed text-slate-300' : 'leading-relaxed text-slate-700'}>{item.body}</p>
                {item.link && (
                  <p className="mt-5">
                    <Link href={item.link.href} className="font-semibold text-ssl-gold underline-offset-4 hover:underline">
                      {item.link.label}
                    </Link>
                  </p>
                )}
              </section>
            </AnimateOnScroll>
          ))}
        </div>

        <section className="mx-auto mt-24 max-w-6xl">
          <AnimateOnScroll variant="slide-up">
            <SectionHeading
              overline="The People"
              title="Our Team"
              description="The people building Signal Strait Labs."
              align="center"
              variant="light"
              className="mb-12"
            />
          </AnimateOnScroll>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((role) => (
              <AnimateOnScroll key={role} asChild variant="slide-up">
                <div className="glass-card-light glass-edge glass-hover flex h-full flex-col items-center justify-center rounded-2xl p-8 text-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-ssl-bg to-[#0a1f52] font-display text-2xl font-bold text-ssl-gold shadow-lg shadow-ssl-bg/25 ring-4 ring-white/70">
                    {role.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold text-ssl-bg">{role}</h3>
                  <p className="mt-1 text-sm italic text-slate-500">Pending bio</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-5xl">
          <AnimateOnScroll variant="slide-up">
            <SectionHeading
              overline="Contact"
              title="Where We Work"
              description="Based in Nairobi, working with clients everywhere."
              align="center"
              variant="light"
              className="mb-12"
            />
          </AnimateOnScroll>
          <AnimateOnScroll asChild variant="slide-up">
            <div className="glass-card-light glass-edge overflow-hidden rounded-3xl p-3 md:p-4">
              <div className="h-96 w-full overflow-hidden rounded-2xl">
                <ConsentMap
                  src="https://www.google.com/maps?q=QVQG%2BJ8R+Nairobi&output=embed"
                  linkHref="https://www.google.com/maps?q=QVQG%2BJ8R+Nairobi"
                  title="Signal Strait Labs office location"
                />
              </div>
              <div className="grid gap-4 px-4 py-6 text-center sm:grid-cols-3">
                <p className="font-semibold text-ssl-bg">Thome, Nairobi, Kenya</p>
                <a href="tel:+254712895903" className="text-slate-700 transition-colors hover:text-ssl-blue">
                  +254 712 895 903
                </a>
                <a href="mailto:connect@signalstraitlabs.com" className="text-slate-700 transition-colors hover:text-ssl-blue">
                  connect@signalstraitlabs.com
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </section>
      </div>

      <CTABanner href="/contact" />
    </>
  );
}
