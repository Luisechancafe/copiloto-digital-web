# HANDOFF — copiloto-digital-web

> **Última sesión: 2026-05-03 (domingo tarde)** — sesión 21B + mini-fix R3F.
> Web pública nueva para `copiloto.digital`, hospedada en Vercel.

---

## Fix mini-sesión 2026-05-03 — bug ReactCurrentOwner en `npm run dev`

**Síntoma**: `Cannot read properties of undefined (reading 'ReactCurrentOwner')` al cargar la home en dev. Build de producción pasaba limpio.

**Causa real (no era Turbopack)**: `npm install` resolvió `@react-three/drei@^9.114.3` a `9.122.0`. A partir de drei 9.115+ el peer dep saltó a `react ^19` + `@react-three/fiber ^9`, así que con React 18.3 + R3F 8.18 los internals divergen y drei intenta leer una API que no existe.

**Fix aplicado**: pinear sin `^` a las versiones del lower bound original que sí coexisten:
- `@react-three/drei` → **9.114.3** (exacto)
- `@react-three/fiber` → **8.17.10** (exacto)
- `three` → **0.170.0** (exacto)

`--webpack` resultó innecesario tras el pin — Turbopack también compila limpio. `dev` script restaurado a `next dev` (Turbopack default, ~400ms ready).

**Si en el futuro se quiere subir a R3F 9 + drei 9.122+**: hay que migrar a React 19 (Next 16 ya lo soporta). Pequeña refactor de tipos en `Reveal.tsx` y revisión de `framer-motion` para asegurar compatibilidad. No urgente.

---

## URLs vivas

| Recurso | URL |
|---------|-----|
| **Web pública (Vercel)** | https://copiloto-digital-web.vercel.app |
| **GitHub repo** | https://github.com/Luisechancafe/copiloto-digital-web |
| **Vercel project** | https://vercel.com/luisechancafes-projects/copiloto-digital-web |
| Deploy URL específica | https://copiloto-digital-kqt752kkj-luisechancafes-projects.vercel.app (Auth Protected) |

**Verificado en producción:**
- `/` → 200 (title + description correctos)
- `/precios` → 200
- `/casos-de-uso/peluquerias` → 200
- `/sitemap.xml` → 200 (XML válido)
- `/robots.txt` → 200

---

## Estado actual

**Build de producción exitoso.** 13 páginas estáticas generadas. TypeScript estricto sin errores. Tamaños de bundle saludables. Next.js 16.2.4 (subido desde 15.0.3 por CVE bloqueante en Vercel).

| Página                                | Tamaño | First Load JS |
|---------------------------------------|--------|---------------|
| `/` (home)                            | 9.24 kB | 165 kB        |
| `/precios`                            | 3.92 kB | 159 kB        |
| `/contacto`                           | 2.95 kB | 158 kB        |
| `/casos-de-uso/*` (4 páginas)         | 582 B   | 149 kB        |
| `/sobre-nosotros`                     | 582 B   | 149 kB        |
| `/legal/*` (2 páginas)                | 574 B   | 149 kB        |
| `/_not-found`                         | 135 B   | 100 kB        |

---

## Lo que se construyó

### Stack final
- Next.js 15.0.3 + TypeScript 5.6 estricto
- Tailwind 3.4 con tokens custom (brand 50-950, ink 0-950, font sizes display/metric)
- Framer Motion 11 + Lenis 1.1 (smooth scroll)
- React Three Fiber 8 + Three.js 0.170 + @react-three/drei (hero particles)
- Lucide React + 6 iconos custom + 4 ilustraciones SVG por sector
- Space Grotesk (display) + Geist (sans/mono) vía `next/font/google`

### Páginas (10 + sitemap + robots)
- `/` — Home con 11 secciones (Hero 3D, LogoBar, Problema, Cómo funciona, 6 herramientas, Casos de uso, Números animados, Precios, Testimonios, FAQ, CTA final)
- `/precios` — Reutiliza PricingSection + tabla comparativa completa + FAQ específico
- `/casos-de-uso/{peluquerias|clinicas-dentales|inmobiliarias|gestorias}` — 4 verticales con UseCaseLayout reutilizable
- `/sobre-nosotros` — Historia, valores, equipo placeholder, "Hecho en Cataluña"
- `/contacto` — Form controlado con fallback mailto + aside con 4 canales
- `/legal/{privacidad|terminos}` — RGPD/LOPD MVP (TODO: revisar con abogado)
- `/not-found` — 404 elegante con halo brand

### Componentes globales
- `Header` con scroll-aware blur + menú móvil + lock body scroll
- `Footer` minimalista con 4 columnas + selector idioma placeholder + made in Granollers
- `SmoothScroll` — provider Lenis con respeto a `prefers-reduced-motion`
- `Logo` (mark + wordmark) — anillo orbital con dot acento
- 11 secciones reutilizables en `components/sections/`

### Visual / 3D
- `HeroVisual` (R3F) — 1500 partículas brand + 300 acento en distribución esférica con ruido. Rotación lenta + deformación sinusoidal + tilt sutil hacia el cursor. ssr:false, oculto <lg en móvil.
- `AmbientGlow` — halos CSS reutilizables (5 posiciones × 2 colores × 3 tamaños)
- 6 iconos custom (`WhatsAppIcon`, `LeadsIcon`, `CalendarIcon`, `RescueIcon`, `VoiceIcon`, `ContentIcon`) en viewBox 24 estilo Lucide
- 4 ilustraciones SVG abstractas (peluquerías, dentales, inmobiliarias, gestorías) viewBox 400x240 con gradientes brand
- `favicon.svg` y `og-image.svg` (1200x630)

