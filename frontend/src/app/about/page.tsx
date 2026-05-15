import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ramzan Welfare International Trust — a professionally managed healthcare NGO delivering free medical services across 50+ centers in Pakistan since 1999.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-900 to-primary py-20">
        <div className="container-custom text-center text-white">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-secondary">
            Established 1999
          </p>
          <h1 className="text-4xl font-extrabold md:text-5xl">Ramzan Welfare Trust</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
            A professionally managed healthcare organization delivering sustainable,
            high-impact medical services to underserved populations. Our commitment
            to operational excellence, transparency, and measurable outcomes drives
            everything we do.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/donate" className="btn-gold !rounded-lg">
              Start Donating
            </Link>
            <Link href="/contact-us" className="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-all hover:bg-white hover:text-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b border-gray-200 bg-white">
        <div className="container-custom grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          {[
            { value: "25+", label: "Years of Service" },
            { value: "1M+", label: "Lives Impacted" },
            { value: "50+", label: "Medical Centers" },
            { value: "24/7", label: "Emergency Response" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Who We Are</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
              Pakistan&apos;s Leading Healthcare Welfare NGO
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Ramzan Welfare International Trust is a professionally managed
              healthcare organization delivering free, high-quality medical
              services through an extensive network of 50+ medical centers
              across Pakistan. Our integrated service model encompasses General
              OPD, Child Healthcare, Women Health, Vaccination, Laboratory
              Diagnostics, and Emergency Care.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Since our founding in 1999, we have built a robust operational
              infrastructure that serves over 500,000 patients annually. Our
              organization is committed to the highest standards of governance,
              financial transparency, and measurable social impact — ensuring
              every rupee donated translates into maximum healthcare value for
              those who need it most.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="card p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Our Vision</h3>
              <p className="mt-2 text-gray-600">
                To build a Pakistan where every citizen, regardless of socioeconomic
                status, has access to quality healthcare — creating a healthier,
                more equitable society through sustainable medical infrastructure.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-bold text-gray-900">Our Mission</h3>
              <p className="mt-2 text-gray-600">
                To deliver free, high-quality healthcare services at scale through
                professionally managed medical centers, strategic partnerships, and
                data-driven programs — maximizing our impact per rupee spent and
                ensuring every patient receives dignified, effective care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Our Services</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
              Integrated Healthcare Delivery System — Serving Millions with Operational Excellence
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "General OPD",
                desc: "High-volume outpatient department delivering free primary care consultations. Our streamlined operations ensure efficient patient flow with minimal wait times.",
                items: ["Physician Consultations", "Health Screenings", "Prescription Services", "Follow-up Care", "Patient Records Mgmt", "Health Education"],
              },
              {
                title: "Child Healthcare",
                desc: "Comprehensive pediatric care program covering preventive care, immunizations, growth monitoring, and nutritional interventions for children under 16.",
                items: ["Pediatric Diagnostics", "Growth Tracking", "Nutrition Programs", "Immunization Schedule", "Developmental Screening", "Parent Counseling"],
              },
              {
                title: "Women Health",
                desc: "Dedicated women's health program offering prenatal care, postnatal support, gynecological services, and cancer screening in a private setting.",
                items: ["Antenatal Care", "Postnatal Support", "Gynecology", "Family Planning", "Breast Cancer Screening", "Health Awareness"],
              },
              {
                title: "Vaccination",
                desc: "Large-scale immunization program aligned with WHO EPI standards. Cold-chain compliant infrastructure ensures vaccine efficacy throughout the supply chain.",
                items: ["EPI Schedule", "Child Immunizations", "COVID-19 Vaccination", "Measles Campaigns", "Polio Eradication", "Hepatitis B Program"],
              },
              {
                title: "Laboratory Tests",
                desc: "Fully equipped diagnostic lab offering a comprehensive test menu including hematology, biochemistry, radiology, and cardiac diagnostics at no cost.",
                items: ["Hematology", "Clinical Chemistry", "X-Ray Services", "Ultrasound", "ECG", "Histopathology"],
              },
              {
                title: "Emergency Care",
                desc: "24/7 emergency response unit with fleet ambulances, trauma bays, and trained emergency staff. Rapid triage and stabilization protocols ensure optimal outcomes.",
                items: ["24/7 Emergency Room", "Ambulance Fleet", "Trauma Care", "Emergency Triage", "Critical Care", "Disaster Response"],
              },
            ].map((service) => (
              <div key={service.title} className="card p-6">
                <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{service.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span key={item} className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">Partner with Us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-200">
            Whether you are a corporate leader, philanthropic foundation, or
            individual donor — your partnership enables us to scale our impact,
            strengthen our infrastructure, and bring quality healthcare to those
            who need it most. Every rupee is invested with maximum efficiency and
            full transparency.
          </p>
          <Link href="/donate" className="btn-gold mt-8 inline-block !rounded-lg">
            Invest in Impact
          </Link>
        </div>
      </section>
    </>
  );
}
