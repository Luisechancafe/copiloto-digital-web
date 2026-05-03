import { Check, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';

type Cell = boolean | string;

interface FeatureRow {
  feature: string;
  basico: Cell;
  pro: Cell;
  elite: Cell;
}

interface FeatureGroup {
  category: string;
  rows: FeatureRow[];
}

const groups: FeatureGroup[] = [
  {
    category: 'WhatsApp',
    rows: [
      { feature: 'Mensajes ilimitados', basico: true, pro: true, elite: true },
      { feature: 'Atiende en 5 idiomas', basico: true, pro: true, elite: true },
      { feature: 'Números conectados', basico: '1', pro: '3', elite: 'Ilimitados' }
    ]
  },
  {
    category: 'CRM',
    rows: [
      { feature: 'Ficha de cliente automática', basico: true, pro: true, elite: true },
      { feature: 'CRM con scoring IA', basico: false, pro: true, elite: true },
      { feature: 'Etiquetado y segmentación', basico: 'Básico', pro: 'Avanzado', elite: 'Avanzado' }
    ]
  },
  {
    category: 'Agenda',
    rows: [
      { feature: 'Agenda automática', basico: false, pro: true, elite: true },
      { feature: 'Recordatorios SMS', basico: false, pro: true, elite: true },
      { feature: 'Sincronización con Google/Outlook', basico: false, pro: true, elite: true }
    ]
  },
  {
    category: 'Recuperación de clientes',
    rows: [
      { feature: 'Recupera clientes inactivos', basico: false, pro: true, elite: true },
      { feature: 'Campañas automáticas', basico: false, pro: true, elite: true }
    ]
  },
  {
    category: 'Contenido',
    rows: [
      { feature: 'Posts para redes al mes', basico: '10', pro: '30', elite: 'Ilimitados' },
      { feature: 'Adaptación por canal', basico: false, pro: true, elite: true }
    ]
  },
  {
    category: 'Voz IA',
    rows: [
      { feature: 'Llamadas IA con número español', basico: false, pro: false, elite: true },
      { feature: 'Filtrado y derivación inteligente', basico: false, pro: false, elite: true }
    ]
  },
  {
    category: 'Equipo',
    rows: [
      { feature: 'Usuarios incluidos', basico: '1', pro: '3', elite: 'Ilimitados' },
      { feature: 'Roles y permisos', basico: false, pro: true, elite: true }
    ]
  },
  {
    category: 'Soporte',
    rows: [
      { feature: 'Canal de soporte', basico: 'Email', pro: 'Email prioritario', elite: 'Gestor dedicado' },
      { feature: 'Tiempo de respuesta', basico: '24h', pro: '4h', elite: '1h' },
      { feature: 'API y webhooks', basico: false, pro: false, elite: true }
    ]
  }
];

function renderCell(value: Cell) {
  if (value === true) {
    return <Check className="mx-auto h-5 w-5 text-green-400" strokeWidth={2.5} aria-label="Incluido" />;
  }
  if (value === false) {
    return <X className="mx-auto h-5 w-5 text-white/25" strokeWidth={2.5} aria-label="No incluido" />;
  }
  return <span className="text-sm font-medium text-white/85">{value}</span>;
}

const planColumns = [
  { key: 'basico', name: 'Básico', highlight: false },
  { key: 'pro', name: 'Pro', highlight: true },
  { key: 'elite', name: 'Élite', highlight: false }
] as const;

export function PricingComparison() {
  return (
    <section className="section relative bg-ink-100">
      <div className="container-page">
        <SectionHeader
          eyebrow="Comparativa completa"
          title="Qué entra en cada plan"
          subtitle="Sin asteriscos ni letra pequeña."
        />

        <Reveal delay={0.1}>
          <div className="mt-14 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full min-w-[720px] border-collapse">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky left-0 z-10 bg-ink-100 px-6 py-5 text-left text-xs font-medium uppercase tracking-wider text-white/55"
                  >
                    Función
                  </th>
                  {planColumns.map((plan) => (
                    <th
                      key={plan.key}
                      scope="col"
                      className={cn(
                        'px-6 py-5 text-center font-display text-base font-semibold text-white',
                        plan.highlight && 'bg-brand-500/[0.08]'
                      )}
                    >
                      {plan.name}
                      {plan.highlight && (
                        <span className="ml-2 rounded-full bg-brand-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-300">
                          Popular
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {groups.map((group) => (
                  <ComparisonGroup key={group.category} group={group} />
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ComparisonGroup({ group }: { group: FeatureGroup }) {
  return (
    <>
      <tr>
        <td
          colSpan={4}
          className="border-t border-white/10 bg-white/[0.02] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white/60"
        >
          {group.category}
        </td>
      </tr>
      {group.rows.map((row) => (
        <tr key={row.feature} className="border-t border-white/5">
          <th
            scope="row"
            className="sticky left-0 z-10 bg-ink-100 px-6 py-4 text-left text-sm font-normal text-white/80"
          >
            {row.feature}
          </th>
          <td className="px-6 py-4 text-center">{renderCell(row.basico)}</td>
          <td className="bg-brand-500/[0.04] px-6 py-4 text-center">
            {renderCell(row.pro)}
          </td>
          <td className="px-6 py-4 text-center">{renderCell(row.elite)}</td>
        </tr>
      ))}
    </>
  );
}
