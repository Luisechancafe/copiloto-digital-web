import { ThemeProvider } from '@/components/v2/ThemeProvider';
import { HeaderV2 } from '@/components/v2/HeaderV2';
import { FooterV2 } from '@/components/v2/FooterV2';
import { siteConfig } from '@/lib/site';

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div data-v2>
        <HeaderV2 />
        <main>{children}</main>
        <FooterV2 />
      </div>
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
    </ThemeProvider>
  );
}
