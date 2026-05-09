"use client";

import { useState } from "react";
import Link from "next/link";

export default function SponsorPage() {
  const [activeTab, setActiveTab] = useState("child");

  return (
    <>
      <section className="bg-gradient-to-r from-primary-900 to-primary py-20">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Sponsor a Patient
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
            Sponsor medical treatment for a child, a mother, or an entire
            healthcare program and bring healing to those in need.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            {/* Tabs */}
            <div className="mb-8 flex justify-center gap-4">
              {[
                { id: "child", label: "Sponsor a Child" },
                { id: "mother", label: "Sponsor a Mother" },
                { id: "program", label: "Sponsor a Program" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-lg px-6 py-3 font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="card p-8">
              {activeTab === "child" && (
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-50 text-primary">
                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-gray-900">
                    Sponsor a Child&apos;s Healthcare
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-gray-600">
                    Your sponsorship provides a child with free pediatric
                    consultations, vaccinations, laboratory tests, medicines,
                    and nutrition support. For just PKR 3,000 per month, you can
                    ensure a child receives complete medical care.
                  </p>
                  <div className="mx-auto mt-6 grid max-w-sm gap-3 text-left">
                    {[
                      "Free OPD consultations",
                      "Full vaccination course",
                      "Lab tests & diagnostics",
                      "Nutritional support",
                      "Regular health checkups",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link href="/donate" className="btn-primary mt-6 inline-block">
                    Sponsor Now
                  </Link>
                </div>
              )}

              {activeTab === "mother" && (
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-50 text-primary">
                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-gray-900">
                    Sponsor a Mother&apos;s Health
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-gray-600">
                    Your sponsorship provides comprehensive maternal healthcare
                    including prenatal checkups, postnatal care, laboratory
                    tests, and emergency delivery services. For just PKR 5,000
                    per month, you can ensure a safe pregnancy and healthy
                    motherhood.
                  </p>
                  <div className="mx-auto mt-6 grid max-w-sm gap-3 text-left">
                    {[
                      "Prenatal consultations",
                      "Ultrasound & lab tests",
                      "Postnatal care",
                      "Emergency delivery support",
                      "Nutrition & supplements",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link href="/donate" className="btn-primary mt-6 inline-block">
                    Sponsor Now
                  </Link>
                </div>
              )}

              {activeTab === "program" && (
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-50 text-primary">
                    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-gray-900">
                    Sponsor a Healthcare Program
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-gray-600">
                    Support one of our ongoing medical programs — from
                    vaccination drives to emergency care services. Your
                    corporate or individual sponsorship helps us expand our
                    reach and save more lives.
                  </p>
                  <div className="mx-auto mt-6 grid max-w-sm gap-3 text-left">
                    {[
                      "General OPD services",
                      "Child healthcare program",
                      "Women health initiative",
                      "Vaccination campaigns",
                      "Emergency ambulance service",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link href="/contact-us" className="btn-primary mt-6 inline-block">
                    Contact Us
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
