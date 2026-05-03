import type { Metadata } from 'next';
import { PricingSection } from '@/components/sections/PricingSection';
import { PricingComparison } from '@/components/pricing/PricingComparison';
import { PricingFaq } from '@/components/pricing/PricingFaq';
import { PageCta } from '@/components/shared/PageCta';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Precios',
  description:
    'Planes desde 47€/mes. 30 días gratis. Básico, Pro o Élite — el que elijas se queda fijo, suba o baje el precio del catálogo.'
};

export default function PreciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-50 pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
        <div
          className="halo absolute right-0 top-10 h-[420px] w-[420px] bg-brand-500/30"
          aria-hidden
        />

        <div className="container-page relative">
          <RevealStagger className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center" stagger={0.08}>
            <RevealItem>
              <span className="tag uppercase tracking-wider">Precios</span>
            </RevealItem>
            <RevealItem>
              <h1 className="font-display text-display-xl font-semibold leading-[1.05] tracking-tight text-white">
                Precios sin <span className="text-gradient-brand">sorpresas</span>
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                30 días gratis. Cancela cuando quieras. El plan que elijas se queda fijo, suba o baje el precio del catálogo.
              </p>
            </RevealItem>
          </RevealStagger>
        </div>
      </section>

      {/* Planes */}
      <PricingSection />

      {/* Comparativa */}
      <PricingComparison />

      {/* FAQ */}
      <PricingFaq />

      {/* CTA final */}
      <PageCta
        title="Empieza la prueba gratis. Decide después."
        subtitle="30 días gratis. Sin tarjeta. Sin compromiso."
      />

      {/* Microcopy garantía */}
      <Reveal>
        <div className="container-page pb-16 text-center">
          <p className="text-xs uppercase tracking-wider text-white/40">
            Servidores en Europa · RGPD · Soporte en español
          </p>
        </div>
      </Reveal>
    </>
  );
}
