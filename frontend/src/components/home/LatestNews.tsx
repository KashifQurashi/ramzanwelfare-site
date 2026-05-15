import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import { newsItems } from "@/lib/constants";

export default function LatestNews() {
  const featured = newsItems[0];
  const remaining = newsItems.slice(1);

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute right-0 bottom-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-radial from-primary/[0.03] to-transparent blur-3xl" />
      <div className="absolute top-0 left-0 h-96 w-96 -translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-radial from-secondary/5 to-transparent blur-3xl" />

      <div className="container-custom relative">
        <SectionHeader
          badge="Updates"
          title="Latest News"
          subtitle="Stay informed about our latest healthcare activities, medical camps, and community impact."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          {/* Featured News */}
          <Link
            href={`/news/${featured.slug}`}
            className="group lg:col-span-7 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-primary-100 hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-[16/11]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="rounded-md bg-black/40 px-2.5 py-1 text-2xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  Featured
                </span>
              </div>
              <div className="absolute bottom-3 right-3">
                <span className="rounded-md bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {featured.date}
                </span>
              </div>
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {featured.category}
              </span>
              <h3 className="mt-2 text-base font-bold leading-snug text-gray-900 transition-colors group-hover:text-primary">
                {featured.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-500 line-clamp-2">
                {featured.excerpt}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary transition-all duration-300 group-hover:gap-2">
                Read More
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Side News */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            {remaining.map((news) => (
              <Link
                key={news.id}
                href={`/news/${news.slug}`}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-primary-100 hover:shadow-lg"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative aspect-[16/9] sm:aspect-square sm:w-44 shrink-0 overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="176px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent sm:bg-none" />
                    <div className="absolute bottom-2 left-2 sm:hidden">
                      <span className="rounded-md bg-black/40 px-2 py-0.5 text-2xs font-medium text-white backdrop-blur-sm">
                        {news.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-4">
                    <span className="text-2xs font-semibold uppercase tracking-wider text-primary">
                      {news.category}
                    </span>
                    <h3 className="mt-1 text-sm font-bold leading-snug text-gray-900 transition-colors group-hover:text-primary line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="mt-1 hidden text-xs leading-relaxed text-gray-500 line-clamp-2 sm:line-clamp-1">
                      {news.excerpt}
                    </p>
                    <span className="mt-2 hidden items-center gap-1 text-2xs font-semibold text-primary transition-all duration-300 group-hover:gap-2 sm:inline-flex">
                      Read More
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/news"
            className="btn-secondary !rounded-xl !px-8 !py-3"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
}
