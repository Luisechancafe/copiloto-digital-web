'use client';

import { useEffect, useRef } from 'react';

/**
 * Cursor "spotlight" — un círculo radial muy difuminado que sigue al puntero.
 * Solo desktop, solo cuando el cursor está dentro del contenedor padre.
 * Da sensación de que la web "sigue" al usuario, micro-wow.
 */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return; // móvil/tablet → no

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    let visible = false;

    const parent = el.parentElement;
    if (!parent) return;

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      if (!visible) {
        visible = true;
        el.style.opacity = '1';
      }
    };
    const onLeave = () => {
      visible = false;
      el.style.opacity = '0';
    };

    parent.addEventListener('mousemove', onMove);
    parent.addEventListener('mouseleave', onLeave);

    const tick = () => {
      curX += (targetX - curX) * 0.12;
      curY += (targetY - curY) * 0.12;
      el.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      parent.removeEventListener('mousemove', onMove);
      parent.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] rounded-full opacity-0 transition-opacity duration-500"
      style={{
        background:
          'radial-gradient(circle, var(--v2-accent-soft) 0%, transparent 60%)',
        mixBlendMode: 'screen'
      }}
    />
  );
}
