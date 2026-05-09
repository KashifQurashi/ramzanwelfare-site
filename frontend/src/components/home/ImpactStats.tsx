import Link from "next/link";
import { impactStats } from "@/lib/constants";

const statIcons = [
  "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  "M13 10V3L4 14h7v7l9-11h-7z",
  "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
];

export default function ImpactStats() {
  return (
    <section className="bg-surface-50 py-24">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Key Metrics
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Our Impact In Numbers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            Key performance indicators reflecting our organizational scale,
            reach, and measurable community impact.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, i) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-primary-100 hover:shadow-lg hover:shadow-primary-5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 text-gray-400 transition-colors duration-300 group-hover:bg-primary-50 group-hover:text-primary">
                <svg className="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={statIcons[i]} />
                </svg>
              </div>
              <p className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm leading-tight text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-base text-gray-500">
            Join us in providing free healthcare to those who need it most.
          </p>
          <Link
            href="/donate"
            className="btn-primary mt-5 inline-flex !rounded-xl !px-8 !py-3.5"
          >
            Be Part of Change
          </Link>
        </div>
      </div>
    </section>
  );
}
