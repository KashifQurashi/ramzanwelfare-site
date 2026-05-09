"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { testimonials } from "@/lib/constants";

const INTERVAL = 6000;

function SatisfactionRing({ pct }: { pct: number }) {
  const radius = 42;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (pct / 100) * circ;
  return (
    <div className="relative flex items-center justify-center">
      <svg width="110" height="110" viewBox="0 0 110 110" className="-rotate-90">
        <circle cx="55" cy="55" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
        <circle
          cx="55"
          cy="55"
          r={radius}
          fill="none"
          stroke="url(#goldGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.8s ease" }}
        />
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9A23D" />
            <stop offset="100%" stopColor="#E8C45A" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute text-2xl font-bold text-white">{pct}%</span>
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const activeRef = useRef(active);

  activeRef.current = active;

  const goTo = useCallback((i: number) => {
    setActive(i);
    setProgress(0);
    startRef.current = performance.now();
  }, []);

  const prev = useCallback(() => {
    const next = activeRef.current === 0 ? testimonials.length - 1 : activeRef.current - 1;
    goTo(next);
  }, [goTo]);

  const next = useCallback(() => {
    const next = activeRef.current === testimonials.length - 1 ? 0 : activeRef.current + 1;
    goTo(next);
  }, [goTo]);

  useEffect(() => {
    startRef.current = performance.now();
    const tick = (now: number) => {
      if (!paused) {
        const elapsed = now - startRef.current;
        const pct = Math.min((elapsed / INTERVAL) * 100, 100);
        setProgress(pct);
        if (pct >= 100) { next(); return; }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paused, next]);

  const t = testimonials[active];

  return (
    <section className="relative overflow-hidden bg-surface-50 py-24">
      <div className="absolute left-0 top-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-primary/5 to-transparent blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-radial from-secondary/5 to-transparent blur-3xl" />

      <div className="container-custom relative">
        <SectionHeader
          badge="Testimonials"
          title="What People Say"
          subtitle="Hear from those whose lives have been transformed through our healthcare services."
        />

        <div className="mx-auto mt-16 max-w-5xl">
          <div
            className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 z-20 h-1 bg-gray-100">
              <div
                className="h-full bg-gradient-to-r from-secondary to-secondary/60 transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex min-h-[380px] flex-col md:flex-row">
              {/* Left panel — stats */}
              <div className="relative flex w-full flex-col items-center justify-center gap-6 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 px-8 py-12 md:w-[35%]">
                <div className="absolute inset-0 opacity-[0.04]" style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, rgba(201, 162, 61, 0.6) 0%, transparent 60%)`
                }} />
                <div className="relative flex flex-col items-center gap-1">
                  <SatisfactionRing pct={96} />
                  <p className="mt-1 text-xs font-medium uppercase tracking-widest text-white/60">Satisfaction</p>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">1M+</p>
                    <p className="text-2xs font-medium uppercase tracking-widest text-white/50">Patients</p>
                  </div>
                  <div className="h-10 w-px bg-white/10" />
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">12+</p>
                    <p className="text-2xs font-medium uppercase tracking-widest text-white/50">Years</p>
                  </div>
                </div>
                <span className="text-2xs font-semibold uppercase tracking-[0.25em] text-secondary/80">By The Numbers</span>
              </div>

              {/* Right panel — testimonial */}
              <div className="flex flex-1 flex-col justify-center px-8 py-10 md:px-12">
                {/* Decorative quote */}
                <div className="text-6xl font-bold leading-none text-primary/5 select-none">
                  &ldquo;
                </div>

                <p className="relative -mt-4 text-base leading-relaxed text-gray-700 italic md:text-lg md:leading-relaxed">
                  {t.content}
                </p>

                <div className="mt-8 border-t border-gray-100 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-50 to-primary-100 text-lg font-bold text-primary shadow-md ring-4 ring-white">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-base font-bold text-gray-900">{t.name}</p>
                          <p className="text-sm text-gray-500">{t.role}</p>
                        </div>
                        <div className="flex shrink-0 items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg key={i} className={`h-4.5 w-4.5 ${i < Math.floor(t.rating) ? "text-secondary" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button onClick={prev} className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-gray-400 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg">
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2.5">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} className={`h-2.5 rounded-full transition-all duration-300 ${i === active ? "w-7 bg-primary" : "w-2.5 bg-gray-300 hover:bg-gray-400"}`} />
              ))}
            </div>
            <button onClick={next} className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-gray-400 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg">
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
