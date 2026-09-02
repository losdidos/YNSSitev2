'use client';

import { ChevronDown } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const questions = [
  ['Hoe kan ik een afspraak maken?', 'Via het afspraakformulier. Je aanvraag komt rechtstreeks bij ons binnen, waarna we je contacteren om een moment af te stemmen.'],
  ['Hoe lang duurt een behandeling?', 'Dat hangt af van de gekozen dienst en de staat van de wagen. We geven je bij het plannen een duidelijke inschatting.'],
  ['Moet ik iets voorbereiden?', 'Nee. Zorg er enkel voor dat je persoonlijke spullen uit de wagen haalt als je een interieurbehandeling boekt.'],
  ['Welke betaling is mogelijk?', 'Neem contact met ons op bij het plannen van je afspraak. We bezorgen je de praktische informatie vooraf.'],
  ['Kan ik meerdere diensten combineren?', 'Zeker. Beschrijf je wensen in het formulier en we stellen een passende behandeling voor.'],
];

export default function FaqPage() {
  return (
    <div className="page-shell bg-[#f4f3ed]">
      <SiteHeader />
      <main className="content-width py-16 md:py-24">
        <p className="eyebrow">Helder en eenvoudig</p>
        <h1 className="display mt-5 text-6xl sm:text-7xl md:text-8xl">Veelgestelde<br />vragen.</h1>
        <div className="mt-14 border-t border-[#bab9b4]">
          {questions.map(([question, answer]) => (
            <details key={question} className="group border-b border-[#bab9b4] py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold md:text-xl">
                {question}
                <ChevronDown className="shrink-0 transition group-open:rotate-180" />
              </summary>
              <p className="max-w-2xl pt-4 leading-7 text-[#4b4b47]">{answer}</p>
            </details>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
