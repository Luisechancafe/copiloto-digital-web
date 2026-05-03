import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/lib/site';

interface PageCtaProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

/**
 * CTA invertido reutilizable (tarjeta clara sobre fondo oscuro).
 * Pensado para cerrar páginas largas (precios, casos de uso, sobre nosotros).
 */
export function PageCta({
  title = 'Empieza hoy. Tu negocio cambia mañana.',
  subtitle = '30 días gratis. Sin tarjeta. Cancela cuando quieras.',
  primaryLabel = 'Probar 30 días gratis',
  secondaryHref = '/contacto',
  secondaryLabel = 'Hablar con nosotros'
}: PageCtaProps) {
  return (
    <section className="section relative bg-ink-50">
      <div className="container-page">
        <Reveal>
          <div className="card-light relative overflow-hidden p-10 text-center md:p-16">
            <div
              className="halo absolute -left-20 top-0 h-[300px] w-[300px] bg-brand-500/20"
              aria-hidden
            />
            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
              <h2 className="font-display text-display-md font-semibold text-ink-100">
                {title}
              </h2>
              <p className="text-base leading-relaxed text-ink-100/70">{subtitle}</p>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row">
                <LinkButton href={siteConfig.links.appSignup} variant="dark" size="lg">
                  <span className="inline-flex items-center gap-2">
                    {primaryLabel}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </LinkButton>
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-100/15 px-6 py-3 text-sm font-medium text-ink-100 transition-colors hover:bg-ink-100/5"
                >
                  {secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
