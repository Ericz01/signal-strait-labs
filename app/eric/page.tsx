import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";
import { profile, roles, seo, timeline } from "./content";
import { asset, isSet } from "./_lib/utils";
import { Hero } from "./_components/Hero";
import { ProofBar } from "./_components/ProofBar";
import { Principles } from "./_components/Principles";
import { Roles } from "./_components/Roles";
import { Work } from "./_components/Work";
import { Leadership } from "./_components/Leadership";
import { Capabilities } from "./_components/Capabilities";
import { Timeline } from "./_components/Timeline";
import { Testimonials } from "./_components/Testimonials";
import { WorkWithMe } from "./_components/WorkWithMe";
import { Contact } from "./_components/Contact";
import "./eric.css";

const ogImage = {
  url: asset(seo.ogImage.src),
  width: seo.ogImage.width,
  height: seo.ogImage.height,
  alt: seo.ogImage.alt,
};

export const metadata: Metadata = {
  // `absolute` skips the site-wide "| Signal Strait Labs" title template.
  title: { absolute: seo.title },
  description: seo.description,
  alternates: { canonical: seo.path },
  authors: [{ name: profile.name, url: `${SITE_URL}${seo.path}` }],
  openGraph: {
    type: "profile",
    firstName: profile.givenName,
    lastName: profile.familyName,
    title: seo.title,
    description: seo.description,
    url: seo.path,
    siteName: SITE_NAME,
    locale: "en_KE",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [ogImage],
  },
};

function personSchema() {
  const sameAs = [profile.linkedin, ...profile.otherProfiles.map((p) => p.href)].filter(isSet);
  const org = (name: string) => roles.items.find((r) => r.organization.startsWith(name))?.organization ?? name;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    givenName: profile.givenName,
    familyName: profile.familyName,
    jobTitle: ["Founder, Signal Strait Labs", `${roles.items[1].title}, Indepth Research Institute`],
    url: `${SITE_URL}${seo.path}`,
    image: `${SITE_URL}${profile.portrait.src}`,
    address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
    worksFor: [
      { "@type": "Organization", name: org("Signal Strait Labs"), url: SITE_URL },
      { "@type": "Organization", name: "Indepth Research Institute" },
    ],
    alumniOf: timeline.entries
      .filter((e) => e.kind === "education")
      .map((e) => ({ "@type": "CollegeOrUniversity", name: e.organization })),
    ...(isSet(profile.email) ? { email: `mailto:${profile.email}` } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export default function EricPage() {
  return (
    <div className="bg-ssl-bg text-slate-200">
      <JsonLd data={personSchema()} />
      <Hero />
      <ProofBar />
      <Principles />
      <Roles />
      <Work />
      <Leadership />
      <Capabilities />
      <Timeline />
      <Testimonials />
      <WorkWithMe />
      <Contact />
    </div>
  );
}
