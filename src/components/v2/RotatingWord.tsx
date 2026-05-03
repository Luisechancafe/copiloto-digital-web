'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Props {
  words: string[];
  /** Milisegundos por palabra */
  interval?: number;
  className?: string;
}

/**
 * Palabra que rota verticalmente con swap suave.
 * Inspirado en attio.com hero — "[Search / Ask / Build] for your customer data".
 */
export function RotatingWord({ words, interval = 2400, className }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  // Calcular ancho mínimo basándose en la palabra más larga para evitar saltos
  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b));

  return (
    <span
      className={`relative inline-grid align-baseline ${className ?? ''}`}
      style={{ minWidth: `${longest.length * 0.55}ch` }}
    >
      {/* Spacer invisible: reserva el espacio de la palabra más larga */}
      <span className="invisible col-start-1 row-start-1" aria-hidden>
        {longest}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="col-start-1 row-start-1 inline-block"
          style={{ color: 'var(--v2-accent)' }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
