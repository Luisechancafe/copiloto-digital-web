import { Brain, MessageCircle, Plug, type LucideIcon } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { RevealStagger, RevealItem } from '@/components/ui/Reveal';

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: Plug,
    title: 'Conectas tu WhatsApp',
    description: 'Escaneas un QR. Tu número de siempre. Sin cambios.'
  },
  {
    number: '02',
    icon: Brain,
    title: 'Tu copiloto aprende de tu negocio',
    description:
      'Le cuentas qué vendes, tus precios, tus horarios. En 10 minutos sabe más que un becario.'
  },
  {
    number: '03',
    icon: MessageCircle,
    title: 'Responde solo, 24/7',
    description:
      'Tus clientes te escriben, tu copiloto contesta. Tú solo te enteras de los que cierran.'
  }
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="section relative bg-ink-100">
      <div
        className="halo absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 bg-brand-500/15"
        aria-hidden
      />
      <div className="container-page relative">
        <SectionHeader
          eyebrow="Cómo funciona"
          title="Tres pasos. Cero técnico."
          subtitle="En menos de una tarde tu negocio responde solo."
        />

        <RevealStagger
          className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3"
          stagger={0.12}
        >
          {steps.map(({ number, icon: Icon, title, description }) => (
            <RevealItem key={number}>
              <article className="card-dark relative h-full overflow-hidden p-8 md:p-10">
                <span
                  className="pointer-events-none absolute right-6 top-4 select-none font-display text-6xl font-bold text-brand-500/30"
                  aria-hidden
                >
                  {number}
                </span>
                <div className="relative flex flex-col gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                    <Icon className="h-8 w-8 text-brand-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold leading-tight text-white">
                    {title}
                  </h3>
                  <p className="text-base leading-relaxed text-white/70">{description}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
