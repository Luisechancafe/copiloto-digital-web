import type { Metadata } from 'next';
import { CalendarPlus, RefreshCw, AlertCircle, Stethoscope } from 'lucide-react';
import { UseCaseLayout, type UseCaseStep, type UseCaseMetric, type UseCaseTestimonial } from '@/components/use-cases/UseCaseLayout';

export const metadata: Metadata = {
  title: 'Clínicas dentales — Asistente IA para citas y pacientes',
  description:
    'Confirma citas dentales, recupera pacientes inactivos y filtra urgencias 24/7 desde WhatsApp. Sin contratar más recepcionistas.'
};

const steps: UseCaseStep[] = [
  {
    icon: CalendarPlus,
    trigger: 'Paciente nuevo pide hora',
    outcome:
      'Pregunta por especialidad, tipo de visita y disponibilidad. Reserva en tu calendario sin pasar por recepción.'
  },
  {
    icon: RefreshCw,
    trigger: 'Recordatorios de revisión',
    outcome:
      'Cada 6 meses, llega un mensaje al paciente con sus datos. Sin abrir Excel ni cruzar listas.'
  },
  {
    icon: AlertCircle,
    trigger: 'Urgencia fuera de horario',
    outcome:
      'Filtra qué es urgencia real y qué espera al lunes. Te avisa solo de lo que necesita atención inmediata.'
  },
  {
    icon: Stethoscope,
    trigger: 'Pacientes inactivos',
    outcome:
      'Recupera a los que llevan más de un año sin venir con campañas automáticas y ofertas para revisión.'
  }
];

const metrics: UseCaseMetric[] = [
  { value: '+18%', label: 'Agenda llena cada mes' },
  { value: '−45%', label: 'Citas no presentadas' },
  { value: '24/7', label: 'Disponibilidad para tus pacientes' }
];

const testimonial: UseCaseTestimonial = {
  initials: 'JT',
  name: 'Joan T.',
  business: 'Clínica dental',
  city: 'Sabadell',
  quote:
    'Lo configuramos en una tarde. La primera semana ya nos había recuperado dos pacientes que llevaban meses sin venir.',
  gradient: 'from-blue-500 to-brand-500'
};

export default function ClinicasDentalesPage() {
  return (
    <UseCaseLayout
      badge="Caso de uso"
      title="Para clínicas dentales"
      subtitle="Confirma citas, recupera pacientes y filtra urgencias 24/7. Sin contratar más recepción."
      steps={steps}
      metrics={metrics}
      metricsCaption="Datos de pilotos internos. Resultados estimados — variarán según tu clínica."
      testimonial={testimonial}
      ctaTitle="Tu próxima agenda completa empieza hoy."
    />
  );
}
