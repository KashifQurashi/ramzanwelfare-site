import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import { blogPosts } from "@/lib/constants";

export default function BlogSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-radial from-primary/[0.03] to-transparent blur-3xl" />

      <div className="container-custom relative">
        <SectionHeader
          badge="Insights & Stories"
          title="Latest Blogs"
          subtitle="Stay updated with insights, stories, and news from our healthcare initiatives."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-primary-100 hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-primary-50 px-2.5 py-1 text-2xs font-semibold uppercase tracking-wider text-primary">
                    {blog.category}
                  </span>
                  <span className="text-xs text-gray-400">{blog.date}</span>
                </div>
                <h3 className="mt-3 text-sm font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-primary line-clamp-2">
                  {blog.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500 line-clamp-2">
                  {blog.excerpt}
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

        <div className="mt-12 text-center">
          <Link
            href="/blogs"
            className="btn-secondary !rounded-xl !px-8 !py-3"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
