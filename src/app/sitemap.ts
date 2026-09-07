import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://yourdomain.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://yourdomain.com/booking', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://yourdomain.com/faq', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://yourdomain.com/algemene-voorwaarden', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
