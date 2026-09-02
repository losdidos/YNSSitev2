'use client';

import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function BookingPage() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const body = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Er ging iets mis. Probeer het opnieuw.');
      }

      setState('success');
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Er ging iets mis. Probeer het opnieuw.');
      setState('error');
    }
  }

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

        <div className="bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:p-9">
          {state === 'success' && (
            <p className="mb-6 border-l-4 border-[#9a6500] bg-[#fff4df] p-4 text-sm font-medium text-[#443000]">
              Je aanvraag is verstuurd. We nemen zo snel mogelijk contact met je op.
            </p>
          )}

          <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
            <label className="grid gap-2 text-sm font-bold">
              Naam
              <input name="customerName" type="text" required minLength={2} maxLength={100} autoComplete="name" className="h-12 rounded-md border border-[#bbbcb6] bg-[#fbfbf8] px-3 outline-none focus:border-black" />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold">
                E-mailadres
                <input name="customerEmail" type="email" required maxLength={254} autoComplete="email" className="h-12 rounded-md border border-[#bbbcb6] bg-[#fbfbf8] px-3 outline-none focus:border-black" />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Telefoonnummer
                <input name="customerPhone" type="tel" required minLength={6} maxLength={30} autoComplete="tel" className="h-12 rounded-md border border-[#bbbcb6] bg-[#fbfbf8] px-3 outline-none focus:border-black" />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-bold">
              Gewenste dienst
              <select name="serviceType" required defaultValue="" className="h-12 rounded-md border border-[#bbbcb6] bg-[#fbfbf8] px-3 outline-none focus:border-black">
                <option value="" disabled>Kies een dienst</option>
                <option>Interieur detailing</option>
                <option>Polijsteren</option>
                <option>Keramische coating</option>
                <option>Premium wasbeurt</option>
                <option>Extra / advies op maat</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-bold">
              Extra info <span className="font-normal text-[#777771]">(optioneel)</span>
              <textarea name="notes" maxLength={1200} rows={5} className="resize-y rounded-md border border-[#bbbcb6] bg-[#fbfbf8] p-3 outline-none focus:border-black" />
            </label>

            {state === 'error' && <p role="alert" className="border-l-4 border-red-700 bg-red-50 p-4 text-sm text-red-900">{errorMsg}</p>}

            <button type="submit" disabled={state === 'loading'} className="cta-primary mt-2 min-h-14 w-full text-sm disabled:cursor-not-allowed disabled:opacity-60">
              {state === 'loading' ? 'Aanvraag versturen...' : <>Aanvraag versturen <ArrowUpRight size={17} /></>}
            </button>
          </form>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
