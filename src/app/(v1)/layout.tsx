import { siteConfig } from '@/lib/site';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-ink-50 text-white">
      <SmoothScroll>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </SmoothScroll>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
            logo: `${siteConfig.url}/logo.svg`,
            description: siteConfig.description,
            email: siteConfig.contactEmail,
            telephone: siteConfig.contactPhone,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Granollers',
              addressRegion: 'Cataluña',
              addressCountry: 'ES'
            },
            sameAs: ['https://www.linkedin.com/in/luise-chancafe/']
          })
        }}
      />
    </div>
  );
}
