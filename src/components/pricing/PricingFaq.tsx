'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';

interface FaqItem {
  question: string;
  answer: string;
}

const items: FaqItem[] = [
  {
    question: '¿Pago algo durante la prueba?',
    answer: 'No. Sin tarjeta los primeros 30 días. Empiezas, pruebas y decides después.'
  },
  {
    question: '¿Qué pasa al terminar la prueba?',
    answer:
      'Si te gusta, eliges plan y nos pasas la tarjeta. Si no, no pasa nada — tus datos se borran a los 30 días automáticamente.'
  },
  {
    question: '¿Puedo cambiar de plan?',
    answer: 'Sí, en un clic desde tu panel. Subes y bajas cuando quieras. El cambio se aplica al ciclo siguiente.'
  },
  {
    question: '¿Qué métodos de pago aceptáis?',
    answer: 'Tarjeta, transferencia SEPA y domiciliación bancaria. Factura con IVA siempre incluida.'
  },
  {
    question: '¿Hay coste por instalación?',
    answer: 'Cero. Te ayudamos a configurarlo sin coste extra. Setup en una tarde con nuestro equipo.'
  }
];

export function PricingFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-tight relative bg-ink-50">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title="Lo que te estás preguntando"
        />

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col gap-3">
            {items.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <div
                  key={item.question}
                  className={cn(
                    'card-dark overflow-hidden p-0 transition-all',
                    isOpen && 'border-white/20 bg-white/[0.05]'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors md:px-8 md:py-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold text-white md:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-white/60 transition-transform duration-300',
                        isOpen && 'rotate-180 text-brand-400'
                      )}
                      strokeWidth={2}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-base leading-relaxed text-white/70 md:px-8 md:pb-8">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
