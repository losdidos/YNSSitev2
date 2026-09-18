'use client';

import { Instagram, Star } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { reviews } from '@/lib/reviews-data';

export function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const loopWidthRef = useRef(0);
  const scrollFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const currentTrack = track;

    function updateLoopWidth() {
      const firstCard = currentTrack.children[0] as HTMLElement | undefined;
      const secondSetFirstCard = currentTrack.children[reviews.length] as HTMLElement | undefined;
      if (!firstCard || !secondSetFirstCard) return;

      loopWidthRef.current = secondSetFirstCard.offsetLeft - firstCard.offsetLeft;
      if (currentTrack.scrollLeft === 0) currentTrack.scrollLeft = loopWidthRef.current;
    }

    updateLoopWidth();
    const frame = requestAnimationFrame(updateLoopWidth);
    const observer = new ResizeObserver(updateLoopWidth);
    observer.observe(currentTrack);

    return () => {
      cancelAnimationFrame(frame);
      if (scrollFrameRef.current !== null) cancelAnimationFrame(scrollFrameRef.current);
      observer.disconnect();
    };
  }, []);

  function handleScroll() {
    if (scrollFrameRef.current !== null) return;

    scrollFrameRef.current = requestAnimationFrame(() => {
      scrollFrameRef.current = null;
      const track = trackRef.current;
      const loopWidth = loopWidthRef.current;
      if (!track || !loopWidth) return;

      if (track.scrollLeft < loopWidth * 0.5) {
        track.scrollLeft += loopWidth;
      } else if (track.scrollLeft > loopWidth * 1.5) {
        track.scrollLeft -= loopWidth;
      }
    });
  }

  return (
    <section className="overflow-hidden bg-[#111] py-20 text-white md:py-28">
      <div className="content-width flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow text-[#f9b233]">Ervaringen</p>
          <h2 className="display mt-5 text-5xl sm:text-6xl">Wat klanten<br />zeggen.</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-[#b9b9b5]">Onze klanten aan het woord.</p>
      </div>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="reviews-track mt-11 flex gap-4 overflow-x-auto px-6 pb-5 md:px-12"
        aria-label="Klantbeoordelingen"
      >
        {[0, 1, 2].flatMap((copy) => reviews.map((review, reviewIndex) => (
          <Link
            key={`${copy}-${reviewIndex}`}
            href={review.href}
            target="_blank"
            rel="noreferrer"
            tabIndex={copy === 1 ? 0 : -1}
            aria-hidden={copy !== 1}
            className="w-[min(82vw,390px)] shrink-0 border border-[#373735] bg-[#1a1a19] p-6 transition-colors hover:border-[#f9b233] sm:p-7"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex gap-1 text-[#f9b233]" aria-label={`${review.rating} van 5 sterren`}>
                {Array.from({ length: 5 }, (_, star) => (
                  <Star key={star} size={15} fill={star < review.rating ? 'currentColor' : 'transparent'} />
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#a6a6a0]">
                {review.source === 'instagram' ? <Instagram size={14} aria-hidden="true" /> : <Star size={14} fill="currentColor" aria-hidden="true" />}
                {review.source === 'instagram' ? 'Instagram' : 'Trustpilot'}
              </span>
            </div>
            {review.title && <p className="mt-5 text-base font-bold text-[#f1f1ed]">{review.title}</p>}
            <p className="mt-6 text-lg leading-7 text-[#f1f1ed]">&ldquo;{review.text}&rdquo;</p>
            <div className="mt-8 border-t border-[#363634] pt-4">
              <p className="text-sm font-bold">{review.name}</p>
              <p className="mt-1 text-xs text-[#a6a6a0]">{review.service}</p>
            </div>
          </Link>
        )))}
      </div>
      <div className="content-width mt-1 text-xs font-bold uppercase tracking-[0.1em] text-[#a6a6a0]">Sleep om meer ervaringen te bekijken</div>
    </section>
  );
}
