import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pragmatic Approach to AI in 2025 | Ivan Kuliš",
  description: "A practical guide for software agencies on implementing AI. Learn about RAG, embeddings, AI agents, real-world case studies, and pragmatic AI integration strategies.",
  keywords: ["AI", "artificial intelligence", "software agency", "RAG", "embeddings", "AI agents", "pragmatic AI", "2025", "machine learning"],
  authors: [{ name: "Ivan Kuliš" }],
  openGraph: {
    title: "Pragmatic Approach to AI in 2025",
    description: "A practical guide for software agencies on implementing AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pragmatic Approach to AI in 2025",
    description: "A practical guide for software agencies on implementing AI",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1e1b4b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
