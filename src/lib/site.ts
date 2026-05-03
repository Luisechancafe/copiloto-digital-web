export const siteConfig = {
  name: 'Copiloto.Digital',
  tagline: 'El copiloto IA para tu negocio local',
  description:
    'Tu negocio responde solo en WhatsApp, agenda citas, recupera clientes y publica en redes. Sin que tú hagas nada.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://copiloto.digital',
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? 'https://ia.copiloto.digital',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hola@copiloto.digital',
  contactPhone: '+34 642 70 39 39',
  location: 'Granollers, Cataluña',
  ogImage: '/og-image.png',
  twitter: '@copilotodigital',
  links: {
    app: process.env.NEXT_PUBLIC_APP_URL ?? 'https://ia.copiloto.digital',
    appLogin: `${process.env.NEXT_PUBLIC_APP_URL ?? 'https://ia.copiloto.digital'}/login`,
    appSignup: `${process.env.NEXT_PUBLIC_APP_URL ?? 'https://ia.copiloto.digital'}/onboarding`
  }
} as const;

export type SiteConfig = typeof siteConfig;
