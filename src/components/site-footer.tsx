import Image from 'next/image';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="content-width grid gap-12 py-14 md:grid-cols-[1.2fr_0.8fr_0.7fr]">
        <div>
          <Image
            src="/pictures/yns-logo.png"
            alt="YNS Car Care"
            width={210}
            height={94}
            className="mb-6 h-auto w-52 object-contain object-left"
          />
          <p className="max-w-sm text-sm leading-6 text-[#b9b9b5]">
            Onze diensten verschillen van de gebruikelijke autoverzorging. YNS Car Care biedt een complete oplossing voor degenen die uitsluitend vertrouwd zijn met het beste.
          </p>
        </div>
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.1em] text-[#f9b233]">Navigatie</p>
          <div className="flex flex-col gap-3 text-sm font-bold">
            <Link href="/diensten" className="hover:text-[#f9b233]">Diensten</Link>
            <Link href="/over-ons" className="hover:text-[#f9b233]">Over ons</Link>
            <Link href="/faq" className="hover:text-[#f9b233]">Veelgestelde vragen</Link>
            <Link href="/booking" className="hover:text-[#f9b233]">Afspraak maken</Link>
          </div>
        </div>
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.1em] text-[#f9b233]">Contact</p>
          <p className="text-sm leading-6 text-[#b9b9b5]">Neem contact op voor een afspraak of een offerte op maat.</p>
          <div className="mt-5 flex flex-col gap-2 text-sm font-bold">
            <a href="tel:+32470404597" className="hover:text-[#f9b233]">0470/40.45.97</a>
            <a href="mailto:info@ynscarcare.be" className="hover:text-[#f9b233]">info@ynscarcare.be</a>
          </div>
          <Link href="/booking" className="mt-5 inline-block text-sm font-bold underline decoration-[#f9b233] underline-offset-4 hover:text-[#f9b233]">
            Contacteer ons
          </Link>
        </div>
      </div>
      <div className="border-t border-[#292929]">
        <div className="content-width flex flex-col gap-2 py-5 text-xs text-[#858581] sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} YNS Car Care</span>
          <span>Your New Status Car Care</span>
        </div>
      </div>
    </footer>
  );
}
