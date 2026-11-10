import Image from "next/image";
import { contact, profile } from "../content";
import { asset, isSet, linkProps } from "../_lib/utils";
import { ContactForm } from "./ContactForm";
import { Section, SectionHeader } from "./SectionHeader";

const linkClass =
  "rounded text-white underline decoration-ssl-gold/40 underline-offset-4 transition-colors hover:decoration-ssl-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ssl-gold";

export function Contact() {
  const rows: Array<{ label: string; value: React.ReactNode }> = [];
  if (isSet(profile.email)) {
    rows.push({ label: contact.labels.email, value: <a href={`mailto:${profile.email}`} className={linkClass}>{profile.email}</a> });
  }
  if (isSet(profile.linkedin)) {
    rows.push({
      label: contact.labels.linkedin,
      value: (
        <a {...linkProps(profile.linkedin)} className={linkClass}>
          {profile.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
        </a>
      ),
    });
  }
  rows.push({ label: contact.labels.location, value: profile.location });
  rows.push({
    label: contact.labels.cv,
    value: (
      <a href={asset(profile.cv.href)} download={profile.cv.downloadName} className={linkClass}>
        {profile.cv.label} (PDF)
      </a>
    ),
  });

  return (
    <Section id="contact" labelledBy="eric-contact-heading">
      <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <SectionHeader id="eric-contact-heading" eyebrow={contact.eyebrow} heading={contact.heading} intro={contact.intro} />
          <div className="mt-10 flex items-center gap-5">
            {profile.portraitSquare.show && (
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-ssl-gold/40 shadow-[0_0_30px_-6px_rgba(26,89,204,0.8)]">
                <Image src={asset(profile.portraitSquare.src)} alt={profile.portraitSquare.alt} fill sizes="80px" className="object-cover" />
              </div>
            )}
            <div>
              <p className="font-display text-lg font-semibold text-white">{profile.name}</p>
              <p className="text-sm text-slate-400">{profile.location}</p>
            </div>
          </div>
          <dl className="mt-8 divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {rows.map((r) => (
              <div key={r.label} className="grid grid-cols-[6rem_1fr] gap-4 py-4 text-sm">
                <dt className="font-semibold uppercase tracking-wider text-slate-400">{r.label}</dt>
                <dd className="min-w-0 break-words text-slate-200">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <ContactForm labels={contact.form} />
      </div>
    </Section>
  );
}
