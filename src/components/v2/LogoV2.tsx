interface Props {
  className?: string;
}

export function LogoV2({ className }: Props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="logoV2Grad" x1="0" y1="0" x2="32" y2="32">
          <stop offset="0" stopColor="var(--v2-accent)" stopOpacity="0.6" />
          <stop offset="1" stopColor="var(--v2-accent)" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="13" stroke="url(#logoV2Grad)" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="4.5" fill="url(#logoV2Grad)" />
      <circle cx="26" cy="9" r="2" fill="var(--v2-fg)" />
    </svg>
  );
}
