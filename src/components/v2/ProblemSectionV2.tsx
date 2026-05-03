'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { WordReveal } from './WordReveal';
import { DotGrid } from './DotGrid';

const PROBLEMS = [
  {
    n: '01',
    title: 'Pierdes clientes cuando no respondes a tiempo',
    body: 'El 78% espera respuesta en menos de una hora. Si no, contrata al siguiente.'
  },
  {
    n: '02',
    title: 'Pasas horas agendando y mandando recordatorios',
    body: 'Cada cita son 5 mensajes. Cada recordatorio, 2. Multiplica por 30 al día.'
  },
  {
    n: '03',
    title: 'No tienes tiempo para crear contenido en redes',
    body: 'Llevas 3 semanas con la misma foto fijada. Tu última publicación es de marzo.'
  }
];

export function ProblemSectionV2() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-32 md:py-40"
      style={{ background: 'var(--v2-bg)' }}
    >
      <DotGrid fade="top" />

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: 'var(--v2-accent)' }}
          >
            El problema
          </span>
          <div className="mt-6">
            <WordReveal
              text="Tu negocio pierde dinero cada noche."
              by="word"
              highlight={['pierde', 'dinero']}
              as="h2"
              className="font-display font-semibold leading-[1.05] tracking-tight"
            />
          </div>
          <p
            className="mx-auto mt-6 max-w-xl text-lg"
            style={{ color: 'var(--v2-fg-muted)' }}
          >
            Mientras tú duermes, tu competencia responde.
          </p>
        </div>

        <div className="mt-24 grid gap-px md:grid-cols-3"
          style={{ background: 'var(--v2-border)' }}
        >
          {PROBLEMS.map((p, i) => (
            <ProblemCard key={p.n} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemCard({
  n,
  title,
  body,
  index
}: {
  n: string;
  title: string;
  body: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative p-10 transition-colors"
      style={{ background: 'var(--v2-bg)' }}
    >
      <div className="flex items-center justify-between">
        <span
          className="font-display text-sm font-medium tabular-nums"
          style={{ color: 'var(--v2-fg-subtle)' }}
        >
          {n}
        </span>
        <span
          className="h-1 w-8 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
          style={{ background: 'var(--v2-accent)' }}
        />
      </div>
      <h3
        className="mt-8 font-display text-2xl font-semibold leading-tight"
        style={{ color: 'var(--v2-fg)' }}
      >
        {title}
      </h3>
      <p
        className="mt-4 text-base leading-relaxed"
        style={{ color: 'var(--v2-fg-muted)' }}
      >
        {body}
      </p>
    </motion.div>
  );
}
