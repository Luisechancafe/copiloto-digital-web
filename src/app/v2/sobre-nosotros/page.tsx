import type { Metadata } from 'next';
import { ShieldCheck, Sparkles, Heart } from 'lucide-react';
import { PageHero } from '@/components/v2/PageHero';
import { WordReveal } from '@/components/v2/WordReveal';
import { FinalCtaV2 } from '@/components/v2/FinalCtaV2';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sobre nosotros — Copiloto.Digital'
};

const VALUES = [
  {
    Icon: ShieldCheck,
    title: 'Tus datos son tuyos',
    body: 'Servidores en Europa. Cumplimos RGPD. Cero compartir con terceros.'
  },
  {
    Icon: Sparkles,
    title: 'Lenguaje humano siempre',
    body: 'Si tu copiloto suena a robot, no lo hemos hecho bien. Lo arreglamos.'
  },
  {
    Icon: Heart,
    title: 'Soporte de verdad',
    body: 'Hablas con personas, no con bots. Y respondemos rápido.'
  }
];

export default function V2SobreNosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quienes somos"
        title="Construido en Granollers para negocios como el tuyo."
        highlight={['Granollers']}
        subtitle="No somos una multinacional. Somos un equipo pequeño obsesionado con que tu negocio funcione."
      />

      {/* Historia */}
      <section className="py-24 md:py-32" style={{ background: 'var(--v2-bg-soft)' }}>
        <div className="mx-auto grid w-full max-w-5xl gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-8">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: 'var(--v2-accent)' }}>
              Nuestra historia
            </span>
            <div className="mt-5">
              <WordReveal
                text="Empezamos por una peluquería del barrio."
                by="word"
                as="h2"
                highlight={['peluquería', 'barrio.']}
                className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
              />
            </div>
            <p className="mt-6 text-base leading-relaxed" style={{ color: 'var(--v2-fg-muted)' }}>
              La peluquería de la esquina perdía citas porque nadie podía contestar el WhatsApp a las 11 de la noche.
              Construimos algo para ellos. Funcionó. Lo abrimos para más negocios.
            </p>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--v2-fg-muted)' }}>
              Hoy lo usan peluquerías, dentistas, inmobiliarias y gestorías. Mismo principio: que tu negocio responda
              cuando tú no puedes, sin sonar a robot.
            </p>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl" style={{ background: 'var(--v2-bg)', border: '1px solid var(--v2-border)' }}>
            <div className="v2-grid absolute inset-0 opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <span className="font-display text-2xl font-semibold" style={{ color: 'var(--v2-fg-muted)' }}>
                Equipo Copiloto.Digital
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-24 md:py-32" style={{ background: 'var(--v2-bg)' }}>
        <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
          <span className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: 'var(--v2-accent)' }}>
            Lo que nos importa
          </span>
          <div className="mt-5">
            <WordReveal
              text="Tres cosas, en este orden."
              by="word"
              as="h2"
              highlight={['Tres', 'cosas,']}
              className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
            />
          </div>
          <div className="mt-16 grid gap-px md:grid-cols-3" style={{ background: 'var(--v2-border)' }}>
            {VALUES.map((v) => (
              <div key={v.title} className="p-10" style={{ background: 'var(--v2-bg)' }}>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: 'var(--v2-accent-soft)', color: 'var(--v2-accent)' }}
                >
                  <v.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold" style={{ color: 'var(--v2-fg)' }}>
                  {v.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed" style={{ color: 'var(--v2-fg-muted)' }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hecho en Cataluña */}
      <section className="py-24" style={{ background: 'var(--v2-bg-soft)' }}>
        <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
          <span className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: 'var(--v2-accent)' }}>
            De aquí
          </span>
          <h2
            className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
            style={{ color: 'var(--v2-fg)' }}
          >
            Hecho en {siteConfig.location}.
          </h2>
          <p className="mt-6 text-base leading-relaxed" style={{ color: 'var(--v2-fg-muted)' }}>
            Vallès Oriental, Barcelona. Donde abren los negocios pequeños que mueven la economía real.
          </p>
        </div>
      </section>

      <FinalCtaV2 />
    </>
  );
}
