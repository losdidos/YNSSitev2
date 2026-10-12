import type { Metadata } from 'next';

// Single source of truth for business facts used in metadata, structured data and the sitemap.
// Keep name, address and phone identical to the Google Business Profile.
export const siteConfig = {
  url: 'https://ynscarcare.be',
  name: 'YNS Car Care',
  alternateNames: ["YNS'CarCare", 'Your New Status Car Care'],
  description:
    'Professionele car detailing, keramische coating, wrapping & PPF, window tinting, bedrijfswagenbestickering en interior customization in Haacht, Leuven, Mechelen en omgeving.',
  phone: '+32 470 40 45 97',
  phoneHref: '+32470404597',
  email: 'info@ynscarcare.be',
  vatId: 'BE1034746609',
  founder: 'Noah Kemps',
  address: {
    streetAddress: 'Sint-Annaveld 15',
    postalCode: '3150',
    addressLocality: 'Haacht',
    addressRegion: 'Vlaams-Brabant',
    addressCountry: 'BE',
  },
  areaServed: [
    'Haacht',
    'Leuven',
    'Mechelen',
    'Boortmeerbeek',
    'Keerbergen',
    'Kampenhout',
    'Rotselaar',
    'Tremelo',
    'Zemst',
    'Herent',
    'Kortenberg',
    'Bonheiden',
  ],
  sameAs: ['https://www.instagram.com/ynscarcare/'],
  logo: '/icon.png',
  image: '/pictures/porsheheader.jpg',
} as const;

export const businessId = `${siteConfig.url}/#business`;
export const websiteId = `${siteConfig.url}/#website`;

export function absoluteUrl(path: string): string {
  return new URL(encodeURI(path), siteConfig.url).toString();
}

// Per-page metadata with a self-referencing canonical. Page-level openGraph replaces the
// layout's object entirely, so siteName and locale are repeated here.
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: 'nl_BE',
      type: 'website',
      images: [{ url: '/opengraph-image.jpg', width: 1200, height: 630, alt: siteConfig.name }],
    },
  };
}
