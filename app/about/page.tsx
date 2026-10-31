import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { ConsentMap } from '@/components/ConsentMap';
import { pageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { ResponsivePhoto } from '@/components/ResponsivePhoto';

export const metadata = pageMetadata({
  title: 'About Us',
  description: 'Signal Strait Labs started in Nairobi in 2022. We help growing companies with websites, search visibility, data systems and sales pipelines.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="mesh-light pb-24 sm:pb-32">
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 pb-20 pt-16 sm:px-6 md:pt-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ssl-gold-deep">Our story</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ssl-bg sm:text-5xl">About Signal Strait Labs</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            We started in Nairobi in 2022 to give growing companies the kind of technical and marketing support that is
            usually only available to large firms.
          </p>
        </div>
        <div className="relative">
          {/* Stock photo (Unsplash, Ninthgrid). Replace with a real team photo when available. */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-ssl-bg/20">
            <ResponsivePhoto
              base="/images/team-meeting"
              smallWidth={640}
              largeWidth={1600}
              alt="People working together around a meeting table"
              priority
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ssl-bg/30 to-transparent" />
          </div>
          <div className="glass-card-light glass-edge absolute bottom-0 left-4 right-4 translate-y-1/2 rounded-2xl p-5 sm:left-auto sm:right-6 sm:w-80">
            <p className="text-sm font-semibold text-ssl-bg">Thome, Nairobi</p>
            <p className="mt-1 text-sm text-slate-600">Working with clients in Kenya, across Africa and further afield.</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6">

        <div className="space-y-12">
          <AnimateOnScroll variant="slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="glass-card-light glass-edge rounded-2xl p-8 md:p-12">
              <h2 className="mb-4 text-xl font-bold text-ssl-bg">Why We Started</h2>
              <p className="text-slate-600 leading-relaxed">
                We kept seeing the same problem. Growing companies in Kenya and across Africa had to choose between local agencies that knew the market and international firms with stronger technical skills. We started Signal Strait Labs to offer both in one team.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card-dark rounded-2xl p-8 md:p-12">
              <h2 className="mb-4 text-xl font-bold text-white">What We Do</h2>
              <p className="text-slate-300 leading-relaxed">
                We help companies grow by fixing the systems behind growth: fast websites, search visibility, clean data and a sales pipeline that works. We judge our work by the leads and revenue it brings in.
              </p>
              <p className="mt-4">
                <Link href="/services" className="font-semibold text-ssl-gold underline-offset-4 hover:underline">
                  See what we do
                </Link>
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card-light glass-edge rounded-2xl p-8 md:p-12">
              <h2 className="mb-4 text-xl font-bold text-ssl-bg">Based in Nairobi</h2>
              <p className="text-slate-600 leading-relaxed">
                Our office is in Thome, Nairobi. We work with clients in Kenya, across Africa and further afield, and we know what it takes to serve both local and international customers.
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        <div className="mt-24">
          <AnimateOnScroll variant="slide-up">
            <SectionHeading
              overline="The People"
              title="Our Team"
              description="The people building Signal Strait Labs."
              align="center"
              variant="light"
              className="mb-16"
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { role: 'Founder' },
              { role: 'Lead Engineer' },
              { role: 'Growth Strategist' },
              { role: 'Design Lead' },
            ].map((member, index) => (
              <AnimateOnScroll
                key={member.role}
                variant="slide-up"
                className="h-full"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="glass-card-light glass-edge glass-hover flex flex-col items-center justify-center p-8 text-center h-full rounded-2xl">
                  {/* Placeholder for team member avatar */}
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-ssl-bg text-2xl font-bold text-ssl-gold">
                    {member.role.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold text-ssl-bg">{member.role}</h3>
                  <p className="text-sm text-slate-500 mt-1 italic">Pending bio</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          {/* Note: Team members are placeholders pending real bios. */}
        </div>


        <div className="mt-24">
          <AnimateOnScroll variant="slide-up">
            <SectionHeading
              overline="Contact"
              title="Where We Work"
              description="Based in Nairobi, working with clients everywhere."
              align="center"
              variant="light"
              className="mb-16"
            />
          </AnimateOnScroll>

          <AnimateOnScroll variant="slide-up">
            <div className="glass-card-light glass-edge overflow-hidden rounded-2xl p-4 md:p-6">
              <div className="mb-6 h-96 w-full overflow-hidden rounded-xl">
                <ConsentMap
                  src="https://www.google.com/maps?q=QVQG%2BJ8R+Nairobi&output=embed"
                  linkHref="https://www.google.com/maps?q=QVQG%2BJ8R+Nairobi"
                  title="Signal Strait Labs office location"
                />
              </div>
              <div className="flex flex-col gap-4 text-center">
                <p className="text-lg font-medium text-ssl-bg">Thome, Nairobi - Kenya</p>
                <div className="flex flex-col items-center gap-1 text-slate-600">
                  <p>+254712895903</p>
                  <p>connect@signalstraitlabs.com</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

      </div>
    </div>
  );
}
