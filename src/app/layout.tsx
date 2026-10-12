import { headers } from 'next/headers';
import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { JsonLd } from '@/components/json-ld';
import { services } from '@/lib/services-data';
import { absoluteUrl, businessId, siteConfig, websiteId } from '@/lib/site-config';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    template: '%s | YNS Car Care',
    default: 'YNS Car Care | Car detailing, keramische coating & wrapping in Haacht',
  },
  description: siteConfig.description,
  openGraph: {
    siteName: siteConfig.name,
    locale: 'nl_BE',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['AutoRepair', 'LocalBusiness'],
      '@id': businessId,
      name: siteConfig.name,
      alternateName: siteConfig.alternateNames,
      description: siteConfig.description,
      url: siteConfig.url,
      logo: absoluteUrl(siteConfig.logo),
      image: absoluteUrl(siteConfig.image),
      telephone: siteConfig.phoneHref,
      email: siteConfig.email,
      vatID: siteConfig.vatId,
      founder: { '@type': 'Person', name: siteConfig.founder },
      address: { '@type': 'PostalAddress', ...siteConfig.address },
      areaServed: siteConfig.areaServed.map((name) => ({ '@type': 'City', name })),
      sameAs: siteConfig.sameAs,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Diensten',
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            description: service.seoDescription,
            url: absoluteUrl(`/diensten/${service.slug}`),
          },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: siteConfig.url,
      name: siteConfig.name,
      alternateName: siteConfig.alternateNames,
      inLanguage: 'nl-BE',
      publisher: { '@id': businessId },
    },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  await headers();

  return (
    <html lang="nl-BE">
      <body>
        <JsonLd data={structuredData} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
