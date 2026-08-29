export const metadata = {
  title: 'Terms of Service | Signal Strait Labs',
  description: 'Terms of service for Signal Strait Labs. Learn about the rules governing our services and website usage.',
};

export default function TermsOfServicePage() {
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="bg-ssl-light-bg py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-fluid-h1 font-display font-bold text-ssl-bg mb-8">
          Terms of Service
        </h1>
        <p className="text-slate-600 mb-12 italic">Last updated: {date}</p>

        <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-8">
          <p>
            These terms govern your use of the Signal Strait Labs website and any services you engage us for. By using this website or working with us, you agree to these terms.
          </p>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">1. Who We Are</h2>
            <p>
              Signal Strait Labs (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a digital transformation and growth engineering company based in Nairobi, Kenya, founded in 2022.
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
              Submitting the contact form does not create a business relationship or obligation on either side. It simply lets us know you&apos;re interested so we can follow up.
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
      </div>
    </main>
  );
}
