import Link from "next/link";
import { donationCauses } from "@/lib/constants";

export default function LiveAppeals() {
  const appeals = donationCauses.filter((c) => c.category === "medical").slice(0, 3);

  return (
    <section className="bg-white py-24">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Live Appeals
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Critical Healthcare Programs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            These active appeals require immediate funding to sustain
            life-saving medical services for underprivileged communities.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {appeals.map((appeal, i) => (
            <div
              key={appeal.title}
              className="group relative rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-primary-100 hover:shadow-lg hover:shadow-primary-5"
            >
              {/* Index */}
              <div className="mb-5 flex items-center justify-between">
                <span className="text-3xl font-bold tracking-tight text-gray-200">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                    i === 0
                      ? "bg-red-50 text-red-600"
                      : i === 1
                      ? "bg-amber-50 text-amber-600"
                      : "bg-primary-50 text-primary"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      i === 0 ? "bg-red-500" : i === 1 ? "bg-amber-500" : "bg-primary"
                    }`}
                  />
                  {i === 0 ? "Critical" : i === 1 ? "Urgent" : "Active"}
                </span>
              </div>

              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 text-gray-400 transition-colors duration-300 group-hover:bg-primary-50 group-hover:text-primary">
                <svg className="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                {appeal.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {appeal.description}
              </p>

              {/* Divider + CTA */}
              <div className="mt-6 border-t border-gray-50 pt-4">
                <Link
                  href={appeal.slug}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:text-primary"
                >
                  Donate Now
                  <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
