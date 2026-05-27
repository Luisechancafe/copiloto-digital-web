import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/v2/PageHero';
import { PricingSectionV2 } from '@/components/v2/PricingSectionV2';
import { FinalCtaV2 } from '@/components/v2/FinalCtaV2';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Precios — Copiloto.Digital'
};

export default function V2PreciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Precios"
        title="Sin sorpresas. Cancela cuando quieras."
        highlight={['Cancela', 'cuando', 'quieras.']}
        subtitle="30 días gratis en cualquier plan. Sin tarjeta. El precio que eliges se queda fijo, suba o baje el catálogo."
      >
        <Link href={siteConfig.links.appSignup} className="v2-btn-primary group justify-center text-base">
          Empezar gratis
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </PageHero>

      <PricingSectionV2 />

      {/* Tabla comparativa simple */}
      <section className="py-24 md:py-32" style={{ background: 'var(--v2-bg-soft)' }} id="comparar">
        <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
          <h2
            className="font-display text-3xl font-semibold tracking-tight md:text-4xl"
            style={{ color: 'var(--v2-fg)' }}
          >
            Comparativa completa
          </h2>
          <div
            className="mt-12 overflow-hidden rounded-2xl border"
            style={{ borderColor: 'var(--v2-border)', background: 'var(--v2-bg)' }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid var(--v2-border)' }}>
                  <th className="p-5 text-left font-medium" style={{ color: 'var(--v2-fg-muted)' }}></th>
                  <th className="p-5 text-center font-medium" style={{ color: 'var(--v2-fg)' }}>
                    Básico
                  </th>
                  <th
                    className="p-5 text-center font-medium"
                    style={{
                      color: 'var(--v2-fg)',
                      background: 'var(--v2-accent-soft)'
                    }}
                  >
                    Pro
                  </th>
                  <th className="p-5 text-center font-medium" style={{ color: 'var(--v2-fg)' }}>
                    Élite
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr key={r.label} style={{ borderTop: i === 0 ? 'none' : '1px solid var(--v2-border)' }}>
                    <td className="p-5" style={{ color: 'var(--v2-fg-muted)' }}>{r.label}</td>
                    <td className="p-5 text-center" style={{ color: 'var(--v2-fg)' }}>{r.basic}</td>
                    <td
                      className="p-5 text-center font-medium"
                      style={{ color: 'var(--v2-fg)', background: 'var(--v2-accent-soft)' }}
                    >
                      {r.pro}
                    </td>
                    <td className="p-5 text-center" style={{ color: 'var(--v2-fg)' }}>{r.elite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FinalCtaV2 />
    </>
  );
}

const ROWS = [
  { label: 'Mensajes WhatsApp', basic: 'Ilimitados', pro: 'Ilimitados', elite: 'Ilimitados' },
  { label: 'Idiomas atendidos', basic: '2', pro: '5', elite: '5' },
  { label: 'Números conectados', basic: '1', pro: '3', elite: 'Ilimitados' },
  { label: 'CRM con scoring IA', basic: '✓', pro: '✓', elite: '✓' },
  { label: 'Agenda automática', basic: '—', pro: '✓', elite: '✓' },
  { label: 'Recordatorios SMS', basic: '—', pro: '✓', elite: '✓' },
  { label: 'Recupera clientes inactivos', basic: '—', pro: '✓', elite: '✓' },
  { label: 'Posts para redes/mes', basic: '—', pro: '30', elite: 'Ilimitados' },
  { label: 'Llamadas IA con número español', basic: '—', pro: '—', elite: '✓' },
  { label: 'Equipo (usuarios)', basic: '1', pro: '3', elite: 'Ilimitados' },
  { label: 'Soporte', basic: 'Email', pro: 'Prioritario', elite: 'Gestor dedicado' },
  { label: 'API y webhooks', basic: '—', pro: '—', elite: '✓' }
];
