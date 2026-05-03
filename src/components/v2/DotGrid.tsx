'use client';

import { useEffect, useRef } from 'react';

interface Props {
  className?: string;
  /** Tipo de mask para el fade del grid */
  fade?: 'radial' | 'top' | 'bottom' | 'none';
}

/**
 * Background de puntos sutiles que se desplazan ligeramente con el scroll.
 * Inspirado en el background de attio.com /engineering/blog.
 *
 * - Layer estática (CSS dot pattern) con mask-image gradient.
 * - Layer móvil: dos paths SVG sutiles que se trasladan según scrollY
 *   (efecto parallax 1:0.3, no recolocan más que ±60px).
 */
export function DotGrid({ className, fade = 'radial' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      el.style.setProperty('--dot-y', `${y * 0.08}px`);
      el.style.setProperty('--line-y', `${y * 0.18}px`);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const fadeClass =
    fade === 'radial'
      ? 'v2-mask-radial'
      : fade === 'top'
      ? 'v2-mask-top'
      : fade === 'bottom'
      ? 'v2-mask-bottom'
      : '';

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ''}`}
    >
      {/* Capa de puntos */}
      <div
        className={`absolute -inset-x-10 -inset-y-32 v2-dots ${fadeClass}`}
        style={{ transform: 'translateY(var(--dot-y, 0px))' }}
      />
      {/* Líneas finas horizontales decorativas */}
      <svg
        className={`absolute inset-0 h-full w-full ${fadeClass}`}
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
        style={{ transform: 'translateY(var(--line-y, 0px))' }}
      >
        <defs>
          <linearGradient id="v2-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--v2-line-strong)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--v2-line-strong)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--v2-line-strong)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="0" y1="180" x2="1200" y2="180" stroke="url(#v2-line-grad)" strokeWidth="1" />
        <line x1="0" y1="420" x2="1200" y2="420" stroke="url(#v2-line-grad)" strokeWidth="1" />
        <line x1="0" y1="640" x2="1200" y2="640" stroke="url(#v2-line-grad)" strokeWidth="1" />
      </svg>
    </div>
  );
}
