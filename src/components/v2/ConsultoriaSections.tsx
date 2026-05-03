'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  Compass,
  Sparkles,
  Globe,
  Megaphone,
  ShoppingCart,
  Rocket,
  Check,
  type LucideIcon
} from 'lucide-react';
import { WordReveal } from './WordReveal';
import { WaveLines } from './WaveLines';
import {
  SERVICES,
  PROCESS_STEPS,
  DIFFERENTIATORS,
  SECTORS_WORKED,
  type ServiceIconKey
} from '@/data/v2-consultoria';

const SERVICE_ICONS: Record<ServiceIconKey, LucideIcon> = {
  compass: Compass,
  sparkles: Sparkles,
  globe: Globe,
  megaphone: Megaphone,
  'shopping-cart': ShoppingCart,
  rocket: Rocket
};

export function ServicesGrid() {
  return (
    <section className="relative py-32 md:py-40" style={{ background: 'var(--v2-bg-soft)' }}>
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.25em]" style={{ color: 'var(--v2-accent)' }}>
            Servicios
          </span>
          <div className="mt-5">
            <WordReveal
              text="6 servicios. Independientes o integrados."
              by="word"
              highlight={['integrados.']}
              as="h2"
              className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
            />
          </div>
          <p
            className="mt-6 max-w-xl text-lg leading-relaxed"
            style={{ color: 'var(--v2-fg-muted)' }}
          >
            Contrata uno, varios o todos. Cada servicio resuelve un problema concreto y se conecta con el resto.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.num} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = SERVICE_ICONS[service.iconKey];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="v2-glow-card flex flex-col p-8"
    >
      <div className="flex items-center justify-between">
        <span
          className="text-sm font-medium tabular-nums tracking-wider"
          style={{ color: 'var(--v2-fg-subtle)' }}
        >
          {service.num}
        </span>
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ background: 'var(--v2-accent-soft)', color: 'var(--v2-accent)' }}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>

      <h3
        className="mt-6 font-display text-xl font-semibold leading-snug"
        style={{ color: 'var(--v2-fg)' }}
      >
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--v2-fg-muted)' }}>
        {service.pitch}
      </p>

      <ul className="mt-6 flex flex-col gap-2">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm" style={{ color: 'var(--v2-fg)' }}>
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: 'var(--v2-accent)' }} />
            {b}
          </li>
        ))}
      </ul>

      <Link
        href="/v2/diagnostico"
        className="group mt-8 inline-flex items-center gap-1.5 self-start text-sm font-medium transition-colors"
        style={{ color: 'var(--v2-accent)' }}
      >
        {service.cta}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}

export function CopilotPhilosophy() {
  return (
    <section className="relative overflow-hidden py-32 md:py-40" style={{ background: 'var(--v2-bg)' }}>
      <WaveLines count={3} speed={0.35} amplitude={45} accentIndex={1} className="v2-mask-radial opacity-60" />
      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-8">
        <span className="text-xs font-medium uppercase tracking-[0.25em]" style={{ color: 'var(--v2-accent)' }}>
          Filosofía
        </span>
        <div className="mt-5">
          <WordReveal
            text="Copiloto, no piloto."
            by="word"
            highlight={['copiloto,', 'piloto.']}
            as="h2"
            className="font-display font-semibold leading-[1.02] tracking-tight"
          />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed md:text-xl"
          style={{ color: 'var(--v2-fg-muted)' }}
        >
          El copiloto no conduce la empresa — eso lo hace el propietario. El copiloto conoce el destino, ayuda a navegar, evita errores y hace el viaje más eficiente.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 text-base"
          style={{ color: 'var(--v2-fg-subtle)' }}
        >
          Acompañamiento lateral sin sustituir el liderazgo. Datos reales y transparencia total.
        </motion.p>
      </div>
    </section>
  );
}

export function ProcessSteps() {
  return (
    <section className="relative py-32 md:py-40" style={{ background: 'var(--v2-bg-soft)' }}>
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.25em]" style={{ color: 'var(--v2-accent)' }}>
            Cómo trabajamos
          </span>
          <div className="mt-5">
            <WordReveal
              text="Tres pasos. Sin sorpresas."
              by="word"
              highlight={['Tres', 'pasos.']}
              as="h2"
              className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-px md:grid-cols-3" style={{ background: 'var(--v2-border)' }}>
          {PROCESS_STEPS.map((s, i) => (
            <ProcessStepCard key={s.num} step={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStepCard({
  step,
  index
}: {
  step: (typeof PROCESS_STEPS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative p-10"
      style={{ background: 'var(--v2-bg-soft)' }}
    >
      <span
        className="font-display text-sm font-medium tabular-nums"
        style={{ color: 'var(--v2-fg-subtle)' }}
      >
        Paso {step.num}
      </span>
      <h3
        className="mt-4 font-display text-2xl font-semibold leading-tight"
        style={{ color: 'var(--v2-fg)' }}
      >
        {step.title}
      </h3>
      <ul className="mt-6 flex flex-col gap-2.5">
        {step.bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2 text-sm leading-relaxed"
            style={{ color: 'var(--v2-fg-muted)' }}
          >
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: 'var(--v2-accent)' }} />
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Differentiators() {
  return (
    <section className="relative py-28 md:py-36" style={{ background: 'var(--v2-bg)' }}>
      <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.25em]" style={{ color: 'var(--v2-accent)' }}>
            Por qué nosotros
          </span>
          <div className="mt-5">
            <WordReveal
              text="Lo que nos hace distintos."
              by="word"
              highlight={['distintos.']}
              as="h2"
              className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {DIFFERENTIATORS.map((d, i) => (
            <Differentiator key={d} text={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentiator({ text, index }: { text: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-4 rounded-2xl p-6"
      style={{
        background: 'var(--v2-card)',
        border: '1px solid var(--v2-border)'
      }}
    >
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold tabular-nums"
        style={{
          background: 'var(--v2-accent-soft)',
          color: 'var(--v2-accent)'
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>
      <span className="text-base font-medium leading-snug" style={{ color: 'var(--v2-fg)' }}>
        {text}
      </span>
    </motion.div>
  );
}

export function SectorsWorked() {
  return (
    <section className="py-24 md:py-32" style={{ background: 'var(--v2-bg-soft)' }}>
      <div className="mx-auto w-full max-w-5xl px-6 text-center md:px-8">
        <span className="text-xs font-medium uppercase tracking-[0.25em]" style={{ color: 'var(--v2-accent)' }}>
          200+ proyectos
        </span>
        <h2
          className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
          style={{ color: 'var(--v2-fg)' }}
        >
          Sectores con los que hemos trabajado.
        </h2>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3">
          {SECTORS_WORKED.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -3 }}
              className="flex items-center justify-center gap-2.5 rounded-2xl px-4 py-3.5"
              style={{
                background: 'var(--v2-card)',
                border: '1px solid var(--v2-border)'
              }}
            >
              <span className="text-xl leading-none" aria-hidden>{s.emoji}</span>
              <span className="text-sm font-medium" style={{ color: 'var(--v2-fg)' }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
