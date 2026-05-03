import type { Metadata } from 'next';
import { Check, Clock } from 'lucide-react';
import { PageHero } from '@/components/v2/PageHero';
import { ContactFormV2 } from '@/components/v2/ContactFormV2';
import { FinalCtaV2 } from '@/components/v2/FinalCtaV2';

export const metadata: Metadata = {
  title: 'Diagnóstico gratuito — Copiloto.Digital',
  description: '20 preguntas en 5 minutos. Sin compromiso. Recibe diagnóstico y plan en menos de 48h.'
};

const INCLUDED = [
  '20 preguntas en 5 minutos',
  'Análisis de 6 dimensiones de tu negocio',
  'Identificación de 3 brechas críticas',
  'Recomendación de paquete según resultados',
  'Sesión opcional de 30 min para profundizar',
  'Sin compromiso, sin permanencias'
];

export default function V2DiagnosticoPage() {
  return (
    <>
      <PageHero
        eyebrow="Diagnóstico gratuito"
        title="20 preguntas. 5 minutos. Cero compromiso."
        highlight={['gratuito.', '5', 'minutos.']}
        subtitle="Te devolvemos un diagnóstico de 6 dimensiones, las 3 brechas que más te están frenando y una recomendación clara de por dónde empezar."
      />

      <section className="pb-24 pt-8 md:pb-32" style={{ background: 'var(--v2-bg)' }}>
        <div className="mx-auto grid w-full max-w-5xl gap-12 px-6 md:grid-cols-[1.4fr_1fr] md:gap-16 md:px-8">
          <ContactFormV2 />
          <aside className="flex flex-col gap-6">
            <div className="v2-card p-7">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: 'var(--v2-accent-soft)', color: 'var(--v2-accent)' }}
                >
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--v2-fg-subtle)' }}>
                    Te respondemos en
                  </p>
                  <p className="mt-0.5 text-base font-medium" style={{ color: 'var(--v2-fg)' }}>
                    Menos de 48h
                  </p>
                </div>
              </div>
            </div>

            <div className="v2-card p-7">
              <h3 className="font-display text-base font-semibold" style={{ color: 'var(--v2-fg)' }}>
                Qué incluye
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {INCLUDED.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm" style={{ color: 'var(--v2-fg-muted)' }}>
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: 'var(--v2-accent)' }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <FinalCtaV2 />
    </>
  );
}
