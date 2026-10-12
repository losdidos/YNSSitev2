import Link from 'next/link';
import { JsonLd } from '@/components/json-ld';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { faqItems } from '@/lib/faq-data';
import { pageMetadata } from '@/lib/site-config';
import { FaqAccordion } from './faq-accordion';

export const metadata = pageMetadata({
  title: 'Veelgestelde vragen over detailing & keramische coating',
  description:
    'Antwoorden op veelgestelde vragen over car detailing, keramische coating, polijsten, lakcorrectie en afspraken bij YNS Car Care in Haacht.',
  path: '/faq',
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ question, answerText }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answerText },
  })),
};

export default function FaqPage() {
  return (
    <div className="page-shell bg-[#f4f3ed]">
      <JsonLd data={structuredData} />
      <SiteHeader />
      <main className="content-width py-16 md:py-24">
        <p className="eyebrow">Helder en eenvoudig</p>
        <h1 className="display mt-5 text-5xl sm:text-7xl md:text-8xl">Veelgestelde<br />vragen.</h1>
        <FaqAccordion />
        <div className="mt-12 flex justify-center">
          <Link href="/algemene-voorwaarden" className="cta-primary">
            Algemene voorwaarden
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
