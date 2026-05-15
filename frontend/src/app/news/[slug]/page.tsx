import Link from "next/link";
import type { Metadata } from "next";
import { newsItems } from "@/lib/constants";
import type { NewsItem } from "@/types";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const news = newsItems.find((n) => n.slug === params.slug);
  if (!news) return {};
  return {
    title: news.title,
    description: news.excerpt,
    openGraph: {
      title: news.title,
      description: news.excerpt,
      images: [{ url: news.image, alt: news.title }],
    },
  };
}

function RelatedCard({ news }: { news: NewsItem }) {
  return (
    <Link
      href={`/news/${news.slug}`}
      className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-primary-100 hover:shadow-lg"
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={news.image}
          alt={news.title}
          className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-primary">{news.category}</p>
      <h4 className="mt-1 text-sm font-bold leading-snug text-gray-900 transition-colors group-hover:text-primary line-clamp-2">
        {news.title}
      </h4>
      <p className="mt-1 text-xs text-gray-400">{news.date}</p>
    </Link>
  );
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const news = newsItems.find((n) => n.slug === params.slug);

  if (!news) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">News article not found</h1>
        <Link href="/news" className="btn-primary mt-4 inline-block">
          Back to News
        </Link>
      </div>
    );
  }

  const related = newsItems.filter((n) => n.slug !== news.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary py-20 md:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to News
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                {news.category}
              </span>
              <span className="text-sm text-white/50">&middot;</span>
              <span className="text-sm text-white/50">{news.date}</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl md:leading-tight">
              {news.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src={news.image}
                alt={news.title}
                className="aspect-[2/1] w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="mt-10">
              <p className="text-lg font-semibold leading-relaxed text-gray-600">
                {news.excerpt}
              </p>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-gray-600">
                {news.content.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mt-12 border-t border-gray-100 pt-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">Share:</span>
                  {["Facebook", "Twitter", "LinkedIn"].map((s) => (
                    <span key={s} className="rounded-lg bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500 transition-colors hover:bg-primary-50 hover:text-primary cursor-pointer">
                      {s}
                    </span>
                  ))}
                </div>
                <Link
                  href="/news"
                  className="text-sm font-semibold text-primary transition-colors hover:text-primary-600"
                >
                  &larr; Back to all news
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-gradient-to-br from-primary-900 via-primary-800 to-primary p-8 text-center text-white md:p-12">
            <h2 className="text-2xl font-bold">Want to Support Our Mission?</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/80">
              Your donations help us organise more medical camps and reach more underserved communities across Pakistan.
            </p>
            <Link
              href="/donate"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 text-sm font-bold text-primary shadow-lg transition-all hover:bg-primary-50"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* Related News */}
      {related.length > 0 && (
        <section className="border-t border-gray-100 bg-surface-50 py-16">
          <div className="container-custom">
            <h3 className="text-2xl font-bold text-gray-900">Related News</h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <RelatedCard key={item.id} news={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
