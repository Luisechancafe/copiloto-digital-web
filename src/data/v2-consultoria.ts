/**
 * Datos de la página /v2/consultoria.
 * Reflejan el contenido real de copiloto.digital/consultoria.html.
 */

export type ServiceIconKey =
  | 'compass'
  | 'sparkles'
  | 'globe'
  | 'megaphone'
  | 'shopping-cart'
  | 'rocket';

export interface Service {
  num: string;
  iconKey: ServiceIconKey;
  title: string;
  pitch: string;
  bullets: string[];
  cta: string;
}

export const SERVICES: Service[] = [
  {
    num: '01',
    iconKey: 'compass',
    title: 'Consultoría de Marketing Digital para Pymes',
    pitch: 'Diagnóstico previo que convierte confusión en plan accionable.',
    bullets: [
      'Sesión de trabajo + informe estratégico',
      'Diagnóstico de 6 dimensiones',
      'Propuesta de valor y posicionamiento',
      'Identificación de brechas críticas',
      'Plan de acción 90 días'
    ],
    cta: 'Solicitar sesión estratégica'
  },
  {
    num: '02',
    iconKey: 'sparkles',
    title: 'Branding, Identidad y Packaging',
    pitch: 'Construcción de marca diferenciada con especialidad en diseño de empaque.',
    bullets: [
      'Naming, propuesta de valor, posicionamiento',
      'Identidad visual completa',
      'Manual de marca',
      'Diseño de packaging',
      'Tono de voz y mensajes clave'
    ],
    cta: 'Solicitar propuesta de branding'
  },
  {
    num: '03',
    iconKey: 'globe',
    title: 'Diseño Web y Posicionamiento SEO',
    pitch: 'Sitios web orientados a conversión con optimización técnica.',
    bullets: [
      'Diseño UX/UI orientado a conversión',
      'Desarrollo WordPress o ecommerce',
      'SEO técnico y on-page',
      'Optimización de velocidad',
      'Google Business Profile + Analytics'
    ],
    cta: 'Solicitar auditoría web'
  },
  {
    num: '04',
    iconKey: 'megaphone',
    title: 'Marketing Digital: Google Ads y Meta Ads',
    pitch: 'Generación predecible de leads mediante embudos digitales.',
    bullets: [
      'Estrategia de contenidos y calendario',
      'Gestión de redes sociales',
      'Email marketing y automatización',
      'Campañas Meta Ads y Google Ads',
      'Reporting mensual'
    ],
    cta: 'Solicitar propuesta personalizada'
  },
  {
    num: '05',
    iconKey: 'shopping-cart',
    title: 'Amazon Seller y Ecommerce',
    pitch: 'Estrategia integral para venta en marketplaces.',
    bullets: [
      'Auditoría de cuenta y listings',
      'Optimización de títulos y contenido',
      'Campañas Amazon PPC',
      'Estrategia de pricing',
      'Setup tienda propia'
    ],
    cta: 'Solicitar auditoría Amazon'
  },
  {
    num: '06',
    iconKey: 'rocket',
    title: 'Transformación Digital',
    pitch: 'Rediseño operativo empresarial para eficiencia y escalabilidad.',
    bullets: [
      'Diagnóstico de madurez digital',
      'Hoja de ruta priorizada',
      'Implementación CRM/automatización/IA',
      'Formación al equipo',
      'Seguimiento con KPIs'
    ],
    cta: 'Solicitar diagnóstico de madurez'
  }
];

export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Diagnóstico',
    bullets: [
      '20 preguntas en 5 minutos',
      'Sin compromiso',
      'Análisis 6 dimensiones',
      'Identificación de 3 brechas críticas',
      'Recomendación según resultados'
    ]
  },
  {
    num: '02',
    title: 'Planificación',
    bullets: [
      'Hoja de ruta específica',
      'Acciones ordenadas por impacto y coste',
      'Presupuesto realista',
      'Timeline 90 días con hitos medibles',
      'KPIs definidos previamente'
    ]
  },
  {
    num: '03',
    title: 'Ejecución',
    bullets: [
      'Proyecto puntual o retainer',
      'Métricas desde inicio',
      'Reporting regular',
      'Ajuste continuo basado en datos'
    ]
  }
];

export const DIFFERENTIATORS = [
  'Diagnóstico primero, propuesta después',
  'Sin permanencias — continuidad por resultados',
  'Marketing + Amazon + IA integrados',
  'Plan de acción 90 días concreto',
  '18 años, 9 sectores, 200+ proyectos',
  'Copiloto individual, no agencia rotativa'
];

export const SECTORS_WORKED = [
  { emoji: '💊', label: 'Salud y bienestar' },
  { emoji: '👗', label: 'Moda y lifestyle' },
  { emoji: '🍽️', label: 'Alimentación y hostelería' },
  { emoji: '💄', label: 'Belleza y estética' },
  { emoji: '🏭', label: 'Industria y fabricación' },
  { emoji: '💼', label: 'Servicios B2B' },
  { emoji: '🛍️', label: 'Retail y comercio' },
  { emoji: '💻', label: 'Tecnología y SaaS' },
  { emoji: '📦', label: 'Amazon y marketplaces' }
];
