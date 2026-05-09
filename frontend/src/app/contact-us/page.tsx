import { siteConfig } from "@/lib/constants";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-900 to-primary py-20">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl font-extrabold md:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
            Get in touch with us. We&apos;re here to help and answer any questions
            you might have.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
              <p className="mt-2 text-gray-600">
                Have questions about donations, volunteering, or our programs?
                Reach out to us through any of the channels below.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    ),
                    secondIcon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    ),
                    label: "Address",
                    value: siteConfig.address,
                  },
                  {
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    ),
                    label: "Email",
                    value: siteConfig.email,
                  },
                  {
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    ),
                    label: "Phone",
                    value: siteConfig.phone,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {item.icon}
                        {"secondIcon" in item && item.secondIcon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.label}</h3>
                      <p className="mt-1 text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}

                {/* International Offices */}
                <div className="rounded-lg bg-gray-50 p-6">
                  <h3 className="font-semibold text-gray-900">International Offices</h3>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p>🇺🇸 USA: +1 337 337 2370</p>
                    <p>🇬🇧 UK: (+44) 115 970 6256</p>
                    <p>🇨🇦 CANADA: +1 888 572 3485</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
              <form className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message *</label>
                  <textarea
                    rows={5}
                    required
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <button type="submit" className="btn-primary w-full !rounded-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
