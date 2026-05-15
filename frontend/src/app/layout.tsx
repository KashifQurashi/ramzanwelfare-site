import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/shared/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ramzanwelfareclinic.com"),
  title: {
    default: "Ramzan Welfare International Trust | Healthcare NGO in Pakistan",
    template: "%s | Ramzan Welfare International Trust",
  },
  description:
    "Pakistan's largest healthcare welfare organization delivering free, high-quality medical services across 50+ centers. Serving 500,000+ patients annually with General OPD, Child Healthcare, Women Health, Vaccination, Lab Diagnostics & Emergency Care.",
  icons: {
    icon: "/images/logo.JPG",
    apple: "/images/logo.JPG",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ramzan Welfare International Trust",
    title: "Ramzan Welfare International Trust | Healthcare NGO in Pakistan",
    description:
      "Pakistan's largest healthcare welfare organization delivering free, high-quality medical services across 50+ centers.",
    images: [
      {
        url: "/images/logo.JPG",
        width: 800,
        height: 800,
        alt: "Ramzan Welfare International Trust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramzan Welfare International Trust | Healthcare NGO in Pakistan",
    description:
      "Pakistan's largest healthcare welfare organization delivering free, high-quality medical services across 50+ centers.",
    images: ["/images/logo.JPG"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Ramzan Welfare International Trust",
    alternateName: "Ramzan Welfare Clinic",
    url: "https://ramzanwelfareclinic.com",
    logo: "https://ramzanwelfareclinic.com/images/logo.JPG",
    email: "trustramzanwelfare@gmail.com",
    telephone: "+92 21 111 729 526",
    address: {
      "@type": "PostalAddress",
      streetAddress: "A-25, Bahadurabad Chowrangi",
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
    description:
      "Pakistan's largest healthcare welfare organization delivering free, high-quality medical services across 50+ centers.",
    medicalSpecialty: "Community Health",
    areaServed: "PK",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ramzan Welfare International Trust",
    url: "https://ramzanwelfareclinic.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://ramzanwelfareclinic.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="google-site-verification" content="x3djFdFZbRlzWtcr_veJrDEaByaB2SdyN_1jnu7Dnrc" />
        <link rel="preconnect" href="https://pixnio.com" />
        <link rel="dns-prefetch" href="https://pixnio.com" />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Analytics />
        <SpeedInsights />
        <Navbar />
        <main className="flex-1 pt-14 lg:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
