'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const questions = [
  {
    question: 'Hoe kan ik een afspraak maken?',
    answer: <p>Via het afspraakformulier. Je aanvraag komt rechtstreeks bij ons binnen, waarna we je contacteren om een moment af te stemmen.</p>,
  },
  {
    question: 'Hoe lang duurt een behandeling?',
    answer: <p>Dat hangt af van de gekozen dienst en de staat van de wagen. We geven je bij het plannen een duidelijke inschatting.</p>,
  },
  {
    question: 'Moet ik iets voorbereiden?',
    answer: <p>Nee. Zorg er enkel voor dat je persoonlijke spullen uit de wagen haalt als je een interieurbehandeling boekt.</p>,
  },
  {
    question: 'Welke betaling is mogelijk?',
    answer: <p>Neem contact met ons op bij het plannen van je afspraak. We bezorgen je de praktische informatie vooraf.</p>,
  },
  {
    question: 'Kan ik meerdere diensten combineren?',
    answer: <p>Zeker. Beschrijf je wensen in het formulier en we stellen een passende behandeling voor.</p>,
  },
  {
    question: 'Wat is detailing?',
    answer: (
      <>
        <p>Car detailing omvat het grondig reinigen, restaureren, zoals lakcorrectie of polijsten, en afwerken van een voertuig. Het doel is om jouw wagen terug in absolute showroomstaat te brengen. Zowel het interieur als het exterieur kunnen worden behandeld.</p>
        <p className="mt-4">Traditionele autopoetsbedrijven en carwashes werken vaak zo snel mogelijk. Onjuiste wastechnieken kunnen lakschade, waskrassen en andere imperfecties veroorzaken.</p>
        <p className="mt-4">Bij YNS Car Care staat kwaliteit boven kwantiteit. We streven naar het beste resultaat met hoogwaardige materialen, producten en technieken.</p>
      </>
    ),
  },
  {
    question: 'Wat is een keramische coating en hoelang gaat deze mee?',
    answer: (
      <>
        <p>Een keramische coating vormt een extra harde toplaag over de bestaande lak of ramen. Deze hecht zich aan het oppervlak, zodat je wagen langer proper en glanzend blijft, krasbestendiger wordt en water en vuil sterker afstoot.</p>
        <p className="mt-4">Bij correct onderhoud kan een coating, afhankelijk van het gekozen pakket, tot drie jaar meegaan. De levensduur varieert per wagen en hangt onder meer af van:</p>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>de manier en frequentie van wassen;</li>
          <li>hoe vaak er met de wagen wordt gereden;</li>
          <li>of de wagen buiten staat of in een garage.</li>
        </ul>
      </>
    ),
  },
  {
    question: 'Wat is het verschil tussen polijsten, lakcorrectie en spot repair?',
    answer: (
      <div className="space-y-4">
        <p>Het verschil zit vooral in de diepte van de behandeling en de omvang van de schade.</p>
        <p><strong>Polijsten: opfrisser en glansherstel.</strong> Een milde, meestal eenstaps behandeling die lichte waskrassen en een doffe waas vermindert. Ideaal om de lak snel en effectief op te frissen.</p>
        <p><strong>Lakcorrectie: grondig herstel van de volledige lak.</strong> Een meerstaps proces met verschillende schijven en middelen, gericht op het verwijderen van diepere krassen, vogelpoepetsingen en hardnekkige oxidatie. Het resultaat is een strakke, spiegelgladde lak over het hele voertuig.</p>
        <p><strong>Spot repair: plaatselijke reparatie.</strong> Een gerichte behandeling van een klein, afgebakend schadegebied, zoals een diepe kras op een deurpost of parkeerschade op een bumperhoek.</p>
        <p>Kort samengevat: polijsten geeft glans terug, lakcorrectie behandelt diepere defecten over de hele wagen, en spot repair herstelt een specifieke plaatselijke beschadiging.</p>
      </div>
    ),
  },
];

export default function FaqPage() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <div className="page-shell bg-[#f4f3ed]">
      <SiteHeader />
      <main className="content-width py-16 md:py-24">
        <p className="eyebrow">Helder en eenvoudig</p>
        <h1 className="display mt-5 text-5xl sm:text-7xl md:text-8xl">Veelgestelde<br />vragen.</h1>
        <div className="mt-14 border-t border-[#bab9b4]">
          {questions.map(({ question, answer }, index) => (
            <div key={question} className="border-b border-[#bab9b4]">
              <button
                type="button"
                onClick={() => setOpenQuestion((current) => current === question ? null : question)}
                aria-expanded={openQuestion === question}
                aria-controls={`answer-${index}`}
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-bold md:text-xl"
              >
                {question}
                <ChevronDown className={`shrink-0 transition-transform duration-300 ${openQuestion === question ? 'rotate-180' : ''}`} />
              </button>
              <div
                id={`answer-${index}`}
                className={`faq-answer-grid ${openQuestion === question ? 'is-open' : ''}`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="max-w-2xl pb-5 leading-7 text-[#4b4b47]">{answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
