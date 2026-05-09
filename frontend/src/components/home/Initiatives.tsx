import Link from "next/link";
import { initiatives } from "@/lib/constants";

const serviceIcons: Record<string, string> = {
  "General OPD": "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  "Child Healthcare": "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  "Women Health": "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  "Vaccination": "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  "Laboratory Tests": "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  "Emergency Care": "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z",
};

export default function Initiatives() {
  return (
    <section className="bg-white py-24">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Service Portfolio
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Our Healthcare Services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            An integrated healthcare delivery network spanning 50+ centers.
            Each service line is designed for maximum impact, operational
            efficiency, and measurable patient outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((initiative) => (
            <Link
              key={initiative.title}
              href={`/services/${initiative.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-primary-100 hover:shadow-lg hover:shadow-primary-5"
            >
              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 text-gray-400 transition-colors duration-300 group-hover:bg-primary-50 group-hover:text-primary">
                <svg className="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={serviceIcons[initiative.title]} />
                </svg>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                {initiative.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {initiative.description}
              </p>

              {/* Divider + Metric + CTA */}
              <div className="mt-6 border-t border-gray-50 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">{initiative.statLabel}</p>
                    <p className="text-base font-bold text-gray-900">{initiative.stat}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 transition-colors duration-200 group-hover:text-primary">
                    Details
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
