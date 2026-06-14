import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="section">
      <div className="container card" style={{ padding: '2rem', display: 'grid', gap: '1rem', justifyItems: 'start' }}>
        <p style={{ margin: 0, color: 'var(--primary)', fontWeight: 700 }}>Erreur 404</p>
        <h1 style={{ margin: 0 }}>Cette page est introuvable.</h1>
        <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.7 }}>
          Le contenu demandé n&apos;existe pas ou a été déplacé.
        </p>
        <Link
          href="/"
          style={{
            borderRadius: '999px',
            padding: '0.95rem 1.4rem',
            background: 'var(--primary)',
            color: 'var(--primary-foreground)',
            fontWeight: 700,
          }}
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
