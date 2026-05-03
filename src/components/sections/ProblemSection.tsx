import { Camera, Clock, MessageSquareOff, type LucideIcon } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { RevealStagger, RevealItem } from '@/components/ui/Reveal';

interface Problem {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const problems: Problem[] = [
  {
    number: '1',
    icon: MessageSquareOff,
    title: 'Pierdes clientes cuando no respondes a tiempo en WhatsApp',
    description:
      'El 78% de la gente espera respuesta en menos de una hora. Si no, contrata al siguiente.'
  },
  {
    number: '2',
    icon: Clock,
    title: 'Pasas horas agendando citas y mandando recordatorios',
    description: 'Cada cita son 5 mensajes. Cada recordatorio, 2. Multiplica por 30 al día.'
  },
  {
    number: '3',
    icon: Camera,
    title: 'No tienes tiempo para crear contenido en redes',
    description:
      'Llevas 3 semanas con la misma foto fijada. Tu última publicación es de marzo.'
  }
];

export function ProblemSection() {
  return (
    <section className="section relative bg-ink-50">
      <div className="container-page">
        <SectionHeader
          eyebrow="El problema"
          title="Tu negocio pierde dinero cada noche"
          subtitle="Mientras tú duermes, tu competencia responde."
        />

        <RevealStagger
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
          stagger={0.12}
        >
          {problems.map(({ number, icon: Icon, title, description }) => (
            <RevealItem key={number}>
              <article className="card-dark relative h-full overflow-hidden p-8">
                <span
                  className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-9xl font-bold text-white/5"
                  aria-hidden
                >
                  {number}
                </span>
                <div className="relative flex h-full flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display text-xl font-medium leading-snug text-white">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/65">{description}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
