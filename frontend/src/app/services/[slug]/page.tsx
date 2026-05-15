import Link from "next/link";
import type { Metadata } from "next";
import { initiatives } from "@/lib/constants";

const serviceDetails: Record<string, {
  title: string;
  hero: string;
  description: string;
  details: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
}> = {
  "general-opd": {
    title: "General OPD",
    hero: "Free outpatient consultations with qualified doctors for all age groups",
    description:
      "Our General OPD provides free outpatient consultations to thousands of patients daily. Walk into any of our medical centers and receive quality medical care from experienced doctors. We diagnose, treat, and manage a wide range of common illnesses and health conditions.",
    details: [
      "Free consultation with qualified physicians",
      "Prescription and medicine dispensing",
      "Health screening and checkups",
      "Referral to specialist care when needed",
      "Follow-up consultations",
      "Health education and counseling",
    ],
    benefits: [
      "No appointment needed — walk-in welcome",
      "Open 6 days a week",
      "Qualified male and female doctors",
      "Free basic medicines",
      "Patient record maintenance",
    ],
    faqs: [
      { q: "Is there any fee for OPD consultation?", a: "No, all OPD consultations are completely free of charge." },
      { q: "Do I need an appointment?", a: "No appointment is needed. You can walk in during clinic hours." },
      { q: "What are the clinic timings?", a: "Our OPD is open from 8:00 AM to 8:00 PM, Monday to Saturday." },
      { q: "Are specialist doctors available?", a: "Yes, we have both general physicians and specialist doctors available." },
    ],
  },
  "child-healthcare": {
    title: "Child Healthcare",
    hero: "Comprehensive pediatric care including consultations, immunizations, and nutrition support",
    description:
      "Our Child Healthcare program is dedicated to ensuring the health and well-being of children from birth to adolescence. We provide free pediatric consultations, growth monitoring, vaccinations, and nutrition support to underprivileged children.",
    details: [
      "Pediatric consultations and treatment",
      "Growth and development monitoring",
      "Immunization programs",
      "Nutrition assessment and support",
      "Treatment of childhood illnesses",
      "Health education for parents",
    ],
    benefits: [
      "Free pediatric care for all children",
      "Growth tracking charts maintained",
      "Nutritional supplements provided",
      "Vaccination records kept",
      "Parent counseling sessions",
    ],
    faqs: [
      { q: "Up to what age do you treat children?", a: "We treat children from birth up to 16 years of age." },
      { q: "Do you provide vaccinations?", a: "Yes, we follow the full EPI vaccination schedule free of charge." },
      { q: "Is nutritional support available?", a: "Yes, we provide nutritional assessment and supplements for malnourished children." },
    ],
  },
  "women-health": {
    title: "Women Health",
    hero: "Specialized healthcare services for women including prenatal and postnatal care",
    description:
      "Our Women Health program offers comprehensive healthcare services tailored specifically for women. From prenatal and postnatal care to gynecological services, we ensure that every woman receives the medical attention she deserves with dignity and respect.",
    details: [
      "Prenatal checkups and monitoring",
      "Postnatal care for mother and baby",
      "Gynecological consultations",
      "Family planning services",
      "Breast cancer screening",
      "Health awareness sessions",
    ],
    benefits: [
      "Female doctors available",
      "Safe and private environment",
      "Ultrasound and lab facilities",
      "Emergency obstetric care",
      "Nutrition guidance during pregnancy",
    ],
    faqs: [
      { q: "Are female doctors available?", a: "Yes, we have female doctors for all women health consultations." },
      { q: "Do you provide delivery services?", a: "We provide emergency delivery support and referral to partner hospitals." },
      { q: "Is pregnancy testing available?", a: "Yes, free pregnancy testing and counseling is available." },
    ],
  },
  vaccination: {
    title: "Vaccination",
    hero: "Free vaccination programs following EPI schedule to protect against preventable diseases",
    description:
      "Our Vaccination program is committed to protecting children and families from vaccine-preventable diseases. We follow the Expanded Program on Immunization (EPI) schedule and provide all recommended vaccines completely free of charge.",
    details: [
      "EPI schedule vaccinations for children",
      "COVID-19 vaccination",
      "Measles and rubella campaigns",
      "Polio eradication support",
      "Hepatitis B vaccination",
      "Tetanus vaccination for women",
    ],
    benefits: [
      "All vaccines free of charge",
      "Proper cold chain storage",
      "Vaccination cards provided",
      "Reminder system for follow-ups",
      "Trained vaccination staff",
    ],
    faqs: [
      { q: "Which vaccines do you provide?", a: "We provide all EPI vaccines including BCG, Polio, Pentavalent, PCV, Rotavirus, Measles, and more." },
      { q: "Is there any cost?", a: "No, all vaccinations are completely free." },
      { q: "Do you provide vaccination cards?", a: "Yes, every child receives a vaccination card to track their immunization record." },
    ],
  },
  "laboratory-tests": {
    title: "Laboratory Tests",
    hero: "Free diagnostic lab services including blood tests, X-rays, and ultrasound",
    description:
      "Our Laboratory provides free diagnostic services to help doctors make accurate diagnoses. We offer a wide range of tests including blood work, urine analysis, X-rays, and ultrasound examinations using modern equipment.",
    details: [
      "Complete blood count (CBC)",
      "Blood sugar and cholesterol tests",
      "Urine and stool analysis",
      "X-ray and ultrasound",
      "ECG and cardiac tests",
      "Liver and kidney function tests",
    ],
    benefits: [
      "All tests free of charge",
      "Modern diagnostic equipment",
      "Qualified lab technicians",
      "Quick report turnaround",
      "Quality controlled processes",
    ],
    faqs: [
      { q: "Are lab tests really free?", a: "Yes, all basic laboratory tests are provided completely free." },
      { q: "How long do reports take?", a: "Most routine reports are available within 24 hours." },
      { q: "Do I need a doctor's referral?", a: "A doctor's prescription is preferred but not always required." },
    ],
  },
  "emergency-care": {
    title: "Emergency Care",
    hero: "24/7 emergency medical services with ambulances and trauma care",
    description:
      "Our Emergency Care department operates 24 hours a day, 7 days a week to provide life-saving medical assistance when it matters most. We are equipped with ambulances, emergency rooms, and trained staff ready to respond to any medical emergency.",
    details: [
      "24/7 emergency room services",
      "Ambulance service for patient transport",
      "Trauma and accident care",
      "First aid and stabilization",
      "Emergency surgical interventions",
      "Crisis and disaster response",
    ],
    benefits: [
      "Available 24 hours, all days",
      "Free emergency ambulance service",
      "Trained emergency staff",
      "Basic life support equipment",
      "Referral to tertiary hospitals",
    ],
    faqs: [
      { q: "Is the emergency service available 24/7?", a: "Yes, our emergency department is open 24 hours a day, 365 days a year." },
      { q: "Do you provide ambulance service?", a: "Yes, we provide free ambulance service for emergency patient transport." },
      { q: "Is there any charge for emergency care?", a: "No, emergency consultations and basic life support are free of charge." },
    ],
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = serviceDetails[params.slug];
  if (!service) return {};
  return {
    title: `${service.title} Services | Ramzan Welfare International Trust`,
    description: service.hero,
    openGraph: {
      title: `${service.title} | Ramzan Welfare International Trust`,
      description: service.hero,
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Service not found</h1>
        <Link href="/" className="btn-primary mt-4 inline-block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-900 to-primary py-20">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl font-extrabold md:text-5xl">{service.title}</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-200">
            {service.hero}
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <p className="text-lg leading-relaxed text-gray-600">
              {service.description}
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {/* Services Details */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  What We Offer
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.details.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Key Benefits
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.benefits.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-primary-50 p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900">
                Support {service.title}
              </h3>
              <p className="mt-2 text-gray-600">
                Your donation helps us provide free {service.title.toLowerCase()}{" "}
                services to those who cannot afford them.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <Link
                  href={`/donate/${slug}`}
                  className="btn-primary !rounded-lg"
                >
                  Donate Now
                </Link>
                <Link href="/contact-us" className="btn-secondary !rounded-lg">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* FAQs */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions
              </h3>
              <div className="mt-6 space-y-4">
                {service.faqs.map((faq, i) => (
                  <details key={i} className="card group">
                    <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-gray-900">
                      {faq.q}
                      <svg className="h-5 w-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="border-t border-gray-100 px-4 py-3 text-gray-600">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
