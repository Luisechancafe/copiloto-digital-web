import type { Metadata } from 'next';
import { Calendar, Bell, Users, Heart } from 'lucide-react';
import { UseCaseLayout, type UseCaseStep, type UseCaseMetric, type UseCaseTestimonial } from '@/components/use-cases/UseCaseLayout';

export const metadata: Metadata = {
  title: 'Peluquerías y barberías — Asistente IA WhatsApp',
  description:
    'Tu copiloto agenda citas en WhatsApp, confirma 24h antes y recupera clientes inactivos. Mientras tú cortas pelo.'
};

const steps: UseCaseStep[] = [
  {
    icon: Calendar,
    trigger: 'Cliente pregunta por hora libre el sábado',
    outcome:
      'Tu copiloto consulta tu agenda, ofrece 3 huecos y reserva el que elija. Sin que sueltes las tijeras.'
  },
  {
    icon: Bell,
    trigger: '24h antes de la cita',
    outcome:
      'Manda recordatorio por WhatsApp. Confirma o repropone si el cliente no puede. Sin teléfono.'
  },
  {
    icon: Users,
    trigger: 'Cancelan a última hora',
    outcome:
      'Avisa a la lista de espera con el hueco libre. Se llena solo, sin que tú muevas un dedo.'
  },
  {
    icon: Heart,
    trigger: 'Cliente lleva 2 meses sin venir',
    outcome:
      'Le manda un mensaje cariñoso con un descuento personalizado. Vuelve a tu silla sin que insistas.'
  }
];

const metrics: UseCaseMetric[] = [
  { value: '8h', label: 'Menos al teléfono cada semana' },
  { value: '+22', label: 'Citas extra recuperadas al mes' },
  { value: '0', label: 'Citas olvidadas o duplicadas' }
];

const testimonial: UseCaseTestimonial = {
  initials: 'MR',
  name: 'Marta R.',
  business: 'Peluquería',
  city: 'Granollers',
  quote:
    'Antes perdíamos 4-5 citas al día por no contestar a tiempo. Ahora se confirman solas mientras corto pelo.',
  gradient: 'from-brand-500 to-brand-600'
};

export default function PeluqueriasPage() {
  return (
    <UseCaseLayout
      badge="Caso de uso"
      title="Para peluquerías y barberías"
      subtitle="Llena tu agenda mientras cortas pelo. Tu copiloto agenda, confirma y recuerda."
      steps={steps}
      metrics={metrics}
      metricsCaption="Datos de pilotos internos. Resultados estimados — variarán según tu negocio."
      testimonial={testimonial}
      ctaTitle="Empieza hoy. Tu agenda llena la semana que viene."
    />
  );
}
