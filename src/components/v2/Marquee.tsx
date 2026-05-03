'use client';

import { motion } from 'framer-motion';

interface Props {
  items: string[];
  /** Velocidad: segundos para completar un loop */
  duration?: number;
  className?: string;
}

/**
 * Marquee infinito horizontal — texto que se desplaza sin pausa.
 * Duplica items para hacer el loop seamless.
 * Mask gradient en bordes para que aparezca/desaparezca suave.
 */
export function Marquee({ items, duration = 30, className }: Props) {
  const doubled = [...items, ...items];

  return (
    <div
      className={`v2-mask-radial relative overflow-hidden ${className ?? ''}`}
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%)'
      }}
    >
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration,
          ease: 'linear',
          repeat: Infinity
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-sm font-medium uppercase tracking-wider"
            style={{ color: 'var(--v2-fg-muted)', opacity: 0.6 }}
          >
            {item}
            <span
              className="ml-12 inline-block h-1 w-1 rounded-full align-middle"
              style={{ background: 'var(--v2-accent)' }}
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
