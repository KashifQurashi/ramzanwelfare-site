"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="hidden bg-primary py-2 text-sm text-white lg:block">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition-opacity hover:opacity-80"
            >
              {siteConfig.email}
            </a>
            <span>|</span>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              className="transition-opacity hover:opacity-80"
            >
              {siteConfig.whatsapp}
            </a>
            <span>|</span>
            <a href={`tel:${siteConfig.phone}`} className="transition-opacity hover:opacity-80">
              {siteConfig.phone}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/donate" className="font-medium text-secondary hover:underline">
              Medical Services
            </Link>
            <Link href="/donate" className="btn-gold !rounded-md !px-4 !py-1.5 !text-sm">
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="container-custom flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
            RW
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-sm font-bold leading-tight text-primary">
              RAMZAN WELFARE
            </span>
            <span className="text-[10px] leading-tight text-gray-500">
              International Trust
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {link.children ? (
                <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary">
                  {link.label}
                  <svg
                    className={`h-4 w-4 transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary"
                >
                  {link.label}
                </Link>
              )}
              {link.children && activeDropdown === link.label && (
                <div className="absolute left-0 top-full w-48 rounded-lg bg-white py-2 shadow-xl ring-1 ring-black/5">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-primary-50 hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link href="/donate" className="btn-gold !rounded-md !px-3 !py-1.5 !text-sm">
            Donate
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="container-custom space-y-1 pb-4 pt-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.label ? null : link.label
                        )
                      }
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary"
                    >
                      {link.label}
                      <svg
                        className={`h-4 w-4 transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeDropdown === link.label && (
                      <div className="ml-4 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-primary-50 hover:text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-primary-50 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
