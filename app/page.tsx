import Image from 'next/image';
import { SectionHeading } from '@/components/atoms/section-heading';
import { FeatureCard } from '@/components/molecules/feature-card';
import { ContactForm } from '@/components/organisms/contact-form';

const features = [
  {
    title: 'Automatisations guidées',
    description: 'Transformez vos tâches répétitives en workflows fiables avec un suivi clair des étapes et des validations.',
    icon: '⚡',
  },
  {
    title: 'Pilotage en temps réel',
    description: 'Visualisez la charge opérationnelle, les retards et les indicateurs de performance depuis un tableau de bord unique.',
    icon: '📊',
  },
  {
    title: 'Collaboration centralisée',
    description: 'Regroupez équipes, commentaires et documents dans un espace structuré et simple à prendre en main.',
    icon: '🤝',
  },
] as const;

const stats = [
  { value: '42%', label: 'de temps gagné sur les opérations répétitives' },
  { value: '3x', label: 'plus de visibilité sur les blocages critiques' },
  { value: '24h', label: 'pour lancer un premier workflow métier' },
] as const;

export default function HomePage() {
  return (
    <main>
      <a href="#main-content" className="sr-only">
        Aller au contenu principal
      </a>

      <section className="section">
        <div className="container" style={{ display: 'grid', gap: '2rem', alignItems: 'center', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div id="main-content" style={{ display: 'grid', gap: '1.5rem' }}>
            <span style={{ color: 'var(--primary)', fontWeight: 700 }}>NovaFlow pour PME ambitieuses</span>
            <h1 style={{ margin: 0, fontSize: 'clamp(2.75rem, 5vw, 4.5rem)', lineHeight: 1.05 }}>
              Automatisez vos opérations sans perdre le contrôle.
            </h1>
            <p style={{ margin: 0, color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '40rem' }}>
              Une plateforme claire pour structurer vos process, réduire les erreurs manuelles et accélérer les prises de décision.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="#contact" style={{ background: 'var(--primary)', color: 'white', padding: '0.95rem 1.4rem', borderRadius: '999px', fontWeight: 700 }}>
                Planifier une démo
              </a>
              <a href="#fonctionnalites" style={{ border: '1px solid var(--border)', padding: '0.95rem 1.4rem', borderRadius: '999px', fontWeight: 700, background: 'white' }}>
                Voir les fonctionnalités
              </a>
            </div>
            <dl style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', margin: 0 }}>
              {stats.map((stat) => (
                <div key={stat.label} className="card" style={{ padding: '1rem 1.25rem' }}>
                  <dt style={{ color: 'var(--muted)' }}>{stat.label}</dt>
                  <dd style={{ margin: '0.35rem 0 0', fontSize: '1.75rem', fontWeight: 800 }}>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="card" style={{ padding: '1rem' }}>
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="Equipe en réunion autour d'un tableau de bord numérique"
              width={1200}
              height={900}
              priority
              style={{ width: '100%', borderRadius: '1rem', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <section id="fonctionnalites" className="section">
        <div className="container" style={{ display: 'grid', gap: '2rem' }}>
          <SectionHeading
            eyebrow="Fonctionnalités"
            title="Une base produit pensée pour les opérations métier"
            description="Chaque module aide vos équipes à standardiser les tâches, réduire les points de friction et garder une traçabilité complète."
          />
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card" style={{ padding: '2rem', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <SectionHeading
            eyebrow="Méthode"
            title="Déployez progressivement, mesurez immédiatement"
            description="NovaFlow s’intègre aux habitudes existantes puis accompagne vos équipes avec des indicateurs simples à suivre."
          />
          <ol style={{ margin: 0, paddingLeft: '1.2rem', display: 'grid', gap: '1rem', color: 'var(--muted)', lineHeight: 1.8 }}>
            <li>Cartographiez un flux critique et identifiez les actions répétitives à automatiser.</li>
            <li>Configurez des étapes, permissions et alertes adaptées à vos équipes.</li>
            <li>Suivez l’adoption et les gains de performance depuis un reporting partagé.</li>
          </ol>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <SectionHeading
            eyebrow="Contact"
            title="Prêt à structurer vos opérations ?"
            description="Partagez votre contexte, vos outils actuels et vos objectifs prioritaires pour préparer une démonstration utile."
          />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
