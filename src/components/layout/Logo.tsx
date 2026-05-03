import { cn } from '@/lib/cn';

interface LogoProps {
  className?: string;
  variant?: 'mark' | 'wordmark';
}

/**
 * Marca Copiloto.Digital — anillo orbital con punto de acento.
 * Inspirado en un copiloto/satélite que orbita el negocio.
 */
export function Logo({ className, variant = 'mark' }: LogoProps) {
  if (variant === 'wordmark') {
    return (
      <div className={cn('flex items-center gap-2', className)}>
        <Mark />
        <span className="font-display text-lg font-semibold tracking-tight">
          Copiloto<span className="text-brand-500">.Digital</span>
        </span>
      </div>
    );
  }
  return <Mark className={className} />;
}

function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn('h-7 w-7', className)}
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fbccd2" />
          <stop offset="1" stopColor="#e61f3e" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="13" stroke="url(#logoGrad)" strokeWidth="2" />
      <circle cx="16" cy="16" r="5" fill="url(#logoGrad)" />
      <circle cx="26" cy="9" r="2.5" fill="#fff" />
    </svg>
  );
}
