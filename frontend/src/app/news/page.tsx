import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { newsItems } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Latest News",
  description:
    "Stay updated with the latest news and announcements from Ramzan Welfare International Trust — medical camps, expansions, and community impact stories.",
};

export default function NewsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-900 to-primary py-20">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl font-extrabold md:text-5xl">Latest News</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
            Stay informed about our latest healthcare activities, medical camps, and community impact.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((news) => (
              <Link
                key={news.id}
                href={`/news/${news.slug}`}
                className="group rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-primary-100 hover:shadow-lg overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-md bg-black/40 px-2.5 py-1 text-2xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400">{news.date}</p>
                  <h2 className="mt-2 text-sm font-bold leading-snug text-gray-900 transition-colors group-hover:text-primary line-clamp-2">
                    {news.title}
                  </h2>
                  <p className="mt-1.5 text-xs leading-relaxed text-gray-500 line-clamp-2">
                    {news.excerpt}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary transition-all duration-300 group-hover:gap-2">
                    Read More
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
