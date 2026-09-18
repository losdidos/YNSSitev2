'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { useEffect, useRef } from 'react';

const showcase = [
  { src: '/pictures/HeaderBMW.JPG', alt: 'BMW professioneel gedetaild door YNS Car Care' },
  { src: '/pictures/RSstoel.jpg', alt: 'Sportstoel professioneel verzorgd door YNS Car Care', className: 'brightness-125' },
  { src: '/pictures/audicool.jpg', alt: 'Audi professioneel verzorgd door YNS Car Care', className: 'object-[65%_center]' },
  { src: '/pictures/intcool.jpg', alt: 'Exclusief verzorgd wageninterieur' },
  { src: '/pictures/Black_mercedes_frontPic.jpg', alt: 'Mercedes na een YNS Car Care behandeling' },
  { src: '/pictures/Black_Audi_Scraped_after.jpg', alt: 'Hersteld lakwerk na behandeling' },
  { src: '/pictures/starroof.png', alt: 'Custom sterrenhemel in het interieur van een wagen' },
];

export function SocialShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function updateFocus() {
      if (!track) return;
      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      const maxDistance = track.clientWidth / 1.4;

      itemRefs.current.forEach((item) => {
        if (!item) return;
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const ratio = Math.min(Math.abs(itemCenter - trackCenter) / maxDistance, 1);
        item.style.opacity = String(1 - ratio * 0.75);
        item.style.filter = `grayscale(${ratio * 0.85}) brightness(${1 - ratio * 0.35})`;
      });
    }

    updateFocus();
    function handleScroll() {
      if (scrollFrameRef.current !== null) return;
      scrollFrameRef.current = requestAnimationFrame(() => {
        scrollFrameRef.current = null;
        updateFocus();
      });
    }

    track.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateFocus);
    return () => {
      if (scrollFrameRef.current !== null) cancelAnimationFrame(scrollFrameRef.current);
      track.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateFocus);
    };
  }, []);

  return (
    <section className="relative isolate min-h-[560px] overflow-hidden bg-black text-white md:min-h-[640px]">
      <div
        ref={trackRef}
        className="social-strip absolute inset-0 flex items-center gap-4 overflow-x-auto px-6 md:px-12"
        aria-hidden="true"
      >
        {showcase.map((item, index) => (
          <div
            key={item.src}
            ref={(el) => { itemRefs.current[index] = el; }}
            className="relative h-[260px] w-[190px] shrink-0 overflow-hidden rounded-sm md:h-[380px] md:w-[280px]"
          >
            <Image src={item.src} alt={item.alt} fill sizes="(min-width: 768px) 280px, 190px" className={`object-cover ${item.className ?? ''}`} />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/70" />
      <div className="content-width relative flex min-h-[560px] flex-col justify-end gap-6 py-16 md:min-h-[640px] md:py-20">
        <p className="eyebrow text-[#f9b233]">Volg ons</p>
        <h2 className="display max-w-2xl text-5xl sm:text-6xl md:text-7xl">Blijf op<br />de hoogte.</h2>
        <Link
          href="https://www.instagram.com/ynscarcare/"
          target="_blank"
          rel="noreferrer"
          className="cta-primary self-start"
        >
          <Instagram size={17} /> Volg ons op Instagram
        </Link>
      </div>
    </section>
  );
}
