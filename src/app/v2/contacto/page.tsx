import type { Metadata } from 'next';
import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { PageHero } from '@/components/v2/PageHero';
import { ContactFormV2 } from '@/components/v2/ContactFormV2';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contacto — Copiloto.Digital'
};

export default function V2ContactoPage() {
  const wa = siteConfig.contactPhone.replace(/\s|\+/g, '');
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos."
        subtitle="Te respondemos en menos de 4 horas en horario laboral."
      />

      <section className="pb-24 pt-8 md:pb-32" style={{ background: 'var(--v2-bg)' }}>
        <div className="mx-auto grid w-full max-w-5xl gap-12 px-6 md:grid-cols-[1.4fr_1fr] md:gap-16 md:px-8">
          <ContactFormV2 />
          <aside className="flex flex-col gap-4">
            <Card Icon={Mail} title="Email" body={siteConfig.contactEmail} href={`mailto:${siteConfig.contactEmail}`} />
            <Card Icon={MessageCircle} title="WhatsApp" body={siteConfig.contactPhone} href={`https://wa.me/${wa}`} external />
            <Card Icon={MapPin} title="Ubicación" body={siteConfig.location} />
            <Card Icon={Clock} title="Horario" body="Lun–Vie · 9:00–18:00" />
          </aside>
        </div>
      </section>
    </>
  );
}

function Card({
  Icon,
  title,
  body,
  href,
  external
}: {
  Icon: typeof Mail;
  title: string;
  body: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="v2-card p-6">
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ background: 'var(--v2-accent-soft)', color: 'var(--v2-accent)' }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--v2-fg-subtle)' }}>
            {title}
          </p>
          <p className="mt-0.5 text-sm font-medium" style={{ color: 'var(--v2-fg)' }}>
            {body}
          </p>
        </div>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
        {content}
      </a>
    );
  }
  return content;
}
