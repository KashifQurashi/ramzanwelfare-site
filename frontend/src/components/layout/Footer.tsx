import Link from "next/link";
import { siteConfig } from "@/lib/constants";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services/general-opd" },
  { label: "Media Updates", href: "/media" },
  { label: "Latest News", href: "/news" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact-us" },
];

const services = [
  { label: "General OPD", href: "/services/general-opd" },
  { label: "Child Healthcare", href: "/services/child-healthcare" },
  { label: "Women Health", href: "/services/women-health" },
  { label: "Vaccination", href: "/services/vaccination" },
  { label: "Laboratory Tests", href: "/services/laboratory-tests" },
  { label: "Emergency Care", href: "/services/emergency-care" },
];

const contacts = [
  { label: "Address", value: siteConfig.address, icon: "location" },
  { label: "Email", value: siteConfig.email, icon: "email", href: `mailto:${siteConfig.email}` },
  { label: "Phone", value: siteConfig.phone, icon: "phone", href: `tel:${siteConfig.phone}` },
  { label: "WhatsApp", value: siteConfig.whatsapp, icon: "whatsapp", href: `https://wa.me/${siteConfig.whatsapp}` },
];

const contactIcons = {
  location: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  email: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ),
  phone: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  whatsapp: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer>
      {/* Light Section — Newsletter */}
      <div className="relative bg-surface-50 pb-28 md:pb-36">
        <div className="container-custom py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Stay Connected
            </span>
            <h3 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Subscribe to Our Newsletter
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-gray-500">
              Stay updated with our latest healthcare activities and community initiatives.
            </p>
            <form className="mx-auto mt-8 flex max-w-lg gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 shadow-sm placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-600 hover:shadow-xl hover:shadow-primary/30"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="relative -mt-28 md:-mt-36">
        <div className="absolute inset-0 bg-surface-50" style={{ clipPath: "inset(0 0 50% 0)" }} />
        <svg
          className="relative w-full"
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
            className="fill-gray-900"
          />
        </svg>
      </div>

      {/* Dark Section */}
      <div className="bg-gray-900">
        <div className="container-custom py-14">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-600 shadow-lg shadow-primary/20">
                  <span className="text-lg font-extrabold text-white">RW</span>
                </div>
                <div>
                  <div className="text-sm font-bold leading-tight text-white">
                    RAMZAN WELFARE
                  </div>
                  <div className="text-[10px] leading-tight text-gray-500">
                    International Trust
                  </div>
                </div>
              </Link>
              <p className="mt-5 text-sm leading-relaxed text-gray-400">
                {siteConfig.description}
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
                <span className="h-4 w-1 rounded-full bg-primary" />
                Quick Links
              </h4>
              <ul className="mt-5 space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-gray-400 transition-all hover:text-white"
                    >
                      <span className="h-1 w-1 rounded-full bg-gray-600 transition-all group-hover:w-3 group-hover:rounded-full group-hover:bg-primary" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
                <span className="h-4 w-1 rounded-full bg-primary" />
                Our Services
              </h4>
              <ul className="mt-5 space-y-2.5">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="group flex items-center gap-2 text-sm text-gray-400 transition-all hover:text-white"
                    >
                      <span className="h-1 w-1 rounded-full bg-gray-600 transition-all group-hover:w-3 group-hover:rounded-full group-hover:bg-primary" />
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
                <span className="h-4 w-1 rounded-full bg-primary" />
                Contact Us
              </h4>
              <ul className="mt-5 space-y-3.5">
                {contacts.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="group flex items-start gap-3 text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        <span className="mt-0.5 shrink-0 text-primary transition-colors group-hover:text-primary-400">
                          {contactIcons[item.icon as keyof typeof contactIcons]}
                        </span>
                        <span className="leading-relaxed">{item.value}</span>
                      </a>
                    ) : (
                      <span className="flex items-start gap-3 text-sm text-gray-400">
                        <span className="mt-0.5 shrink-0 text-primary">
                          {contactIcons[item.icon as keyof typeof contactIcons]}
                        </span>
                        <span className="leading-relaxed">{item.value}</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="container-custom flex flex-col items-center justify-between gap-4 py-6 text-sm md:flex-row">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} Ramzan Welfare International Trust. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/about/terms"
                className="text-sm text-gray-500 transition-colors hover:text-white"
              >
                Terms of Use
              </Link>
              <span className="h-1 w-1 rounded-full bg-gray-700" />
              <Link
                href="/about/privacy"
                className="text-sm text-gray-500 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
