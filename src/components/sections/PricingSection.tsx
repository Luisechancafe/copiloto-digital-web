'use client';

import { useState } from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { LinkButton } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { RevealStagger, RevealItem, Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/lib/site';

type Billing = 'mensual' | 'anual';

interface Plan {
  key: string;
  name: string;
  pitch: string;
  monthly: number;
  annual: number;
  highlighted?: boolean;
  includes: string[];
  excludes: string[];
}

const plans: Plan[] = [
  {
    key: 'basico',
    name: 'Básico',
    pitch: 'Para empezar a no perder mensajes',
    monthly: 59,
    annual: 47,
    includes: [
      'WhatsApp 24/7',
      'CRM básico',
      '1 número',
      'Soporte por email'
    ],
    excludes: ['Agenda automática', 'Voz IA']
  },
  {
    key: 'pro',
    name: 'Pro',
    pitch: 'El que eligen 8 de cada 10',
    monthly: 119,
    annual: 95,
    highlighted: true,
    includes: [
      'Todo lo de Básico',
      'Agenda automática',
      'Recupera clientes',
      'Contenido para redes',
      'Hasta 3 números',
      'Soporte prioritario'
    ],
    excludes: ['Voz IA']
  },
  {
    key: 'elite',
    name: 'Élite',
    pitch: 'Para negocios que también quieren atender llamadas',
    monthly: 249,
    annual: 199,
    includes: [
      'Todo lo de Pro',
      'Voz IA con número español propio',
      'Equipo ilimitado',
      'Gestor dedicado'
    ],
    excludes: []
  }
];

export function PricingSection() {
  const [billing, setBilling] = useState<Billing>('mensual');

  return (
    <section id="precios" className="section relative bg-ink-50">
      <div className="container-page">
        <SectionHeader
          eyebrow="Planes"
          title="Elige el tuyo"
          subtitle="30 días gratis en cualquier plan. Sin tarjeta."
        />

        {/* Toggle mensual/anual */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex justify-center">
            <div
              role="tablist"
              aria-label="Periodo de facturación"
              className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur"
            >
              {(['mensual', 'anual'] as const).map((opt) => {
                const active = billing === opt;
                return (
                  <button
                    key={opt}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setBilling(opt)}
                    className={cn(
                      'relative rounded-full px-5 py-2 text-sm font-medium capitalize transition',
                      active
                        ? 'bg-white text-ink-50 shadow'
                        : 'text-white/70 hover:text-white'
                    )}
                  >
                    {opt}
                    {opt === 'anual' && (
                      <span className="ml-2 rounded-full bg-brand-500/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-300">
                        -20%
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <RevealStagger
          className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3"
          stagger={0.1}
        >
          {plans.map((plan) => {
            const price = billing === 'anual' ? plan.annual : plan.monthly;
            const showCrossed = billing === 'anual';
            const highlighted = plan.highlighted;

            return (
              <RevealItem key={plan.key}>
                <article
                  className={cn(
                    'card-dark relative flex h-full flex-col p-8',
                    highlighted &&
                      'border-brand-500/40 shadow-[0_0_60px_-15px_rgba(235,51,80,0.4)] lg:scale-105'
                  )}
                >
                  {highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                      Más popular
                    </span>
                  )}

                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-white/60">{plan.pitch}</p>
                  </div>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-display text-5xl font-bold text-white">
                      {price}€
                    </span>
                    <span className="text-sm text-white/60">/mes</span>
                    {showCrossed && (
                      <span className="ml-2 text-sm text-white/40 line-through">
                        {plan.monthly}€
                      </span>
                    )}
                  </div>

                  <ul className="mt-8 flex flex-col gap-3 text-sm">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-white/85">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-green-400"
                          strokeWidth={2.5}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                    {plan.excludes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-white/35">
                        <X className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <LinkButton
                      href={siteConfig.links.appSignup}
                      variant={highlighted ? 'primary' : 'ghost'}
                      size="md"
                      className="w-full justify-center"
                    >
                      <span className="inline-flex items-center justify-center gap-2">
                        Probar 30 días gratis
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </LinkButton>
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealStagger>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-sm text-white/55">
            ¿Solo necesitas voz IA? Disponible como add-on por{' '}
            <span className="font-medium text-white/85">49€/mes</span> en cualquier plan.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
