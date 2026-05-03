import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description:
    'Política de privacidad de Copiloto.Digital. Cómo recopilamos, usamos y protegemos tus datos. Cumplimos RGPD y LOPDGDD.'
};

{/* TODO: revisar con abogado antes de producción real */}
export default function PrivacidadPage() {
  return (
    <section className="relative bg-ink-50 pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-narrow">
        <Reveal>
          <header className="flex flex-col gap-3 border-b border-white/10 pb-8">
            <span className="tag uppercase tracking-wider">Legal</span>
            <h1 className="font-display text-display-lg font-semibold text-gradient">
              Política de privacidad
            </h1>
            <p className="text-sm text-white/55">Última actualización: 3 de mayo de 2026</p>
          </header>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col gap-10 text-base leading-relaxed text-white/75 md:text-lg">
            <Section title="1. Quiénes somos">
              <p>
                Copiloto.Digital es un servicio operado desde Granollers (Cataluña, España).
                El responsable del tratamiento de tus datos personales es el equipo de Copiloto.Digital.
                Para cualquier cuestión relacionada con esta política, puedes escribir a{' '}
                <a href={`mailto:${siteConfig.contactEmail}`} className="text-brand-300 underline-offset-4 hover:underline">
                  {siteConfig.contactEmail}
                </a>
                .
              </p>
            </Section>

            <Section title="2. Datos que recopilamos">
              <p>Recopilamos solo lo imprescindible para que el servicio funcione:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Datos de cuenta: nombre, email, empresa, teléfono.</li>
                <li>Datos de facturación: razón social, NIF, dirección, método de pago (gestionado por Stripe).</li>
                <li>Datos de uso: mensajes procesados, fecha de actividad, IP de acceso para seguridad.</li>
                <li>Datos que tu negocio reciba a través del servicio (mensajes de tus clientes vía WhatsApp).</li>
              </ul>
            </Section>

            <Section title="3. Para qué los usamos">
              <ul className="ml-6 list-disc space-y-2">
                <li>Prestarte el servicio contratado.</li>
                <li>Emitir facturas y cumplir nuestras obligaciones fiscales.</li>
                <li>Mejorar el producto a partir de métricas agregadas (nunca contenido individual).</li>
                <li>Comunicarnos contigo sobre tu cuenta, soporte y novedades del servicio.</li>
              </ul>
              <p>
                No usamos tus datos ni los de tus clientes para entrenar modelos de IA externos.
              </p>
            </Section>

            <Section title="4. Con quién los compartimos">
              <p>
                Nunca vendemos ni cedemos tus datos a terceros para marketing. Compartimos lo mínimo con proveedores que nos ayudan a operar el servicio:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Stripe (Irlanda) — procesamiento de pagos.</li>
                <li>Proveedores cloud en la Unión Europea — alojamiento e infraestructura.</li>
                <li>Brevo o equivalente (UE) — envío de emails transaccionales.</li>
              </ul>
              <p>
                Todos cumplen RGPD y firman acuerdos de tratamiento de datos (DPA) con nosotros.
              </p>
            </Section>

            <Section title="5. Cuánto los guardamos">
              <p>
                Mantenemos tus datos mientras seas cliente. Si cancelas, los conservamos durante 90 días por si decides volver, y después los borramos de forma irreversible.
                Los datos contables (facturas) se guardan 6 años por obligación legal.
              </p>
            </Section>

            <Section title="6. Tus derechos">
              <p>Tienes derecho a:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Acceso: saber qué datos tenemos sobre ti.</li>
                <li>Rectificación: corregir lo que esté mal.</li>
                <li>Supresión: pedirnos que borremos tus datos.</li>
                <li>Portabilidad: exportar tus datos en formato estándar.</li>
                <li>Oposición: limitar usos concretos del tratamiento.</li>
                <li>Reclamación: presentar una reclamación ante la AEPD ({' '}
                  <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-brand-300 underline-offset-4 hover:underline">
                    aepd.es
                  </a>
                  ).
                </li>
              </ul>
              <p>
                Para ejercer cualquiera de estos derechos, escríbenos a{' '}
                <a href={`mailto:${siteConfig.contactEmail}`} className="text-brand-300 underline-offset-4 hover:underline">
                  {siteConfig.contactEmail}
                </a>
                . Respondemos en menos de 30 días.
              </p>
            </Section>

            <Section title="7. Cookies">
              <p>
                Usamos solo cookies técnicas necesarias para que el sitio funcione (sesión, preferencias).
                No usamos cookies de marketing, analítica de terceros invasiva ni rastreo entre sitios.
              </p>
            </Section>

            <Section title="8. Contacto del Delegado de Protección de Datos">
              <p>
                Para cualquier asunto relacionado con esta política, escribe a{' '}
                <a href={`mailto:${siteConfig.contactEmail}`} className="text-brand-300 underline-offset-4 hover:underline">
                  {siteConfig.contactEmail}
                </a>
                . Te responde una persona, no un bot.
              </p>
            </Section>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <footer className="mt-16 flex flex-col items-start gap-3 border-t border-white/10 pt-8">
            <Link href="/legal/terminos" className="text-sm text-white/65 underline-offset-4 hover:text-white hover:underline">
              Ver términos y condiciones
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
