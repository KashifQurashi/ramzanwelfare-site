import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-white">
      {/* Left: Medical iconography background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950" />

        {/* Medical cross pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 0h10v25h25v10H35v25H25V35H0V25h25V0z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Radial glows */}
        <div className="absolute left-1/3 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-primary-400/15 to-transparent blur-3xl" />
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] translate-x-1/3 -translate-y-1/2 rounded-full bg-gradient-radial from-secondary/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-radial from-primary-300/10 to-transparent blur-3xl" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Right side: decorative medical card */}
      <div className="absolute right-0 top-0 hidden h-full w-[45%] lg:block">
        <div className="relative h-full w-full overflow-hidden">
          {/* Large decorative circle */}
          <div className="absolute right-[-20%] top-[-10%] h-[600px] w-[600px] rounded-full border-[40px] border-white/5" />
          <div className="absolute right-[-10%] bottom-[-15%] h-[400px] w-[400px] rounded-full border-[30px] border-white/[0.03]" />

          {/* Service icon cards floating */}
          <div className="absolute right-[15%] top-[18%] animate-float rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-secondary-600">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">24/7 Emergency</p>
                <p className="text-xs text-gray-400">Free ambulance service</p>
              </div>
            </div>
          </div>

          <div className="absolute right-[5%] top-[45%] animate-float rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl" style={{ animationDelay: "1.5s" }}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-400 to-primary-600">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">General OPD</p>
                <p className="text-xs text-gray-400">Free consultations</p>
              </div>
            </div>
          </div>

          <div className="absolute right-[25%] bottom-[20%] animate-float rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl" style={{ animationDelay: "3s" }}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-secondary-600">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Child Healthcare</p>
                <p className="text-xs text-gray-400">Pediatric care</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative flex min-h-[88vh] items-center">
        <div className="w-full max-w-3xl py-20 lg:max-w-[55%]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="flex h-2 w-2 animate-pulse rounded-full bg-secondary" />
            <span className="text-sm font-medium tracking-wide text-secondary">
              PAKISTAN&apos;S LARGEST HEALTHCARE WELFARE ORGANIZATION
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-8 text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-secondary to-secondary-300 bg-clip-text text-transparent">
              Ramzan Welfare
            </span>
            <br />
            <span className="relative">
              International Trust
              <span className="absolute -bottom-2 left-0 h-1.5 w-24 rounded-full bg-gradient-to-r from-secondary to-transparent" />
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
            A professionally managed healthcare organization delivering free,
            high-quality medical services through 50+ centers across Pakistan.
            Serving 500,000+ patients annually with operational excellence, full
            transparency, and measurable community impact.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/donate"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-secondary to-secondary-600 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-secondary/25 transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/30 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 translate-x-[-100%] skew-x-[-15deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover:translate-x-[100%]" />
              Donate Now
              <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/services/general-opd"
              className="group inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10"
            >
              Our Services
              <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Stats strip */}
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
            {[
              { value: "25+", label: "Years of Operational Excellence" },
              { value: "1M+", label: "Lives Impacted" },
              { value: "50+", label: "Medical Centers Nationwide" },
            ].map((stat) => (
              <div key={stat.label} className="relative">
                <p className="text-2xl font-bold tracking-tight text-secondary">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
