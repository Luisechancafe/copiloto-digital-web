'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, Minus, ChevronDown } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { WordReveal } from './WordReveal';

interface QA {
  q: string;
  a: string;
}

interface IntegrationLogo {
  name: string;
  emoji: string;
}

interface CompareRow {
  feature: string;
  before: string;
  after: string;
}

/**
 * Comparativa "antes / después de copiloto".
 */
export function ComparePanel({ rows, eyebrow = 'Comparativa', title }: { rows: CompareRow[]; eyebrow?: string; title: string }) {
  return (
    <section className="relative py-28 md:py-36" style={{ background: 'var(--v2-bg)' }}>
      <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.25em]" style={{ color: 'var(--v2-accent)' }}>
            {eyebrow}
          </span>
          <div className="mt-5">
            <WordReveal
              text={title}
              by="word"
              highlight={['copiloto.']}
              as="h2"
              className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
            />
          </div>
        </div>

        <div
          className="mt-12 overflow-hidden rounded-2xl border"
          style={{ borderColor: 'var(--v2-border)', background: 'var(--v2-bg-soft)' }}
        >
          <div className="grid grid-cols-3" style={{ borderBottom: '1px solid var(--v2-border)' }}>
            <div className="p-5 text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--v2-fg-subtle)' }}>
              Situación
            </div>
            <div className="flex items-center gap-2 p-5 text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--v2-fg-muted)' }}>
              <Minus className="h-3.5 w-3.5" /> Antes
            </div>
            <div
              className="flex items-center gap-2 p-5 text-xs font-medium uppercase tracking-widest"
              style={{ color: 'var(--v2-accent)', background: 'var(--v2-accent-soft)' }}
            >
              <Check className="h-3.5 w-3.5" /> Con copiloto
            </div>
          </div>
          {rows.map((r, i) => (
            <motion.div
              key={r.feature}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="grid grid-cols-3 text-sm"
              style={{ borderTop: i === 0 ? 'none' : '1px solid var(--v2-border)' }}
            >
              <div className="p-5 font-medium" style={{ color: 'var(--v2-fg)' }}>
                {r.feature}
              </div>
              <div className="p-5" style={{ color: 'var(--v2-fg-muted)' }}>
                {r.before}
              </div>
              <div className="p-5" style={{ color: 'var(--v2-fg)', background: 'var(--v2-accent-soft)' }}>
                {r.after}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Integraciones (logos placeholder con emojis).
 */
export function IntegrationsBar({
  integrations,
  title
}: {
  integrations: IntegrationLogo[];
  title: string;
}) {
  return (
    <section className="py-24" style={{ background: 'var(--v2-bg-soft)' }}>
      <div className="mx-auto w-full max-w-5xl px-6 text-center md:px-8">
        <span className="text-xs font-medium uppercase tracking-[0.25em]" style={{ color: 'var(--v2-accent)' }}>
          Se conecta con todo
        </span>
        <h3
          className="mt-5 font-display text-2xl font-semibold tracking-tight md:text-3xl"
          style={{ color: 'var(--v2-fg)' }}
        >
          {title}
        </h3>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {integrations.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-2.5 rounded-full px-5 py-3"
              style={{
                background: 'var(--v2-card)',
                border: '1px solid var(--v2-border)'
              }}
            >
              <span className="text-lg leading-none" aria-hidden>{it.emoji}</span>
              <span className="text-sm font-medium" style={{ color: 'var(--v2-fg)' }}>
                {it.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Conversaciones reales (ejemplos típicos del sector).
 */
export function RealConversations({
  examples,
  title
}: {
  examples: { question: string; answer: string }[];
  title: string;
}) {
  return (
    <section className="relative py-28 md:py-36" style={{ background: 'var(--v2-bg)' }}>
      <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.25em]" style={{ color: 'var(--v2-accent)' }}>
            Conversaciones reales
          </span>
          <div className="mt-5">
            <WordReveal
              text={title}
              by="word"
              highlight={['contestar.']}
              as="h2"
              className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {examples.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="v2-card flex flex-col gap-3 p-6"
            >
              <div className="self-start rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm" style={{ background: 'var(--v2-mockup-bubble-in)', color: 'var(--v2-mockup-fg)' }}>
                {ex.question}
              </div>
              <div className="self-end rounded-2xl rounded-br-sm px-4 py-2.5 text-sm" style={{ background: 'var(--v2-mockup-bubble-out)', color: 'var(--v2-mockup-fg)' }}>
                {ex.answer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * FAQ específica del sector (acordeón).
 */
export function SectorFAQ({ items, title }: { items: QA[]; title: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 md:py-36" style={{ background: 'var(--v2-bg-soft)' }}>
      <div className="mx-auto w-full max-w-3xl px-6 md:px-8">
        <span className="text-xs font-medium uppercase tracking-[0.25em]" style={{ color: 'var(--v2-accent)' }}>
          Preguntas frecuentes
        </span>
        <div className="mt-5">
          <WordReveal
            text={title}
            by="word"
            as="h2"
            className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
          />
        </div>
        <ul className="mt-12 flex flex-col">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <li key={i} style={{ borderBottom: '1px solid var(--v2-border)' }}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-medium leading-snug md:text-xl" style={{ color: 'var(--v2-fg)' }}>
                    {it.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    style={{ color: isOpen ? 'var(--v2-accent)' : 'var(--v2-fg-subtle)' }}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-base leading-relaxed" style={{ color: 'var(--v2-fg-muted)' }}>
                        {it.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
