'use client';

import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { siteConfig } from '@/lib/site';

// Carga diferida del visual 3D — el Agente C creará HeroVisual.
// ssr:false evita error en build si el archivo aún no existe en runtime SSR.
const HeroVisual = dynamic(() => import('@/components/3d/HeroVisual'), {
  ssr: false,
  loading: () => null
});

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink-50 pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Grid sutil de fondo */}
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
      {/* Halo brand decorativo a la derecha */}
      <div
        className="halo absolute -right-32 top-10 h-[520px] w-[520px] bg-brand-500/30"
        aria-hidden
      />

      {/* Visual 3D detrás del texto, solo en desktop */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-70 lg:block"
        aria-hidden
      >
        <HeroVisual />
      </div>

      <div className="container-page relative">
        <RevealStagger className="flex max-w-3xl flex-col items-start gap-7" stagger={0.1}>
          <RevealItem>
            <span className="tag">Sin tarjeta · Cancela cuando quieras</span>
          </RevealItem>

          <RevealItem>
            <h1 className="font-display text-display-2xl font-semibold leading-[1.05] tracking-tight text-white">
              El copiloto IA para tu{' '}
              <span className="text-gradient-brand">negocio local</span>
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
              Tu negocio responde solo en WhatsApp, agenda citas, recupera clientes y
              publica en redes. Sin que tú hagas nada.
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
              <LinkButton href="#como-funciona" variant="ghost" size="lg">
                Ver cómo funciona
              </LinkButton>
            </div>
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  );
}
