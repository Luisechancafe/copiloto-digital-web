import { ArrowRight } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/Reveal';
import { siteConfig } from '@/lib/site';

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-white py-32 text-ink-100 md:py-40">
      {/* Halo brand sutil en una esquina */}
      <div
        className="halo absolute -right-32 -top-32 h-[500px] w-[500px] bg-brand-500/30"
        aria-hidden
      />
      <div
        className="halo absolute -left-40 bottom-0 h-[400px] w-[400px] bg-brand-300/20"
        aria-hidden
      />

      <div className="container-narrow relative">
        <RevealStagger
          className="flex flex-col items-center gap-8 text-center"
          stagger={0.1}
        >
          <RevealItem>
            <h2 className="font-display text-display-2xl font-semibold leading-[1.05] tracking-tight text-ink-50">
              ¿Listo para que tu negocio funcione solo?
            </h2>
          </RevealItem>

          <RevealItem>
            <p className="max-w-xl text-lg leading-relaxed text-ink-700">
              Sin tarjeta. Sin compromisos. Cancela cuando quieras.
            </p>
          </RevealItem>

          <RevealItem>
            <LinkButton
              href={siteConfig.links.appSignup}
              variant="dark"
              size="lg"
              className="group"
            >
              <span className="inline-flex items-center gap-2">
                Probar 30 días gratis
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </LinkButton>
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  );
}
