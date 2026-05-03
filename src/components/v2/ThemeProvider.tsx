'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface Props {
  children: React.ReactNode;
}

/**
 * Provider de tema para v2. next-themes pone `data-theme` en <html>.
 * El CSS de v2 lee `html[data-theme='light'] [data-v2]` para aislar
 * (v1 no usa data-theme y queda hardcoded oscuro).
 */
export function ThemeProvider({ children }: Props) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="theme-v2"
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
