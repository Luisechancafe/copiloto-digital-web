# Copiloto.Digital — Web pública

Landing oficial de [copiloto.digital](https://copiloto.digital). Estilo Attio.com con animaciones cinematográficas. Construida en Next.js 15 + TypeScript + Tailwind + Framer Motion + React Three Fiber.

## Stack

- **Framework**: Next.js 15 (App Router) + TypeScript estricto
- **Estilos**: Tailwind CSS 3 con tokens propios (brand + ink) + variables CSS
- **Animaciones**: Framer Motion 11 + Lenis (smooth scroll)
- **3D**: React Three Fiber 8 + Three.js 0.170 + @react-three/drei (hero hero particles)
- **Iconos**: Lucide React + iconos custom (`src/components/icons/ToolIcons.tsx`)
- **Fonts**: Space Grotesk (display) + Geist (sans + mono) vía `next/font/google`
- **SEO**: metadata API + sitemap + robots + JSON-LD (Organization, Product, FAQ)

## Estructura

```
src/
├── app/                    Rutas App Router
│   ├── layout.tsx          Root layout con fonts, providers, SEO base
│   ├── page.tsx            Home (11 secciones)
│   ├── precios/            Precios + comparativa + FAQ
│   ├── casos-de-uso/       4 sectores: peluquerías, clínicas, inmobiliarias, gestorías
│   ├── sobre-nosotros/
│   ├── contacto/           Form + mailto fallback
│   ├── legal/              Privacidad + Términos
│   ├── not-found.tsx       404
│   ├── sitemap.ts          Sitemap dinámico
│   └── robots.ts           Robots dinámico
├── components/
│   ├── layout/             Header, Footer, Logo, SmoothScroll (Lenis)
│   ├── sections/           Las 11 secciones de la home
│   ├── ui/                 Button, Reveal, RevealStagger, CountUp, SectionHeader
│   ├── 3d/                 HeroVisual (R3F) + AmbientGlow (CSS halos)
│   ├── icons/              ToolIcons (6 iconos custom)
│   ├── illustrations/      SectorIllustrations (4 SVG abstractas)
│   ├── pricing/            PricingComparison + PricingFaq
│   ├── use-cases/          UseCaseLayout reutilizable
│   ├── contact/            ContactForm
│   └── shared/             PageCta
├── lib/
│   ├── cn.ts               clsx + tailwind-merge helper
│   └── site.ts             siteConfig (URLs, contacto, etc.)
└── styles/
    └── globals.css         Tokens, base styles, utility classes (.btn-primary, .card-dark, etc.)
public/
├── favicon.svg
└── og-image.svg            1200×630 OG image
```

## Comandos

```bash
npm install          # Instala dependencias (151 paquetes)
npm run dev          # Servidor de desarrollo en http://localhost:3000
npm run build        # Build de producción
npm run start        # Servir el build de producción
npm run typecheck    # tsc --noEmit
npm run lint         # eslint
```

## Variables de entorno

Copia `.env.example` a `.env.local` y rellena (todas opcionales con valores por defecto):

```bash
NEXT_PUBLIC_APP_URL=https://ia.copiloto.digital
NEXT_PUBLIC_SITE_URL=https://copiloto.digital
NEXT_PUBLIC_CONTACT_EMAIL=hola@copiloto.digital
NEXT_PUBLIC_CONTACT_ENDPOINT=             # opcional, si vacío el form usa mailto:
NEXT_PUBLIC_GA_ID=                        # opcional, GA4
```

## Despliegue

1. Push a `main` → deploy automático en Vercel
2. Vercel project: `copiloto-digital-web`
3. Dominio: `copiloto.digital` (cuando se cambie DNS desde GoDaddy)

### DNS en GoDaddy (cuando se quiera apuntar copiloto.digital al nuevo deploy)

| Tipo  | Nombre | Valor                  |
|-------|--------|------------------------|
| A     | `@`    | `76.76.21.21`          |
| CNAME | `www`  | `cname.vercel-dns.com` |

## Decisiones de diseño

- **Tema oscuro premium** (Linear/Vercel-style) con accent rojo brand `#e61f3e`.
- **Sin imágenes de stock**: todo SVG abstracto + 3D generado por código.
- **Lenguaje humano**: cero tecnicismos. Habla como dueño de pyme, no como CTO.
- **Performance crítica**: First Load JS ~165 kB en home (con 3D), <150 kB en páginas estáticas.
- **Mobile-first**: 3D oculto <lg, animaciones simplificadas en móvil.
- **Accesibilidad**: respeta `prefers-reduced-motion` en TODAS las animaciones (Lenis, Framer Motion, Three.js).

## Lo que NO está

- Testimonios reales (mocks marcados con `TODO` — sustituir cuando haya clientes)
- Foto del equipo real (placeholder con iniciales)
- Internacionalización (selector ES/EN/CA/EU es placeholder visual)
- Blog (planificado para fase 2)
- Análisis (GA4 wireado pero ID vacío — añadir al deployar)

Ver `HANDOFF.md` para estado completo y próximos pasos.
