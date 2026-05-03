import { HeroV2 } from '@/components/v2/HeroV2';
import { SectorsGrid } from '@/components/v2/SectorsGrid';
import { ProblemSectionV2 } from '@/components/v2/ProblemSectionV2';
import { ToolsSectionV2 } from '@/components/v2/ToolsSectionV2';
import { NumbersSectionV2 } from '@/components/v2/NumbersSectionV2';
import { PricingSectionV2 } from '@/components/v2/PricingSectionV2';
import { FinalCtaV2 } from '@/components/v2/FinalCtaV2';

export default function V2HomePage() {
  return (
    <>
      <HeroV2 />
      <SectorsGrid />
      <ProblemSectionV2 />
      <ToolsSectionV2 />
      <NumbersSectionV2 />
      <PricingSectionV2 />
      <FinalCtaV2 />
    </>
  );
}
