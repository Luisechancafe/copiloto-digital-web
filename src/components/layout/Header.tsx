'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { siteConfig } from '@/lib/site';
import { Logo } from './Logo';

const NAV = [
  { href: '/precios', label: 'Precios' },
  { href: '/casos-de-uso/peluquerias', label: 'Casos de uso' },
  { href: '/sobre-nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/[0.06] bg-ink-50/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Logo className="h-7 w-7" />
          <span className="font-display text-lg font-semibold tracking-tight">
            Copiloto<span className="text-brand-500">.Digital</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={siteConfig.links.appLogin}
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            Iniciar sesión
          </Link>
          <Link href={siteConfig.links.appSignup} className="btn-primary text-sm">
            Probar 30 días gratis
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-x-0 top-16 z-40 origin-top overflow-hidden bg-ink-50/95 backdrop-blur-xl transition-all duration-300 md:hidden',
          open ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="container-page flex flex-col gap-1 py-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-4 text-base font-medium text-white/85 transition-colors hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-6">
            <Link
              href={siteConfig.links.appLogin}
              onClick={() => setOpen(false)}
              className="btn-ghost"
            >
              Iniciar sesión
            </Link>
            <Link
              href={siteConfig.links.appSignup}
              onClick={() => setOpen(false)}
              className="btn-primary"
            >
              Probar 30 días gratis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
