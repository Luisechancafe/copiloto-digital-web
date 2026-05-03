'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  WhatsAppIcon,
  LeadsIcon,
  CalendarIcon,
  RescueIcon,
  VoiceIcon,
  ContentIcon
} from '@/components/icons/ToolIcons';
import { WordReveal } from './WordReveal';

type Tool = {
  key: string;
  label: string;
  title: string;
  body: string;
  Icon: (props: { className?: string }) => JSX.Element;
};

const TOOLS: Tool[] = [
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    title: 'Tu negocio responde solo en WhatsApp',
    body: 'Atiende a cada cliente 24/7 como si tuvieras un equipo de 10 personas. Detecta idioma, recuerda contexto y aprende de cada conversación.',
    Icon: WhatsAppIcon
  },
  {
    key: 'leads',
    label: 'Captación',
    title: 'Recoge contactos sin que tú hagas nada',
    body: 'Cada conversación se convierte en una ficha en tu CRM. Score automático de calidad. Filtros por sector, presupuesto y urgencia.',
    Icon: LeadsIcon
  },
  {
    key: 'agenda',
    label: 'Agenda',
    title: 'Apunta citas y manda recordatorios',
    body: 'Tu calendario se llena solo. Conecta con Google Calendar, Outlook o tu sistema actual. Confirmaciones y recordatorios automáticos.',
    Icon: CalendarIcon
  },
  {
    key: 'rescue',
    label: 'Recupera',
    title: 'Vuelve a hablar con los que se enfriaron',
    body: 'Detecta clientes inactivos y les manda un mensaje justo a tiempo. Mensajes personalizados según historial. 30% más recuperación media.',
    Icon: RescueIcon
  },
  {
    key: 'voice',
    label: 'Voz IA',
    title: 'Contesta tus llamadas como un humano',
    body: 'Habla por teléfono con tus clientes en español natural. Toma datos, agenda, deriva al humano si hace falta. Número español propio.',
    Icon: VoiceIcon
  },
  {
    key: 'content',
    label: 'Contenido',
    title: 'Crea publicaciones para redes sociales',
    body: 'Posts, captions e ideas listos para publicar. Calendario editorial automático. Adapta tu tono y estilo a cada red.',
    Icon: ContentIcon
  }
];

export function ToolsSectionV2() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      id="herramientas"
      ref={ref}
      className="relative py-32 md:py-40"
      style={{ background: 'var(--v2-bg-soft)' }}
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="max-w-3xl">
          <span
            className="text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: 'var(--v2-accent)' }}
          >
            Las 6 herramientas
          </span>
          <div className="mt-6">
            <WordReveal
              text="Una sola suscripción. Seis copilotos."
              by="word"
              highlight={['Seis', 'copilotos.']}
              as="h2"
              className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
            />
          </div>
        </div>

        {/* Tabs horizontales */}
        <div className="mt-16 flex flex-wrap gap-2 border-b" style={{ borderColor: 'var(--v2-border)' }}>
          {TOOLS.map((tool, i) => (
            <button
              key={tool.key}
              type="button"
              onClick={() => setActive(i)}
              className="relative px-4 py-3 text-sm font-medium transition-colors"
              style={{
                color: active === i ? 'var(--v2-fg)' : 'var(--v2-fg-subtle)'
              }}
            >
              {tool.label}
              {active === i && (
                <motion.span
                  layoutId="tool-tab-underline"
                  className="absolute inset-x-0 -bottom-px h-0.5"
                  style={{ background: 'var(--v2-accent)' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Panel activo */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <motion.div
            key={TOOLS[active].key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3
              className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
              style={{ color: 'var(--v2-fg)' }}
            >
              {TOOLS[active].title}
            </h3>
            <p
              className="mt-6 text-lg leading-relaxed"
              style={{ color: 'var(--v2-fg-muted)' }}
            >
              {TOOLS[active].body}
            </p>
          </motion.div>

          <ToolPreview Icon={TOOLS[active].Icon} label={TOOLS[active].label} />
        </div>

        {/* Grid mini-cards de las 6 (siempre visibles) */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool, i) => (
            <MiniCard
              key={tool.key}
              tool={tool}
              isActive={active === i}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolPreview({
  Icon,
  label
}: {
  Icon: (p: { className?: string }) => JSX.Element;
  label: string;
}) {
  return (
    <motion.div
      key={label}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="v2-glow-card relative aspect-[4/3] overflow-hidden p-10"
    >
      <div className="absolute inset-0 v2-grid opacity-50" aria-hidden />
      <div className="relative flex h-full flex-col justify-between">
        <span
          className="text-xs font-medium uppercase tracking-widest"
          style={{ color: 'var(--v2-fg-subtle)' }}
        >
          Preview
        </span>
        <div className="flex items-center justify-center">
          <div
            className="flex h-28 w-28 items-center justify-center rounded-3xl"
            style={{ background: 'var(--v2-accent-soft)' }}
          >
            <Icon className="h-14 w-14" />
          </div>
        </div>
        <span
          className="text-sm font-medium"
          style={{ color: 'var(--v2-fg-muted)' }}
        >
          {label}
        </span>
      </div>
    </motion.div>
  );
}

function MiniCard({
  tool,
  isActive,
  onClick
}: {
  tool: Tool;
  isActive: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="v2-glow-card group p-6 text-left"
      style={{
        borderColor: isActive ? 'var(--v2-accent)' : 'var(--v2-border)'
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors"
          style={{
            background: 'var(--v2-accent-soft)',
            color: 'var(--v2-accent)'
          }}
        >
          <tool.Icon className="h-5 w-5" />
        </div>
        <div>
          <h4
            className="font-display text-base font-semibold"
            style={{ color: 'var(--v2-fg)' }}
          >
            {tool.label}
          </h4>
          <p
            className="mt-1 text-sm leading-relaxed line-clamp-2"
            style={{ color: 'var(--v2-fg-muted)' }}
          >
            {tool.body}
          </p>
        </div>
      </div>
    </motion.button>
  );
}
