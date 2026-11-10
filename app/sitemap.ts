import type { MetadataRoute } from 'next';
import { services } from '@/lib/services-data';
import { SITE_URL } from '@/lib/site-config';

// Every public page. Add new routes here when they are created.
const staticRoutes: Array<{ path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }> = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/eric', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terms-of-service', priority: 0.2, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })),
    ...services.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
