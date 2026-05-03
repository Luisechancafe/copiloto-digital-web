'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { cn } from '@/lib/cn';
import { siteConfig } from '@/lib/site';

const sectors = [
  'Peluquería o barbería',
  'Clínica dental',
  'Inmobiliaria',
  'Gestoría o asesoría',
  'Restauración',
  'Centro de estética',
  'Servicios profesionales',
  'Otro'
] as const;

type Status = 'idle' | 'sending' | 'success' | 'error';

interface FormState {
  name: string;
  email: string;
  company: string;
  sector: string;
  message: string;
}

const initial: FormState = {
  name: '',
  email: '',
  company: '',
  sector: '',
  message: ''
};

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/35 transition-all duration-200 hover:border-white/20 focus:border-brand-500/60 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-brand-500/20';

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
        });
        if (!res.ok) throw new Error('Error en el envío');
        setStatus('success');
        setForm(initial);
      } catch {
        setStatus('error');
        setErrorMsg(
          'No hemos podido enviarlo. Inténtalo de nuevo o escríbenos directo a ' + siteConfig.contactEmail
        );
      }
      return;
    }

    // Fallback mailto si no hay endpoint configurado
    const subject = encodeURIComponent('[Web] Contacto desde copiloto.digital');
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\nEmpresa: ${form.company}\nSector: ${form.sector}\n\nMensaje:\n${form.message}`
    );
    if (typeof window !== 'undefined') {
      window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
    }
    setStatus('success');
    setForm(initial);
  };

  if (status === 'success') {
    return (
      <div className="card-dark flex flex-col items-center gap-5 p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/15 text-green-400">
          <CheckCircle2 className="h-7 w-7" strokeWidth={2} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-2xl font-semibold text-white">Mensaje enviado</h3>
          <p className="text-base text-white/70">
            Te respondemos en menos de 4 horas en horario laboral.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn-ghost text-sm"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card-dark flex flex-col gap-5 p-7 md:p-9">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field id="name" label="Nombre" required>
          <input
            id="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={onChange('name')}
            className={inputClass}
            placeholder="Tu nombre"
          />
        </Field>

        <Field id="email" label="Email" required>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={onChange('email')}
            className={inputClass}
            placeholder="tu@email.com"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field id="company" label="Empresa">
          <input
            id="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={onChange('company')}
            className={inputClass}
            placeholder="Nombre de tu negocio"
          />
        </Field>

        <Field id="sector" label="Sector" required>
          <select
            id="sector"
            required
            value={form.sector}
            onChange={onChange('sector')}
            className={cn(inputClass, 'appearance-none')}
          >
            <option value="" disabled>
              Elige uno
            </option>
            {sectors.map((s) => (
              <option key={s} value={s} className="bg-ink-200 text-white">
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="message" label="Mensaje" required>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={onChange('message')}
          className={cn(inputClass, 'min-h-[140px] resize-y')}
          placeholder="Cuéntanos qué necesitas. Cuanto más concreto, mejor."
        />
      </Field>

      {status === 'error' && (
        <p role="alert" className="text-sm text-red-400">
          {errorMsg}
        </p>
      )}

      <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-primary text-sm disabled:cursor-wait disabled:opacity-70"
        >
          {status === 'sending' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              Enviar mensaje
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
        <p className="text-xs text-white/45">
          Al enviar, aceptas nuestra{' '}
          <a href="/legal/privacidad" className="underline hover:text-white">
            política de privacidad
          </a>
          .
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  children
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-wider text-white/55">
        {label}
        {required && <span className="ml-1 text-brand-400">*</span>}
      </label>
      {children}
    </div>
  );
}
