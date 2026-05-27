import type { Metadata } from 'next';
import { LegalLayout } from '@/components/v2/LegalLayout';

export const metadata: Metadata = { title: 'Términos — Copiloto.Digital' };

export default function V2TerminosPage() {
  return (
    <LegalLayout title="Términos de uso" updated="3 de mayo de 2026">
      <h2>1. Aceptación</h2>
      <p>Al usar Copiloto.Digital aceptas estos términos. Si no estás de acuerdo, no uses el servicio.</p>
      <h2>2. Descripción del servicio</h2>
      <p>Plataforma SaaS de automatizaciones con IA para negocios locales: WhatsApp, agenda, voz, contenido y CRM.</p>
      <h2>3. Suscripción y pagos</h2>
      <p>
        Renovación mensual o anual procesada por Stripe. Cancelación en un clic desde tu panel. Sin penalizaciones.
        Los precios anunciados se mantienen para clientes activos durante 12 meses.
      </p>
      <h2>4. Periodo de prueba</h2>
      <p>30 días gratis sin tarjeta. Al terminar, eliges si continuar y pasas la tarjeta. Si no, los datos se borran a los 30 días.</p>
      <h2>5. Uso aceptable</h2>
      <p>
        No spam, no envíos masivos no consentidos, no contenido ilegal, no usurpación de identidad. Cumple las normas de WhatsApp Business y la ley aplicable.
      </p>
      <h2>6. Propiedad intelectual</h2>
      <p>El código, marca y diseño son propiedad de Copiloto.Digital. Tus datos siguen siendo tuyos.</p>
      <h2>7. Limitación de responsabilidad</h2>
      <p>El servicio se presta “tal cual”. No respondemos por daños indirectos o lucro cesante derivados del uso.</p>
      <h2>8. Ley aplicable</h2>
      <p>Legislación española. Jurisdicción: tribunales de Granollers, Cataluña.</p>
      <p style={{ marginTop: '2rem', opacity: 0.6 }}>
        Documento MVP — pendiente de revisión legal definitiva antes de lanzamiento público.
      </p>
    </LegalLayout>
  );
}
