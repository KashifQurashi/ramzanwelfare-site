"use client";

import { useState } from "react";
import Link from "next/link";
import { donationCategories, donationCauses } from "@/lib/constants";

const causeIcons: Record<string, string> = {
  "General OPD Support": "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  "Child Healthcare Fund": "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  "Women Health Program": "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  "Vaccination Drive": "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  "Laboratory Services": "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  "Emergency Care Fund": "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z",
  "Qurbani 2026": "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
};

export default function QuickDonate() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? donationCauses
      : donationCauses.filter((c) => c.category === activeCategory);

  return (
    <section className="bg-white py-24">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Donation Programs
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Support Our Causes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            Select a program to fund. Every contribution is invested directly
            into life-saving medical services with full transparency.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 mb-12 flex flex-wrap justify-center gap-2">
          {donationCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-gray-900 text-white"
                  : "bg-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Causes Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cause) => (
            <div
              key={cause.title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-primary-100 hover:shadow-lg hover:shadow-primary-5"
            >
              {/* Top row: icon + category tag */}
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 text-gray-400 transition-colors duration-300 group-hover:bg-primary-50 group-hover:text-primary">
                  <svg className="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={causeIcons[cause.title] || "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"} />
                  </svg>
                </div>
                <span className="rounded-md bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-500">
                  {cause.category === "general" ? "General" : "Medical"}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                {cause.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {cause.description}
              </p>

              {/* Divider + CTA */}
              <div className="mt-6 border-t border-gray-50 pt-4">
                <Link
                  href={cause.slug}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:text-primary"
                >
                  {cause.title.includes("Qurbani") ? "Book Now" : "Donate Now"}
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
