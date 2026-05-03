import type { Metadata } from 'next';
import { UseCaseLayoutV2 } from '@/components/v2/UseCaseLayoutV2';
import {
  ComparePanel,
  IntegrationsBar,
  RealConversations,
  SectorFAQ
} from '@/components/v2/UseCaseExtras';
import { FinalCtaV2 } from '@/components/v2/FinalCtaV2';
import { USE_CASES } from '@/data/v2-use-cases';

export const metadata: Metadata = {
  title: 'Peluquerías y barberías — Asistente IA WhatsApp'
};

export default function V2PeluqueriasPage() {
  const data = USE_CASES.peluquerias;

  return (
    <>
      <UseCaseLayoutV2
        sector={data.sector}
        hero={data.hero}
        steps={[...data.steps]}
        metrics={[...data.metrics]}
        testimonial={data.testimonial}
      />

      <ComparePanel
        eyebrow="Antes y después"
        title="Tu peluquería con copiloto."
        rows={[
          {
            feature: 'Llamadas para reservar cita',
            before: '40-60 al día interrumpiendo el corte',
            after: '0 — todo por WhatsApp automático'
          },
          {
            feature: 'Citas perdidas por no contestar',
            before: '4-5 al día fuera de horario',
            after: '0 — el copiloto contesta a las 11pm'
          },
          {
            feature: 'Recordatorios de cita',
            before: 'Manualmente 24h antes',
            after: 'Automáticos por WhatsApp + confirmación'
          },
          {
            feature: 'Cancelaciones de última hora',
            before: 'Hueco vacío = dinero perdido',
            after: 'Avisa a la lista de espera y lo llena'
          },
          {
            feature: 'Clientes inactivos 2+ meses',
            before: 'Olvidados',
            after: 'Mensaje cariñoso con descuento personalizado'
          },
          {
            feature: 'Saber qué cliente prefiere a qué profesional',
            before: 'En tu cabeza o en una libreta',
            after: 'En el CRM, automático tras cada cita'
          }
        ]}
      />

      <RealConversations
        title="Lo que tu copiloto sabe contestar."
        examples={[
          {
            question: '¿Tenéis hueco mañana sobre las 6 para corte y barba?',
            answer: 'Sí Marc, mañana tengo libre 17:30, 18:00 y 18:45. ¿Cuál prefieres?'
          },
          {
            question: '¿Cuánto cuesta el balayage?',
            answer: 'Depende del largo: corto 75€, medio 95€, largo 120€. ¿Vienes de antes con nosotras?'
          },
          {
            question: 'Tengo una boda el sábado y necesito recogido',
            answer: '¡Qué guay! Para recogidos te recomiendo coger 90 min. Tengo libre sábado 10:30 con Laia. ¿Reservo?'
          },
          {
            question: 'Quiero cancelar mi cita del jueves',
            answer: 'Sin problema, Eva. Cancelado. ¿Quieres que te proponga otra hora la semana que viene?'
          },
          {
            question: '¿Hacéis tratamientos de queratina?',
            answer: 'Sí, hacemos queratina brasileña sin formol. Dura 3-4 meses. Precio 130€. ¿Te llamo para explicártelo bien?'
          },
          {
            question: '¿Estáis abiertos el lunes?',
            answer: 'Lunes cerramos. Abrimos martes a viernes 10:00-20:00 y sábados 10:00-15:00. ¿Reservo para el martes?'
          }
        ]}
      />

      <IntegrationsBar
        title="Conecta con lo que ya usas."
        integrations={[
          { emoji: '📅', name: 'Google Calendar' },
          { emoji: '📆', name: 'Outlook' },
          { emoji: '💇', name: 'Booksy' },
          { emoji: '✂️', name: 'Treatwell' },
          { emoji: '📊', name: 'Excel / Sheets' },
          { emoji: '💳', name: 'Stripe' },
          { emoji: '📲', name: 'WhatsApp Business' },
          { emoji: '📧', name: 'Mailchimp' }
        ]}
      />

      <SectorFAQ
        title="Lo que más nos preguntan las peluquerías."
        items={[
          {
            q: '¿Tengo que cambiar mi número de WhatsApp?',
            a: 'No. Conectamos con tu número actual. Si prefieres uno nuevo, te lo damos. Tú eliges.'
          },
          {
            q: '¿Y si el cliente quiere algo raro o no entiende lo que pide?',
            a: 'Te avisa al instante. Tú respondes una vez y aprende para la próxima. Cada vez sabe más de tu negocio.'
          },
          {
            q: '¿Cómo sabe qué huecos tengo libres?',
            a: 'Conecta con tu calendario (Google, Outlook, Booksy, Treatwell) y consulta en tiempo real antes de ofrecer.'
          },
          {
            q: '¿Funciona si tengo varios profesionales?',
            a: 'Sí. Cada cliente puede elegir profesional o el copiloto le sugiere quien tenga más hueco. Recuerda preferencias.'
          },
          {
            q: '¿Mis clientes notarán que es un bot?',
            a: 'Habla en tu tono y con tu personalidad. Si pregunta algo personal o emocional, te lo pasa a ti directamente.'
          },
          {
            q: '¿Cuánto tarda en estar configurado?',
            a: 'Una tarde. Te ayudamos en una llamada de 30 min. La mayoría de peluquerías están en marcha en menos de 3 horas.'
          },
          {
            q: '¿Cuesta más por número de mensajes?',
            a: 'No. Atiende mil o un millón al mismo precio. La cuota es fija al mes.'
          },
          {
            q: '¿Cómo cancelo si no me convence?',
            a: 'Desde tu panel, en un clic. Sin llamadas. Los primeros 30 días son gratis sin tarjeta.'
          }
        ]}
      />

      <FinalCtaV2 />
    </>
  );
}
