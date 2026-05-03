import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/v2/PageHero';
import {
  ServicesGrid,
  CopilotPhilosophy,
  ProcessSteps,
  Differentiators,
  SectorsWorked
} from '@/components/v2/ConsultoriaSections';
import { FinalCtaV2 } from '@/components/v2/FinalCtaV2';

export const metadata: Metadata = {
  title: 'Consultoría — Copiloto.Digital',
  description: 'Del diagnóstico a la ejecución. Marketing, Amazon e IA bajo una sola estrategia.'
};

export default function V2ConsultoriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultoría"
        title="Del diagnóstico a la ejecución. Bajo una sola estrategia."
        highlight={['ejecución.', 'estrategia.']}
        subtitle="La plataforma automatiza operaciones diarias mientras la consultoría diseña la estrategia. Servicios independientes o integrados — sin proveedores que no se hablan entre sí."
      >
        <Link href="/v2/diagnostico" className="v2-btn-primary group justify-center text-base">
          Diagnóstico gratuito
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link href="/v2/contacto" className="v2-btn-ghost justify-center text-base">
          Hablemos directamente
        </Link>
      </PageHero>

      <ServicesGrid />
      <CopilotPhilosophy />
      <ProcessSteps />
      <Differentiators />
      <SectorsWorked />
      <FinalCtaV2 />
    </>
  );
}
