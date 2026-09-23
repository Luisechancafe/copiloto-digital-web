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
        subtitle="30 días gratis. No se cobra nada hasta el día 31. Cancela cuando quieras. El precio que eliges se queda fijo, suba o baje el catálogo."
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
  // Conversaciones: PLAN_CONVERSATIONS en src/lib/plan-features.ts
  { label: 'Conversaciones al mes', basic: '500', pro: '1.500', elite: '3.000' },
  // La voz solo habla es-ES y el selector del panel marca el resto «Próximamente»
  { label: 'Idiomas atendidos', basic: 'Español', pro: 'Español', elite: 'Español' },
  // Evolution API: una instancia de WhatsApp por cuenta, en los tres planes
  { label: 'Números de WhatsApp', basic: '1', pro: '1', elite: '1' },
  { label: 'CRM con scoring IA', basic: '✓', pro: '✓', elite: '✓' },
  { label: 'Agenda automática', basic: '—', pro: '✓', elite: '✓' },
  // El cron de recordatorios manda WhatsApp y email; SMS no hay
  { label: 'Recordatorios de cita', basic: '—', pro: 'WhatsApp y email', elite: 'WhatsApp y email' },
  { label: 'Sincronización de agenda', basic: '—', pro: 'Google Calendar', elite: 'Google Calendar' },
  { label: 'Recupera clientes inactivos', basic: '—', pro: '✓', elite: '✓' },
  // Generar contenido es de Pro; programarlo (scheduled_posts) es solo de Élite
  { label: 'Contenido para redes', basic: '—', pro: 'Generación', elite: 'Generación y calendario' },
  // PLAN_VOICE_MINUTES: la voz bajó a Pro el 22-sep-2026
  { label: 'Llamadas IA con número español', basic: '—', pro: '150 min/mes', elite: '300 min/mes' },
  { label: 'Minutos de voz de más', basic: '—', pro: 'Pack de 100 min por 25 €', elite: 'Pack de 100 min por 25 €' },
  // PLAN_MAX_AGENTS
  { label: 'Asistentes IA', basic: '1', pro: '3', elite: 'Sin límite' },
  // La tabla de equipos dice Pro 3 / Élite 10, no ilimitado
  { label: 'Equipo (usuarios)', basic: '1', pro: '3', elite: '10' },
  { label: 'Soporte', basic: 'Email', pro: 'Email y chat', elite: 'Prioritario' }
  // Fuera «API y webhooks»: no hay API pública para clientes.
];
