export default function Loading() {
  return (
    <main className="section" aria-busy="true" aria-live="polite">
      <div className="container card" style={{ padding: '2rem', display: 'grid', gap: '1rem' }}>
        <div style={{ width: '10rem', height: '1rem', borderRadius: '999px', background: 'var(--accent)' }} />
        <div style={{ width: '100%', height: '3rem', borderRadius: '1rem', background: 'var(--accent)' }} />
        <div style={{ width: '80%', height: '1rem', borderRadius: '999px', background: 'var(--accent)' }} />
        <div style={{ width: '60%', height: '1rem', borderRadius: '999px', background: 'var(--accent)' }} />
      </div>
    </main>
  );
}
