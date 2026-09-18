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
        <section className="content-width grid gap-10 py-16 md:py-24 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="eyebrow">Over YNS Car Care</p>
            <h1 className="display mt-5 text-6xl sm:text-7xl md:text-8xl">Your new<br /><span className="text-[#f9b233]">status.</span></h1>
          </div>
          <div className="max-w-xl text-lg leading-8 text-[#454541]">
              <p>Wij zijn niet gestart vanuit zomaar een hobby, maar vanuit één rotsvast geloof: <strong>het kan beter, strakker en professioneler.</strong> Wij geloven dat onze aanpak de énige juiste manier is om het maximale uit jouw voertuig te halen.</p>
              <p className="mt-5">Een vlekkeloos voertuig is geen alledaags vervoermiddel &mdash; het is het ultieme visitekaartje van jouw succes, smaak en merk. Het straalt klasse, professionaliteit en gezag uit. Wij tillen de esthetiek van jouw privéwagen of bedrijfswagenpark naar een exclusief niveau dat direct opvalt, terwijl het complete proces jou nul moeite kost.</p>
              <p className="mt-5">Wij leveren de status en de opvallende uitstraling die jij en je onderneming verdienen, zonder dat jij je ergens zorgen om hoeft te maken.</p>
              <p className="mt-5 font-bold text-black">Onze diensten verschillen van de gebruikelijke autoverzorging. YNS&apos;CarCare biedt een complete oplossing voor degenen die uitsluitend vertrouwd zijn met het beste.</p>
          </div>
        </section>
        <section className="bg-[#111] text-white">
          <div className="content-width grid min-h-[590px] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[380px] lg:order-2">
              <Image src="/pictures/Overonspic.jpg" alt="YNS Car Care voertuigbehandeling" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col justify-center py-16 lg:py-24">
              <p className="eyebrow text-[#f9b233]">Onze aanpak</p>
              <h2 className="display mt-5 max-w-xl text-5xl sm:text-6xl">Aandacht voor elk detail, maatwerk voor elke wagen.</h2>
                <p className="mt-6 max-w-md leading-7 text-[#c6c6c1]">Wij geloven dat echte klasse zich in de kleinigheden bevindt. Wij transformeren en beschermen voertuigen op het hoogste niveau door alleen te werken met hoogwaardige materialen en de meest recente technologieën.</p>
                <p className="mt-5 max-w-md leading-7 text-[#c6c6c1]">Elk binnenkomend voertuig wordt behandeld volgens een specifieke standaard: een perfecte afwerking die de verwachtingen van de meest eisende autobezitter overtreft. Onze kennis is gebaseerd op jarenlange ervaring met verschillende laksoorten, carrosserieën en complexe problemen.</p>
                <Link href="/booking" className="cta-primary mt-8 self-start">Maak een afspraak <ArrowUpRight size={17} /></Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
