import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdelrhman Tarek — Software Engineer | Backend & Fintech",
  description:
    "Portfolio of Abdelrhman Tarek — Software Engineer specializing in Backend Engineering, Fintech Systems, Trading Platforms, and Modern Web Applications. Expert in Node.js, NestJS, React, and scalable system design.",
  keywords: [
    "Software Engineer",
    "Backend Developer",
    "Fintech Engineer",
    "Trading Platform Developer",
    "Node.js Developer",
    "NestJS",
    "React Developer",
    "Full Stack Engineer",
    "API Developer",
    "System Design",
  ],
  authors: [{ name: "Abdelrhman Tarek" }],
  openGraph: {
    title: "Abdelrhman Tarek — Software Engineer",
    description:
      "Backend Engineering · Fintech Systems · Trading Platforms · Modern Web Applications",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrhman Tarek — Software Engineer",
    description:
      "Backend Engineering · Fintech Systems · Trading Platforms · Modern Web Applications",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
