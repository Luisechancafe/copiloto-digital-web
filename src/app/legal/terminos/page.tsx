import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Términos y condiciones',
  description:
    'Términos y condiciones de uso de Copiloto.Digital. Suscripción, prueba gratuita, uso aceptable y propiedad intelectual.'
};

{/* TODO: revisar con abogado antes de producción real */}
export default function TerminosPage() {
  return (
    <section className="relative bg-ink-50 pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-narrow">
        <Reveal>
          <header className="flex flex-col gap-3 border-b border-white/10 pb-8">
            <span className="tag uppercase tracking-wider">Legal</span>
            <h1 className="font-display text-display-lg font-semibold text-gradient">
              Términos y condiciones
            </h1>
            <p className="text-sm text-white/55">Última actualización: 3 de mayo de 2026</p>
          </header>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col gap-10 text-base leading-relaxed text-white/75 md:text-lg">
            <Section title="1. Aceptación de los términos">
              <p>
                Al crear una cuenta en Copiloto.Digital aceptas estos términos. Si no estás de acuerdo con algo, no uses el servicio.
                Estos términos pueden actualizarse — te avisaremos por email con al menos 30 días de antelación cuando haya cambios relevantes.
              </p>
            </Section>

            <Section title="2. Descripción del servicio">
              <p>
                Copiloto.Digital es una plataforma SaaS que permite a pequeños negocios automatizar la atención al cliente en WhatsApp, gestionar agenda, recuperar clientes inactivos y publicar contenido en redes sociales.
                El servicio se presta &ldquo;tal cual&rdquo;, con disponibilidad 24/7 sujeta a mantenimientos programados que se anuncian con antelación.
              </p>
            </Section>

            <Section title="3. Suscripción y pagos">
              <ul className="ml-6 list-disc space-y-2">
                <li>Cobramos mediante Stripe en EUR. Aceptamos tarjeta, SEPA y domiciliación bancaria.</li>
                <li>La suscripción se renueva automáticamente cada mes o cada año según el plan elegido.</li>
                <li>Puedes cancelar en cualquier momento desde tu panel, en un clic. Sin penalización.</li>
                <li>Si cancelas, conservas el acceso hasta el fin del periodo ya pagado. No reembolsamos los días no usados, salvo error nuestro.</li>
                <li>El precio que pagas al contratar se mantiene fijo aunque cambien las tarifas del catálogo, mientras no canceles.</li>
              </ul>
            </Section>

            <Section title="4. Periodo de prueba (30 días)">
              <p>
                Ofrecemos 30 días de prueba sin tarjeta y sin compromiso. Al terminar la prueba, debes elegir un plan y añadir un método de pago para seguir usando el servicio.
                Si no contratas, tus datos se conservan 30 días más por si decides volver, y después se borran automáticamente.
              </p>
            </Section>

            <Section title="5. Uso aceptable">
              <p>No puedes usar Copiloto.Digital para:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Enviar spam o mensajes no solicitados a usuarios que no han dado su consentimiento.</li>
                <li>Contenido ilegal, violento, fraudulento o que infrinja derechos de terceros.</li>
                <li>Suplantar identidad de personas o marcas.</li>
                <li>Intentar vulnerar la seguridad del servicio o de otros clientes.</li>
                <li>Revender el servicio sin acuerdo previo por escrito.</li>
              </ul>
              <p>El incumplimiento puede llevar a la suspensión inmediata de la cuenta sin reembolso.</p>
            </Section>

            <Section title="6. Propiedad intelectual">
              <p>
                Tú eres dueño de los datos que introduces y de los mensajes que tu negocio recibe. Nosotros somos dueños del software, marca, diseño y modelos propietarios que hacen funcionar el servicio.
                Te concedemos una licencia de uso no exclusiva mientras tu suscripción esté activa.
              </p>
            </Section>

            <Section title="7. Limitación de responsabilidad">
              <p>
                Hacemos todo lo razonable para que el servicio funcione bien, pero no garantizamos disponibilidad ininterrumpida.
                Nuestra responsabilidad máxima ante cualquier reclamación se limita a la cantidad pagada por ti en los últimos 12 meses.
                No respondemos por daños indirectos, lucro cesante, ni por interrupciones de servicios de terceros (Meta, Google, Stripe, etc.).
              </p>
            </Section>

            <Section title="8. Ley aplicable y jurisdicción">
              <p>
                Estos términos se rigen por la legislación española. Para cualquier disputa, las partes se someten a los juzgados y tribunales de Granollers (Barcelona), salvo que la ley aplicable establezca otro foro imperativo (consumidores).
              </p>
              <p>
                ¿Dudas sobre algo? Escríbenos a{' '}
                <a href={`mailto:${siteConfig.contactEmail}`} className="text-brand-300 underline-offset-4 hover:underline">
                  {siteConfig.contactEmail}
                </a>
                .
              </p>
            </Section>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <footer className="mt-16 flex flex-col items-start gap-3 border-t border-white/10 pt-8">
            <Link href="/legal/privacidad" className="text-sm text-white/65 underline-offset-4 hover:text-white hover:underline">
              Ver política de privacidad
            </Link>
            <Link href="/" className="text-sm text-white/65 underline-offset-4 hover:text-white hover:underline">
              Volver a la portada
            </Link>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="flex flex-col gap-4">
      <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">{title}</h2>
      <div className="flex flex-col gap-4 text-white/75">{children}</div>
    </article>
  );
}
