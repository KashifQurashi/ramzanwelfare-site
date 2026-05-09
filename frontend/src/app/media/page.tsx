import Link from "next/link";
import { mediaItems } from "@/lib/constants";

export default function MediaPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-900 to-primary py-20">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl font-extrabold md:text-5xl">Media Updates</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
            Watch our latest healthcare initiatives and stay connected with our medical services.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mediaItems.map((media) => (
              <a
                key={media.id}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card group"
              >
                <div className="relative h-52 overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center bg-primary-100 text-primary">
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg transition-transform group-hover:scale-110">
                      <svg className="ml-0.5 h-7 w-7" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-500">{media.date}</p>
                  <h3 className="mt-2 text-sm font-bold leading-snug text-gray-900 group-hover:text-primary">
                    {media.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
