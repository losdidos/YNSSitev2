import type { ReactNode } from 'react';

export interface FaqItem {
  question: string;
  answer: ReactNode;
  /** Plain-text version of the answer for FAQPage structured data. */
  answerText: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'Hoe kan ik een afspraak maken?',
    answerText:
      'Via het afspraakformulier. Je aanvraag komt rechtstreeks bij ons binnen, waarna we je contacteren om een moment af te stemmen.',
    answer: <p>Via het afspraakformulier. Je aanvraag komt rechtstreeks bij ons binnen, waarna we je contacteren om een moment af te stemmen.</p>,
  },
  {
    question: 'Hoe lang duurt een behandeling?',
    answerText:
      'Dat hangt af van de gekozen dienst en de staat van de wagen. We geven je bij het plannen een duidelijke inschatting.',
    answer: <p>Dat hangt af van de gekozen dienst en de staat van de wagen. We geven je bij het plannen een duidelijke inschatting.</p>,
  },
  {
    question: 'Moet ik iets voorbereiden?',
    answerText:
      'Nee. Zorg er enkel voor dat je persoonlijke spullen uit de wagen haalt als je een interieurbehandeling boekt.',
    answer: <p>Nee. Zorg er enkel voor dat je persoonlijke spullen uit de wagen haalt als je een interieurbehandeling boekt.</p>,
  },
  {
    question: 'Welke betaling is mogelijk?',
    answerText:
      'Neem contact met ons op bij het plannen van je afspraak. We bezorgen je de praktische informatie vooraf.',
    answer: <p>Neem contact met ons op bij het plannen van je afspraak. We bezorgen je de praktische informatie vooraf.</p>,
  },
  {
    question: 'Kan ik meerdere diensten combineren?',
    answerText:
      'Zeker. Beschrijf uitgebreid je wensen in het formulier en we stellen een passende behandeling voor.',
    answer: <p>Zeker. Beschrijf <strong>uitgebreid</strong> je wensen in het formulier en we stellen een passende behandeling voor.</p>,
  },
  {
    question: 'Wat is detailing?',
    answerText:
      'Car detailing omvat het grondig reinigen, restaureren, zoals lakcorrectie of polijsten, en afwerken van een voertuig. Het doel is om jouw wagen terug in absolute showroomstaat te brengen. Zowel het interieur als het exterieur kunnen worden behandeld. Traditionele autopoetsbedrijven en carwashes werken vaak zo snel mogelijk. Onjuiste wastechnieken kunnen lakschade, waskrassen en andere imperfecties veroorzaken. Bij YNS Car Care staat kwaliteit boven kwantiteit. We streven naar het beste resultaat met hoogwaardige materialen, producten en technieken.',
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
    answerText:
      'Een keramische coating vormt een extra harde toplaag over de bestaande lak, ramen of velgen. Deze hecht zich aan het oppervlak, zodat je wagen langer proper en glanzend blijft, krasbestendiger wordt en water en vuil sterker afstoot. Bij correct onderhoud kan een coating, afhankelijk van het gekozen pakket, tot drie jaar meegaan. De levensduur varieert per wagen en hangt onder meer af van de manier en frequentie van wassen, hoe vaak er met de wagen wordt gereden en of de wagen buiten staat of in een garage.',
    answer: (
      <>
        <p>Een keramische coating vormt een extra harde toplaag over de bestaande lak, ramen of velgen. Deze hecht zich aan het oppervlak, zodat je wagen langer proper en glanzend blijft, krasbestendiger wordt en water en vuil sterker afstoot.</p>
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
    answerText:
      'Het verschil zit vooral in de diepte van de behandeling en de omvang van de schade. Polijsten is een milde, meestal eenstaps behandeling die lichte waskrassen en een doffe waas vermindert. Lakcorrectie is een meerstaps proces dat diepere krassen, vogelpoepetsingen en hardnekkige oxidatie over de volledige lak verwijdert, voor een strakke, spiegelgladde lak. Spot repair is een gerichte behandeling van een klein, afgebakend schadegebied, zoals een diepe kras op een deurpost of parkeerschade op een bumperhoek. Kort samengevat: polijsten geeft glans terug, lakcorrectie behandelt diepere defecten over de hele wagen, en spot repair herstelt een specifieke plaatselijke beschadiging.',
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
