'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { LogoV2 } from './LogoV2';
import { siteConfig } from '@/lib/site';

const NAV = [
  { href: '/v2/consultoria', label: 'Consultoría' },
  { href: '/v2/casos-de-uso/peluquerias', label: 'Casos de uso' },
  { href: '/v2/precios', label: 'Precios' },
  { href: '/v2/contacto', label: 'Contacto' }
];

export function HeaderV2() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'color-mix(in srgb, var(--v2-bg) 80%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--v2-border)' : '1px solid transparent'
      }}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:h-[68px] md:px-8">
        <Link
          href="/v2"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <LogoV2 className="h-7 w-7" />
          <span
            className="font-display text-[15px] font-semibold tracking-tight"
            style={{ color: 'var(--v2-fg)' }}
          >
            Copiloto<span style={{ color: 'var(--v2-accent)' }}>.Digital</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm transition-colors"
              style={{ color: 'var(--v2-fg-muted)' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          <Link
            href="/v2/diagnostico"
            className="v2-btn-ghost hidden text-sm md:inline-flex"
            style={{ padding: '0.5rem 1rem' }}
          >
            Diagnóstico gratuito
          </Link>
          <Link href={siteConfig.links.app} className="v2-btn-primary text-sm">
            <span className="hidden sm:inline">Entrar a la app</span>
            <span className="sm:hidden">App</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full md:hidden"
            style={{
              border: '1px solid var(--v2-border)',
              background: 'var(--v2-card)',
              color: 'var(--v2-fg)'
            }}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className="fixed inset-x-0 top-16 z-40 origin-top overflow-hidden transition-all duration-300 md:hidden"
        style={{
          maxHeight: open ? '100vh' : '0',
          opacity: open ? 1 : 0,
          background: 'color-mix(in srgb, var(--v2-bg) 95%, transparent)',
          backdropFilter: 'blur(14px)'
        }}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-4 text-base font-medium transition-colors"
              style={{ color: 'var(--v2-fg)' }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/v2/diagnostico"
            onClick={() => setOpen(false)}
            className="v2-btn-ghost mt-3 justify-center"
          >
            Diagnóstico gratuito
          </Link>
          <div className="mt-3 flex items-center justify-between gap-2">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
