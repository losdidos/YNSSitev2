import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata = { title: 'Over ons' };

export default function AboutPage() {
  return (
    <div className="page-shell bg-[#f4f3ed]">
      <SiteHeader />
      <main>
        <section className="content-width grid gap-10 py-16 md:py-24 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">Over YNS Car Care</p>
            <h1 className="display mt-5 text-6xl sm:text-7xl md:text-8xl">Your new<br /><span className="text-[#f9b233]">status.</span></h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[#454541]">YNS Car Care is er voor eigenaars die hun wagen met zorg behandelen. Niet alleen schoon, maar verzorgd tot in de afwerking.</p>
        </section>
        <section className="bg-[#111] text-white">
          <div className="content-width grid min-h-[590px] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[380px] lg:order-2">
              <Image src="/pictures/Black_Audi_Front_After.jpg" alt="Zwarte Audi na een YNS Car Care behandeling" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col justify-center py-16 lg:py-24">
              <p className="eyebrow text-[#f9b233]">Onze aanpak</p>
              <h2 className="display mt-5 max-w-lg text-5xl sm:text-6xl">Tijd voor wat je ziet.</h2>
              <p className="mt-6 max-w-md leading-7 text-[#c6c6c1]">Elke wagen is anders. Daarom kijken we eerst naar de staat van het interieur, de lak en de gewenste finish. Vervolgens werken we stap voor stap aan een resultaat dat bij je verwachtingen past.</p>
              <Link href="/booking" className="cta-primary mt-8 self-start">Maak afspraak <ArrowUpRight size={17} /></Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
