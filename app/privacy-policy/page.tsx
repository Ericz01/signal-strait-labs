export const metadata = {
  title: 'Privacy Policy | Signal Strait Labs',
  description: 'Privacy policy for Signal Strait Labs. Learn about how we handle your data.',
};

export default function PrivacyPolicyPage() {
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="bg-ssl-light-bg py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-fluid-h1 font-display font-bold text-ssl-bg mb-8">
          Privacy Policy
        </h1>
        <p className="text-slate-600 mb-12 italic">Last updated: {date}</p>

        <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-8">
          <p>
            Signal Strait Labs ("we", "us", "our") respects your privacy. This policy explains what information we collect, how we use it, and what rights you have over it.
          </p>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">1. Who We Are</h2>
            <p>
              Signal Strait Labs is a digital transformation and growth engineering company based in Nairobi, Kenya. If you have questions about this policy or your data, contact us at connect@signalstraitlabs.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">2. Information We Collect</h2>
            <p>
              When you use our contact form, we collect the information you provide: your name, email address, company name, service interest, message, and budget range. If you don't fill in every field, that's fine, only name, email, and message are required.
            </p>
            <p>
              We also use privacy-focused analytics (Cloudflare Web Analytics) to understand how visitors use our site. This does not use cookies or track you individually across other websites.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">3. How We Use Your Information</h2>
            <p>
              We use the information you send us to respond to your inquiry, understand your needs, and follow up about potential work together. We do not sell your information to anyone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">4. Who We Share Information With</h2>
            <p>
              We use Resend to deliver emails, so your contact form submission passes through their systems as part of sending it to us. We do not share your information with any other third party except where required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">5. International Data Transfers</h2>
            <p>
              Because we work with clients and use services based outside Kenya, your information may be processed in other countries, including the United States and the European Union. Where this happens, we rely on the service providers' own data protection safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">6. How Long We Keep Your Information</h2>
            <p>
              We keep contact form submissions for as long as needed to respond to your inquiry and maintain a record of business communications, typically no longer than [X months/years — confirm actual retention practice].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">7. Your Rights</h2>
            <p>
              Depending on where you're located, you may have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ask what personal information we hold about you</li>
              <li>Ask us to correct inaccurate information</li>
              <li>Ask us to delete your information</li>
              <li>Object to how we use your information</li>
              <li>Ask for a copy of your information in a portable format</li>
            </ul>
            <p>
              If you're in the European Union, these rights come from the GDPR. If you're in South Africa, these rights come from POPIA, and you can also lodge a complaint with the Information Regulator. If you're in Kenya, these rights are protected under the Data Protection Act, 2019, and you can contact the Office of the Data Protection Commissioner.
            </p>
            <p>
              To exercise any of these rights, email us at connect@signalstraitlabs.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">8. Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect your information from unauthorized access, loss, or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">9. Children's Privacy</h2>
            <p>
              Our services are intended for businesses and professionals, not children. We do not knowingly collect information from anyone under 18.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-ssl-bg mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. If we make significant changes, we'll update the date at the top of this page.
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

