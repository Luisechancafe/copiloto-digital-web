import type { Metadata } from 'next';
import { Filter, Calendar, Send, Home } from 'lucide-react';
import { UseCaseLayout, type UseCaseStep, type UseCaseMetric, type UseCaseTestimonial } from '@/components/use-cases/UseCaseLayout';

export const metadata: Metadata = {
  title: 'Inmobiliarias — Cualifica leads de portal con IA',
  description:
    'Tu copiloto califica leads de Idealista, Fotocasa o Habitaclia en 30 segundos. Solo llamas a los que valen la pena.'
};

const steps: UseCaseStep[] = [
  {
    icon: Filter,
    trigger: 'Lead llega por Idealista',
    outcome:
      'Lo califica en 30 segundos: presupuesto, zona, urgencia, financiación. Te lo pasa ya filtrado y ordenado.'
  },
  {
    icon: Calendar,
    trigger: 'Visita programada',
    outcome:
      'Confirma 24h antes con foto del piso y dirección exacta. Repropone si el cliente no puede.'
  },
  {
    icon: Send,
    trigger: 'Cliente pasa frío 30 días',
    outcome:
      'Le manda nuevas propiedades que encajan con su búsqueda. Sin que tengas que recordar quién buscaba qué.'
  },
  {
    icon: Home,
    trigger: 'Solicita información de un piso',
    outcome:
      'Manda ficha completa, fotos, video del recorrido y agenda visita. Todo desde WhatsApp.'
  }
];

const metrics: UseCaseMetric[] = [
  { value: '3×', label: 'Más leads cualificados de portal' },
  { value: '−60%', label: 'Tiempo en mensajes y seguimiento' },
  { value: '24/7', label: 'Respuesta inmediata al lead' }
];

const testimonial: UseCaseTestimonial = {
  initials: 'EM',
  name: 'Eva M.',
  business: 'Inmobiliaria',
  city: 'Badalona',
  quote:
    'Recibo el lead ya filtrado: presupuesto, zona y urgencia. Sólo llamo a los que valen la pena.',
  gradient: 'from-amber-500 to-brand-500'
};

export default function InmobiliariasPage() {
  return (
    <UseCaseLayout
      badge="Caso de uso"
      title="Para inmobiliarias"
      subtitle="Califica leads de portal y aparta los buenos. Sin perseguir a nadie."
      steps={steps}
      metrics={metrics}
      metricsCaption="Datos de pilotos internos. Resultados estimados — variarán según tu cartera."
      testimonial={testimonial}
      ctaTitle="Llama solo a los leads que valen. Empieza ahora."
    />
  );
}
