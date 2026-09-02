import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, Check } from 'lucide-react';
import { ReviewsCarousel } from '@/components/reviews-carousel';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const services = [
  { title: 'Interieur\ndetailing', image: '/pictures/Black_mercedes_interieur_frontdash_clean.jpg', id: '01' },
  { title: 'Polijsteren', image: '/pictures/Scherm_afbeelding 2026-09-02 om 14.42.44.png', id: '02' },
  { title: 'Keramische\ncoating', image: '/pictures/Scherm_afbeelding 2026-09-02 om 14.43.07.png', id: '03' },
  { title: 'Premium\nwasbeurt', image: '/pictures/image.png', id: '04' },
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <SiteHeader overlay />
      <main>
        <section className="relative isolate min-h-[670px] overflow-hidden bg-black text-white md:min-h-[760px]">
          <span id="home-top-sentinel" className="absolute top-0 h-px w-px" aria-hidden="true" />
          <Image
            src="/pictures/HeaderBMW.JPG"
            alt="BMW professioneel gedetaild door YNS Car Care"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[56%_75%] opacity-75"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.84)_0%,rgba(0,0,0,.58)_42%,rgba(0,0,0,.12)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
          <div className="content-width relative flex min-h-[670px] flex-col justify-end pb-16 pt-32 md:min-h-[760px] md:pb-24">
            <p className="eyebrow reveal">YNS Car Care</p>
            <h1 className="display reveal mt-5 max-w-4xl text-[clamp(4.2rem,10vw,9.2rem)] text-white" style={{ animationDelay: '80ms' }}>
              Your new<br /><span className="text-[#f9b233]">status.</span>
            </h1>
            <p className="reveal mt-6 max-w-md text-base leading-7 text-[#e4e4df] md:text-lg" style={{ animationDelay: '150ms' }}>
              Detailing met oog voor elk detail. Voor wagens die opnieuw mogen spreken.
            </p>
            <div className="reveal mt-8 flex flex-wrap gap-3" style={{ animationDelay: '220ms' }}>
              <Link href="/booking" className="cta-primary">Maak afspraak <ArrowUpRight size={17} /></Link>
              <Link href="/diensten" className="cta-quiet">Bekijk diensten <ArrowDownRight size={17} /></Link>
            </div>
          </div>
        </section>

        <section className="bg-[#f4f3ed] py-20 md:py-28">
          <div className="content-width grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="eyebrow">Aandacht voor afwerking</p>
              <h2 className="display mt-5 max-w-md text-5xl sm:text-6xl md:text-7xl">Geen snelle beurt.<br />Wel een zichtbaar verschil.</h2>
            </div>
            <div>
              <div className="aspect-[16/10] overflow-hidden rounded-lg bg-black">
                <video autoPlay muted loop playsInline className="h-full w-full object-cover" aria-label="YNS Car Care detailing in actie">
                  <source src="/pictures/yns-detailing.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="mt-8 grid gap-7 text-base leading-7 text-[#444440] md:grid-cols-2">
                <p>YNS Car Care brengt auto&apos;s terug naar hun beste vorm. Van een fris, verzorgd interieur tot lakcorrectie die diepte en glans terugbrengt.</p>
                <div>
                  <p>Elke behandeling start met een eerlijke blik op jouw wagen. Daarna kiezen we de juiste aanpak, zonder onnodige stappen.</p>
                  <Link href="/over-ons" className="mt-5 inline-flex items-center gap-2 border-b-2 border-[#f9b233] pb-1 text-sm font-bold uppercase">Over YNS <ArrowUpRight size={16} /></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#111] py-20 text-white md:py-28" id="diensten">
          <div className="content-width">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-[#f9b233]">Onze diensten</p>
                <h2 className="display mt-5 text-5xl sm:text-6xl">Voor elke<br />finish.</h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#b9b9b5]">Van onderhoud tot een volledige transformatie. Kies de behandeling die bij jouw wagen past.</p>
            </div>
            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Link key={service.id} href="/diensten" className="group relative aspect-[4/5] overflow-hidden bg-[#252525]">
                  <Image src={service.image} alt={service.title.replace('\n', ' ')} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  <span className="service-glow pointer-events-none absolute inset-0" />
                  <span className="display absolute bottom-5 left-5 whitespace-pre-line text-3xl text-white">{service.title}</span>
                </Link>
              ))}
            </div>
            <Link href="/diensten" className="cta-primary mt-8">
              <span className="cta-flip-label"><span>Alle diensten</span><span>Ontdek meer</span></span>
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>

        <section className="bg-[#f9b233] py-16 text-black md:py-20">
          <div className="content-width grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
            <p className="display text-4xl sm:text-5xl">Precisie<br />zit in de details.</p>
            <p className="max-w-xl text-base leading-7">Een strakke finish begint met het juiste proces. We werken zorgvuldig, met kwaliteitsproducten en genoeg tijd voor het resultaat.</p>
            <Link href="/booking" className="cta-quiet justify-self-start border-black">Plan jouw beurt <ArrowUpRight size={17} /></Link>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="content-width grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative min-h-[460px] overflow-hidden bg-[#222]">
              <Image src="/pictures/Black_mercedes_interieur_frontdash_clean.jpg" alt="Verzorgd Mercedes interieur" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col justify-center py-2 lg:py-10">
              <p className="eyebrow">Interieur detailing</p>
              <h2 className="display mt-5 text-5xl sm:text-6xl">Een interieur<br />dat weer klopt.</h2>
              <p className="mt-6 max-w-md leading-7 text-[#4b4b47]">Een diepgaande reiniging die verder gaat dan stofzuigen. Van dashboards en zetels tot moeilijk bereikbare zones: fris, verzorgd en aangenaam om opnieuw in te stappen.</p>
              <ul className="mt-7 grid gap-3 text-sm font-bold">
                {['Grondige reiniging', 'Detailing van alle oppervlakken', 'Frisse, verzorgde afwerking'].map((item) => <li key={item} className="flex items-center gap-3"><Check size={18} className="text-[#9a6500]" />{item}</li>)}
              </ul>
              <Link href="/diensten#interieur" className="cta-primary mt-8 self-start">Ontdek interieur detailing <ArrowUpRight size={17} /></Link>
            </div>
          </div>
        </section>

        <section className="bg-[#20201e] text-white">
          <div className="content-width grid min-h-[620px] lg:grid-cols-2">
            <div className="flex flex-col justify-center py-20 lg:py-28">
              <p className="eyebrow text-[#f9b233]">Lakcorrectie & bescherming</p>
              <h2 className="display mt-5 text-5xl sm:text-6xl">Glans die<br />blijft hangen.</h2>
              <p className="mt-6 max-w-md leading-7 text-[#d1d1cd]">Polijsten haalt de volle uitstraling van je lak weer naar boven. Met een keramische coating beschermen we die finish langdurig tegen de elementen.</p>
              <Link href="/diensten#keramische-coating" className="cta-primary mt-8 self-start">Bekijk coatings <ArrowUpRight size={17} /></Link>
            </div>
            <div className="relative min-h-[400px] overflow-hidden lg:my-12">
              <Image src="/pictures/porshe_tyre_after.jpeg" alt="Afgewerkte Porsche met glanzende velg" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-[#f4f3ed] py-20 md:py-28">
          <div className="content-width flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Klaar voor jouw nieuwe status?</p>
              <h2 className="display mt-5 max-w-2xl text-5xl sm:text-6xl md:text-7xl">Jouw wagen.<br />Onze aandacht.</h2>
            </div>
            <Link href="/booking" className="cta-primary">Maak een afspraak <ArrowUpRight size={17} /></Link>
          </div>
        </section>

        <ReviewsCarousel />
      </main>
      <SiteFooter />
    </div>
  );
}
