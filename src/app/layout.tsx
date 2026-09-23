import { headers } from 'next/headers';
import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ynscare.be'),
  title: { template: '%s | YNS Car Care', default: 'YNS Car Care | Your New Status' },
  description: 'Professionele car detailing, polijsten en keramische coating voor jouw wagen.',
  alternates: { canonical: '/' },
  openGraph: {
    siteName: 'YNS Car Care',
    images: [{ url: '/pictures/Black_Audi_mercedes_frontpic.jpg' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  await headers();

  return (
    <html lang="nl">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
