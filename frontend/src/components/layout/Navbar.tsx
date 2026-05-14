"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/lib/constants";

const dropdownIcons: Record<string, React.ReactNode> = {
  Introduction: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
  ),
  "Bank Details": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
  ),
  "General OPD": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
    </svg>
  ),
  "Child Healthcare": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
    </svg>
  ),
  "Women Health": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  Vaccination: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.866.73-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
    </svg>
  ),
  "Laboratory Tests": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.75v-1.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v1.5m-4.5 0v10.5m-4.5-9a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9z" />
    </svg>
  ),
  "Emergency Care": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  ),
  Blogs: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  "Media Updates": (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  News: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
    </svg>
  ),
};

const dropdownDescriptions: Record<string, string> = {
  Introduction: "Learn about our mission and impact",
  "Bank Details": "Account information for donations",
  "General OPD": "Free primary care consultations",
  "Child Healthcare": "Pediatric care & immunizations",
  "Women Health": "Gynecology & prenatal services",
  Vaccination: "EPI-compliant immunization programs",
  "Laboratory Tests": "Free diagnostic services",
  "Emergency Care": "24/7 ambulance & trauma care",
  Blogs: "Stories & insights from the field",
  "Media Updates": "Videos and press coverage",
  News: "Latest announcements and updates",
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isChildActive = (children: { href: string }[]) =>
    children.some((c) => pathname.startsWith(c.href));

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="hidden bg-gray-900 text-sm text-gray-300 lg:block">
        <div className="container-custom flex items-center justify-between py-2">
          <div className="flex items-center gap-4 text-xs">
            <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
              {siteConfig.email}
            </a>
            <span className="text-gray-700">|</span>
            <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-white">
              {siteConfig.phone}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 rounded-full bg-red-500/10 px-3 py-0.5 text-xs font-medium text-red-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
              Emergency: {siteConfig.phone}
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-gray-100/80 bg-white/80 backdrop-blur-xl shadow-sm"
            : "bg-white/0"
        }`}
      >
        <div className="container-custom flex items-center justify-between py-3.5">
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <Image
              src="/images/logo.JPG"
              alt="Ramzan Welfare International Trust"
              width={44}
              height={44}
              className="h-11 w-11 rounded-xl object-cover"
              priority
            />
            <span className="text-sm font-bold leading-tight tracking-wide text-gray-900">
              RAMZAN WELFARE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const active = link.children
                ? isChildActive(link.children)
                : isActive(link.href);

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.children ? (
                    <button
                      className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${
                        active
                          ? "text-primary"
                          : "text-gray-600 hover:text-primary"
                      }`}
                    >
                      <span className="relative">
                        {link.label}
                        {active && (
                          <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-primary" />
                        )}
                      </span>
                      <svg
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${
                        active
                          ? "text-primary"
                          : "text-gray-600 hover:text-primary"
                      }`}
                    >
                      <span className="relative">
                        {link.label}
                        {active && (
                          <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-primary" />
                        )}
                      </span>
                    </Link>
                  )}

                  {/* Premium Dropdown */}
                  {link.children && activeDropdown === link.label && (
                    <div
                      className="absolute left-0 top-full pt-2"
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="relative rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
                        {/* Decorative arrow */}
                        <div className="absolute -top-1.5 left-6 h-3 w-3 rotate-45 bg-white border-l border-t border-black/5" />

                        <div className={`p-2 ${link.label === "Services" ? "w-[520px]" : "w-64"}`}>
                          {link.label === "Services" ? (
                            <div className="grid grid-cols-2 gap-1">
                              {link.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className={`group flex items-start gap-3 rounded-xl p-3 transition-all ${
                                    pathname === child.href
                                      ? "bg-primary-50"
                                      : "hover:bg-gray-50"
                                  }`}
                                >
                                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all ${
                                    pathname === child.href
                                      ? "bg-primary text-white"
                                      : "bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white"
                                  }`}>
                                    {dropdownIcons[child.label]}
                                  </div>
                                  <div className="min-w-0">
                                    <p className={`text-sm font-medium ${
                                      pathname === child.href ? "text-primary" : "text-gray-700"
                                    }`}>
                                      {child.label}
                                    </p>
                                    <p className="mt-0.5 text-xs text-gray-400 line-clamp-1">
                                      {dropdownDescriptions[child.label]}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <div className="space-y-0.5">
                              {link.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className={`group flex items-start gap-3 rounded-xl p-3 transition-all ${
                                    pathname === child.href
                                      ? "bg-primary-50"
                                      : "hover:bg-gray-50"
                                  }`}
                                >
                                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all ${
                                    pathname === child.href
                                      ? "bg-primary text-white"
                                      : "bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white"
                                  }`}>
                                    {dropdownIcons[child.label]}
                                  </div>
                                  <div className="min-w-0">
                                    <p className={`text-sm font-medium ${
                                      pathname === child.href ? "text-primary" : "text-gray-700"
                                    }`}>
                                      {child.label}
                                    </p>
                                    <p className="mt-0.5 text-xs text-gray-400 line-clamp-1">
                                      {dropdownDescriptions[child.label]}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              href="/donate"
              className="ml-3 rounded-xl bg-gradient-to-r from-primary to-primary-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/donate"
              className="rounded-xl bg-gradient-to-r from-primary to-primary-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-primary/20"
            >
              Donate
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl transition-all duration-300 ease-in-out lg:hidden ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-custom space-y-0.5 pb-5 pt-3">
          {navLinks.map((link) => {
            const active = link.children
              ? isChildActive(link.children)
              : isActive(link.href);

            return (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.label ? null : link.label
                        )
                      }
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        active
                          ? "text-primary bg-primary-50"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ease-in-out ${
                        activeDropdown === link.label
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-3 space-y-0.5 border-l-2 border-primary/20 pb-1 pl-3 pt-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                              pathname === child.href
                                ? "bg-primary-50 font-medium text-primary"
                                : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${
                              pathname === child.href
                                ? "bg-primary text-white"
                                : "bg-gray-100 text-gray-400"
                            }`}>
                              {dropdownIcons[child.label]}
                            </span>
                            <span>{child.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "text-primary bg-primary-50"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
