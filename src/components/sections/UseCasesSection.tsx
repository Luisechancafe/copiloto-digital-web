import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { RevealStagger, RevealItem } from '@/components/ui/Reveal';
import {
  PeluqueriasIllustration,
  ClinicasIllustration,
  InmobiliariasIllustration,
  GestoriasIllustration
} from '@/components/illustrations/SectorIllustrations';

type IllustrationComponent = (props: { className?: string }) => React.JSX.Element;

interface UseCase {
  slug: string;
  sector: string;
  pitch: string;
  Illustration: IllustrationComponent;
}

const useCases: UseCase[] = [
  {
    slug: 'peluquerias',
    sector: 'Peluquerías',
    pitch: 'Llena tu agenda mientras cortas pelo',
    Illustration: PeluqueriasIllustration
  },
  {
    slug: 'clinicas-dentales',
    sector: 'Clínicas dentales',
    pitch: 'Confirma citas y recupera pacientes solo',
    Illustration: ClinicasIllustration
  },
  {
    slug: 'inmobiliarias',
    sector: 'Inmobiliarias',
    pitch: 'Califica leads de portal y aparta los buenos',
    Illustration: InmobiliariasIllustration
  },
  {
    slug: 'gestorias',
    sector: 'Gestorías',
    pitch: 'Atiende dudas frecuentes en segundos',
    Illustration: GestoriasIllustration
  }
];

export function UseCasesSection() {
  return (
    <section className="section relative bg-ink-100">
      <div className="container-page">
        <SectionHeader
          eyebrow="Casos de uso"
          title="Hecho para tu sector"
          subtitle="Configurado, entrenado y listo para tu negocio en una tarde."
        />

        <RevealStagger
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2"
          stagger={0.1}
        >
          {useCases.map(({ slug, sector, pitch, Illustration }) => (
            <RevealItem key={slug}>
              <Link
                href={`/casos-de-uso/${slug}`}
                className="card-dark group relative block h-full overflow-hidden p-8 md:p-10"
              >
                <div className="relative mb-8 overflow-hidden rounded-xl">
                  <Illustration className="h-auto w-full" />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl font-semibold leading-tight text-white">
                      {sector}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-white/70">{pitch}</p>
                  </div>
                  <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-brand-500 group-hover:text-white">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
