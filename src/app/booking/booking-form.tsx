'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/services-data';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function BookingForm() {
  const searchParams = useSearchParams();
  const preselectedService = services.find((service) => service.slug === searchParams.get('service'));
  const preselectedPackage = searchParams.get('package');

  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [serviceType, setServiceType] = useState(preselectedService?.navTitle ?? '');
  const [notes, setNotes] = useState(preselectedPackage ? `Pakket: ${preselectedPackage}\n` : '');

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
      setServiceType('');
      setNotes('');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Er ging iets mis. Probeer het opnieuw.');
      setState('error');
    }
  }

  return (
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
          <select
            name="serviceType"
            required
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="h-12 rounded-md border border-[#bbbcb6] bg-[#fbfbf8] px-3 outline-none focus:border-black"
          >
            <option value="" disabled>Kies een dienst</option>
            {services.map((service) => <option key={service.slug}>{service.navTitle}</option>)}
            <option>Andere vraag</option>
          </select>
        </label>

        <label className="flex items-center gap-3 text-sm font-bold">
          <input
            name="isBusiness"
            type="checkbox"
            value="true"
            className="h-5 w-5 accent-[#f9b233]"
          />
          Zakelijk
        </label>

        <label className="grid gap-2 text-sm font-bold">
          Extra info <span className="font-normal text-[#777771]">(optioneel)</span>
          <textarea
            name="notes"
            maxLength={1200}
            rows={5}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="resize-y rounded-md border border-[#bbbcb6] bg-[#fbfbf8] p-3 outline-none focus:border-black"
          />
        </label>

        {state === 'error' && <p role="alert" className="border-l-4 border-red-700 bg-red-50 p-4 text-sm text-red-900">{errorMsg}</p>}

        <button type="submit" disabled={state === 'loading'} className="cta-primary mt-2 min-h-14 w-full text-sm disabled:cursor-not-allowed disabled:opacity-60">
          {state === 'loading' ? 'Aanvraag versturen...' : <>Aanvraag versturen <ArrowUpRight size={17} /></>}
        </button>
      </form>
    </div>
  );
}
