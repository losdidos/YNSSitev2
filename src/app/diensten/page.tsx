import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { services } from '@/lib/services-data';

export const metadata = { title: 'Diensten' };

export default function ServicesPage() {
  return (
    <div className="page-shell bg-[#f4f3ed]">
      <SiteHeader />
      <main>
        <section className="content-width flex flex-col gap-3 py-8 md:gap-4 md:py-10">
          {services.map((service, index) => {
            const reversed = index % 2 === 1;
            return (
              <div key={service.slug}>
                <div className="grid min-h-[520px] grid-rows-[260px_1fr] gap-0 overflow-hidden bg-white md:min-h-0 md:h-[320px] md:grid-cols-[0.82fr_1fr] md:grid-rows-1">
                  <div className={`relative h-full w-full ${reversed ? 'md:order-2' : ''}`}>
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      priority={index < 2}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className={`flex h-full flex-col justify-center overflow-hidden p-7 md:p-10 ${reversed ? 'md:order-1' : ''}`}>
                    <p className="text-xs font-black uppercase tracking-[0.12em] text-[#9a6500]">{String(index + 1).padStart(2, '0')}</p>
                    <h2 className="display mt-3 text-3xl sm:text-4xl">{service.title}</h2>
                    <p className="mt-4 line-clamp-2 max-w-md leading-6 text-[#4b4b47]">{service.tagline}</p>
                    <p className="mt-4 flex items-center gap-2 text-sm font-bold">
                      <ArrowUpRight size={16} className="rotate-45 text-[#9a6500]" /> Persoonlijke aanpak, zichtbaar resultaat
                    </p>
                    <Link href={`/booking?service=${service.slug}`} className="cta-primary mt-7 self-start">
                      Vraag een afspraak aan <ArrowUpRight size={17} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
