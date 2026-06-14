type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="card" style={{ padding: '1.5rem', display: 'grid', gap: '1rem' }}>
      <div
        aria-hidden="true"
        style={{
          width: '3rem',
          height: '3rem',
          borderRadius: '1rem',
          display: 'grid',
          placeItems: 'center',
          background: 'var(--accent)',
          color: 'var(--primary)',
          fontSize: '1.5rem',
        }}
      >
        {icon}
      </div>
      <div style={{ display: 'grid', gap: '0.5rem' }}>
        <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{title}</h3>
        <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.7 }}>{description}</p>
      </div>
    </article>
  );
}
