import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/v2/ThemeProvider';
import { HeaderV2 } from '@/components/v2/HeaderV2';
import { FooterV2 } from '@/components/v2/FooterV2';

export const metadata: Metadata = {
  title: 'Propuesta v2 — Copiloto.Digital',
  description: 'Propuesta visual v2 estilo Attio (claro/oscuro)'
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div data-v2>
        <HeaderV2 />
        <main>{children}</main>
        <FooterV2 />
      </div>
    </ThemeProvider>
  );
}
