'use client';

import { animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { DotGrid } from './DotGrid';

const METRICS = [
  { value: '24/7', label: 'Disponibilidad', sub: 'Tu negocio nunca duerme' },
  { value: '10x', label: 'Velocidad', sub: 'Más rápido que responder a mano', count: 10, suffix: 'x' },
  { value: '+30%', label: 'Recuperación', sub: 'Más clientes recuperados al mes', count: 30, prefix: '+', suffix: '%' },
  { value: '0€', label: 'Por mensaje', sub: 'Atiende mil o un millón, mismo precio' }
];

export function NumbersSectionV2() {
  return (
    <section
      className="relative overflow-hidden py-32 md:py-40"
      style={{ background: 'var(--v2-bg)' }}
    >
      <DotGrid fade="radial" />

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: 'var(--v2-accent)' }}
          >
            Lo que cambia
          </span>
          <h2
            className="mt-6 font-display font-semibold leading-[1.05] tracking-tight"
            style={{
              color: 'var(--v2-fg)',
              fontSize: 'clamp(2rem, 4vw + 1rem, 3.5rem)',
              letterSpacing: '-0.03em'
            }}
          >
            Números reales en tu negocio.
          </h2>
        </div>

        <div className="mt-20 grid gap-px sm:grid-cols-2 lg:grid-cols-4"
          style={{ background: 'var(--v2-border)' }}
        >
          {METRICS.map((m, i) => (
            <Metric key={m.label} {...m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Metric({
  value,
  label,
  sub,
  count,
  prefix,
  suffix,
  index
}: {
  value: string;
  label: string;
  sub: string;
  count?: number;
  prefix?: string;
  suffix?: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState<string>(count ? '0' : value);

  useEffect(() => {
    if (!inView || count === undefined) return;
    const controls = animate(0, count, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(0))
    });
    return () => controls.stop();
  }, [inView, count]);

  const formatted = count !== undefined ? `${prefix ?? ''}${display}${suffix ?? ''}` : value;

  return (
    <div
      ref={ref}
      className="p-10"
      style={{
        background: 'var(--v2-bg)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.7s ${index * 0.1}s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s ${index * 0.1}s cubic-bezier(0.16, 1, 0.3, 1)`
      }}
    >
      <span
        className="block font-display font-semibold tabular-nums"
        style={{
          color: 'var(--v2-fg)',
          fontSize: 'clamp(3rem, 6vw, 5.5rem)',
          letterSpacing: '-0.04em',
          lineHeight: 0.95
        }}
      >
        {formatted}
      </span>
      <span
        className="mt-4 block text-xs font-medium uppercase tracking-widest"
        style={{ color: 'var(--v2-accent)' }}
      >
        {label}
      </span>
      <span
        className="mt-3 block text-sm leading-relaxed"
        style={{ color: 'var(--v2-fg-muted)' }}
      >
        {sub}
      </span>
    </div>
  );
}
