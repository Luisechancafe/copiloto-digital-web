import type { Metadata } from 'next';
import { LegalLayout } from '@/components/v2/LegalLayout';

export const metadata: Metadata = { title: 'Privacidad — Copiloto.Digital' };

export default function V2PrivacidadPage() {
  return (
    <LegalLayout title="Política de privacidad" updated="3 de mayo de 2026">
      <h2>1. Quiénes somos</h2>
      <p>
        Copiloto.Digital es una marca operada por una pequeña empresa con sede en Granollers (Vallès Oriental, Cataluña).
        Para cualquier asunto relacionado con tus datos puedes escribirnos a <a href="mailto:hola@copiloto.digital">hola@copiloto.digital</a>.
      </p>
      <h2>2. Datos que recopilamos</h2>
      <p>Cuando usas el servicio podemos tratar:</p>
      <ul>
        <li>Datos de cuenta: email, nombre, empresa, sector y teléfono.</li>
        <li>Datos operativos: conversaciones procesadas por tu copiloto, citas agendadas, métricas de uso.</li>
        <li>Datos técnicos: IP, navegador, idioma, eventos básicos para detectar errores.</li>
      </ul>
      <h2>3. Para qué los usamos</h2>
      <p>Para prestar el servicio, mantener tu cuenta segura, mejorar el producto y comunicarnos contigo. Nada más.</p>
      <h2>4. Con quién los compartimos</h2>
      <p>
        Nunca vendemos ni cedemos tus datos a terceros para marketing. Usamos proveedores de hosting (Vercel), base de datos (Supabase),
        IA (Google Gemini) y mensajería (Twilio, Brevo) bajo contratos de tratamiento conformes al RGPD.
      </p>
      <h2>5. Cuánto los guardamos</h2>
      <p>Mientras tu cuenta esté activa y un máximo de 12 meses tras darte de baja para fines de auditoría legal.</p>
      <h2>6. Tus derechos</h2>
      <p>
        Acceso, rectificación, supresión, oposición, limitación y portabilidad. Escríbenos y respondemos en menos de 30 días.
      </p>
      <h2>7. Cookies</h2>
      <p>Usamos solo cookies técnicas y de medición agregada anónima (sin perfiles personales).</p>
      <h2>8. Contacto del DPO</h2>
      <p>
        <a href="mailto:hola@copiloto.digital">hola@copiloto.digital</a>
      </p>
      <p style={{ marginTop: '2rem', opacity: 0.6 }}>
        Documento MVP — pendiente de revisión legal definitiva antes de lanzamiento público.
      </p>
    </LegalLayout>
  );
}
