// src/app/services/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Lifelong Earner',
  description: 'Explore the comprehensive web development, design, and digital marketing services offered by Lifelong Earner.',
  openGraph: {
    title: 'Our Services - Lifelong Earner',
    description: 'Web development, design, SEO, and more.',
    images: [{ url: '/images/lifelong-earner-logo-DqtzcYkx.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services - Lifelong Earner',
    description: 'Web development, design, SEO, and more.',
    images: ['/images/lifelong-earner-logo-DqtzcYkx.png'],
  },
};

export default function ServicesPage() {
  return (
    <div>
      <h1>Our Services</h1>
      <p>Details about our services. Content to be filled from old_project.</p>
    </div>
  );
}
