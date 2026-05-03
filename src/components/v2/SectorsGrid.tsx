'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { WordReveal } from './WordReveal';

interface Sector {
  emoji: string;
  label: string;
}

const SECTORS: Sector[] = [
  { emoji: '🏠', label: 'Inmobiliaria' },
  { emoji: '🦷', label: 'Clínica dental' },
  { emoji: '🔧', label: 'Reformas' },
  { emoji: '📋', label: 'Gestoría' },
  { emoji: '🛍️', label: 'Retail' },
  { emoji: '🍽️', label: 'Hostelería' },
  { emoji: '💇', label: 'Peluquería' },
  { emoji: '🎓', label: 'Educación' },
  { emoji: '🚗', label: 'Automoción' },
  { emoji: '🤝', label: 'B2B' }
];

export function SectorsGrid() {
  return (
    <section
      className="relative overflow-hidden py-32 md:py-40"
      style={{ background: 'var(--v2-bg)' }}
    >
      <div className="mx-auto w-full max-w-5xl px-6 text-center md:px-8">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-[0.25em]"
          style={{ color: 'var(--v2-accent)' }}
        >
          Para todo tipo de negocios
        </motion.span>

        <div className="mt-6">
          <WordReveal
            text="Funciona en tu sector."
            by="word"
            highlight={['sector.']}
            as="h2"
            className="font-display font-semibold leading-[1.02] tracking-tight"
          />
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {SECTORS.map((s, i) => (
            <SectorPill key={s.label} sector={s} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-sm"
          style={{ color: 'var(--v2-fg-muted)' }}
        >
          Y cualquier negocio local que quiera automatizar su día a día con IA.
        </motion.p>
      </div>
    </section>
  );
}

function SectorPill({ sector, index }: { sector: Sector; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.96 }}
      transition={{
        duration: 0.5,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="group flex items-center justify-center gap-2.5 rounded-2xl px-4 py-3.5 transition-colors"
      style={{
        background: 'var(--v2-card)',
        border: '1px solid var(--v2-border)'
      }}
    >
      <motion.span
        className="text-xl leading-none"
        whileHover={{ scale: 1.2, rotate: -8 }}
        transition={{ type: 'spring', stiffness: 300 }}
        aria-hidden
      >
        {sector.emoji}
      </motion.span>
      <span
        className="text-sm font-medium"
        style={{ color: 'var(--v2-fg)' }}
      >
        {sector.label}
      </span>
    </motion.div>
  );
}
