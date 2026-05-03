/**
 * ToolIcons — set de 6 iconos custom para las herramientas del producto.
 *
 * Diseñados para combinar visualmente con Lucide (mismo viewBox 24,
 * stroke 1.5, linecap/linejoin round). Pintan con currentColor, así que
 * pueden teñirse con `text-brand-500` u otra utility de Tailwind.
 *
 * Tamaño visual recomendado: 24-48 px. Por encima de 64 px, el stroke
 * empieza a verse fino — el componente llamador puede subir strokeWidth
 * envolviendo el icono o duplicando el SVG.
 */

import type { SVGProps } from 'react';

type IconProps = {
  className?: string;
} & Omit<SVGProps<SVGSVGElement>, 'className'>;

const baseProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true
};

// ---------------------------------------------------------------------------
// WhatsAppIcon — burbuja con cola + dot de notificación.
// Sugerente, no es el logo oficial.
// ---------------------------------------------------------------------------
export function WhatsAppIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} {...rest}>
      {/* Burbuja principal */}
      <path d="M4 11.5a7.5 7.5 0 1 1 3.4 6.27L4 19l1.27-3.42A7.46 7.46 0 0 1 4 11.5Z" />
      {/* Indicador interno (auricular estilizado) */}
      <path d="M9 10c0 2.21 1.79 4 4 4l1-1.5-2-1-1 .5c-.55-.27-1-.72-1.27-1.27l.5-1-1-2L9 10Z" />
      {/* Dot notificación */}
      <circle cx="17.5" cy="6.5" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// LeadsIcon — persona + flecha entrando hacia círculo (lead capturado).
// ---------------------------------------------------------------------------
export function LeadsIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} {...rest}>
      {/* Persona (cabeza + torso) */}
      <circle cx="7" cy="7" r="2.5" />
      <path d="M3 15c0-2.21 1.79-4 4-4s4 1.79 4 4" />
      {/* Círculo destino (CRM) */}
      <circle cx="18" cy="15" r="3.5" />
      {/* Flecha entrando */}
      <path d="M11 15h3" />
      <path d="m13 13 2 2-2 2" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// CalendarIcon — calendario con tick de cita confirmada.
// ---------------------------------------------------------------------------
export function CalendarIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} {...rest}>
      {/* Hoja calendario */}
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      {/* Pinzas superiores */}
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      {/* Cabecera separadora */}
      <path d="M3.5 9.5h17" />
      {/* Tick cita confirmada */}
      <path d="m9 14.5 2 2 4-4" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// RescueIcon — flecha circular de retorno + corazón pequeño.
// ---------------------------------------------------------------------------
export function RescueIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} {...rest}>
      {/* Arco de retorno (3/4 de círculo) */}
      <path d="M20 12a8 8 0 1 1-2.34-5.66" />
      {/* Punta de flecha del retorno */}
      <path d="M20 4v4h-4" />
      {/* Corazón pequeño en el centro */}
      <path d="M12 14.2 10.4 12.6a1.8 1.8 0 1 1 1.6-3 1.8 1.8 0 1 1 1.6 3L12 14.2Z" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// VoiceIcon — micrófono + ondas sonoras laterales.
// ---------------------------------------------------------------------------
export function VoiceIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} {...rest}>
      {/* Cápsula micrófono */}
      <rect x="9.5" y="3" width="5" height="11" rx="2.5" />
      {/* Soporte */}
      <path d="M6.5 11a5.5 5.5 0 0 0 11 0" />
      <path d="M12 16.5V20" />
      <path d="M9 20h6" />
      {/* Ondas laterales */}
      <path d="M3.5 9.5c0 1 .3 2 .8 2.8" />
      <path d="M20.5 9.5c0 1-.3 2-.8 2.8" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// ContentIcon — post con sparkle (IA generativa).
// ---------------------------------------------------------------------------
export function ContentIcon({ className, ...rest }: IconProps) {
  return (
    <svg className={className} {...baseProps} {...rest}>
      {/* Tarjeta / post */}
      <rect x="3.5" y="4.5" width="14" height="15" rx="2" />
      {/* Líneas de texto */}
      <path d="M7 9h6" />
      <path d="M7 12.5h7" />
      <path d="M7 16h4" />
      {/* Sparkle IA en la esquina superior derecha */}
      <path d="M19 4v3" />
      <path d="M17.5 5.5h3" />
      <path d="M21 8.5v2" />
      <path d="M20 9.5h2" />
    </svg>
  );
}
