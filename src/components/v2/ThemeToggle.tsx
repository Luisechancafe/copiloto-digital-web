'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Evita hydration mismatch — render placeholder hasta que monte cliente.
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Cambiar tema"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--v2-border)] bg-[var(--v2-card)]"
      />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className="group relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-[var(--v2-border)] bg-[var(--v2-card)] text-[var(--v2-fg-muted)] transition-all duration-300 hover:border-[var(--v2-border-strong)] hover:text-[var(--v2-fg)]"
    >
      <Sun
        className={`absolute h-4 w-4 transition-all duration-500 ${
          isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-500 ${
          isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        }`}
      />
    </button>
  );
}