### SEO técnico
- `metadata` API completa con OG + Twitter Cards en todas las páginas
- JSON-LD: Organization (root layout), Product + Offers + FAQPage (home)
- `sitemap.ts` dinámico con 10 rutas + prioridades + changefreq
- `robots.ts` dinámico apuntando al sitemap
- Canonical URLs configuradas

### Tono / copy
- Cero tecnicismos. Lenguaje de dueño de pyme española.
- Tutea siempre. Sin emojis (excepto FAQs/redes).
- Sin "Claude" ni "Anthropic" en ningún sitio.
- Microcopy de FAQ probado para resolver objeciones reales (privacidad, idioma, número actual, cancelación).

---

## Decisiones tomadas en autonomía

- **Carpeta del proyecto**: `/Volumes/LuiseDATA/CLAUDE/Proyectos/copiloto-digital-web/` (existía scaffold parcial; lo aproveché en lugar de crear `copiloto-digital-web-2`).
  Reversibilidad: trivial, mover carpeta y rehacer git remote.
- **Stack 3D usado**: React Three Fiber 8.17 + @react-three/drei 9.114 + three 0.170. R3F 8 (no 9) por compatibilidad con React 18 que ya tenía el package.json.
  Reversibilidad: actualizar a React 19 + R3F 9 cuando convenga.
- **Selector idioma del footer**: solo ES funciona. EN/CA/EU son placeholders visuales con tooltip "Próximamente".
  Reversibilidad: añadir `next-intl` o `next-i18next` en fase 2.
- **Form de contacto**: si `NEXT_PUBLIC_CONTACT_ENDPOINT` está vacío, el form abre `mailto:hola@copiloto.digital` con asunto y body prerellenados. Si se rellena con un endpoint Brevo/Resend, hace POST.
  Reversibilidad: cambiar variable en Vercel.
- **Testimonios mock**: 3 testimonios verosímiles con TODOs marcados. NO inventan métricas globales (solo testimoniales individuales).
  Reversibilidad: editar `TestimonialsSection.tsx`.
- **Métricas casos de uso**: marcadas con TODO de "validar con piloto real". Son rangos plausibles, no datos inventados.
- **Logo bar de la home**: 6 sectores genéricos en texto (no logos reales). TODO marcado.
- **Tema oscuro fijo**: sin toggle claro/oscuro. La home está pensada en dark; el modo claro habría duplicado el trabajo.
  Reversibilidad: añadir `next-themes` y duplicar tokens.
- **Página 404 sin cabecera/footer custom**: usa el layout normal. Suficiente para una landing.

---

## Pendiente de Luise

> La web ya está pública en `https://copiloto-digital-web.vercel.app`. Nada bloquea mandar el link a clientes en demo. Acciones para completar lanzamiento real:

### Inmediato (esta semana, demo con clientes)
1. **Abrir https://copiloto-digital-web.vercel.app y revisar todo** — desktop + móvil. Pasa por las 11 secciones, los 4 casos de uso, precios y contacto.
2. **Probar en iPhone** desde WhatsApp (abrir el link como lo abrirá un cliente). Las animaciones, el scroll, el form de contacto, el menú móvil.
3. **Revisar copy** — algunas frases pueden no encajar con tu voz. Edita libremente en `src/components/sections/` (home) o `src/app/*/page.tsx` (resto).

### Antes de cambiar el DNS de copiloto.digital
4. **Decidir cuándo cambiar DNS desde GoDaddy** (dominio actual sigue en Raiola apuntando a la web vieja).
5. **Añadir el dominio personalizado en Vercel**: Project Settings → Domains → Add `copiloto.digital` y `www.copiloto.digital`. Vercel mostrará las DNS records exactas que pedirá GoDaddy.
6. **Cambiar DNS en GoDaddy** según lo que diga Vercel (típicamente):
   - Tipo `A`, Nombre `@`, Valor `76.76.21.21`
   - Tipo `CNAME`, Nombre `www`, Valor `cname.vercel-dns.com`
7. **Esperar propagación DNS** (1-24h). Vercel emite SSL automático.

### Antes de exponer al público real
6. **Sustituir testimonios mock** por reales (3 cards en `TestimonialsSection.tsx` y 4 en `UseCaseLayout`).
7. **Sustituir foto/info del equipo** en `/sobre-nosotros` (placeholder con iniciales).
8. **Revisar legales con abogado** (`/legal/privacidad` y `/legal/terminos` — son MVP plausibles para España, no validados legalmente).
9. **Configurar Brevo o Resend** para el form de contacto y poner el endpoint en Vercel.
10. **Configurar GA4** y poner `NEXT_PUBLIC_GA_ID` (la layout lo lee pero no lo inyecta aún — añadir el snippet `<Script>` cuando tengamos ID).

---

## Cómo reanudar

```bash
cd /Volumes/LuiseDATA/CLAUDE/Proyectos/copiloto-digital-web
npm run dev   # http://localhost:3000
```

- Cambios al copy: editar archivos en `src/components/sections/` (home) o `src/app/*/page.tsx` (resto).
- Cambios al diseño base: tokens en `tailwind.config.ts` + utility classes en `src/styles/globals.css`.
- Push a `main` → Vercel deploya automático.

---

*Sesión 21B cerrada. Build verde. Listo para preview de Vercel.*
