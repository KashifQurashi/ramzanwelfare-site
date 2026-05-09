"use client";

import { useState } from "react";
import Link from "next/link";
import { donationCategories, donationCauses } from "@/lib/constants";

export default function DonatePage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? donationCauses
    : donationCauses.filter((c) => c.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-900 to-primary py-20">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl font-extrabold md:text-5xl">DONATE</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
            Your contribution can change lives. Choose a cause and make a
            difference today.
          </p>
        </div>
      </section>

      {/* Donation Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Donation Category</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {donationCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-primary text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(filtered.length > 0 ? filtered : donationCauses).map((cause) => (
              <div key={cause.title} className="card group">
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center bg-primary-100 text-primary">
                    <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <span className="inline-block rounded-full bg-secondary-50 px-3 py-1 text-xs font-medium text-secondary">
                    {cause.category === "general" ? "General" : "Medical"}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-gray-900">{cause.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{cause.description}</p>
                  <Link
                    href={cause.slug}
                    className="btn-primary mt-4 w-full !rounded-lg !text-sm"
                  >
                    DONATE NOW
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Donate */}
      <QuickDonateBlock />
    </>
  );
}

function QuickDonateBlock() {
  const [amount, setAmount] = useState("1000");

  return (
    <section className="bg-gray-50 py-16">
      <div className="container-custom">
        <h2 className="text-center text-2xl font-bold text-gray-900">Quick Donate</h2>
        <div className="mx-auto mt-8 max-w-md space-y-6">
          {/* General OPD */}
          <div className="card p-6">
            <h3 className="font-bold text-gray-900">General OPD Support</h3>
            <p className="mt-1 text-sm text-gray-600">
              Support free outpatient consultations for underprivileged patients.
            </p>
            <div className="mt-4 flex gap-3">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="btn-primary !rounded-lg !px-6">PKR</button>
            </div>
            <button className="btn-gold mt-3 w-full !rounded-lg">DONATE</button>
          </div>

          {/* Child Healthcare */}
          <div className="card p-6">
            <h3 className="font-bold text-gray-900">Child Healthcare</h3>
            <p className="mt-1 text-sm text-gray-600">
              Help provide free pediatric care, immunizations, and nutrition support.
            </p>
            <div className="mt-4 flex gap-3">
              <input
                type="text"
                defaultValue="1000"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="btn-primary !rounded-lg !px-6">PKR</button>
            </div>
            <button className="btn-gold mt-3 w-full !rounded-lg">DONATE</button>
          </div>

          {/* Emergency Care */}
          <div className="card p-6">
            <h3 className="font-bold text-gray-900">Emergency Care Fund</h3>
            <p className="mt-1 text-sm text-gray-600">
              Support 24/7 emergency medical services and ambulance response.
            </p>
            <div className="mt-4 flex gap-3">
              <input
                type="text"
                defaultValue="5000"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="btn-primary !rounded-lg !px-6">PKR</button>
            </div>
            <button className="btn-gold mt-3 w-full !rounded-lg">DONATE</button>
          </div>
        </div>
      </div>
    </section>
  );
}
