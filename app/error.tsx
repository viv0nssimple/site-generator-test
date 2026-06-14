'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="section">
      <div className="container card" style={{ padding: '2rem', display: 'grid', gap: '1rem', justifyItems: 'start' }}>
        <p style={{ margin: 0, color: 'var(--danger)', fontWeight: 700 }}>Une erreur est survenue</p>
        <h1 style={{ margin: 0 }}>Impossible d&apos;afficher cette page pour le moment.</h1>
        <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.7 }}>
          Réessayez dans quelques instants. Si le problème persiste, contactez notre équipe.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            border: 'none',
            borderRadius: '999px',
            padding: '0.95rem 1.4rem',
            background: 'var(--primary)',
            color: 'var(--primary-foreground)',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Réessayer
        </button>
      </div>
    </main>
  );
}
