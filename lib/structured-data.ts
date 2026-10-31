// JSON-LD structured data (schema.org). Rendered with <JsonLd />.
import { services } from '@/lib/services-data';
import { CONTACT_EMAIL, CONTACT_PHONE, SITE_NAME, SITE_URL } from '@/lib/site-config';

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// Live social profiles only. Add Instagram, X, YouTube and TikTok once the
// accounts exist (see TASKS.md, G5).
const socialProfiles = [
  'https://www.linkedin.com/company/signal-strait-labs',
  'https://www.facebook.com/signalstraitlabs/',
];

const address = {
  '@type': 'PostalAddress',
  streetAddress: 'Thome',
  addressLocality: 'Nairobi',
  addressRegion: 'Nairobi County',
  addressCountry: 'KE',
};

const logo = {
  '@type': 'ImageObject',
  url: `${SITE_URL}/logo.png`,
  width: 1536,
  height: 1024,
};

const areaServed = [
  { '@type': 'Country', name: 'Kenya' },
  { '@type': 'Continent', name: 'Africa' },
];

export const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': BUSINESS_ID,
  name: SITE_NAME,
  alternateName: 'SSL',
  url: SITE_URL,
  logo,
  image: logo.url,
  description:
    'Growth engineering lab in Nairobi, Kenya. We build web infrastructure, technical SEO and AEO/GEO, data systems, RevOps, performance marketing and PR for growing companies.',
  foundingDate: '2022',
  address,
  telephone: CONTACT_PHONE,
  email: CONTACT_EMAIL,
  areaServed,
  // Rough price level for search engines. Matches the contact form's budget ranges.
  priceRange: '$$',
  serviceType: services.map((s) => s.title),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: services.map((s, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.metaDescription,
        url: `${SITE_URL}/services/${s.slug}`,
      },
    })),
  },
  knowsAbout: [
    'Digital Infrastructure',
    'Custom Web Development',
    'Technical SEO',
    'Answer Engine Optimization',
    'Generative Engine Optimization',
    'Data Architecture',
    'Revenue Operations',
  ],
  parentOrganization: { '@id': ORGANIZATION_ID },
  sameAs: socialProfiles,
};

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: SITE_NAME,
  alternateName: 'SSL',
  url: SITE_URL,
  logo,
  foundingDate: '2022',
  foundingLocation: { '@type': 'Place', name: 'Nairobi, Kenya' },
  address,
  location: { '@type': 'Place', name: 'Thome, Nairobi, Kenya', address },
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      areaServed: ['KE', 'Africa'],
      availableLanguage: ['English'],
    },
  ],
  sameAs: socialProfiles,
};
