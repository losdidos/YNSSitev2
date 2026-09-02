import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const services = [
  {
    id: 'interieur',
    number: '01',
    title: 'Interieur detailing',
    description: 'Een grondige reiniging van zetels, tapijten, dashboard en alle details die je elke dag ziet en voelt.',
    image: '/pictures/Black_mercedes_interieur_frontdash_clean.jpg',
  },
  {
    id: 'polijsteren',
    number: '02',
    title: 'Polijsteren',
    description: 'Lakcorrectie voor meer diepte en glans. We verminderen zichtbare waskrassen en brengen de kleur opnieuw tot leven.',
    image: '/pictures/Black_Audi_Scraped_after.jpg',
  },
  {
    id: 'keramische-coating',
    number: '03',
    title: 'Keramische coating',
    description: 'Duurzame bescherming met een intense glans en een waterafstotende finish die het onderhoud eenvoudiger maakt.',
    image: '/pictures/porshe_tyre_after.jpeg',
  },
  {
    id: 'premium-wasbeurt',
    number: '04',
    title: 'Premium wasbeurt',
    description: 'Meer dan een gewone wasbeurt: veilig wassen, zorgvuldig drogen en aandacht voor de afwerking.',
    image: '/pictures/Black_Audi_Front_After.jpg',
  },
  {
    id: 'extra',
    number: '05',
    title: 'Extra',
    description: 'Velgen, koplampen, geurbehandeling en andere gerichte extra’s voor precies dat beetje meer.',
    image: '/pictures/Black_mercedes_frontPic.jpg',
  },
];

export const metadata = { title: 'Diensten' };

export default function ServicesPage() {
  return (
    <div className="page-shell bg-[#f4f3ed]">
      <SiteHeader />
      <main>
        <section className="bg-[#111] py-20 text-white md:py-28">
          <div className="content-width">
            <p className="eyebrow text-[#f9b233]">YNS Car Care</p>
            <h1 className="display mt-5 text-6xl sm:text-7xl md:text-8xl">Onze diensten.</h1>
            <p className="mt-6 max-w-xl text-lg leading-7 text-[#c4c4be]">Van een opgefrist interieur tot lakbescherming op lange termijn. Elke behandeling wordt afgestemd op wat jouw wagen nodig heeft, voor wie uitsluitend vertrouwd is met het beste.</p>
          </div>
        </section>
        <section className="content-width py-14 md:py-20">
          <div className="grid gap-7">
            {services.map((service, index) => (
              <article id={service.id} key={service.id} className="scroll-mt-24 grid overflow-hidden bg-white lg:grid-cols-[0.9fr_1.1fr]">
                <div className={`relative min-h-[290px] ${index % 2 ? 'lg:order-2' : ''}`}>
                  <Image src={service.image} alt={service.title} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-col justify-center p-7 md:p-11">
                  <p className="text-xs font-black tracking-[0.12em] text-[#9a6500]">{service.number}</p>
                  <h2 className="display mt-4 text-4xl sm:text-5xl">{service.title}</h2>
                  <p className="mt-5 max-w-lg leading-7 text-[#4b4b47]">{service.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-bold"><Check size={17} className="text-[#9a6500]" /> Persoonlijke aanpak, zichtbaar resultaat</div>
                  <Link href="/booking" className="cta-primary mt-7 self-start">Vraag een afspraak aan <ArrowUpRight size={17} /></Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
