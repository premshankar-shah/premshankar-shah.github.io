import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Premshankar Shah — Senior React Native Developer",
  description:
    "Senior React Native Developer with 5+ years building enterprise-scale mobile applications. Specializing in offline-first architecture, payment integrations, and high-performance cross-platform apps.",
  keywords: [
    "React Native Developer",
    "Senior Mobile Developer",
    "iOS Android Developer",
    "Premshankar Shah",
    "Expo Developer",
    "TypeScript React Native",
    "EPOS React Native",
    "Adyen Integration",
  ],
  openGraph: {
    title: "Premshankar Shah — Senior React Native Developer",
    description:
      "Senior React Native Developer with 5+ years building enterprise-scale mobile applications across iOS & Android.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premshankar Shah — Senior React Native Developer",
    description:
      "Senior React Native Developer. Enterprise architecture. Offline-first systems. 5+ production apps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
