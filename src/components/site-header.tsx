'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const services = [
  { title: 'Interieur detailing', href: '/diensten#interieur' },
  { title: 'Polijsteren', href: '/diensten#polijsteren' },
  { title: 'Keramische coating', href: '/diensten#keramische-coating' },
  { title: 'Premium wasbeurt', href: '/diensten#premium-wasbeurt' },
  { title: 'Extra', href: '/diensten#extra' },
];

interface SiteHeaderProps {
  overlay?: boolean;
}

export function SiteHeader({ overlay = false }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (!overlay) return;

    const sentinel = document.getElementById('home-top-sentinel');
    if (!sentinel) return;

    const observer = new IntersectionObserver(([entry]) => {
      setHasScrolled(!entry.isIntersecting);
    });

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [overlay]);

  return (
    <header
      className={`${overlay ? 'fixed inset-x-0' : 'sticky'} top-0 z-30 text-white transition-[background-color,box-shadow] duration-300 ${
        overlay && !hasScrolled && !mobileOpen ? 'bg-transparent' : 'bg-[#0a0a0a] shadow-lg shadow-black/25'
      }`}
    >
      <div className="content-width flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="YNS Car Care - Home" className="relative block h-14 w-44 shrink-0">
          <Image
            src="/pictures/yns-logo.png"
            alt="YNS Car Care"
            fill
            sizes="176px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden h-full items-center gap-1 lg:flex" aria-label="Hoofdnavigatie">
            <Link href="/" className="rounded-full px-5 py-3 text-sm font-bold transition hover:bg-[#f9b233] hover:text-black focus:bg-[#f9b233] focus:text-black">
            Home
          </Link>
          <div className="group relative flex h-full items-center">
            <Link
              href="/diensten"
              className="flex items-center gap-1 rounded-full px-5 py-3 text-sm font-bold group-hover:bg-[#f9b233] group-hover:text-black group-focus-within:bg-[#f9b233] group-focus-within:text-black"
            >
              Diensten <ChevronDown size={17} strokeWidth={2.5} />
            </Link>
            <div className="invisible absolute left-0 top-[calc(100%-1px)] w-[min(680px,78vw)] border-t border-[#292929] bg-[#111] opacity-0 shadow-2xl transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="grid grid-cols-[1fr_0.86fr]">
                <div className="p-7">
                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-[#f9b233]">
                    Onze diensten
                  </p>
                  <div className="grid gap-1">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-center justify-between border-b border-[#282828] py-3 text-lg font-bold transition hover:pl-2 hover:text-[#f9b233]"
                      >
                        {service.title}
                        <span aria-hidden="true">+</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/booking" className="group/panel relative min-h-72 overflow-hidden">
                  <Image
                    src="/pictures/porshe_tyre_after.jpeg"
                    alt="Glanzend afgewerkte Porsche velg"
                    fill
                    sizes="300px"
                    className="object-cover opacity-60 transition duration-300 group-hover/panel:scale-105"
                  />
                  <span className="absolute inset-0 bg-black/35" />
                  <span className="absolute bottom-7 left-6 right-6 display text-3xl leading-none text-white">
                    Geef je auto<br />een nieuwe status.
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <Link href="/over-ons" className="rounded-full px-5 py-3 text-sm font-bold transition hover:bg-[#f9b233] hover:text-black focus:bg-[#f9b233] focus:text-black">
            Over ons
          </Link>
          <Link href="/faq" className="rounded-full px-5 py-3 text-sm font-bold transition hover:bg-[#f9b233] hover:text-black focus:bg-[#f9b233] focus:text-black">
            FAQ
          </Link>
        </nav>

        <Link href="/booking" className="cta-primary hidden lg:inline-flex">
          Maak afspraak
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="grid h-11 w-11 place-items-center lg:hidden"
        >
          <span className="sr-only">Menu {mobileOpen ? 'sluiten' : 'openen'}</span>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <nav id="mobile-menu" className="border-t border-[#303030] px-6 py-5 lg:hidden" aria-label="Mobiele navigatie">
          <div className="flex flex-col gap-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="py-3 text-lg font-bold">Home</Link>
            <details>
              <summary className="flex cursor-pointer items-center justify-between py-3 text-lg font-bold">
                Diensten <ChevronDown size={18} />
              </summary>
              <div className="flex flex-col border-l border-[#f9b233] pl-4">
                {services.map((service) => (
                  <Link key={service.href} href={service.href} onClick={() => setMobileOpen(false)} className="py-2 text-sm text-[#d8d8d4]">
                    {service.title}
                  </Link>
                ))}
              </div>
            </details>
            <Link href="/over-ons" onClick={() => setMobileOpen(false)} className="py-3 text-lg font-bold">Over ons</Link>
            <Link href="/faq" onClick={() => setMobileOpen(false)} className="py-3 text-lg font-bold">FAQ</Link>
            <Link href="/booking" onClick={() => setMobileOpen(false)} className="cta-primary mt-3">Maak afspraak</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
