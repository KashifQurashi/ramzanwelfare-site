import Link from "next/link";
import type { Metadata } from "next";
import { donationCauses } from "@/lib/constants";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cause = donationCauses.find((c) => c.slug.includes(params.slug));
  if (!cause) return {};
  return {
    title: cause.title,
    description: cause.description,
    openGraph: {
      title: cause.title,
      description: cause.description,
      images: [{ url: cause.image, alt: cause.title }],
    },
  };
}

export default function DonateSlugPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const cause = donationCauses.find((c) => c.slug.includes(slug));

  if (!cause) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Cause not found</h1>
        <Link href="/donate" className="btn-primary mt-4 inline-block">
          Back to Donate
        </Link>
      </div>
    );
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          <div className="card overflow-hidden">
            <div className="flex h-64 items-center justify-center bg-primary-100">
              <span className="text-6xl text-primary">❤</span>
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900">{cause.title}</h1>
              <p className="mt-4 text-lg text-gray-600">{cause.description}</p>

              <div className="mt-8 rounded-lg bg-gray-50 p-6">
                <h3 className="text-lg font-bold text-gray-900">Quick Donate</h3>
                <div className="mt-4 flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter amount"
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button className="btn-primary !rounded-lg">PKR</button>
                </div>
                <button className="btn-gold mt-3 w-full !rounded-lg">DONATE NOW</button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/donate" className="text-primary hover:underline">
              ← Back to all causes
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
