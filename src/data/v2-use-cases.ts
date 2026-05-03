/**
 * Datos de casos de uso v2.
 *
 * Importante: NO importamos LucideIcon aquí. Los Lucide icons son funciones
 * React y al pasarlos de Server Components a Client Components fallan con
 * "Functions cannot be passed directly to Client Components". Usamos `iconKey`
 * (string) y el client component lo resuelve a su componente Lucide.
 */

export type IconKey =
  | 'scissors'
  | 'bell'
  | 'calendar-days'
  | 'heart'
  | 'stethoscope'
  | 'clipboard-check'
  | 'alert-triangle'
  | 'refresh'
  | 'home'
  | 'message'
  | 'calendar'
  | 'eye'
  | 'file-text'
  | 'inbox'
  | 'mail'
  | 'clock';

export const USE_CASES = {
  peluquerias: {
    sector: 'peluquería',
    hero: {
      eyebrow: 'Caso de uso',
      title: 'Para peluquerías y barberías.',
      highlight: ['peluquerías', 'barberías.'],
      subtitle: 'Llena tu agenda mientras cortas pelo. Tu copiloto agenda, confirma y recuerda.'
    },
    steps: [
      {
        iconKey: 'scissors' as IconKey,
        trigger: 'Cliente pregunta por hora libre el sábado',
        outcome: 'Tu copiloto consulta tu agenda, ofrece 3 huecos y reserva el que elija. Sin que sueltes las tijeras.'
      },
      {
        iconKey: 'bell' as IconKey,
        trigger: '24h antes de la cita',
        outcome: 'Manda recordatorio por WhatsApp. Confirma o repropone. Sin teléfono.'
      },
      {
        iconKey: 'calendar-days' as IconKey,
        trigger: 'Cancelan a última hora',
        outcome: 'Avisa a la lista de espera. El hueco se llena solo.'
      },
      {
        iconKey: 'heart' as IconKey,
        trigger: 'Cliente lleva 2 meses sin venir',
        outcome: 'Le manda un mensaje cariñoso con un descuento personalizado.'
      }
    ],
    metrics: [
      { value: '8h', label: 'menos al teléfono' },
      { value: '+22', label: 'citas extra/mes' },
      { value: '0', label: 'olvidos' }
    ],
    testimonial: {
      name: 'Marta R.',
      role: 'Peluquería en Granollers',
      quote: 'Antes perdíamos 4-5 citas al día por no contestar a tiempo. Ahora se confirman solas mientras corto pelo.'
    }
  },
  'clinicas-dentales': {
    sector: 'clínica',
    hero: {
      eyebrow: 'Caso de uso',
      title: 'Para clínicas dentales.',
      highlight: ['clínicas', 'dentales.'],
      subtitle: 'Confirma citas, recupera pacientes y filtra urgencias 24/7.'
    },
    steps: [
      { iconKey: 'stethoscope' as IconKey, trigger: 'Paciente nuevo pide hora', outcome: 'Pregunta por especialidad, tipo de visita y disponibilidad. Reserva en tu calendario.' },
      { iconKey: 'clipboard-check' as IconKey, trigger: 'Recordatorios de revisión', outcome: 'Cada 6 meses, llega un mensaje. Sin abrir Excel.' },
      { iconKey: 'alert-triangle' as IconKey, trigger: 'Urgencia fuera de horario', outcome: 'Filtra qué es urgente y qué espera al lunes. Te avisa solo de lo que importa.' },
      { iconKey: 'refresh' as IconKey, trigger: 'Pacientes inactivos', outcome: 'Recupera a los que llevan más de un año sin venir con campañas automáticas.' }
    ],
    metrics: [
      { value: '+18%', label: 'agenda llena' },
      { value: '−45%', label: 'no presentados' },
      { value: '24/7', label: 'disponibilidad' }
    ],
    testimonial: {
      name: 'Joan T.',
      role: 'Clínica dental Sabadell',
      quote: 'La primera semana ya nos había recuperado dos pacientes que llevaban meses sin venir.'
    }
  },
  inmobiliarias: {
    sector: 'inmobiliaria',
    hero: {
      eyebrow: 'Caso de uso',
      title: 'Para inmobiliarias.',
      highlight: ['inmobiliarias.'],
      subtitle: 'Califica leads de portal y aparta los buenos. Sin perseguir a nadie.'
    },
    steps: [
      { iconKey: 'home' as IconKey, trigger: 'Lead llega por Idealista', outcome: 'Lo califica en 30 segundos: presupuesto, zona, urgencia. Te lo pasa ya filtrado.' },
      { iconKey: 'calendar' as IconKey, trigger: 'Visita programada', outcome: 'Confirma 24h antes. Repropone si falla.' },
      { iconKey: 'message' as IconKey, trigger: 'Cliente pasa frío 30 días', outcome: 'Le manda nuevas propiedades que encajan con su búsqueda.' },
      { iconKey: 'eye' as IconKey, trigger: 'Solicita información de un piso', outcome: 'Manda ficha completa, fotos, video, y agenda visita.' }
    ],
    metrics: [
      { value: '3x', label: 'leads cualificados' },
      { value: '−60%', label: 'tiempo en mensajes' },
      { value: '24/7', label: 'respuesta' }
    ],
    testimonial: {
      name: 'Eva M.',
      role: 'Inmobiliaria Badalona',
      quote: 'Recibo el lead ya filtrado: presupuesto, zona y urgencia. Sólo llamo a los que valen la pena.'
    }
  },
  gestorias: {
    sector: 'gestoría',
    hero: {
      eyebrow: 'Caso de uso',
      title: 'Para gestorías y asesorías.',
      highlight: ['gestorías', 'asesorías.'],
      subtitle: 'Atiende dudas frecuentes en segundos. Tú te ocupas de lo que vale dinero.'
    },
    steps: [
      { iconKey: 'file-text' as IconKey, trigger: 'Cliente pregunta el plazo del IRPF', outcome: 'Tu copiloto responde con la fecha exacta y enlace a la web de Hacienda.' },
      { iconKey: 'inbox' as IconKey, trigger: 'Solicitud de documentación', outcome: 'Pide los papeles que faltan y los archiva en tu carpeta.' },
      { iconKey: 'calendar' as IconKey, trigger: 'Cita con el gestor', outcome: 'Filtra el motivo y agenda solo si necesita ver al humano.' },
      { iconKey: 'mail' as IconKey, trigger: 'Aviso de plazo legal', outcome: 'Manda recordatorio personalizado a cada cliente afectado.' }
    ],
    metrics: [
      { value: '−70%', label: 'llamadas repetidas' },
      { value: '+5h', label: 'al día para casos' },
      { value: '100%', label: 'plazos avisados' }
    ],
    testimonial: {
      name: 'Antoni F.',
      role: 'Gestoría Mataró',
      quote: 'Antes pasaba media mañana respondiendo lo mismo. Ahora mi copiloto contesta y yo me dedico a casos.'
    }
  }
} as const;

export type UseCaseSlug = keyof typeof USE_CASES;
