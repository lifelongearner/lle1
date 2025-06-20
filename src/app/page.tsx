// src/app/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lifelong Earner - Expert Web Development & Digital Marketing',
  description: 'Transforming Ideas into Digital Reality. Lifelong Earner offers premier web development, stunning design, and strategic digital marketing to help your business grow.',
  openGraph: {
    title: 'Lifelong Earner - Expert Web Development & Digital Marketing',
    description: 'Grow your business with our expert web solutions.',
    images: [{ url: '/images/lifelong-earner-logo-DqtzcYkx.png' }], // Assuming logo is a good default
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lifelong Earner - Expert Web Development & Digital Marketing',
    description: 'Grow your business with our expert web solutions.',
    images: ['/images/lifelong-earner-logo-DqtzcYkx.png'],
  },
};

export default function HomePage() {
  return (
    <section id="home" className="text-center py-20 bg-gray-100">
      <h1 className="text-5xl font-bold mb-4">Transforming Ideas into Digital Reality</h1>
      <p className="text-lg mb-8">
        Lifelong Earner is a premier web development and digital marketing agency dedicated to crafting bespoke online experiences.
      </p>
      <Link href="/portfolio" legacyBehavior>
        <a className="bg-background text-white border border-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300">
          View Our Work
        </a>
      </Link>
    </section>
  );
}
