'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Props {
  text: string;
  className?: string;
  delay?: number;
  /** "word" para revelar palabra a palabra, "char" para letra a letra */
  by?: 'word' | 'char';
  /** Highlight palabras específicas con color brand */
  highlight?: readonly string[];
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

/**
 * Reveal cinemático palabra-a-palabra (o letra-a-letra) en scroll.
 * Cada token aparece con stagger desde abajo + opacity.
 * Inspirado en Attio /platform/ask y /platform/call-intelligence.
 */
export function WordReveal({
  text,
  className,
  delay = 0,
  by = 'word',
  highlight = [],
  as: Tag = 'h2'
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const tokens = by === 'word' ? text.split(' ') : text.split('');
  const highlightSet = new Set(highlight.map((w) => w.toLowerCase()));

  return (
    <div ref={ref} className={className}>
      <Tag className="inline">
        {tokens.map((token, i) => {
          const isHighlight = highlightSet.has(token.toLowerCase().replace(/[.,]/g, ''));
          return (
            <span key={`${token}-${i}`} className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block"
                style={{ color: isHighlight ? 'var(--v2-accent)' : 'inherit' }}
                initial={{ y: '110%', opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: '110%', opacity: 0 }}
                transition={{
                  duration: 0.7,
                  delay: delay + i * (by === 'word' ? 0.06 : 0.025),
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {token}
                {by === 'word' && i < tokens.length - 1 ? ' ' : ''}
              </motion.span>
            </span>
          );
        })}
      </Tag>
    </div>
  );
}
