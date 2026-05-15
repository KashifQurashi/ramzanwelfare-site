"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import { mediaItems } from "@/lib/constants";

export default function MediaUpdates() {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-surface-50 py-24">
      <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-radial from-secondary/5 to-transparent blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-radial from-primary/[0.03] to-transparent blur-3xl" />

      <div className="container-custom relative">
        <SectionHeader
          badge="Media & Press"
          title="Media Updates"
          subtitle="Short documentaries and coverage from our healthcare initiatives across Pakistan."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mediaItems.map((media, idx) => (
            <div
              key={media.id}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-primary-100 hover:shadow-lg"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary-900 to-primary-800">
                {playing === media.id ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${media.videoId}?autoplay=1&rel=0`}
                    title={media.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <Image
                      src={media.image}
                      alt={media.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => setPlaying(media.id)}
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-primary group-hover:shadow-2xl"
                      >
                        <svg className="ml-1 h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </button>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                      {media.duration}
                    </div>

                    {/* Bottom gradient for text */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Index number */}
                    <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-md bg-white/20 text-xs font-bold text-white backdrop-blur-sm">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-primary-50 px-2.5 py-0.5 text-2xs font-semibold uppercase tracking-wider text-primary">
                    {media.type}
                  </span>
                  <span className="text-xs text-gray-400">{media.date}</span>
                </div>
                <h3 className="mt-2.5 text-sm font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-primary line-clamp-1">
                  {media.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-500 line-clamp-2">
                  {media.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/media"
            className="btn-secondary !rounded-xl !px-8 !py-3"
          >
            View All Videos
          </Link>
        </div>
      </div>
    </section>
  );
}
