'use client';

import { useState } from 'react';
import { Check, Send } from 'lucide-react';
import { siteConfig } from '@/lib/site';

const SECTORS = [
  'Peluquería / barbería',
  'Clínica dental',
  'Inmobiliaria',
  'Gestoría / asesoría',
  'Restaurante',
  'Autoescuela',
  'Reformas',
  'Otro'
];

export function ContactFormV2() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
    if (endpoint) {
      void fetch(endpoint, { method: 'POST', body: fd });
    } else {
      const subject = encodeURIComponent('[Web] Contacto desde copiloto.digital');
      const body = encodeURIComponent(
        `Nombre: ${fd.get('name')}\nEmail: ${fd.get('email')}\nEmpresa: ${fd.get('company')}\nSector: ${fd.get('sector')}\n\n${fd.get('message')}`
      );
      window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="v2-card flex flex-col items-center gap-4 p-12 text-center">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full"
          style={{ background: 'var(--v2-accent-soft)', color: 'var(--v2-accent)' }}
        >
          <Check className="h-7 w-7" />
        </div>
        <h3 className="font-display text-2xl font-semibold" style={{ color: 'var(--v2-fg)' }}>
          Mensaje enviado
        </h3>
        <p className="max-w-sm text-base" style={{ color: 'var(--v2-fg-muted)' }}>
          Te respondemos en menos de 4 horas en horario laboral.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="v2-card flex flex-col gap-5 p-8">
      <Field name="name" label="Nombre" required />
      <Field name="email" label="Email" type="email" required />
      <Field name="company" label="Empresa" />
      <SelectField name="sector" label="Sector" options={SECTORS} required />
      <TextareaField name="message" label="Cuéntanos brevemente" required />
      <button type="submit" className="v2-btn-primary mt-2 justify-center text-sm">
        Enviar mensaje
        <Send className="h-4 w-4" />
      </button>
      <p className="text-xs" style={{ color: 'var(--v2-fg-subtle)' }}>
        Solo usamos tus datos para responderte. Cero spam.
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  type = 'text',
  required
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--v2-fg-subtle)' }}>
        {label}
        {required && <span style={{ color: 'var(--v2-accent)' }}> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:ring-2"
        style={{
          background: 'var(--v2-bg)',
          color: 'var(--v2-fg)',
          border: '1px solid var(--v2-border)'
        }}
      />
    </label>
  );
}

function SelectField({
  name,
  label,
  options,
  required
}: {
  name: string;
  label: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--v2-fg-subtle)' }}>
        {label}
        {required && <span style={{ color: 'var(--v2-accent)' }}> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:ring-2"
        style={{
          background: 'var(--v2-bg)',
          color: 'var(--v2-fg)',
          border: '1px solid var(--v2-border)'
        }}
      >
        <option value="" disabled>
          Elige sector
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  name,
  label,
  required
}: {
  name: string;
  label: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--v2-fg-subtle)' }}>
        {label}
        {required && <span style={{ color: 'var(--v2-accent)' }}> *</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={5}
        className="rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:ring-2"
        style={{
          background: 'var(--v2-bg)',
          color: 'var(--v2-fg)',
          border: '1px solid var(--v2-border)'
        }}
      />
    </label>
  );
}
