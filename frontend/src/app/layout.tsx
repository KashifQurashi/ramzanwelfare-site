import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Ramzan Welfare International Trust | Charity NGO in Pakistan",
  description:
    "The largest NGO offering free daily meals to underprivileged families in 63+ areas. Working with local communities to support those in need across Pakistan.",
  icons: {
    icon: "/images/logo.JPG",
    apple: "/images/logo.JPG",
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
