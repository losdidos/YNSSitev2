import { readFileSync } from 'node:fs';
import path from 'node:path';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export const metadata = {
  title: 'Algemene voorwaarden',
};

function getTermsSections() {
  const source = readFileSync(path.join(process.cwd(), 'algemeene.txt'), 'utf8');
  const lines = source.split(/\r?\n/);
  const sections: { title: string; lines: string[] }[] = [];
  let current: { title: string; lines: string[] } | null = null;

  for (const line of lines) {
    if (/^Artikel \d+\s/.test(line)) {
      current = { title: line, lines: [] };
      sections.push(current);
    } else if (current) {
      current.lines.push(line);
    }
  }

  return {
    title: lines[0] ?? 'Algemene verkoopsvoorwaarden',
    intro: lines.slice(1, lines.findIndex((line) => /^Artikel \d+\s/.test(line))).filter(Boolean),
    sections,
  };
}

function TermsContent({ lines }: { lines: string[] }) {
  const content: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length === 0) return;
    content.push(
      <ul key={`list-${content.length}`} className="my-4 list-disc space-y-2 pl-6">
        {listItems.map((item) => <li key={item}>{item.replace(/;$/, '')}</li>)}
      </ul>,
    );
    listItems = [];
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      return;
    }

    if (trimmed.endsWith(';')) {
      listItems.push(trimmed);
      return;
    }

    flushList();
    content.push(<p key={`paragraph-${index}`}>{trimmed}</p>);
  });
  flushList();

  return <div className="space-y-4">{content}</div>;
}

export default function AlgemeneVoorwaardenPage() {
  const terms = getTermsSections();

  return (
    <div className="page-shell bg-[#f4f3ed]">
      <SiteHeader />
      <main>
        <section className="bg-[#111] py-16 text-white md:py-24">
          <div className="content-width">
            <p className="eyebrow text-[#f9b233]">YNS Car Care</p>
            <h1 className="display mt-5 max-w-4xl text-5xl sm:text-7xl">{terms.title}</h1>
            <p className="mt-6 max-w-2xl leading-7 text-[#c4c4be]">De voorwaarden die van toepassing zijn op de diensten en afspraken van YNS&apos;CarCare.</p>
          </div>
        </section>

        <section className="content-width py-12 md:py-20">
          <article className="mx-auto max-w-3xl bg-white p-6 text-[#30302d] shadow-sm sm:p-10 md:p-14">
            <div className="space-y-10 text-sm leading-7 md:text-base">
              {terms.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="display text-2xl text-[#111] sm:text-3xl">{section.title}</h2>
                  <div className="mt-4">
                    <TermsContent lines={section.lines} />
                  </div>
                </section>
              ))}
            </div>
            <p className="mt-10 border-t border-[#d7d6d0] pt-6 text-center text-xs text-[#8a8a83]">
              {terms.intro.join(' - ')}
            </p>
          </article>

          <div className="mt-10 flex justify-center">
            <Link href="/faq" className="cta-quiet">
              Terug naar FAQ <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
