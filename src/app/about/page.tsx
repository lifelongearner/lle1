// src/app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Lifelong Earner',
  description: 'Learn about Lifelong Earner, our mission, vision, and the experienced team dedicated to your success.',
  openGraph: {
    title: 'About Us - Lifelong Earner',
    description: 'Meet the team and understand our values.',
    images: [{ url: '/images/team-working-Dv0Z8zRF.jpg' }], // Example image
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Lifelong Earner',
    description: 'Meet the team and understand our values.',
    images: ['/images/team-working-Dv0Z8zRF.jpg'],
  },
};

export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the About Us page. Content to be filled from old_project.</p>
    </div>
  );
}
