import type { MetadataRoute } from 'next';
import { services } from '@/lib/services-data';
import { absoluteUrl } from '@/lib/site-config';

// Bump these dates when the content of a page actually changes.
const SITE_UPDATED = new Date('2026-10-12');
const TERMS_UPDATED = new Date('2026-09-07');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl('/'), lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 1 },
    { url: absoluteUrl('/diensten'), lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    ...services.map((service) => ({
      url: absoluteUrl(`/diensten/${service.slug}`),
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    { url: absoluteUrl('/over-ons'), lastModified: SITE_UPDATED, changeFrequency: 'yearly', priority: 0.6 },
    { url: absoluteUrl('/faq'), lastModified: SITE_UPDATED, changeFrequency: 'monthly', priority: 0.6 },
    { url: absoluteUrl('/booking'), lastModified: SITE_UPDATED, changeFrequency: 'yearly', priority: 0.7 },
    { url: absoluteUrl('/algemene-voorwaarden'), lastModified: TERMS_UPDATED, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
