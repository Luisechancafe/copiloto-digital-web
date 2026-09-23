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
        Suscripción mensual procesada por Stripe. Cancelación en un clic desde tu panel. Sin penalizaciones.
        Los precios anunciados se mantienen para clientes activos durante 12 meses.
      </p>
      <p>
        Los planes Pro y Élite incluyen una cuota mensual de minutos de llamada con la Recepcionista IA
        (150 y 300 minutos respectivamente). Esos minutos se renuevan en cada ciclo de facturación y no
        se acumulan. El consumo por encima de la cuota se paga por adelantado comprando un pack de
        minutos; no se factura a posteriori. Si la cuota se agota y no hay pack contratado, la
        Recepcionista IA deja de atender llamadas hasta que se recargue o empiece un ciclo nuevo.
        El resto del servicio no se ve afectado.
      </p>
      <h2>4. Periodo de prueba</h2>
      <p>
        30 días gratis en cualquier plan. La tarjeta se pide al empezar la prueba, pero no se cobra
        nada hasta el día 31. Puedes cancelar cuando quieras desde tu panel; si cancelas antes de que
        termine la prueba no se te cobra nada y los datos se borran a los 30 días.
      </p>
      <p>
        Durante la prueba, la Recepcionista IA incluye 30 minutos de llamada, no los del plan
        contratado. Al realizarse el primer cobro pasas a la cuota mensual de tu plan.
      </p>
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
