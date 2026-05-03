import Link from 'next/link';
import { forwardRef } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'ghost' | 'dark';
type Size = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

const VARIANTS: Record<Variant, string> = {
  primary: 'btn-primary',
  ghost: 'btn-ghost',
  dark: 'btn-dark'
};

const SIZES: Record<Size, string> = {
  sm: 'text-xs px-4 py-2',
  md: 'text-sm px-6 py-3',
  lg: 'text-base px-8 py-4'
};

interface ButtonProps
  extends ButtonBaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...rest }, ref) => (
    <button ref={ref} className={cn(VARIANTS[variant], SIZES[size], className)} {...rest}>
      {children}
    </button>
  )
);
Button.displayName = 'Button';

interface LinkButtonProps extends ButtonBaseProps {
  href: string;
  external?: boolean;
}

export function LinkButton({
  variant = 'primary',
  size = 'md',
  className,
  href,
  external,
  children
}: LinkButtonProps) {
  if (external || href.startsWith('http') || href.startsWith('mailto:')) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={cn(VARIANTS[variant], SIZES[size], className)}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cn(VARIANTS[variant], SIZES[size], className)}>
      {children}
    </Link>
  );
}
