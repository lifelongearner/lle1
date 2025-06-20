// src/app/portfolio/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Lifelong Earner',
  description: 'Browse our portfolio to see examples of our successful web development and digital marketing projects.',
  openGraph: {
    title: 'Portfolio - Lifelong Earner',
    description: 'See our work and client success stories.',
    images: [{ url: '/images/portfolio-showcase-C7-qLKaQ.png' }], // Example image
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio - Lifelong Earner',
    description: 'See our work and client success stories.',
    images: ['/images/portfolio-showcase-C7-qLKaQ.png'],
  },
};

export default function PortfolioPage() {
  return (
    <div>
      <h1>Our Portfolio</h1>
      <p>Showcase of our work. Content to be filled from old_project.</p>
    </div>
  );
}
