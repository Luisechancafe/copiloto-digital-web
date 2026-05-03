'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
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
    question: '¿Cuánto tiempo lleva configurarlo?',
    answer:
      'Una tarde. Te guiamos paso a paso. La mayoría de negocios están en marcha en menos de 3 horas.'
  },
  {
    question: '¿Necesito saber tecnología?',
    answer: 'No. Si sabes usar WhatsApp, sabes usar tu copiloto. Lo demás lo hacemos nosotros.'
  },
  {
    question: '¿Qué pasa si mi copiloto no sabe algo?',
    answer:
      'Te avisa al instante. Tú respondes una sola vez y aprende para la próxima.'
  },
  {
    question: '¿Cómo cancelo si no me convence?',
    answer:
      'Desde tu panel, en un clic. Sin llamadas, sin formularios, sin trampas. Los primeros 30 días son gratis.'
  },
  {
    question: '¿Mis datos están seguros?',
    answer:
      'Sí. Cumplimos RGPD, datos en servidores europeos, conversaciones cifradas. Nunca compartimos información con terceros.'
  },
  {
    question: '¿Funciona en catalán?',
    answer:
      'Sí. Atiende en castellano, catalán, inglés, francés y portugués. Tu copiloto detecta el idioma del cliente y responde en el suyo.'
  },
  {
    question: '¿Puedo usar mi número de WhatsApp actual?',
    answer:
      'Sí. Conectamos con tu número actual o te damos uno nuevo. Tú eliges.'
  },
  {
    question: '¿Necesito Google Calendar para la agenda?',
    answer:
      'Funciona con Google Calendar, Outlook y la mayoría de sistemas de reservas. Si usas algo distinto, te ayudamos a conectarlo.'
  }
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section relative bg-ink-100">
      <div className="container-page">
        <SectionHeader
          eyebrow="Preguntas frecuentes"
          title="Lo que todo el mundo nos pregunta"
        />

        <Reveal delay={0.1}>
          <div className="container-narrow mt-16">
            <ul className="flex flex-col">
              {items.map((item, idx) => {
                const open = openIdx === idx;
                return (
                  <li key={item.question} className="border-b border-white/10">
                    <button
                      type="button"
                      onClick={() => setOpenIdx(open ? null : idx)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-4 py-6 text-left transition hover:text-white"
                    >
                      <span className="font-display text-lg font-medium text-white md:text-xl">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          'h-5 w-5 shrink-0 text-white/50 transition-transform duration-300',
                          open && 'rotate-180 text-brand-400'
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pr-10 text-base leading-relaxed text-white/70">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
