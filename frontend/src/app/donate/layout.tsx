import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Donate to Ramzan Welfare International Trust and support free healthcare services for underprivileged communities across Pakistan. Choose from General OPD, Child Healthcare, Women Health, and more.",
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
