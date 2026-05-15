import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Read stories, insights, and updates from Ramzan Welfare International Trust's healthcare initiatives across Pakistan.",
};

export default function BlogsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-900 to-primary py-20">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl font-extrabold md:text-5xl">Our Blogs</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
            Stay updated with insights, stories, and news from our healthcare initiatives.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((blog) => (
              <div key={blog.id} className="card group">
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center bg-primary-100 text-primary">
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="rounded bg-primary-50 px-2 py-0.5 font-medium text-primary">
                      {blog.category}
                    </span>
                    <span>{blog.date}</span>
                  </div>
                  <h3 className="mt-2 text-base font-bold leading-snug text-gray-900 group-hover:text-primary">
                    {blog.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-600"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
