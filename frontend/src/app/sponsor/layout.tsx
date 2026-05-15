import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsor a Child",
  description:
    "Sponsor a child's healthcare and education through Ramzan Welfare International Trust. Your monthly sponsorship transforms lives in Pakistan.",
};

export default function SponsorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
