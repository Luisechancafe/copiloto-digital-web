/* TODO: reemplazar con testimonios reales cuando Luise tenga clientes */

import { Star } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { RevealStagger, RevealItem } from '@/components/ui/Reveal';

interface Testimonial {
  key: string;
  initials: string;
  name: string;
  sector: string;
  city: string;
  quote: string;
  gradient: string;
}

const testimonials: Testimonial[] = [
  {
    key: 'marta',
    initials: 'MR',
    name: 'Marta R.',
    sector: 'Peluquería',
    city: 'Granollers',
    quote:
      'Antes perdíamos 4-5 citas al día por no contestar a tiempo. Ahora se confirman solas mientras corto pelo.',
    gradient: 'from-brand-500 to-brand-600'
  },
  {
    key: 'joan',
    initials: 'JT',
    name: 'Joan T.',
    sector: 'Clínica dental',
    city: 'Sabadell',
    quote:
      'Lo configuramos en una tarde. La primera semana ya nos había recuperado dos pacientes que llevaban meses sin venir.',
    gradient: 'from-blue-500 to-brand-500'
  },
  {
    key: 'eva',
    initials: 'EM',
    name: 'Eva M.',
    sector: 'Inmobiliaria',
    city: 'Badalona',
    quote:
      'Recibo el lead ya filtrado: presupuesto, zona y urgencia. Sólo llamo a los que valen la pena.',
    gradient: 'from-amber-500 to-brand-500'
  }
];

export function TestimonialsSection() {
  return (
    <section className="section relative bg-ink-50">
      <div className="container-page">
        <SectionHeader
          eyebrow="Testimonios"
          title="Lo que dicen los que ya lo usan"
        />

        <RevealStagger
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
          stagger={0.1}
        >
          {testimonials.map(({ key, initials, name, sector, city, quote, gradient }) => (
            <RevealItem key={key}>
              <article className="card-dark flex h-full flex-col gap-5 p-7">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${gradient} font-display text-sm font-semibold text-white shadow-lg`}
                    aria-hidden
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="font-medium text-white">{name}</p>
                    <p className="text-xs text-white/55">
                      {sector} · {city}
                    </p>
                  </div>
                </div>

                <blockquote className="text-base leading-relaxed text-white/80">
                  &ldquo;{quote}&rdquo;
                </blockquote>

                <div className="mt-auto flex items-center gap-1" aria-label="5 estrellas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-brand-400 text-brand-400"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
