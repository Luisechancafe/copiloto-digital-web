import Link from 'next/link';
import { ArrowLeft, ArrowRight, type LucideIcon } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PageCta } from '@/components/shared/PageCta';
import { siteConfig } from '@/lib/site';

export interface UseCaseStep {
  icon: LucideIcon;
  trigger: string;
  outcome: string;
}

export interface UseCaseMetric {
  value: string;
  label: string;
}

export interface UseCaseTestimonial {
  initials: string;
  name: string;
  business: string;
  city: string;
  quote: string;
  gradient: string;
}

interface UseCaseLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  steps: UseCaseStep[];
  metrics: UseCaseMetric[];
  metricsCaption?: string;
  testimonial: UseCaseTestimonial;
  ctaTitle: string;
}

export function UseCaseLayout({
  badge,
  title,
  subtitle,
  steps,
  metrics,
  metricsCaption,
  testimonial,
  ctaTitle
}: UseCaseLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-50 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
        <div
          className="halo absolute -right-32 top-10 h-[480px] w-[480px] bg-brand-500/30"
          aria-hidden
        />

        <div className="container-page relative">
          <RevealStagger className="flex max-w-3xl flex-col items-start gap-7" stagger={0.08}>
            <RevealItem>
              <span className="tag uppercase tracking-wider">{badge}</span>
            </RevealItem>

            <RevealItem>
              <h1 className="font-display text-display-xl font-semibold leading-[1.05] tracking-tight text-white">
                {title}
              </h1>
            </RevealItem>

            <RevealItem>
              <p className="max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                {subtitle}
              </p>
            </RevealItem>

            <RevealItem>
              <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
                <LinkButton href={siteConfig.links.appSignup} size="lg" className="group">
                  <span className="inline-flex items-center gap-2">
                    Probar 30 días gratis
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </LinkButton>
                <Link
                  href="/casos-de-uso/peluquerias"
                  className="btn-ghost text-sm"
                  aria-label="Volver a casos de uso"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Otros sectores
                </Link>
              </div>
            </RevealItem>
          </RevealStagger>
        </div>
      </section>

      {/* El día a día */}
      <section className="section relative bg-ink-100">
        <div className="container-page">
          <SectionHeader
            eyebrow="Cómo cambia el día a día"
            title="Lo que hace tu copiloto, paso a paso"
          />

          <RevealStagger
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2"
            stagger={0.08}
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <RevealItem key={idx}>
                  <article className="card-dark flex h-full flex-col gap-5 p-7 md:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                      <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="font-display text-xl font-semibold leading-snug text-white">
                        {step.trigger}
                      </h3>
                      <p className="text-base leading-relaxed text-white/70">
                        {step.outcome}
                      </p>
                    </div>
                  </article>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* Métricas */}
      {/* TODO: validar con clientes reales en piloto */}
      <section className="section-tight relative bg-ink-50">
        <div className="container-page">
          <SectionHeader
            eyebrow="Lo que ahorras al mes"
            title="Resultados que se notan en caja"
          />

          <RevealStagger
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
            stagger={0.1}
          >
            {metrics.map((metric, idx) => (
              <RevealItem key={idx}>
                <div className="card-dark flex h-full flex-col items-center gap-3 p-8 text-center">
                  <span className="font-display text-display-lg font-bold text-gradient-brand">
                    {metric.value}
                  </span>
                  <span className="text-sm font-medium text-white/70">{metric.label}</span>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>

          {metricsCaption && (
            <Reveal delay={0.2}>
              <p className="mt-8 text-center text-xs uppercase tracking-wider text-white/40">
                {metricsCaption}
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* Testimonio */}
      {/* TODO: reemplazar con testimonio real cuando Luise tenga clientes */}
      <section className="section-tight relative bg-ink-100">
        <div className="container-narrow">
          <Reveal>
            <article className="card-dark flex flex-col gap-6 p-8 md:p-12">
              <blockquote className="font-display text-2xl font-medium leading-snug text-white md:text-3xl">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.gradient} font-display text-sm font-semibold text-white shadow-lg`}
                  aria-hidden
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-medium text-white">{testimonial.name}</p>
                  <p className="text-xs text-white/55">
                    {testimonial.business} · {testimonial.city}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <PageCta title={ctaTitle} />
    </>
  );
}
