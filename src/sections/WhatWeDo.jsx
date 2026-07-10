import React, { useEffect, useRef } from "react";
import star from "../assets/star.jpg";

/* ─── images ─── */
const IMG_CODE   = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop";

/* ─── scroll-reveal hook ─── */
function useFadeIn(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-10");
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

/* ─── SVG icons ─── */
const IconHeart = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);
const IconUsers = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const IconStar = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);
const IconGlobe = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconTrophy = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4M7 3H5a2 2 0 00-2 2v3c0 2.97 1.69 5.537 4.138 6.76M17 3h2a2 2 0 012 2v3c0 2.97-1.69 5.537-4.138 6.76M7 3a9 9 0 0010 0M7 3C7 3 12 5 12 9s5-6 5-6" />
  </svg>
);
const IconArrow = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);
const IconCheck = () => (
  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

/* ════════════════════════════════════════════════ */
export default function WhatWeDo() {
  const heroRef    = useFadeIn(0);
  const statsRef   = useFadeIn(0);
  const pillarsRef = useFadeIn(0);
  const processRef = useFadeIn(0);

  return (
    <main className="bg-[#f6f9fd] text-[#013463] overflow-x-hidden">

      {/* ══════════════════════════════════════════
          1. HERO — star bg, like About page
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* star background image */}
        <img
          src={star}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover select-none z-0"
        />

        {/* light overlay — keeps image vivid */}
        <div className="absolute inset-0 z-0 bg-white/25" />

        {/* decorative rings */}
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full border-2 border-[#013463]/40 z-0 hidden lg:block" />
        <div className="absolute -right-16 -top-16 w-[320px] h-[320px] rounded-full border-2 border-[#DDA23A]/40 z-0 hidden lg:block" />

        {/* content */}
        <div
          ref={heroRef}
          className="opacity-0 translate-y-10 transition-all duration-700 ease-out relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-24 pb-16 md:pt-32 md:pb-24"
        >
          <div className="max-w-3xl">

            {/* eyebrow */}
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-6">
              <span className="inline-block w-6 h-px bg-[#DDA23A]" />
              Our Mission
            </span>

            <h1 className="font-extrabold text-[#013463] text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] tracking-tight mb-6 md:mb-8">
              Architecting the{" "}
              <span className="relative inline-block text-[#DDA23A]">
                Digital
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#DDA23A]/40 rounded-full" />
              </span>{" "}
              <span className="italic font-black text-[#DDA23A]">Sanctuary</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              We are a collective of Muslim developers dedicated to technical
              excellence and spiritual purpose — building tools that serve
              humanity, rooted in faith and code.
            </p>


            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/form"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#DDA23A] px-8 py-4 text-sm font-bold text-[#013463] shadow-lg shadow-[#DDA23A]/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-400 active:scale-95"
              >
                Become a Member
                <span className="transition-transform duration-200 group-hover:translate-x-1"><IconArrow /></span>
              </a>
              <a
                href="https://t.me/nsda_community"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#013463] bg-white/60 px-8 py-4 text-sm font-bold text-[#013463] transition-all duration-200 hover:bg-[#013463] hover:text-white active:scale-95"
              >
                Join Our Telegram
              </a>
            </div>
          </div>
        </div>

        {/* bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f6f9fd] to-transparent z-10 pointer-events-none" />

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 animate-bounce">
          <span className="w-px h-8 bg-[#013463]/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#013463]/50" />
        </div>
      </section>


      {/* ══════════════════════════════════════════
          2. STATS
      ══════════════════════════════════════════ */}
      <section className="bg-[#013463] py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div
            ref={statsRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-4">
                <span className="inline-block w-6 h-px bg-[#DDA23A]" />
                By the Numbers
                <span className="inline-block w-6 h-px bg-[#DDA23A]" />
              </span>
              <h2 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl">
                Growing Every Day
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10">
              {[
                { value: "11+",  color: "text-white",     label: "Industry Mentors",     sub: "Guiding the next generation" },
                { value: "80+",  color: "text-[#DDA23A]", label: "Active Students",      sub: "From universities nationwide" },
                { value: "15+", color: "text-white",     label: "Universities",           sub: "Serving the Ummah globally" },
              ].map(({ value, color, label, sub }) => (
                <div
                  key={label}
                  className="group relative bg-white/5 border border-white/10 rounded-3xl p-10 sm:p-12 text-center hover:bg-white/10 hover:border-[#DDA23A]/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-[#DDA23A]/0 to-[#DDA23A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className={`text-6xl sm:text-7xl font-extrabold ${color} leading-none mb-3`}>{value}</p>
                  <p className="text-white font-bold text-base sm:text-lg uppercase tracking-wider mb-2">{label}</p>
                  <p className="text-white/50 text-xs sm:text-sm">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          3. PILLARS — bento grid
      ══════════════════════════════════════════ */}
      <section className="bg-[#f6f9fd] py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div
            ref={pillarsRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            {/* section header */}
            <div className="mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-3">
                <span className="inline-block w-6 h-px bg-[#DDA23A]" />
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#013463] leading-tight">
                The{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Pillars</span>
                  <span className="absolute bottom-0 left-0 w-full h-[6px] bg-[#DDA23A]/30 rounded-full -z-0" />
                </span>{" "}
                of NSDA
              </h2>
            </div>

            {/* bento grid */}
            <div className="grid gap-6 md:grid-cols-12">

              {/* Sadaqah Jariyah — wide with code image */}
              <div className="md:col-span-8 bg-white border border-gray-100 p-8 sm:p-10 rounded-[1.75rem] shadow-sm hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group overflow-hidden relative">
                <span className="absolute top-0 left-10 h-[3px] w-12 bg-[#DDA23A] rounded-b-full" />
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1 space-y-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#DDA23A] flex items-center justify-center text-[#013463]">
                      <IconHeart />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#013463]">Sadaqah Jariyah</h3>
                    <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                      Building open-source tools that serve the Ummah and earn continuous reward.
                      From prayer timing algorithms to Islamic education platforms, we leverage
                      code as a form of eternal charity.
                    </p>
                    <ul className="space-y-3">
                      {["Open-source licensing for all religious tools", "Community-driven feature roadmaps"].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm font-medium text-gray-500">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#013463] flex items-center justify-center">
                            <IconCheck />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <img
                      className="rounded-2xl w-full h-56 sm:h-64 object-cover shadow-md group-hover:shadow-xl transition-shadow duration-300"
                      src={IMG_CODE}
                      alt="Code editor"
                    />
                  </div>
                </div>
              </div>

              {/* Mentorship — dark navy */}
              <div className="md:col-span-4 bg-[#013463] text-white p-8 sm:p-10 rounded-[1.75rem] shadow-xl flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-white/5 group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DDA23A] to-transparent" />
                <div className="relative z-10 space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#DDA23A] flex items-center justify-center text-[#013463]">
                    <IconUsers />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold">Mentorship</h3>
                  <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                    One-on-one guidance connecting seasoned devs with aspiring students.
                    Bridge the gap between academia and the elite tech industry.
                  </p>
                </div>
                
              </div>

              {/* Nujum al-Code — eye-catch blue bg */}
              <div className="md:col-span-4 bg-[#0e4d8a] p-8 sm:p-10 rounded-[1.75rem] shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/5 group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DDA23A] to-transparent" />
                <div className="relative z-10 space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#DDA23A] flex items-center justify-center text-[#013463]">
                    <IconStar />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">Nujum al-Code</h3>
                  <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                    Technical deep-dives and webinars with industry veterans.
                    Learn the "secrets of the stars" in software architecture and career growth.
                  </p>
                </div>
              </div>

              {/* NSDA Hackathon — wide */}
              <div className="md:col-span-8 bg-white p-8 sm:p-10 rounded-[1.75rem] border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                <span className="absolute top-0 left-10 h-[3px] w-12 bg-[#DDA23A] rounded-b-full" />
                {/* decorative bg pattern */}
                <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-[#DDA23A]/5 group-hover:scale-125 transition-transform duration-500" />

                <div className="relative z-10 space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#DDA23A] flex items-center justify-center text-[#013463]">
                      <IconTrophy />
                    </div>
                   
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#013463] mb-2">NSDA Hackathon</h3>
                    <p className="text-gray-500 leading-relaxed text-sm sm:text-base max-w-xl">
                      An intensive internal hackathon exclusively for NSDA students — compete, collaborate,
                      and ship real projects in 1 week. Teams solve challenges rooted in faith and
                      community impact, mentored by NSDA leadership throughout.
                    </p>
                  </div>

                  {/* highlights row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                    {[
                      { icon: "⏱️", label: "1 week" },
                      { icon: "👥", label: "Team Based" },
                      { icon: "🏆", label: "Real Prizes" },
                      { icon: "🕌", label: "Faith-Driven" },
                    ].map(({ icon, label }) => (
                      <div key={label} className="flex flex-col items-center gap-1.5 bg-[#f6f9fd] border border-gray-100 rounded-2xl py-3 px-2 text-center">
                        <span className="text-xl">{icon}</span>
                        <span className="text-[11px] font-bold text-[#013463] uppercase tracking-wider">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          4. PROCESS TIMELINE
      ══════════════════════════════════════════ */}
      <section className="bg-[#013463] py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div
            ref={processRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-3">
                <span className="inline-block w-6 h-px bg-[#DDA23A]" />
                How It Works
                <span className="inline-block w-6 h-px bg-[#DDA23A]" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Our Process</h2>
              <p className="text-white/60 max-w-xl mx-auto text-sm sm:text-base">
                From intentional planning to ethical execution — our workflow is designed for lasting impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
              <div className="hidden md:block absolute top-10 left-[calc(16.67%+12px)] right-[calc(16.67%+12px)] h-[2px] bg-gradient-to-r from-white/10 via-[#DDA23A]/60 to-white/10 z-0" />
              {[
                { step: "01", title: "Collaborate", body: "Gathering diverse perspectives from the community to define meaningful challenges." },
                { step: "02", title: "Build",       body: "Agile development cycles with a focus on code quality, security, and accessibility." },
                { step: "03", title: "Serve",       body: "Deploying solutions that provide value and ease for the Ummah worldwide." },
              ].map(({ step, title, body }) => (
                <div key={step} className="relative z-10 text-center space-y-5 group">
                  <div className="w-20 h-20 mx-auto rounded-full border-4 border-white/20 bg-white/5 flex items-center justify-center shadow-lg group-hover:border-[#DDA23A] group-hover:bg-[#DDA23A]/10 transition-all duration-300">
                    <span className="text-xl font-extrabold text-white group-hover:text-[#DDA23A] transition-colors duration-300">{step}</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-extrabold text-white">{title}</h4>
                  <p className="text-white/55 text-sm leading-relaxed px-2 sm:px-6">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          5. CTA — consistent bg-[#f6f9fd], no inner card
      ══════════════════════════════════════════ */}
      <section className="bg-[#f6f9fd] py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-5">
            <span className="inline-block w-5 h-px bg-[#DDA23A]" />
            Join the Movement
            <span className="inline-block w-5 h-px bg-[#DDA23A]" />
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#013463] mb-5 leading-tight">
            Ready to code for a{" "}
            <span className="text-[#DDA23A]">higher purpose?</span>
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-10">
            Join a community that puts faith at the center of every commit.
            Build tools that matter, with people who care.
          </p>

          {/* divider */}
          <div className="w-16 h-1 bg-[#DDA23A] rounded-full mx-auto mb-10" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/register"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#DDA23A] px-10 py-4 text-sm font-bold text-[#013463] shadow-lg shadow-[#DDA23A]/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-400 active:scale-95"
            >
              Become a Member
              <span className="transition-transform duration-200 group-hover:translate-x-1"><IconArrow /></span>
            </a>
            <a
              href="https://t.me/nsda_community"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#013463] bg-transparent px-10 py-4 text-sm font-bold text-[#013463] transition-all duration-200 hover:bg-[#013463] hover:text-white active:scale-95"
            >
              Support Our Projects
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}