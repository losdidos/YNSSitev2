import { Suspense } from 'react';
import { Check } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { BookingForm } from './booking-form';

export default function BookingPage() {
  return (
    <div className="page-shell bg-[#f4f3ed]">
      <SiteHeader />
      <main className="content-width grid gap-10 py-16 md:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">Afspraak aanvragen</p>
          <h1 className="display mt-5 text-6xl sm:text-7xl">Geef je wagen<br />aandacht.</h1>
          <p className="mt-6 max-w-sm leading-7 text-[#4b4b47]">Vertel ons kort wat je wagen nodig heeft. We nemen daarna contact met je op om je afspraak te plannen.</p>
          <ul className="mt-8 grid gap-3 text-sm font-bold">
            {['Vrijblijvende aanvraag', 'Persoonlijk contact', 'Behandeling op maat'].map((item) => <li key={item} className="flex items-center gap-3"><Check size={18} className="text-[#9a6500]" />{item}</li>)}
          </ul>
        </div>

        <Suspense fallback={null}>
          <BookingForm />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}
