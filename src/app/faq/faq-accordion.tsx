'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { faqItems } from '@/lib/faq-data';

export function FaqAccordion() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  return (
    <div className="mt-14 border-t border-[#bab9b4]">
      {faqItems.map(({ question, answer }, index) => (
        <div key={question} className="border-b border-[#bab9b4]">
          <button
            type="button"
            onClick={() => setOpenQuestion((current) => current === question ? null : question)}
            aria-expanded={openQuestion === question}
            aria-controls={`answer-${index}`}
            className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-bold md:text-xl"
          >
            {question}
            <ChevronDown className={`shrink-0 transition-transform duration-300 ${openQuestion === question ? 'rotate-180' : ''}`} />
          </button>
          <div
            id={`answer-${index}`}
            className={`faq-answer-grid ${openQuestion === question ? 'is-open' : ''}`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="max-w-2xl pb-5 leading-7 text-[#4b4b47]">{answer}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
