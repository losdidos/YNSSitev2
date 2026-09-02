'use client';

import { Star } from 'lucide-react';
import { useEffect, useRef } from 'react';

const reviews = [
  {
    name: 'Mathias V.',
    service: 'Keramische coating',
    text: 'Topservice en een resultaat dat echt boven verwachting was. De wagen ziet er opnieuw uit als nieuw.',
  },
  {
    name: 'Lars D.',
    service: 'Interieur detailing',
    text: 'Heel grondig gewerkt en duidelijke communicatie van begin tot einde. Een echte aanrader.',
  },
  {
    name: 'Yannick B.',
    service: 'Polijsteren',
    text: 'De lak heeft opnieuw diepte en glans. Je merkt meteen dat hier met oog voor detail gewerkt wordt.',
  },
  {
    name: 'Niels V.',
    service: 'Premium wasbeurt',
    text: 'Mijn wagen stond er perfect bij. Correct, professioneel en vooral een prachtig eindresultaat.',
  },
];

export function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (track) track.scrollLeft = track.scrollWidth / 2;
  }, []);

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;

    const loopPoint = track.scrollWidth / 2;
    if (track.scrollLeft >= loopPoint) track.scrollLeft -= loopPoint;
    if (track.scrollLeft <= 1) track.scrollLeft += loopPoint;
  }

  return (
    <section className="overflow-hidden bg-[#111] py-20 text-white md:py-28">
      <div className="content-width flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow text-[#f9b233]">Ervaringen</p>
          <h2 className="display mt-5 text-5xl sm:text-6xl">Wat klanten<br />zeggen.</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-[#b9b9b5]">Eerlijke feedback van eigenaars die hun wagen de aandacht gaven die hij verdient.</p>
      </div>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="reviews-track mt-11 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-5 md:px-12"
        aria-label="Klantbeoordelingen"
      >
        {[...reviews, ...reviews].map((review, index) => (
          <article key={`${review.name}-${index}`} className="w-[min(82vw,390px)] shrink-0 snap-start border border-[#373735] bg-[#1a1a19] p-6 sm:p-7">
            <div className="flex gap-1 text-[#f9b233]" aria-label="5 van 5 sterren">
              {Array.from({ length: 5 }, (_, star) => <Star key={star} size={15} fill="currentColor" />)}
            </div>
            <p className="mt-6 text-lg leading-7 text-[#f1f1ed]">&ldquo;{review.text}&rdquo;</p>
            <div className="mt-8 border-t border-[#363634] pt-4">
              <p className="text-sm font-bold">{review.name}</p>
              <p className="mt-1 text-xs text-[#a6a6a0]">{review.service}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="content-width mt-1 text-xs font-bold uppercase tracking-[0.1em] text-[#a6a6a0]">Sleep om meer ervaringen te bekijken</div>
    </section>
  );
}
