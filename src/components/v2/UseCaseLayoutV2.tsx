'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  Scissors,
  Bell,
  CalendarDays,
  Heart,
  Stethoscope,
  ClipboardCheck,
  AlertTriangle,
  RefreshCw,
  Home,
  MessageSquare,
  Calendar,
  Eye,
  FileText,
  Inbox,
  Mail,
  Clock,
  type LucideIcon
} from 'lucide-react';
import { PageHero } from './PageHero';
import { WordReveal } from './WordReveal';
import { WaveLines } from './WaveLines';
import { siteConfig } from '@/lib/site';
import type { IconKey } from '@/data/v2-use-cases';

const ICONS: Record<IconKey, LucideIcon> = {
  scissors: Scissors,
  bell: Bell,
  'calendar-days': CalendarDays,
  heart: Heart,
  stethoscope: Stethoscope,
  'clipboard-check': ClipboardCheck,
  'alert-triangle': AlertTriangle,
  refresh: RefreshCw,
  home: Home,
  message: MessageSquare,
  calendar: Calendar,
  eye: Eye,
  'file-text': FileText,
  inbox: Inbox,
  mail: Mail,
  clock: Clock
};

interface Step {
  iconKey: IconKey;
  trigger: string;
  outcome: string;
}

interface Metric {
  value: string;
  label: string;
}

interface Props {
  sector: string;
  hero: {
    eyebrow: string;
    title: string;
    highlight?: readonly string[];
    subtitle: string;
  };
  steps: readonly Step[];
  metrics: readonly Metric[];
  testimonial: { name: string; role: string; quote: string };
}

export function UseCaseLayoutV2({ sector, hero, steps, metrics, testimonial }: Props) {
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        highlight={hero.highlight}
        subtitle={hero.subtitle}
      >
        <Link href={siteConfig.links.appSignup} className="v2-btn-primary group justify-center text-base">
          Probar 30 días gratis
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link href="/v2/casos-de-uso/peluquerias" className="v2-btn-ghost justify-center text-base">
          Ver otros sectores
        </Link>
      </PageHero>

      {/* Cómo cambia el día a día */}
      <section
        className="relative overflow-hidden py-32 md:py-40"
        style={{ background: 'var(--v2-bg-soft)' }}
      >
        <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
          <div className="max-w-3xl">
            <span
              className="text-xs font-medium uppercase tracking-[0.2em]"
              style={{ color: 'var(--v2-accent)' }}
            >
              Cómo cambia
            </span>
            <div className="mt-5">
              <WordReveal
                text={`El día a día de tu ${sector} con copiloto.`}
                by="word"
                as="h2"
                className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl"
              />
            </div>
          </div>

          <div className="mt-20 flex flex-col gap-px" style={{ background: 'var(--v2-border)' }}>
            {steps.map((s, i) => (
              <StepRow key={i} step={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section
        className="relative overflow-hidden py-32 md:py-40"
        style={{ background: 'var(--v2-bg)' }}
      >
        <WaveLines count={3} speed={0.35} amplitude={45} accentIndex={1} className="v2-mask-radial opacity-60" />
        <div className="relative mx-auto w-full max-w-5xl px-6 text-center md:px-8">
          <span
            className="text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: 'var(--v2-accent)' }}
          >
            Lo que ahorras
          </span>
          <h2
            className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl"
            style={{ color: 'var(--v2-fg)' }}
          >
            Números que se notan al mes.
          </h2>
          <div
            className="mx-auto mt-16 grid max-w-3xl gap-px sm:grid-cols-3"
            style={{ background: 'var(--v2-border)' }}
          >
            {metrics.map((m, i) => (
              <Metric key={i} {...m} index={i} />
            ))}
          </div>
          <p className="mt-6 text-xs" style={{ color: 'var(--v2-fg-subtle)' }}>
            Estimaciones a validar con piloto real
          </p>
        </div>
      </section>

      {/* Testimonio */}
      <section
        className="relative py-28 md:py-36"
        style={{ background: 'var(--v2-bg-soft)' }}
      >
        <div className="mx-auto w-full max-w-3xl px-6 text-center md:px-8">
          <svg className="mx-auto mb-8 h-8 w-8" fill="none" viewBox="0 0 24 24" style={{ color: 'var(--v2-accent)' }}>
            <path d="M9.5 7H5a2 2 0 00-2 2v4a2 2 0 002 2h2v3h2.5V9zM18.5 7H14a2 2 0 00-2 2v4a2 2 0 002 2h2v3h2.5V9z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <p
            className="font-display text-2xl leading-snug md:text-3xl"
            style={{ color: 'var(--v2-fg)' }}
          >
            “{testimonial.quote}”
          </p>
          <p className="mt-6 text-sm" style={{ color: 'var(--v2-fg-muted)' }}>
            <span className="font-medium" style={{ color: 'var(--v2-fg)' }}>{testimonial.name}</span> · {testimonial.role}
          </p>
        </div>
      </section>
    </>
  );
}

function StepRow({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = ICONS[step.iconKey] ?? Bell;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="grid items-center gap-6 p-8 md:grid-cols-[auto_1fr_auto_2fr] md:gap-10"
      style={{ background: 'var(--v2-bg-soft)' }}
    >
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
        style={{ background: 'var(--v2-accent-soft)', color: 'var(--v2-accent)' }}
      >
        <Icon className="h-5 w-5" />
      </div>
      <p
        className="font-display text-lg font-medium leading-snug md:text-xl"
        style={{ color: 'var(--v2-fg)' }}
      >
        {step.trigger}
      </p>
      <ArrowRight
        className="hidden h-5 w-5 md:block"
        style={{ color: 'var(--v2-fg-subtle)' }}
      />
      <p className="text-base leading-relaxed" style={{ color: 'var(--v2-fg-muted)' }}>
        {step.outcome}
      </p>
    </motion.div>
  );
}

function Metric({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="p-8"
      style={{ background: 'var(--v2-bg)' }}
    >
      <span
        className="block font-display font-semibold tabular-nums"
        style={{
          color: 'var(--v2-fg)',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          letterSpacing: '-0.04em',
          lineHeight: 0.95
        }}
      >
        {value}
      </span>
      <span
        className="mt-3 block text-xs font-medium uppercase tracking-widest"
        style={{ color: 'var(--v2-accent)' }}
      >
        {label}
      </span>
    </motion.div>
  );
}
