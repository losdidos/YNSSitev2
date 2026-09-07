import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Check } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getServiceBySlug, services } from '@/lib/services-data';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  return { title: service?.title ?? 'Diensten' };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="page-shell bg-[#f4f3ed]">
      <SiteHeader />
      <main>
        <section className="bg-[#111] py-20 text-white md:py-28">
          <div className="content-width">
            <p className="eyebrow text-[#f9b233]">YNS Car Care</p>
            <h1 className="display mt-5 text-6xl sm:text-7xl md:text-8xl">{service.title}.</h1>
            <p className="mt-6 max-w-xl text-lg leading-7 text-[#c4c4be]">{service.tagline}</p>
          </div>
        </section>

        <section className="content-width py-14 md:py-20">
          <div className="grid gap-10 overflow-hidden rounded-2xl bg-white lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[290px]">
              <Image src={service.image} alt={service.imageAlt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col justify-center p-7 md:p-11">
              <p className="max-w-lg leading-7 text-[#4b4b47]">{service.description}</p>

              <div className="mt-7">
                <p className="text-xs font-black uppercase tracking-[0.12em] text-[#9a6500]">Wat mag je verwachten</p>
                <ul className="mt-3 grid gap-2 text-sm font-bold">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3"><Check size={17} className="text-[#9a6500]" />{highlight}</li>
                  ))}
                </ul>
              </div>

              {service.extraOptions && (
                <div className="mt-7">
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-[#9a6500]">Optionele extra&apos;s</p>
                  <ul className="mt-3 grid gap-2 text-sm font-bold">
                    {service.extraOptions.map((extra) => (
                      <li key={extra} className="flex items-center gap-3"><Check size={17} className="text-[#9a6500]" />{extra}</li>
                    ))}
                  </ul>
                </div>
              )}

              {service.note && <p className="mt-6 max-w-lg text-sm leading-6 text-[#6b6b65]">{service.note}</p>}
            </div>
          </div>
        </section>

        <section className="content-width pb-14 md:pb-20">
          <p className="eyebrow">Pakketten</p>
          <h2 className="display mt-4 text-3xl sm:text-4xl">Kies je pakket.</h2>
          <div className={`mt-10 grid gap-6 ${service.packages.length > 1 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-1'}`}>
            {service.packages.map((pkg) => (
              <div key={pkg.name} className="flex flex-col rounded-2xl bg-white p-8 md:p-9">
                <h3 className="display text-2xl">{pkg.name}</h3>
                <p className="mt-4 leading-6 text-[#4b4b47]">{pkg.description}</p>
                <ul className="mt-6 grid gap-2 text-sm font-bold">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3"><Check size={17} className="mt-0.5 shrink-0 text-[#9a6500]" />{feature}</li>
                  ))}
                </ul>
                <Link
                  href={`/booking?service=${service.slug}&package=${encodeURIComponent(pkg.name)}`}
                  className="cta-primary mt-8 self-start"
                >
                  Vraag een offerte aan <ArrowUpRight size={17} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#111] py-16 text-white md:py-20">
          <div className="content-width flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="eyebrow text-[#f9b233]">YNS Car Care</p>
              <h2 className="display mt-4 text-3xl sm:text-4xl">Klaar om een afspraak te maken?</h2>
            </div>
            <Link href={`/booking?service=${service.slug}`} className="cta-primary">
              Vraag een offerte aan <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
