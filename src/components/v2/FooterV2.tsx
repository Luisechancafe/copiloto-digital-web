import Link from 'next/link';
import { LogoV2 } from './LogoV2';
import { siteConfig } from '@/lib/site';

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: 'Producto',
    links: [
      { href: '/v2', label: 'Visión' },
      { href: '/v2/precios', label: 'Precios' },
      { href: '/v2/precios#comparar', label: 'Comparar planes' }
    ]
  },
  {
    title: 'Casos de uso',
    links: [
      { href: '/v2/casos-de-uso/peluquerias', label: 'Peluquerías' },
      { href: '/v2/casos-de-uso/clinicas-dentales', label: 'Clínicas dentales' },
      { href: '/v2/casos-de-uso/inmobiliarias', label: 'Inmobiliarias' },
      { href: '/v2/casos-de-uso/gestorias', label: 'Gestorías' }
    ]
  },
  {
    title: 'Empresa',
    links: [
      { href: '/v2/sobre-nosotros', label: 'Sobre nosotros' },
      { href: '/v2/contacto', label: 'Contacto' },
      { href: `mailto:${siteConfig.contactEmail}`, label: siteConfig.contactEmail }
    ]
  },
  {
    title: 'Legal',
    links: [
      { href: '/v2/legal/privacidad', label: 'Privacidad' },
      { href: '/v2/legal/terminos', label: 'Términos' }
    ]
  }
];

export function FooterV2() {
  return (
    <footer
      className="relative mt-12 border-t"
      style={{
        borderColor: 'var(--v2-border)',
        background: 'var(--v2-bg-soft)'
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_3fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <LogoV2 className="h-7 w-7" />
              <span
                className="font-display text-[15px] font-semibold tracking-tight"
                style={{ color: 'var(--v2-fg)' }}
              >
                Copiloto
                <span style={{ color: 'var(--v2-accent)' }}>.Digital</span>
              </span>
            </div>
            <p
              className="mt-5 text-sm leading-relaxed"
              style={{ color: 'var(--v2-fg-muted)' }}
            >
              El copiloto IA para tu negocio local. Hecho en {siteConfig.location}.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: 'var(--v2-fg-subtle)' }}
                >
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm transition-colors hover:underline"
                        style={{ color: 'var(--v2-fg-muted)' }}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-16 flex flex-col items-start justify-between gap-3 border-t pt-8 sm:flex-row sm:items-center"
          style={{ borderColor: 'var(--v2-border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--v2-fg-subtle)' }}>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: 'var(--v2-fg-subtle)' }}>
            Made in {siteConfig.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
