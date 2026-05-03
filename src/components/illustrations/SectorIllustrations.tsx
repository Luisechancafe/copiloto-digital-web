/**
 * SectorIllustrations — 4 ilustraciones SVG abstractas (no fotos) para las
 * cards de UseCases. Composición geométrica suave con paleta brand sobre
 * fondo dark. Cada ilustración usa <defs> con id único prefijado por sector
 * para evitar colisiones cuando coexisten en la misma página.
 *
 * ViewBox uniforme 0 0 400 240 (5:3). width 100%, height auto.
 * Todas son decorativas → aria-hidden="true".
 */

import type { SVGProps } from 'react';

type IllustrationProps = {
  className?: string;
} & Omit<SVGProps<SVGSVGElement>, 'className'>;

const baseSvg = {
  viewBox: '0 0 400 240',
  width: '100%',
  height: 'auto',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true
};

// ---------------------------------------------------------------------------
// PeluqueriasIllustration — tijeras estilizadas + ondas de pelo.
// ---------------------------------------------------------------------------
export function PeluqueriasIllustration({ className, ...rest }: IllustrationProps) {
  return (
    <svg className={className} {...baseSvg} {...rest}>
      <defs>
        <linearGradient id="pelu-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#15151a" />
          <stop offset="100%" stopColor="#0a0a0c" />
        </linearGradient>
        <linearGradient id="pelu-grad-1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e61f3e" />
          <stop offset="100%" stopColor="#eb3350" />
        </linearGradient>
        <radialGradient id="pelu-glow" cx="0.7" cy="0.3" r="0.6">
          <stop offset="0%" stopColor="#e61f3e" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#e61f3e" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Fondo */}
      <rect width="400" height="240" fill="url(#pelu-bg)" />
      <rect width="400" height="240" fill="url(#pelu-glow)" />

      {/* Ondas de pelo flotantes */}
      <path
        d="M40 180 C 100 140, 160 220, 220 170 S 340 140, 380 180"
        stroke="#fbccd2"
        strokeOpacity="0.35"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M40 200 C 110 160, 170 240, 240 195 S 340 170, 380 200"
        stroke="#fbccd2"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M40 160 C 90 120, 170 200, 240 150 S 340 130, 380 160"
        stroke="#ffffff"
        strokeOpacity="0.08"
        strokeWidth="1"
        fill="none"
      />

      {/* Tijeras: dos triángulos cruzados */}
      <g transform="translate(200 105) rotate(-15)">
        {/* Hoja 1 */}
        <path
          d="M -55 -8 L 25 -8 L 0 8 Z"
          fill="url(#pelu-grad-1)"
          opacity="0.95"
        />
        {/* Hoja 2 */}
        <path
          d="M -55 8 L 25 8 L 0 -8 Z"
          fill="url(#pelu-grad-1)"
          opacity="0.7"
        />
        {/* Eje */}
        <circle cx="0" cy="0" r="5" fill="#fbccd2" />
        <circle cx="0" cy="0" r="2" fill="#0a0a0c" />
        {/* Anillas */}
        <circle cx="-55" cy="-8" r="9" fill="none" stroke="#eb3350" strokeWidth="2" />
        <circle cx="-55" cy="8" r="9" fill="none" stroke="#eb3350" strokeWidth="2" />
      </g>

      {/* Dot acento */}
      <circle cx="320" cy="60" r="3" fill="#fbccd2" opacity="0.7" />
      <circle cx="80" cy="80" r="2" fill="#fbccd2" opacity="0.5" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// ClinicasIllustration — arco dental + heartbeat.
// ---------------------------------------------------------------------------
export function ClinicasIllustration({ className, ...rest }: IllustrationProps) {
  return (
    <svg className={className} {...baseSvg} {...rest}>
      <defs>
        <linearGradient id="clin-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#15151a" />
          <stop offset="100%" stopColor="#0a0a0c" />
        </linearGradient>
        <linearGradient id="clin-grad-1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbccd2" />
          <stop offset="100%" stopColor="#eb3350" />
        </linearGradient>
        <radialGradient id="clin-glow" cx="0.3" cy="0.4" r="0.5">
          <stop offset="0%" stopColor="#eb3350" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#eb3350" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Fondo */}
      <rect width="400" height="240" fill="url(#clin-bg)" />
      <rect width="400" height="240" fill="url(#clin-glow)" />

      {/* Arco curvo (sonrisa abstracta) */}
      <path
        d="M 100 110 Q 200 60, 300 110"
        stroke="#fbccd2"
        strokeOpacity="0.18"
        strokeWidth="1"
        fill="none"
      />

      {/* Tres dientes simplificados como rectángulos rounded */}
      <g transform="translate(200 110)">
        <rect
          x="-58"
          y="-6"
          width="32"
          height="48"
          rx="14"
          fill="url(#clin-grad-1)"
          opacity="0.85"
          transform="rotate(-12 -42 18)"
        />
        <rect
          x="-16"
          y="-12"
          width="32"
          height="54"
          rx="14"
          fill="url(#clin-grad-1)"
          opacity="0.95"
        />
        <rect
          x="26"
          y="-6"
          width="32"
          height="48"
          rx="14"
          fill="url(#clin-grad-1)"
          opacity="0.85"
          transform="rotate(12 42 18)"
        />
      </g>

      {/* Heartbeat / pulso */}
      <path
        d="M 30 195 L 130 195 L 145 175 L 165 215 L 185 165 L 205 195 L 370 195"
        stroke="#eb3350"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Cruz médica decorativa */}
      <g transform="translate(330 60)" opacity="0.55">
        <rect x="-2" y="-10" width="4" height="20" rx="1" fill="#fbccd2" />
        <rect x="-10" y="-2" width="20" height="4" rx="1" fill="#fbccd2" />
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// InmobiliariasIllustration — silueta de casa minimalista + grid de ventanas.
// ---------------------------------------------------------------------------
export function InmobiliariasIllustration({ className, ...rest }: IllustrationProps) {
  return (
    <svg className={className} {...baseSvg} {...rest}>
      <defs>
        <linearGradient id="inmo-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#15151a" />
          <stop offset="100%" stopColor="#0a0a0c" />
        </linearGradient>
        <linearGradient id="inmo-grad-1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e61f3e" />
          <stop offset="100%" stopColor="#eb3350" />
        </linearGradient>
        <radialGradient id="inmo-glow" cx="0.5" cy="0.7" r="0.6">
          <stop offset="0%" stopColor="#e61f3e" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#e61f3e" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Fondo */}
      <rect width="400" height="240" fill="url(#inmo-bg)" />
      <rect width="400" height="240" fill="url(#inmo-glow)" />

      {/* Edificio fondo (silueta apagada) */}
      <g opacity="0.25">
        <rect x="60" y="100" width="60" height="120" rx="2" fill="#fbccd2" />
        <rect x="290" y="80" width="50" height="140" rx="2" fill="#fbccd2" />
      </g>

      {/* Casa principal: cuadrado + triángulo */}
      <g transform="translate(200 140)">
        {/* Tejado */}
        <path d="M -80 -10 L 0 -70 L 80 -10 Z" fill="url(#inmo-grad-1)" />
        {/* Cuerpo */}
        <rect x="-65" y="-10" width="130" height="80" rx="3" fill="#15151a" stroke="#eb3350" strokeWidth="1.5" />
        {/* Grid de ventanas 3x2 */}
        <g fill="#fbccd2" opacity="0.85">
          <rect x="-50" y="5" width="22" height="18" rx="1.5" />
          <rect x="-11" y="5" width="22" height="18" rx="1.5" />
          <rect x="28" y="5" width="22" height="18" rx="1.5" />
          <rect x="-50" y="32" width="22" height="18" rx="1.5" />
          <rect x="28" y="32" width="22" height="18" rx="1.5" />
        </g>
        {/* Puerta */}
        <rect x="-11" y="32" width="22" height="38" rx="1.5" fill="url(#inmo-grad-1)" />
      </g>

      {/* Pin de mapa pequeño */}
      <g transform="translate(345 50)" opacity="0.6">
        <circle cx="0" cy="0" r="6" fill="none" stroke="#fbccd2" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="2" fill="#fbccd2" />
      </g>
    </svg>
  );
}

// ---------------------------------------------------------------------------
// GestoriasIllustration — documento con líneas de texto + sello circular.
// ---------------------------------------------------------------------------
export function GestoriasIllustration({ className, ...rest }: IllustrationProps) {
  return (
    <svg className={className} {...baseSvg} {...rest}>
      <defs>
        <linearGradient id="gest-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#15151a" />
          <stop offset="100%" stopColor="#0a0a0c" />
        </linearGradient>
        <linearGradient id="gest-grad-1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e61f3e" />
          <stop offset="100%" stopColor="#eb3350" />
        </linearGradient>
        <radialGradient id="gest-glow" cx="0.7" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#eb3350" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#eb3350" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Fondo */}
      <rect width="400" height="240" fill="url(#gest-bg)" />
      <rect width="400" height="240" fill="url(#gest-glow)" />

      {/* Documento secundario al fondo */}
      <g transform="translate(180 60) rotate(8)" opacity="0.35">
        <rect x="0" y="0" width="140" height="180" rx="6" fill="#fbccd2" opacity="0.15" stroke="#fbccd2" strokeOpacity="0.25" strokeWidth="1" />
      </g>

      {/* Documento principal */}
      <g transform="translate(120 30)">
        <rect x="0" y="0" width="160" height="200" rx="6" fill="#15151a" stroke="#eb3350" strokeWidth="1.5" />
        {/* Cabecera */}
        <rect x="16" y="20" width="80" height="6" rx="2" fill="url(#gest-grad-1)" />
        {/* Líneas de texto */}
        <rect x="16" y="44" width="128" height="3" rx="1.5" fill="#fbccd2" opacity="0.45" />
        <rect x="16" y="56" width="120" height="3" rx="1.5" fill="#fbccd2" opacity="0.45" />
        <rect x="16" y="68" width="100" height="3" rx="1.5" fill="#fbccd2" opacity="0.45" />
        <rect x="16" y="80" width="128" height="3" rx="1.5" fill="#fbccd2" opacity="0.3" />
        <rect x="16" y="92" width="90" height="3" rx="1.5" fill="#fbccd2" opacity="0.3" />
        <rect x="16" y="104" width="118" height="3" rx="1.5" fill="#fbccd2" opacity="0.3" />
        <rect x="16" y="116" width="70" height="3" rx="1.5" fill="#fbccd2" opacity="0.3" />
        {/* Línea firma */}
        <rect x="16" y="166" width="60" height="2" rx="1" fill="#fbccd2" opacity="0.5" />
      </g>

      {/* Sello circular */}
      <g transform="translate(290 175)">
        <circle cx="0" cy="0" r="32" fill="none" stroke="url(#gest-grad-1)" strokeWidth="2" />
        <circle cx="0" cy="0" r="24" fill="none" stroke="#eb3350" strokeWidth="1" strokeDasharray="2 3" />
        <path d="M -10 0 l 6 6 l 14 -14" stroke="#fbccd2" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
