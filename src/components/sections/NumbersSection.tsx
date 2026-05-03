import { CountUp } from '@/components/ui/CountUp';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';

interface Metric {
  key: string;
  value: React.ReactNode;
  label: string;
  description: string;
}

const metrics: Metric[] = [
  {
    key: '24-7',
    value: <span>24/7</span>,
    label: 'Disponibilidad',
    description: 'Tu negocio nunca duerme'
  },
  {
    key: 'velocidad',
    value: <CountUp value={10} suffix="x" />,
    label: 'Velocidad',
    description: 'Más rápido que responder a mano'
  },
  {
    key: 'recuperacion',
    value: <CountUp value={30} prefix="+" suffix="%" />,
    label: 'Recuperación',
    description: 'Más clientes recuperados al mes'
  },
  {
    key: 'coste',
    value: <span>0€</span>,
    label: 'Por mensaje extra',
    description: 'Atiende mil o un millón, mismo precio'
  }
];

export function NumbersSection() {
  return (
    <section className="section relative overflow-hidden bg-ink-100 py-32 md:py-40">
      <div
        className="halo absolute -left-20 top-1/2 h-[500px] w-[500px] -translate-y-1/2 bg-brand-500/20"
        aria-hidden
      />
      <div
        className="halo absolute -right-32 bottom-0 h-[400px] w-[400px] bg-brand-600/15"
        aria-hidden
      />

      <div className="container-page relative">
        <Reveal>
          <h2 className="text-center font-display text-display-xl font-semibold tracking-tight text-white">
            Lo que cambia en tu negocio
          </h2>
        </Reveal>

        <RevealStagger
          className="mt-20 grid grid-cols-2 gap-y-16 gap-x-8 md:gap-y-20 lg:grid-cols-4"
          stagger={0.1}
        >
          {metrics.map(({ key, value, label, description }) => (
            <RevealItem key={key} className="text-center">
              <div className="font-display text-metric font-bold leading-none text-gradient-brand">
                {value}
              </div>
              <div className="mt-4 text-xs uppercase tracking-[0.2em] text-white/50">
                {label}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{description}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
