import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export const metadata = {
  title: 'About Us | Signal Strait Labs',
  description: 'Learn about Signal Strait Labs, founded in Nairobi in 2022. We are a growth engineering partner for high-performance digital infrastructure and strategy.',
};

export default function AboutPage() {
  return (
    <main className="bg-ssl-light-bg py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <AnimateOnScroll variant="slide-up">
          <SectionHeading
            overline="Our Story"
            title="Engineered for Performance"
            description="Founded in Nairobi in 2022, Signal Strait Labs was built to bridge the gap between high-end digital infrastructure and the unique requirements of rapidly growing enterprises."
            align="center"
            variant="light"
            className="mb-16"
          />
        </AnimateOnScroll>

        <div className="space-y-12">
          <AnimateOnScroll variant="slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="glass-card-light rounded-2xl p-8 md:p-12">
              <h3 className="mb-4 text-xl font-bold text-ssl-bg">The Context</h3>
              <p className="text-slate-600 leading-relaxed">
                In 2022, we observed a persistent disconnect: enterprises in emerging markets were often forced to choose between local agility and global-standard technical architecture. We started Signal Strait Labs to provide both. We combine the precision of modern Jamstack architecture with strategic growth engineering to ensure our partners operate at global speed.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card-dark rounded-2xl p-8 md:p-12">
              <h3 className="mb-4 text-xl font-bold text-white">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To transform organizational growth through clean, performant digital infrastructure. We exist to eliminate the friction between your technical stack and your revenue goals. We don't just build sites; we build institutional authority, automated data pipelines, and optimized search footprints that drive measurable business value.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card-light rounded-2xl p-8 md:p-12">
              <h3 className="mb-4 text-xl font-bold text-ssl-bg">Nairobi, 2022</h3>
              <p className="text-slate-600 leading-relaxed">
                Based in Thome, Nairobi, we operate at the intersection of local insight and international quality. Our location is more than just a home—it's the front line for the next generation of digital transformation. We work with clients who understand that the future of business is built on code that is as resilient as it is fast.
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
                <div className="glass-card-light flex flex-col items-center justify-center p-8 text-center h-full rounded-2xl">
                  {/* Placeholder for team member avatar */}
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-ssl-bg text-2xl font-bold text-ssl-gold">
                    {member.role.charAt(0)}
                  </div>
                  <h4 className="text-lg font-bold text-ssl-bg">{member.role}</h4>
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
            <div className="glass-card-light overflow-hidden rounded-2xl p-4 md:p-6">
              <div className="mb-6 h-96 w-full overflow-hidden rounded-xl">
                <iframe
                  src="https://www.google.com/maps?q=QVQG%2BJ8R+Nairobi&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Signal Strait Labs office location"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
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
    </main>
  );
}
