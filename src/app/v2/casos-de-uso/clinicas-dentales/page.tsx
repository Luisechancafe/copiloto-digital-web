import type { Metadata } from 'next';
import { UseCaseLayoutV2 } from '@/components/v2/UseCaseLayoutV2';
import { FinalCtaV2 } from '@/components/v2/FinalCtaV2';
import { USE_CASES } from '@/data/v2-use-cases';

export const metadata: Metadata = {
  title: 'Clínicas dentales — Asistente IA WhatsApp'
};

export default function V2ClinicasPage() {
  const data = USE_CASES['clinicas-dentales'];
  return (
    <>
      <UseCaseLayoutV2 sector={data.sector} hero={data.hero} steps={[...data.steps]} metrics={[...data.metrics]} testimonial={data.testimonial} />
      <FinalCtaV2 />
    </>
  );
}
