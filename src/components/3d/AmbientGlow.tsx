/**
 * AmbientGlow — halo radial decorativo en CSS puro (sin R3F).
 *
 * Pieza utilitaria reutilizable para añadir profundidad atmosférica
 * a secciones (hero, CTA, cards, etc.) sin coste de runtime 3D.
 *
 * Uso:
 *   <AmbientGlow color="brand" position="top-right" />
 *   <AmbientGlow color="cool"  position="bottom-left" size="lg" />
 */

import clsx from 'clsx';

type GlowColor = 'brand' | 'cool';
type GlowPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'center';
type GlowSize = 'md' | 'lg' | 'xl';

interface AmbientGlowProps {
  color?: GlowColor;
  position?: GlowPosition;
  size?: GlowSize;
  className?: string;
}

const positionClass: Record<GlowPosition, string> = {
  'top-left': '-top-32 -left-32',
  'top-right': '-top-32 -right-32',
  'bottom-left': '-bottom-32 -left-32',
  'bottom-right': '-bottom-32 -right-32',
  center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
};

const sizeClass: Record<GlowSize, string> = {
  md: 'w-[420px] h-[420px] blur-[100px]',
  lg: 'w-[600px] h-[600px] blur-[120px]',
  xl: 'w-[820px] h-[820px] blur-[160px]'
};

const colorClass: Record<GlowColor, string> = {
  brand:
    'bg-[radial-gradient(circle_at_center,rgba(230,31,62,0.55),rgba(230,31,62,0.18)_45%,transparent_70%)]',
  cool:
    'bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.4),rgba(56,189,248,0.16)_45%,transparent_70%)]'
};

export function AmbientGlow({
  color = 'brand',
  position = 'top-right',
  size = 'lg',
  className
}: AmbientGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        'pointer-events-none absolute rounded-full opacity-30 mix-blend-screen',
        positionClass[position],
        sizeClass[size],
        colorClass[color],
        className
      )}
    />
  );
}

export default AmbientGlow;
