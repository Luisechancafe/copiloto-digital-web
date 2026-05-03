'use client';

import { useEffect, useRef } from 'react';

interface Props {
  className?: string;
  /** Cantidad de ondas superpuestas */
  count?: number;
  /** Velocidad base (radianes/segundo). Cada onda usa un múltiplo distinto */
  speed?: number;
  /** Amplitud máxima en píxeles del viewport */
  amplitude?: number;
  /** Color base del trazo (CSS variable o hex) */
  color?: string;
  /** Acentua una onda con --v2-accent */
  accentIndex?: number;
}

/**
 * Ondas seno SVG animadas continuamente con requestAnimationFrame.
 * Inspirado en attio.com/platform/ask — múltiples ondas superpuestas
 * con desfase, stroke fading en bordes vía gradient.
 *
 * Performance: actualiza el atributo `d` directamente vía DOM, sin React re-render.
 * Respeta prefers-reduced-motion (frame estático).
 */
export function WaveLines({
  className,
  count = 4,
  speed = 0.6,
  amplitude = 60,
  accentIndex = 1
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathsRef = useRef<SVGPathElement[]>([]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = pathsRef.current.filter(Boolean);
    if (!paths.length) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const W = 1200;
    const H = 400;
    const STEPS = 80;

    const buildPath = (t: number, i: number): string => {
      // Cada onda tiene su propia frecuencia, fase y amplitud
      const freq = 0.0035 + i * 0.0009;
      const phase = i * 1.4 + t;
      const amp = amplitude * (0.55 + i * 0.18);
      const yBase = H / 2 + (i - count / 2) * 12;

      let d = '';
      for (let s = 0; s <= STEPS; s++) {
        const x = (s / STEPS) * W;
        const y =
          yBase +
          Math.sin(x * freq + phase) * amp +
          Math.sin(x * freq * 1.7 + phase * 0.9 + i) * (amp * 0.25);
        d += s === 0 ? `M ${x.toFixed(2)} ${y.toFixed(2)}` : ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
      }
      return d;
    };

    if (reduced) {
      paths.forEach((p, i) => p.setAttribute('d', buildPath(0, i)));
      return;
    }

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = ((now - start) / 1000) * speed;
      paths.forEach((p, i) => p.setAttribute('d', buildPath(t, i)));
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [count, speed, amplitude]);

  // Crea índices para las ondas
  const indices = Array.from({ length: count }, (_, i) => i);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ''}`}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="wave-grad-soft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--v2-line-strong)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--v2-line-strong)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--v2-line-strong)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave-grad-accent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--v2-accent)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--v2-accent)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="var(--v2-accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {indices.map((i) => (
          <path
            key={i}
            ref={(el) => {
              if (el) pathsRef.current[i] = el;
            }}
            fill="none"
            stroke={i === accentIndex ? 'url(#wave-grad-accent)' : 'url(#wave-grad-soft)'}
            strokeWidth={i === accentIndex ? 1.4 : 0.9}
            strokeLinecap="round"
            opacity={i === accentIndex ? 1 : 0.45 + i * 0.08}
          />
        ))}
      </svg>
    </div>
  );
}
