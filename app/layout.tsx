import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MotionProvider from "../components/motion/MotionProvider";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import { profile } from "../lib/profile";
import { isResumeAvailable } from "../lib/resume";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${profile.displayName} | ${profile.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: `%s | ${profile.displayName}`,
  },
  description: profile.heroSummary,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: profile.siteUrl,
    title,
    description: profile.heroSummary,
    siteName: `${profile.displayName} — Portfolio`,
  },
  twitter: {
    card: "summary",
    title,
    description: profile.heroSummary,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.displayName,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  url: profile.siteUrl,
  address: { "@type": "PostalAddress", addressLocality: profile.location },
  sameAs: [profile.githubUrl, profile.linkedinUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const resumeAvailable = isResumeAvailable();

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <MotionProvider>
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
            <Header resumeAvailable={resumeAvailable} />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
