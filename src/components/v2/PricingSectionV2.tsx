'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, Minus } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { WordReveal } from './WordReveal';

interface Plan {
  name: string;
  pitch: string;
  monthly: number;
  yearly: number;
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
    yearly: 47,
    features: [
      'WhatsApp 24/7',
      'CRM básico',
      '1 número',
      'Soporte por email'
    ],
    excluded: ['Agenda automática', 'Voz IA'],
    cta: 'Empezar Básico'
  },
  {
    name: 'Pro',
    pitch: 'El que eligen 8 de cada 10',
    monthly: 119,
    yearly: 95,
    highlight: true,
    features: [
      'Todo lo de Básico',
      'Agenda automática',
      'Recupera clientes',
      'Contenido para redes',
      'Hasta 3 números',
      'Soporte prioritario'
    ],
    excluded: ['Voz IA'],
    cta: 'Empezar Pro'
  },
  {
    name: 'Élite',
    pitch: 'Para los que también quieren atender llamadas',
    monthly: 249,
    yearly: 199,
    features: [
      'Todo lo de Pro',
      'Voz IA con número español',
      'Equipo ilimitado',
      'Gestor dedicado'
    ],
    excluded: [],
    cta: 'Empezar Élite'
  }
];

export function PricingSectionV2() {
  const [yearly, setYearly] = useState(false);

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
            30 días gratis en cualquier plan. Sin tarjeta.
          </p>

          {/* Toggle mensual/anual */}
          <div
            className="mx-auto mt-10 inline-flex rounded-full p-1"
            style={{
              background: 'var(--v2-card)',
              border: '1px solid var(--v2-border)'
            }}
          >
            <button
              type="button"
              onClick={() => setYearly(false)}
              className="relative rounded-full px-5 py-2 text-sm font-medium transition-colors"
              style={{
                color: !yearly ? 'var(--v2-fg)' : 'var(--v2-fg-muted)',
                background: !yearly ? 'var(--v2-bg)' : 'transparent'
              }}
            >
              Mensual
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className="relative rounded-full px-5 py-2 text-sm font-medium transition-colors"
              style={{
                color: yearly ? 'var(--v2-fg)' : 'var(--v2-fg-muted)',
                background: yearly ? 'var(--v2-bg)' : 'transparent'
              }}
            >
              Anual{' '}
              <span
                className="ml-1 rounded-full px-1.5 py-0.5 text-[10px]"
                style={{
                  background: 'var(--v2-accent-soft)',
                  color: 'var(--v2-accent)'
                }}
              >
                −20%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} yearly={yearly} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan, yearly, index }: { plan: Plan; yearly: boolean; index: number }) {
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
          {yearly ? plan.yearly : plan.monthly}€
        </span>
        <span className="text-sm" style={{ color: 'var(--v2-fg-muted)' }}>
          /mes
        </span>
      </div>
      {yearly && (
        <p className="mt-1 text-xs" style={{ color: 'var(--v2-fg-subtle)' }}>
          Antes {plan.monthly}€/mes · facturación anual
        </p>
      )}

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
