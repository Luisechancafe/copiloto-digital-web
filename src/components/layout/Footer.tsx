import Link from 'next/link';
import { Logo } from './Logo';
import { siteConfig } from '@/lib/site';

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: 'Producto',
    links: [
      { href: '/precios', label: 'Precios' },
      { href: `${siteConfig.appUrl}/onboarding`, label: 'Probar gratis' },
      { href: `${siteConfig.appUrl}/login`, label: 'Iniciar sesión' }
    ]
  },
  {
    title: 'Casos de uso',
    links: [
      { href: '/casos-de-uso/peluquerias', label: 'Peluquerías' },
      { href: '/casos-de-uso/clinicas-dentales', label: 'Clínicas dentales' },
      { href: '/casos-de-uso/inmobiliarias', label: 'Inmobiliarias' },
      { href: '/casos-de-uso/gestorias', label: 'Gestorías' }
    ]
  },
  {
    title: 'Empresa',
    links: [
      { href: '/sobre-nosotros', label: 'Sobre nosotros' },
      { href: '/contacto', label: 'Contacto' },
      { href: `mailto:${siteConfig.contactEmail}`, label: siteConfig.contactEmail }
    ]
  },
  {
    title: 'Legal',
    links: [
      { href: '/legal/privacidad', label: 'Privacidad' },
      { href: '/legal/terminos', label: 'Términos' }
    ]
  }
];

export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-white/[0.06] bg-ink-100">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_3fr]">
          <div className="max-w-sm">
            <Logo variant="wordmark" />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {siteConfig.tagline}. Hecho en {siteConfig.location}.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <LangPill code="ES" active />
              <LangPill code="EN" />
              <LangPill code="CA" />
              <LangPill code="EU" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/75 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/40">
            Made in {siteConfig.location}
          </p>
        </div>
      </div>
    </footer>
  );
}

function LangPill({ code, active = false }: { code: string; active?: boolean }) {
  if (active) {
    return (
      <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium tracking-wider text-white">
        {code}
      </span>
    );
  }
  return (
    <span
      className="inline-flex cursor-not-allowed items-center rounded-full border border-white/8 px-2.5 py-1 text-[11px] font-medium tracking-wider text-white/35"
      title="Próximamente"
    >
      {code}
    </span>
  );
}
