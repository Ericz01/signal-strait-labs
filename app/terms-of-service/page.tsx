import { pageMetadata } from '@/lib/metadata';
import { PageHero } from '@/components/PageHero';
import { GlassOrbs } from '@/components/GlassOrbs';

// Update this whenever the text below changes.
const LAST_UPDATED = '31 October 2026';
import Link from 'next/link';

export const metadata = pageMetadata({
  title: 'Terms of Service',
  description: 'Terms of service for Signal Strait Labs. Learn about the rules governing our services and website usage.',
  path: '/terms-of-service',
});

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        description="The terms for using this website and working with us."
        breadcrumbs={[{ label: 'Terms of Service' }]}
        image={{ base: '/images/blur-blue-amber', smallWidth: 1200, largeWidth: 1200 }}
      />
      <div className="mesh-light relative isolate px-4 pb-24 sm:px-6">
        <GlassOrbs />
        <article className="panel-light glass-edge relative z-10 mx-auto -mt-16 max-w-3xl rounded-3xl p-7 sm:p-10 md:p-12">
          <p className="mb-10 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>

          <div className="space-y-8 leading-relaxed text-slate-700 [&_p+p]:mt-4">
          <p>
            These terms govern your use of the Signal Strait Labs website and any services you engage us for. By using this website or working with us, you agree to these terms.
          </p>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">1. Who We Are</h2>
            <p>
              Signal Strait Labs (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a digital growth company based in Nairobi, Kenya, founded in 2022.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">2. Using This Website</h2>
            <p>
              You may use this website for lawful purposes only. You agree not to misuse the site, attempt to gain unauthorized access to it, or use it in a way that could damage or disrupt it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">3. Our Services</h2>
            <p>
              We offer technical infrastructure and web development, SEO/AEO/GEO, data systems and automation, revenue operations, performance marketing, corporate PR, and marketing and sales training. The specific scope, timeline, and cost of any engagement will be agreed separately in a signed proposal or contract before work begins. Nothing on this website is an offer to enter a contract, it&apos;s information about what we do.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">4. Contact Form and Inquiries</h2>
            <p>
              Submitting the <Link href="/contact" className="font-semibold text-ssl-blue hover:underline">contact form</Link> does not create a business relationship or obligation on either side. It simply lets us know you&apos;re interested so we can follow up.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">5. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and code, belongs to Signal Strait Labs unless otherwise stated. You may not copy, reproduce, or use our content for commercial purposes without our written permission.
            </p>
            <p>
              For work delivered as part of a paid engagement, ownership of final deliverables transfers to the client according to the terms agreed in that specific contract, this website&apos;s terms do not override a signed client agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">6. No Guarantee of Results</h2>
            <p>
              We work hard to deliver strong results, but we cannot guarantee specific outcomes like exact revenue increases, search rankings, or conversion rates, since these depend on many factors outside our control, including market conditions and decisions made by the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">7. Limitation of Liability</h2>
            <p>
              To the fullest extent allowed by law, Signal Strait Labs is not liable for any indirect, incidental, or consequential damages arising from your use of this website or our services. Our total liability for any claim related to a paid engagement will not exceed the amount paid for that specific engagement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">8. Third-Party Links and Services</h2>
            <p>
              This website may link to third-party websites or use third-party services (such as payment processors or email delivery providers). We are not responsible for the content or practices of those third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">9. Changes to These Terms</h2>
            <p>
              We may update these terms from time to time. If we make significant changes, we&apos;ll update the date at the top of this page. Continued use of the website after changes means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">10. Governing Law</h2>
            <p>
              These terms are governed by the laws of Kenya. Any disputes will be handled in the courts of Kenya, unless a separate signed client contract specifies otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">11. Contact Us</h2>
            <p>
              Signal Strait Labs<br />
              Thome, Nairobi, Kenya<br />
              Email: connect@signalstraitlabs.com<br />
              Phone: +254 712 895 903
            </p>
          </section>
          </div>
        </article>
      </div>
    </>
  );
}
