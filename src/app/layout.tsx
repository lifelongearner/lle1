// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Ensure Tailwind CSS is imported
import Layout from "@/components/Layout"; // Import the new Layout component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lifelong Earner - Expert Web Development & Digital Marketing",
  description: "Lifelong Earner helps your business grow with expert web development, stunning design, and strategic digital marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
