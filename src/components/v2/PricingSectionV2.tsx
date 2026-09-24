'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Minus } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { WordReveal } from './WordReveal';

interface Plan {
  name: string;
  pitch: string;
  monthly: number;
  highlight?: boolean;
  features: string[];
  excluded: string[];
  cta: string;
}

const PLANS: Plan[] = [
  {
    name: 'Básico',
    pitch: 'Para empezar a no perder mensajes',
    monthly: 59,
    features: [
      'WhatsApp 24/7',
      'CRM básico',
      '1 número de WhatsApp',
      '5 ideas de contenido al mes',
      'Soporte por email'
    ],
    excluded: ['Agenda automática', 'Voz IA'],
    cta: 'Empezar Básico'
  },
  {
    name: 'Pro',
    pitch: 'El plan completo para el día a día',
    monthly: 119,
    highlight: true,
    features: [
      'Todo lo de Básico',
      'Agenda automática',
      'Recupera clientes',
      'Ideas de contenido sin límite',
      'Voz IA · 150 min/mes · número español',
      'Soporte por email y chat'
    ],
    excluded: [],
    cta: 'Empezar Pro'
  },
  {
    name: 'Élite',
    pitch: 'Para los que también quieren atender llamadas',
    monthly: 249,
    features: [
      'Todo lo de Pro',
      'Voz IA · 300 min/mes · número español',
      'Equipo hasta 10 personas',
      'Asistentes IA sin límite y soporte prioritario'
    ],
    excluded: [],
    cta: 'Empezar Élite'
  }
];

export function PricingSectionV2() {
  return (
    <section
      id="precios"
      className="relative py-32 md:py-40"
      style={{ background: 'var(--v2-bg-soft)' }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: 'var(--v2-accent)' }}
          >
            Precios
          </span>
          <div className="mt-6">
            <WordReveal
              text="Sin sorpresas. Cancela cuando quieras."
              by="word"
              highlight={['Cancela', 'cuando', 'quieras.']}
              as="h2"
              className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
            />
          </div>
          <p
            className="mt-6 text-lg"
            style={{ color: 'var(--v2-fg-muted)' }}
          >
            30 días gratis. No se cobra nada hasta el día 31. Cancela cuando quieras.
          </p>

        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        <p
          className="mx-auto mt-8 max-w-2xl text-center text-xs"
          style={{ color: 'var(--v2-fg-muted)' }}
        >
          Precios con IVA incluido. Los minutos de voz se renuevan cada mes y no se
          acumulan de un mes al siguiente. Si se agotan, puedes seguir a 0,25 €/min
          comprando un pack de 100 minutos por 25 €.
        </p>
      </div>
    </section>
  );
}

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="v2-glow-card relative flex flex-col p-8"
      style={{
        borderColor: plan.highlight ? 'var(--v2-accent)' : 'var(--v2-border)',
        background: plan.highlight ? 'var(--v2-bg)' : 'var(--v2-bg-elev)'
      }}
    >
      {plan.highlight && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest"
          style={{
            background: 'var(--v2-accent)',
            color: '#fff'
          }}
        >
          Más popular
        </span>
      )}

      <h3
        className="font-display text-xl font-semibold"
        style={{ color: 'var(--v2-fg)' }}
      >
        {plan.name}
      </h3>
      <p className="mt-2 text-sm" style={{ color: 'var(--v2-fg-muted)' }}>
        {plan.pitch}
      </p>

      <div className="mt-8 flex items-baseline gap-2">
        <span
          className="font-display font-semibold tabular-nums"
          style={{
            color: 'var(--v2-fg)',
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1
          }}
        >
          {plan.monthly}€
        </span>
        <span className="text-sm" style={{ color: 'var(--v2-fg-muted)' }}>
          /mes
        </span>
      </div>
      <Link
        href={siteConfig.links.appSignup}
        className={plan.highlight ? 'v2-btn-primary mt-8 justify-center text-sm' : 'v2-btn-ghost mt-8 justify-center text-sm'}
      >
        {plan.cta}
      </Link>

      <div
        className="my-8 h-px"
        style={{ background: 'var(--v2-border)' }}
      />

      <ul className="flex flex-col gap-3 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <Check
              className="mt-0.5 h-4 w-4 shrink-0"
              style={{ color: 'var(--v2-accent)' }}
            />
            <span style={{ color: 'var(--v2-fg)' }}>{f}</span>
          </li>
        ))}
        {plan.excluded.map((f) => (
          <li key={f} className="flex items-start gap-3 opacity-50">
            <Minus
              className="mt-0.5 h-4 w-4 shrink-0"
              style={{ color: 'var(--v2-fg-subtle)' }}
            />
            <span style={{ color: 'var(--v2-fg-subtle)' }}>{f}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
