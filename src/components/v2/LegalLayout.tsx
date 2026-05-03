interface Props {
  title: string;
  updated: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, updated, children }: Props) {
  return (
    <article
      className="relative pt-36 pb-24 md:pt-44 md:pb-32"
      style={{ background: 'var(--v2-bg)' }}
    >
      <div className="mx-auto w-full max-w-3xl px-6 md:px-8">
        <span
          className="text-xs font-medium uppercase tracking-[0.2em]"
          style={{ color: 'var(--v2-accent)' }}
        >
          Legal
        </span>
        <h1
          className="mt-4 font-display font-semibold leading-[1.05] tracking-tight"
          style={{
            color: 'var(--v2-fg)',
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            letterSpacing: '-0.035em'
          }}
        >
          {title}
        </h1>
        <p className="mt-4 text-sm" style={{ color: 'var(--v2-fg-subtle)' }}>
          Última actualización: {updated}
        </p>
        <div
          className="mt-12 flex flex-col gap-6 text-base leading-relaxed [&_a]:underline [&_a:hover]:opacity-80 [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_ul]:my-2 [&_ul]:ml-6 [&_ul]:list-disc"
          style={{ color: 'var(--v2-fg-muted)' }}
        >
          {children}
        </div>
      </div>
    </article>
  );
}
