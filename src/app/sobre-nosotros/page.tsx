import type { Metadata } from 'next';
import { ShieldCheck, Sparkles, Heart, MapPin, Mountain } from 'lucide-react';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PageCta } from '@/components/shared/PageCta';

export const metadata: Metadata = {
  title: 'Sobre nosotros',
  description:
    'Construimos Copiloto.Digital en Granollers para negocios pequeños como el tuyo. Equipo pequeño, soporte humano y obsesión con que tu negocio funcione.'
};

const values = [
  {
    icon: ShieldCheck,
    title: 'Tus datos son tuyos',
    body: 'Servidores en Europa. Cumplimos RGPD. Cero compartir con terceros para marketing.'
  },
  {
    icon: Sparkles,
    title: 'Lenguaje humano siempre',
    body: 'Si tu copiloto suena a robot, no lo hemos hecho bien. Lo arreglamos.'
  },
  {
    icon: Heart,
    title: 'Soporte de verdad',
    body: 'Hablas con personas, no con bots. Y respondemos rápido — en horas, no en días.'
  }
];

const team = [
  {
    initials: 'LC',
    name: 'Luise C.',
    role: 'Fundador',
    gradient: 'from-brand-500 to-brand-600'
  },
  {
    initials: 'EQ',
    name: 'Equipo de soporte',
    role: 'Atención al cliente',
    gradient: 'from-blue-500 to-brand-500'
  },
  {
    initials: 'IN',
    name: 'Ingeniería',
    role: 'Producto y plataforma',
    gradient: 'from-amber-500 to-brand-500'
  }
];

export default function SobreNosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-50 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
        <div
          className="halo absolute -left-32 top-10 h-[460px] w-[460px] bg-brand-500/30"
          aria-hidden
        />

        <div className="container-page relative">
          <RevealStagger className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center" stagger={0.08}>
            <RevealItem>
              <span className="tag uppercase tracking-wider">Quiénes somos</span>
            </RevealItem>
            <RevealItem>
              <h1 className="font-display text-display-xl font-semibold leading-[1.05] tracking-tight text-white">
                Construido en Granollers para{' '}
                <span className="text-gradient-brand">negocios como el tuyo</span>
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                No somos una multinacional. Somos un equipo pequeño obsesionado con que tu negocio funcione.
              </p>
            </RevealItem>
          </RevealStagger>
        </div>
      </section>

      {/* Historia */}
      <section className="section relative bg-ink-100">
        <div className="container-page">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="flex flex-col gap-6">
                <span className="tag uppercase tracking-wider">Nuestra historia</span>
                <h2 className="font-display text-display-lg font-semibold text-gradient">
                  Empezó con una peluquería de la esquina
                </h2>
                <div className="flex flex-col gap-4 text-base leading-relaxed text-white/75 md:text-lg">
                  <p>
                    Vimos a la peluquería de la esquina perder citas porque nadie podía contestar el WhatsApp a las once de la noche.
                  </p>
                  <p>
                    Construimos algo para ellos. Funcionó. Lo abrimos para más negocios.
                  </p>
                  <p>
                    Hoy es Copiloto.Digital — una herramienta hecha para que un negocio de barrio responda como una multinacional, sin tener su plantilla.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              {/* TODO: reemplazar por foto real del equipo */}
              <div className="card-dark relative aspect-[4/3] overflow-hidden p-0">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/40 via-brand-600/20 to-ink-50" />
                <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
                <div className="absolute inset-0 flex items-center justify-center p-10 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                      <Heart className="h-8 w-8 text-brand-300" strokeWidth={1.75} />
                    </div>
                    <p className="font-display text-xl font-semibold text-white">
                      Equipo Copiloto.Digital
                    </p>
                    <p className="text-sm text-white/60">Granollers · Vallès Oriental</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section relative bg-ink-50">
        <div className="container-page">
          <SectionHeader
            eyebrow="Lo que nos importa"
            title="Tres cosas, claras"
            subtitle="No tenemos slogans. Tenemos principios que cumplimos."
          />

          <RevealStagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3" stagger={0.1}>
            {values.map(({ icon: Icon, title, body }) => (
              <RevealItem key={title}>
                <article className="card-dark flex h-full flex-col gap-5 p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
                    <p className="text-base leading-relaxed text-white/70">{body}</p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Equipo */}
      <section className="section-tight relative bg-ink-100">
        <div className="container-page">
          <SectionHeader eyebrow="El equipo" title="Pocos, pero buenos" />

          {/* TODO: añadir fotos reales y bios completas */}
          <RevealStagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3" stagger={0.1}>
            {team.map(({ initials, name, role, gradient }) => (
              <RevealItem key={name}>
                <article className="card-dark flex h-full flex-col items-center gap-4 p-8 text-center">
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${gradient} font-display text-xl font-semibold text-white shadow-lg`}
                    aria-hidden
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold text-white">{name}</p>
                    <p className="text-sm text-white/55">{role}</p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Hecho en Cataluña */}
      <section className="section relative bg-ink-50">
        <div className="container-narrow">
          <Reveal>
            <article className="card-dark flex flex-col items-center gap-6 p-10 text-center md:p-14">
              <div className="flex items-center gap-3 text-brand-300">
                <MapPin className="h-5 w-5" strokeWidth={2} />
                <Mountain className="h-5 w-5" strokeWidth={2} />
              </div>
              <h2 className="font-display text-display-md font-semibold text-gradient">
                Hecho en Cataluña
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                Nuestra base está en Granollers, en pleno Vallès Oriental. Trabajamos con la comunidad de pymes de Barcelona y alrededores — un ecosistema que entendemos porque vivimos en él.
              </p>
              <p className="text-sm text-white/50">
                Servidores en Europa · Atención en español y catalán
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <PageCta
        title="¿Trabajamos juntos?"
        subtitle="Pruébalo 30 días gratis o escríbenos un correo."
      />
    </>
  );
}
