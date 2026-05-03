import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Geist, Geist_Mono } from 'next/font/google';
import { siteConfig } from '@/lib/site';
import '@/styles/globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap'
});

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap'
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'asistente IA WhatsApp',
    'automatización WhatsApp negocio',
    'CRM con IA',
    'recepcionista IA España',
    'chatbot peluquería',
    'chatbot clínica dental',
    'chatbot inmobiliaria',
    'chatbot gestoría',
    'IA pequeñas empresas',
    'Granollers',
    'Vallès Oriental',
    'Barcelona'
  ],
  authors: [{ name: 'Copiloto.Digital' }],
  creator: 'Copiloto.Digital',
  publisher: 'Copiloto.Digital',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitter
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: { canonical: siteConfig.url }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0c' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
