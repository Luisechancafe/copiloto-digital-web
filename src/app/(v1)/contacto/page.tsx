import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { LinkButton } from '@/components/ui/Button';
import { ContactForm } from '@/components/contact/ContactForm';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Escríbenos. Te respondemos en menos de 4 horas en horario laboral. Email, WhatsApp o formulario — el que prefieras.'
};

const waNumber = siteConfig.contactPhone.replace(/[^0-9]/g, '');
const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hola, quiero saber más sobre Copiloto.Digital.')}`;

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.contactEmail,
    href: `mailto:${siteConfig.contactEmail}`
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp directo',
    value: siteConfig.contactPhone,
    href: waLink,
    external: true
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: siteConfig.location
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lun–Vie · 9:00 a 18:00'
  }
];

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-50 pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
        <div
          className="halo absolute -right-32 top-10 h-[420px] w-[420px] bg-brand-500/30"
          aria-hidden
        />

        <div className="container-page relative">
          <RevealStagger className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center" stagger={0.08}>
            <RevealItem>
              <span className="tag uppercase tracking-wider">Contacto</span>
            </RevealItem>
            <RevealItem>
              <h1 className="font-display text-display-xl font-semibold leading-[1.05] tracking-tight text-white">
                Hablemos
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                Te respondemos en menos de 4 horas en horario laboral.
              </p>
            </RevealItem>
          </RevealStagger>
        </div>
      </section>

      {/* Form + aside */}
      <section className="section-tight relative bg-ink-50">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr,360px] lg:gap-12">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.1}>
              <aside className="flex flex-col gap-6">
                <div className="card-dark flex flex-col gap-1 p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/45">
                    Otros canales
                  </p>
                  <p className="mt-1 text-sm text-white/65">
                    Lo que te resulte más cómodo. Respondemos rápido por todos.
                  </p>
                </div>

                <ul className="flex flex-col gap-3">
                  {channels.map(({ icon: Icon, label, value, href, external }) => {
                    const inner = (
                      <article className="card-dark flex items-start gap-4 p-5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-medium uppercase tracking-wider text-white/50">
                            {label}
                          </span>
                          <span className="mt-1 text-sm font-medium text-white">{value}</span>
                        </div>
                      </article>
                    );
                    if (!href) {
                      return <li key={label}>{inner}</li>;
                    }
                    if (external) {
                      return (
                        <li key={label}>
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block transition-transform hover:-translate-y-0.5"
                          >
                            {inner}
                          </a>
                        </li>
                      );
                    }
                    return (
                      <li key={label}>
                        <a href={href} className="block transition-transform hover:-translate-y-0.5">
                          {inner}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Demo card */}
      <section className="section relative bg-ink-100">
        <div className="container-narrow">
          <Reveal>
            <article className="card-light relative overflow-hidden p-10 md:p-14">
              <div
                className="halo absolute -right-20 top-0 h-[280px] w-[280px] bg-brand-500/20"
                aria-hidden
              />
              <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr,auto]">
                <div className="flex flex-col gap-4">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-ink-100/10 bg-ink-100/5 px-3 py-1 text-xs font-medium text-ink-100/70">
                    Lo más rápido
                  </span>
                  <h2 className="font-display text-display-md font-semibold text-ink-100">
                    Lo más rápido es probarlo
                  </h2>
                  <p className="text-base leading-relaxed text-ink-100/70 md:text-lg">
                    En 30 minutos estás respondiendo en WhatsApp con tu copiloto. La mejor demo es tu propio negocio funcionando.
                  </p>
                </div>
                <div className="flex flex-col gap-3 md:items-end">
                  <LinkButton href={siteConfig.links.appSignup} variant="dark" size="lg">
                    <span className="inline-flex items-center gap-2">
                      Probar 30 días gratis
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </LinkButton>
                  <Link
                    href="/precios"
                    className="text-sm text-ink-100/65 underline-offset-4 hover:text-ink-100 hover:underline"
                  >
                    Ver precios
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
