'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * Líneas SVG decorativas animadas — la firma visual de Attio.
 * - Se dibujan al hacer scroll usando pathLength + scrollYProgress.
 * - Stroke con gradient brand sutil.
 * - Posicionadas absolute, pointer-events-none.
 *
 * variant:
 *  - 'curve-right'  → curva amplia que sale por la derecha
 *  - 'wave-bottom'  → onda horizontal en la parte inferior
 *  - 'cross'        → dos líneas cruzándose en X muy abierta
 */
type Variant = 'curve-right' | 'wave-bottom' | 'cross';

interface Props {
  variant?: Variant;
  className?: string;
}

const PATHS: Record<Variant, { d: string; viewBox: string }[]> = {
  'curve-right': [
    {
      viewBox: '0 0 1200 600',
      d: 'M -50 480 Q 300 380 600 420 T 1250 200'
    },
    {
      viewBox: '0 0 1200 600',
      d: 'M -50 540 Q 350 460 700 480 T 1250 280'
    }
  ],
  'wave-bottom': [
    {
      viewBox: '0 0 1200 240',
      d: 'M 0 180 Q 200 120 400 160 T 800 140 T 1200 100'
    },
    {
      viewBox: '0 0 1200 240',
      d: 'M 0 220 Q 250 160 500 190 T 900 170 T 1200 130'
    }
  ],
  cross: [
    {
      viewBox: '0 0 1200 600',
      d: 'M -50 -30 Q 400 200 700 350 T 1250 600'
    },
    {
      viewBox: '0 0 1200 600',
      d: 'M -50 600 Q 400 380 700 230 T 1250 -50'
    }
  ]
};

export function AnimatedLines({ variant = 'curve-right', className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // Mappea progreso de scroll a longitud del path (0 → 1)
  const length = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  // Opacity in/out con fade
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  const paths = PATHS[variant];
  const viewBox = paths[0].viewBox;

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ''}`}
    >
      <motion.svg
        viewBox={viewBox}
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        style={{ opacity }}
      >
        <defs>
          <linearGradient id={`grad-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--v2-accent)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--v2-accent)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--v2-accent)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={`grad-${variant}-soft`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--v2-line-strong)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--v2-line-strong)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--v2-line-strong)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {paths.map((p, i) => (
          <motion.path
            key={i}
            d={p.d}
            fill="none"
            stroke={i === 0 ? `url(#grad-${variant})` : `url(#grad-${variant}-soft)`}
            strokeWidth={i === 0 ? 1.4 : 1}
            strokeLinecap="round"
            style={{ pathLength: length }}
          />
        ))}
      </motion.svg>
    </div>
  );
}
