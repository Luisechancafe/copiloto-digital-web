'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Lang {
  code: 'ES' | 'EN' | 'CA' | 'EU';
  label: string;
  flag: string;
}

const LANGS: Lang[] = [
  { code: 'ES', label: 'Español', flag: '🇪🇸' },
  { code: 'EN', label: 'English', flag: '🇬🇧' },
  { code: 'CA', label: 'Català', flag: '🇪🇸' },
  { code: 'EU', label: 'Euskera', flag: '🇪🇸' }
];

/**
 * Selector de idioma — placeholder visual.
 * Solo ES funciona realmente; el resto se marca como "próximamente" en consola.
 */
export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Lang>(LANGS[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    if (open) {
      document.addEventListener('mousedown', onClick);
      return () => document.removeEventListener('mousedown', onClick);
    }
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Cambiar idioma"
        aria-expanded={open}
        className="flex h-9 items-center gap-1.5 rounded-full border px-3 text-sm font-medium transition-colors"
        style={{
          background: 'var(--v2-card)',
          borderColor: 'var(--v2-border)',
          color: 'var(--v2-fg)'
        }}
      >
        <span className="text-base leading-none" aria-hidden>
          {active.flag}
        </span>
        <span className="text-xs font-semibold tracking-wider">{active.code}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          style={{ color: 'var(--v2-fg-subtle)' }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full z-50 mt-2 w-[180px] overflow-hidden rounded-xl border p-1 shadow-2xl"
            style={{
              background: 'var(--v2-bg-elev)',
              borderColor: 'var(--v2-border-strong)'
            }}
          >
            {LANGS.map((lang) => {
              const isActive = lang.code === active.code;
              return (
                <li key={lang.code}>
                  <button
                    type="button"
                    onClick={() => {
                      setActive(lang);
                      setOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors"
                    style={{
                      background: isActive ? 'var(--v2-accent-soft)' : 'transparent',
                      color: isActive ? 'var(--v2-accent)' : 'var(--v2-fg)'
                    }}
                  >
                    <span className="text-base leading-none" aria-hidden>
                      {lang.flag}
                    </span>
                    <span className="font-semibold">{lang.code}</span>
                    <span
                      className="text-sm"
                      style={{
                        color: isActive ? 'var(--v2-accent)' : 'var(--v2-fg-muted)'
                      }}
                    >
                      {lang.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
