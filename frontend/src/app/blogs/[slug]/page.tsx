import Link from "next/link";
import { blogPosts } from "@/lib/constants";
import type { BlogPost } from "@/types";

function RelatedCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-primary-100 hover:shadow-lg"
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={post.image}
          alt={post.title}
          className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</p>
      <h4 className="mt-1 text-sm font-bold leading-snug text-gray-900 transition-colors group-hover:text-primary line-clamp-2">
        {post.title}
      </h4>
      <p className="mt-1 text-xs text-gray-400">{post.date} &middot; {post.readTime}</p>
    </Link>
  );
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Blog post not found</h1>
        <Link href="/blogs" className="btn-primary mt-4 inline-block">
          Back to Blogs
        </Link>
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary py-20 md:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blogs
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                {post.category}
              </span>
              <span className="text-sm text-white/50">&middot;</span>
              <span className="text-sm text-white/50">{post.date}</span>
              <span className="text-sm text-white/50">&middot;</span>
              <span className="text-sm text-white/50">{post.readTime}</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white md:text-4xl md:leading-tight">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-xs font-bold text-white">
                {post.author.split(" ").map((n) => n[0]).join("")}
              </div>
              <span className="text-sm text-white/80">{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            {/* Featured image */}
            <div className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src={post.image}
                alt={post.title}
                className="aspect-[2/1] w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Article body */}
            <div className="mt-10">
              <p className="text-lg font-semibold leading-relaxed text-gray-600">
                {post.excerpt}
              </p>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-gray-600">
                {post.content.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Share / Tags */}
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
                  href="/blogs"
                  className="text-sm font-semibold text-primary transition-colors hover:text-primary-600"
                >
                  &larr; Back to all blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="border-t border-gray-100 bg-surface-50 py-16">
          <div className="container-custom">
            <h3 className="text-2xl font-bold text-gray-900">Related Articles</h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <RelatedCard key={item.id} post={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
