'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Check, CheckCheck, Phone, Video } from 'lucide-react';

type Msg = {
  from: 'in' | 'out';
  text: string;
  time: string;
  /** ms hasta que aparece después del anterior */
  delay: number;
  typing?: boolean;
};

const SCRIPT: Msg[] = [
  { from: 'in', text: 'Hola! ¿Tenéis hueco mañana para corte y barba?', time: '20:14', delay: 800 },
  { from: 'out', text: '', time: '', delay: 1100, typing: true },
  { from: 'out', text: 'Hola Marc! 👋 Mañana tengo libre 11:00, 16:30 y 18:00. ¿Cuál te va mejor?', time: '20:14', delay: 1600 },
  { from: 'in', text: 'A las 18:00 perfecto', time: '20:15', delay: 1200 },
  { from: 'out', text: '✓ Reservado: mañana 18:00, corte + barba con Joan. Te mando recordatorio 1h antes 🙌', time: '20:15', delay: 1800 }
];

export function WhatsAppMockup() {
  const [visible, setVisible] = useState<number>(0);

  useEffect(() => {
    let cancelled = false;

    const cycle = async () => {
      while (!cancelled) {
        for (let i = 0; i < SCRIPT.length; i++) {
          if (cancelled) return;
          await new Promise((r) => setTimeout(r, SCRIPT[i].delay));
          if (cancelled) return;
          setVisible(i + 1);
        }
        // Pausa al final, luego reset y vuelta a empezar
        await new Promise((r) => setTimeout(r, 4500));
        if (cancelled) return;
        setVisible(0);
        await new Promise((r) => setTimeout(r, 800));
      }
    };

    cycle();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      className="relative mx-auto w-full max-w-[400px]"
      style={{
        filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.35))'
      }}
    >
      {/* Frame del teléfono */}
      <div
        className="relative overflow-hidden rounded-[34px] border"
        style={{
          background: 'var(--v2-mockup-bg)',
          borderColor: 'var(--v2-border-strong)'
        }}
      >
        {/* Header chat */}
        <div
          className="flex items-center gap-3 border-b px-4 py-3"
          style={{
            borderColor: 'var(--v2-border)',
            background: 'var(--v2-bg-soft)'
          }}
        >
          <div
            className="relative flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold"
            style={{
              background: 'var(--v2-accent)',
              color: '#fff'
            }}
          >
            B
            <span
              className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2"
              style={{
                background: '#22c55e',
                borderColor: 'var(--v2-mockup-bg)'
              }}
            />
          </div>
          <div className="flex flex-1 flex-col leading-tight">
            <span className="text-[15px] font-semibold" style={{ color: 'var(--v2-mockup-fg)' }}>
              Barbería Joan
            </span>
            <motion.span
              key={visible}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs"
              style={{ color: 'var(--v2-fg-subtle)' }}
            >
              {visible > 0 && SCRIPT[visible - 1]?.typing ? 'escribiendo…' : 'en línea'}
            </motion.span>
          </div>
          <Video className="h-5 w-5" style={{ color: 'var(--v2-fg-subtle)' }} />
          <Phone className="h-5 w-5" style={{ color: 'var(--v2-fg-subtle)' }} />
        </div>

        {/* Body chat */}
        <div className="relative h-[420px] overflow-hidden px-3 py-4">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: 'radial-gradient(circle, var(--v2-grid) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
            aria-hidden
          />
          <div className="relative flex flex-col gap-1.5">
            <AnimatePresence initial={false}>
              {SCRIPT.slice(0, visible).map((m, i) => (
                <Bubble key={i} msg={m} />
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Input bar (decorativa) */}
        <div
          className="flex items-center gap-2 border-t px-3 py-2.5"
          style={{
            borderColor: 'var(--v2-border)',
            background: 'var(--v2-bg-soft)'
          }}
        >
          <div
            className="flex-1 rounded-full px-4 py-2 text-sm"
            style={{
              background: 'var(--v2-mockup-bg)',
              color: 'var(--v2-fg-subtle)'
            }}
          >
            Mensaje
          </div>
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{ background: 'var(--v2-accent)' }}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Etiqueta flotante */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute -left-6 top-24 hidden rounded-2xl border px-3 py-2 backdrop-blur md:block"
        style={{
          background: 'color-mix(in srgb, var(--v2-bg) 90%, transparent)',
          borderColor: 'var(--v2-border-strong)'
        }}
      >
        <div className="flex items-center gap-2 text-xs">
          <span
            className="h-2 w-2 animate-pulse rounded-full"
            style={{ background: '#22c55e' }}
          />
          <span style={{ color: 'var(--v2-fg-muted)' }}>Copiloto activo</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute -right-8 bottom-32 hidden rounded-2xl border px-3 py-2 backdrop-blur md:block"
        style={{
          background: 'color-mix(in srgb, var(--v2-bg) 90%, transparent)',
          borderColor: 'var(--v2-border-strong)'
        }}
      >
        <div className="flex items-center gap-2 text-xs">
          <CheckCheck className="h-3.5 w-3.5" style={{ color: 'var(--v2-accent)' }} />
          <span style={{ color: 'var(--v2-fg-muted)' }}>Cita agendada</span>
        </div>
      </motion.div>
    </div>
  );
}

function Bubble({ msg }: { msg: Msg }) {
  const isOut = msg.from === 'out';

  if (msg.typing) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="self-start"
      >
        <div
          className="flex items-center gap-1 rounded-2xl rounded-bl-sm px-3 py-2.5"
          style={{ background: 'var(--v2-mockup-bubble-in)' }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: 'var(--v2-fg-subtle)' }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.18,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`flex max-w-[85%] flex-col ${isOut ? 'self-end items-end' : 'self-start items-start'}`}
    >
      <div
        className={`relative rounded-2xl px-3 py-2 text-[14px] leading-snug ${
          isOut ? 'rounded-br-sm' : 'rounded-bl-sm'
        }`}
        style={{
          background: isOut ? 'var(--v2-mockup-bubble-out)' : 'var(--v2-mockup-bubble-in)',
          color: 'var(--v2-mockup-fg)'
        }}
      >
        {msg.text}
      </div>
      <div className="mt-0.5 flex items-center gap-1 px-1 text-[10px]" style={{ color: 'var(--v2-fg-subtle)' }}>
        <span>{msg.time}</span>
        {isOut && <Check className="h-3 w-3" />}
      </div>
    </motion.div>
  );
}
