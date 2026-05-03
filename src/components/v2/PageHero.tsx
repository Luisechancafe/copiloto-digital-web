'use client';

import { motion } from 'framer-motion';
import { WaveLines } from './WaveLines';
import { WordReveal } from './WordReveal';

interface Props {
  eyebrow?: string;
  title: string;
  highlight?: readonly string[];
  subtitle?: string;
  children?: React.ReactNode;
  /** wave | dots | none */
  bg?: 'wave' | 'none';
}

export function PageHero({ eyebrow, title, highlight, subtitle, children, bg = 'wave' }: Props) {
  const highlightArr = highlight ? [...highlight] : [];
  return (
    <section
      className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-28"
      style={{ background: 'var(--v2-bg)' }}
    >
      {bg === 'wave' && (
        <WaveLines
          count={3}
          speed={0.4}
          amplitude={50}
          accentIndex={1}
          className="v2-mask-radial opacity-70"
        />
      )}
      <div
        className="v2-halo h-[600px] w-[600px]"
        style={{
          top: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 0.3
        }}
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 text-center md:px-8">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: 'var(--v2-accent)' }}
          >
            {eyebrow}
          </motion.span>
        )}

        <div className="mt-5">
          <WordReveal
            text={title}
            by="word"
            highlight={highlightArr}
            as="h1"
            className="font-display font-semibold leading-[1.02] tracking-tight"
          />
        </div>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed md:text-xl"
            style={{ color: 'var(--v2-fg-muted)' }}
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
