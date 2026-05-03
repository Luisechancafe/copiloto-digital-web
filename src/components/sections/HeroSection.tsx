'use client';

import { ArrowRight } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { siteConfig } from '@/lib/site';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink-50 pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Grid sutil de fondo */}
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />

      {/* Halos decorativos en lugar del 3D (R3F 8 incompatible con React 18.3 actual) */}
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[560px] w-[560px] rounded-full bg-brand-500/30 opacity-50 blur-[140px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-10 top-40 hidden h-[300px] w-[300px] rounded-full bg-brand-300/20 opacity-60 blur-[100px] lg:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 hidden h-[400px] w-[400px] rounded-full bg-brand-600/25 opacity-50 blur-[120px] lg:block"
        aria-hidden
      />

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
