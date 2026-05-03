import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { LogoBar } from '@/components/sections/LogoBar';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { ToolsSection } from '@/components/sections/ToolsSection';
import { UseCasesSection } from '@/components/sections/UseCasesSection';
import { NumbersSection } from '@/components/sections/NumbersSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { FinalCtaSection } from '@/components/sections/FinalCtaSection';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url }
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoBar />
      <ProblemSection />
      <HowItWorksSection />
      <ToolsSection />
      <UseCasesSection />
      <NumbersSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
      {/* JSON-LD para FAQs y Producto */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: siteConfig.name,
            description: siteConfig.description,
            brand: { '@type': 'Brand', name: siteConfig.name },
            offers: [
              {
                '@type': 'Offer',
                name: 'Plan Básico',
                price: '59',
                priceCurrency: 'EUR',
                priceSpecification: {
                  '@type': 'UnitPriceSpecification',
                  price: '59',
                  priceCurrency: 'EUR',
                  unitText: 'MONTH'
                }
              },
              {
                '@type': 'Offer',
                name: 'Plan Pro',
                price: '119',
                priceCurrency: 'EUR',
                priceSpecification: {
                  '@type': 'UnitPriceSpecification',
                  price: '119',
                  priceCurrency: 'EUR',
                  unitText: 'MONTH'
                }
              },
              {
                '@type': 'Offer',
                name: 'Plan Élite',
                price: '249',
                priceCurrency: 'EUR',
                priceSpecification: {
                  '@type': 'UnitPriceSpecification',
                  price: '249',
                  priceCurrency: 'EUR',
                  unitText: 'MONTH'
                }
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Cuánto tiempo lleva configurarlo?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Una tarde. Te guiamos paso a paso. La mayoría de negocios están en marcha en menos de 3 horas.'
                }
              },
              {
                '@type': 'Question',
                name: '¿Necesito saber tecnología?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Si sabes usar WhatsApp, sabes usar tu copiloto. Lo demás lo hacemos nosotros.'
                }
              },
              {
                '@type': 'Question',
                name: '¿Mis datos están seguros?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sí. Cumplimos RGPD, datos en servidores europeos, conversaciones cifradas. Nunca compartimos información con terceros.'
                }
              },
              {
                '@type': 'Question',
                name: '¿Funciona en catalán?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sí. Atiende en castellano, catalán, inglés, francés y portugués. Tu copiloto detecta el idioma del cliente y responde en el suyo.'
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
