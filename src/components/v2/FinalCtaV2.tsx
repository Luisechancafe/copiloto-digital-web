'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { DotGrid } from './DotGrid';
import { siteConfig } from '@/lib/site';

export function FinalCtaV2() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-32 md:py-44"
      style={{ background: 'var(--v2-bg)' }}
    >
      <DotGrid fade="radial" />
      <div
        className="v2-halo h-[700px] w-[700px]"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.4 }}
      />

      <div className="relative mx-auto w-full max-w-4xl px-6 text-center md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-semibold leading-[1.02] tracking-tight"
          style={{
            color: 'var(--v2-fg)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            letterSpacing: '-0.04em'
          }}
        >
          Empieza esta tarde.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-xl text-lg md:text-xl"
          style={{ color: 'var(--v2-fg-muted)' }}
        >
          30 días gratis. Sin tarjeta. Cancela cuando quieras.
          <br />
          En menos de una hora tu negocio responde solo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <Link
            href={siteConfig.links.appSignup}
            className="v2-btn-primary group text-base"
            style={{ padding: '1rem 2rem', fontSize: '1rem' }}
          >
            Probar 30 días gratis
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
