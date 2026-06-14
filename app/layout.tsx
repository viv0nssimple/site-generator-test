import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NovaFlow | Automatisation produit pour PME',
  description:
    'NovaFlow aide les PME à centraliser leurs opérations, automatiser les tâches répétitives et suivre les performances en temps réel.',
  keywords: ['automatisation', 'PME', 'dashboard', 'productivité', 'SaaS'],
  openGraph: {
    title: 'NovaFlow | Automatisation produit pour PME',
    description:
      'Centralisez vos opérations, automatisez vos tâches et suivez vos performances avec NovaFlow.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaFlow | Automatisation produit pour PME',
    description:
      'Une plateforme claire, accessible et rapide pour piloter vos opérations.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
