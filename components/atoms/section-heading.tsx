type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div style={{ display: 'grid', gap: '0.75rem', maxWidth: '42rem' }}>
      <span
        style={{
          display: 'inline-flex',
          width: 'fit-content',
          padding: '0.35rem 0.75rem',
          borderRadius: '999px',
          background: 'var(--accent)',
          color: 'var(--primary)',
          fontWeight: 700,
          fontSize: '0.875rem',
        }}
      >
        {eyebrow}
      </span>
      <h2 style={{ margin: 0, fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>{title}</h2>
      <p style={{ margin: 0, color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>{description}</p>
    </div>
  );
}
