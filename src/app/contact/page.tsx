// src/app/contact/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Lifelong Earner',
  description: 'Get in touch with Lifelong Earner today to discuss your project or learn more about our services.',
  openGraph: {
    title: 'Contact Us - Lifelong Earner',
    description: 'Let\'s discuss your next project.',
    images: [{ url: '/images/lifelong-earner-logo-DqtzcYkx.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Lifelong Earner',
    description: 'Let\'s discuss your next project.',
    images: ['/images/lifelong-earner-logo-DqtzcYkx.png'],
  },
};

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>How to reach us. Content to be filled from old_project.</p>
    </div>
  );
}
