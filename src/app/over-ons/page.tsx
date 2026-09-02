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
          <div className="max-w-xl text-lg leading-8 text-[#454541]">
            <p>Bij YNS Car Care draait alles om de kunst van auto-optimalisatie. Wat begon als een gepassioneerde liefde voor auto&apos;s, is uitgegroeid tot een gespecialiseerde studio waar nauwkeurigheid, finish en uitstekende bescherming samenkomen.</p>
            <p className="mt-5 font-bold text-black">Onze diensten verschillen van de gebruikelijke autoverzorging. YNS Car Care biedt een complete oplossing voor degenen die uitsluitend vertrouwd zijn met het beste.</p>
          </div>
        </section>
        <section className="bg-[#111] text-white">
          <div className="content-width grid min-h-[590px] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[380px] lg:order-2">
              <Image src="/pictures/Black_Audi_Front_After.jpg" alt="Zwarte Audi na een YNS Car Care behandeling" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col justify-center py-16 lg:py-24">
              <p className="eyebrow text-[#f9b233]">Onze aanpak</p>
              <h2 className="display mt-5 max-w-xl text-5xl sm:text-6xl">Aandacht voor elk detail, maatwerk voor elke wagen.</h2>
              <p className="mt-6 max-w-md leading-7 text-[#c6c6c1]">Wij zijn ervan overtuigd dat ware klasse in de kleinigheden ligt. Wij transformeren en beschermen voertuigen op het hoogste niveau door uitsluitend te werken met hoogwaardige producten en de nieuwste technologieën.</p>
              <p className="mt-5 max-w-md leading-7 text-[#c6c6c1]">Elk binnenkomend voertuig wordt behandeld volgens een enkele standaard: een onberispelijke afwerking die de verwachtingen van de meest veeleisende autobezitter evenaart. Jarenlange ervaring met diverse laksoorten, carrosserieën en ingewikkelde problemen vormt de basis van onze kennis.</p>
              <Link href="/booking" className="cta-primary mt-8 self-start">Maak afspraak <ArrowUpRight size={17} /></Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
