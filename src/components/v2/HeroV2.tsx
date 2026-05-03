'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { RotatingWord } from './RotatingWord';
import { WaveLines } from './WaveLines';
import { Spotlight } from './Spotlight';
import { Marquee } from './Marquee';
import { WhatsAppMockup } from './WhatsAppMockup';
import { siteConfig } from '@/lib/site';

const ROTATING_WORDS = ['WhatsApp', 'la agenda', 'las llamadas', 'las redes', 'los clientes'];

export function HeroV2() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
      style={{ background: 'var(--v2-bg)' }}
    >
      {/* Ondas animadas continuas (la firma de Attio /platform/ask) */}
      <WaveLines count={4} speed={0.5} amplitude={70} accentIndex={1} className="v2-mask-radial" />

      {/* Cursor spotlight */}
      <Spotlight />

      {/* Halo brand sutil */}
      <div
        className="v2-halo h-[700px] w-[700px]"
        style={{
          top: '-200px',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 0.35
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-8">
        {/* Hero copy + mockup en grid */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-20">
          <div>
            {/* Tag superior */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="v2-tag">
                <Sparkles className="h-3 w-3" style={{ color: 'var(--v2-accent)' }} />
                Nuevo · 30 días gratis sin tarjeta
              </span>
            </motion.div>

            {/* Título principal */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display font-semibold leading-[1.02] tracking-tight"
              style={{
                color: 'var(--v2-fg)',
                fontSize: 'clamp(2.75rem, 5.5vw, 5.5rem)',
                letterSpacing: '-0.045em'
              }}
            >
              Tu negocio responde
              <br />
              solo en{' '}
              <RotatingWord words={ROTATING_WORDS} />
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-xl text-lg leading-relaxed md:text-xl"
              style={{ color: 'var(--v2-fg-muted)' }}
            >
              Un copiloto IA que atiende, agenda, recupera clientes y publica en
              redes. Tú dedícate a lo que sí importa.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
              <Link href={siteConfig.links.appSignup} className="v2-btn-primary group justify-center text-base">
                Probar 30 días gratis
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#herramientas" className="v2-btn-ghost justify-center text-base">
                Ver cómo funciona
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 text-sm"
              style={{ color: 'var(--v2-fg-subtle)' }}
            >
              Sin tarjeta · Sin compromisos · Cancela en un clic
            </motion.p>
          </div>

          {/* Mockup WhatsApp animado */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <WhatsAppMockup />
          </motion.div>
        </div>

        {/* Logo bar marquee inferior */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-24"
        >
          <p
            className="text-center text-xs uppercase tracking-widest"
            style={{ color: 'var(--v2-fg-subtle)' }}
          >
            Hecho para
          </p>
          <Marquee
            className="mt-6"
            duration={32}
            items={[
              'Peluquerías',
              'Clínicas dentales',
              'Inmobiliarias',
              'Gestorías',
              'Restaurantes',
              'Autoescuelas',
              'Estéticas',
              'Reformas',
              'Talleres',
              'Asesorías'
            ]}
          />
        </motion.div>
      </div>
    </section>
  );
}
