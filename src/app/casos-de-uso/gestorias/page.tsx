import type { Metadata } from 'next';
import { MessageCircleQuestion, FileText, CalendarCheck, BellRing } from 'lucide-react';
import { UseCaseLayout, type UseCaseStep, type UseCaseMetric, type UseCaseTestimonial } from '@/components/use-cases/UseCaseLayout';

export const metadata: Metadata = {
  title: 'Gestorías y asesorías — IA para dudas frecuentes y plazos',
  description:
    'Tu copiloto responde plazos, recopila documentación y avisa de fechas legales. Tú dedicas tiempo a casos que valen dinero.'
};

const steps: UseCaseStep[] = [
  {
    icon: MessageCircleQuestion,
    trigger: 'Cliente pregunta el plazo del IRPF',
    outcome:
      'Tu copiloto responde con la fecha exacta y enlace a la web de Hacienda. Sin que tengas que repetirlo cada año.'
  },
  {
    icon: FileText,
    trigger: 'Solicitud de documentación',
    outcome:
      'Pide los papeles que faltan, los recibe por WhatsApp y los archiva en tu carpeta de cliente.'
  },
  {
    icon: CalendarCheck,
    trigger: 'Cita con el gestor',
    outcome:
      'Filtra el motivo de la consulta y agenda solo si necesita ver al humano. El resto lo resuelve por chat.'
  },
  {
    icon: BellRing,
    trigger: 'Aviso de plazo legal',
    outcome:
      'Manda recordatorio personalizado a cada cliente afectado por modelo, fecha límite y enlace al trámite.'
  }
];

const metrics: UseCaseMetric[] = [
  { value: '−70%', label: 'Llamadas y emails repetitivos' },
  { value: '+5h', label: 'Al día para casos importantes' },
  { value: '100%', label: 'Plazos avisados a tiempo' }
];

const testimonial: UseCaseTestimonial = {
  initials: 'AF',
  name: 'Antoni F.',
  business: 'Gestoría',
  city: 'Mataró',
  quote:
    'Antes pasaba media mañana respondiendo lo mismo. Ahora mi copiloto contesta y yo me dedico a casos.',
  gradient: 'from-purple-500 to-brand-500'
};

export default function GestoriasPage() {
  return (
    <UseCaseLayout
      badge="Caso de uso"
      title="Para gestorías y asesorías"
      subtitle="Atiende dudas frecuentes en segundos. Tú te ocupas de lo que vale dinero."
      steps={steps}
      metrics={metrics}
      metricsCaption="Datos de pilotos internos. Resultados estimados — variarán según tu cartera."
      testimonial={testimonial}
      ctaTitle="Recupera tus mañanas. Empieza hoy."
    />
  );
}
