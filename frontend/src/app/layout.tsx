import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
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
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-14 lg:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
