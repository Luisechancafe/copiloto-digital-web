import { LinkButton } from '@/components/ui/Button';
import { RevealStagger, RevealItem } from '@/components/ui/Reveal';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-ink-50 pt-32 pb-24">
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden />
      <div
        className="halo absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 bg-brand-500/30"
        aria-hidden
      />

      <div className="container-page relative">
        <RevealStagger
          className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center"
          stagger={0.08}
        >
          <RevealItem>
            <span className="font-display text-display-2xl font-bold text-gradient-brand">
              404
            </span>
          </RevealItem>

          <RevealItem>
            <h1 className="font-display text-display-lg font-semibold leading-tight text-white">
              Esta página se nos ha escapado
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
              Te llevamos de vuelta a algo que sí existe.
            </p>
          </RevealItem>

          <RevealItem>
            <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
              <LinkButton href="/" size="lg">
                Volver al inicio
              </LinkButton>
              <LinkButton href="/contacto" variant="ghost" size="lg">
                Contactar
              </LinkButton>
            </div>
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  );
}
