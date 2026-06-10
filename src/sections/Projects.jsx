import React, { useEffect, useRef } from "react";
import star from "../assets/star.jpg";

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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

/* ─── inline SVG icons ─── */
const IconTelegram = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);
const IconBot = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const IconBook = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);
const IconVideo = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.868v6.264a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
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
const IconExternal = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);
const IconGithub = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

/* project data */
const PROJECTS = [
  {
    id: 1,
    tag: "Python · Telegram",
    tagColor: "bg-blue-100 text-blue-800",
    status: "Live",
    statusColor: "bg-green-100 text-green-700",
    title: "Nejm Ask Bot",
    description:
      "A sophisticated knowledge-base Telegram bot for student inquiries and community management. Handles high-concurrency with seamless user interaction.",
    icon: <IconTelegram />,
    iconBg: "bg-[#DDA23A]",
    iconColor: "text-[#013463]",
    contributors: 8,
    span: "md:col-span-8",
    dark: false,
    features: ["AI-powered Q&A engine", "Community moderation tools", "Multi-language support"],
  },
  {
    id: 2,
    tag: "Python · Automation",
    tagColor: "bg-yellow-100 text-yellow-800",
    status: "Active",
    statusColor: "bg-yellow-100 text-yellow-700",
    title: "Daily Quran Automation",
    description:
      "Automatically posts a short Quran video every morning to the Telegram channel. Delivers Quranic verses with tafsir to keep the community spiritually connected at the start of each day.",
    icon: <IconVideo />,
    iconBg: "bg-[#DDA23A]",
    iconColor: "text-[#013463]",
    contributors: 5,
    span: "md:col-span-4",
    dark: true,
    features: ["Daily scheduled video posts", "Verse + tafsir captions", "Telegram Bot API"],
  },
  {
    id: 3,
    tag: "React · Firebase",
    tagColor: "bg-green-100 text-green-800",
    status: "Production Ready",
    statusColor: "bg-green-100 text-green-700",
    title: "Quran Study App",
    description:
      "A cross-platform React and Firebase application for structured Quran study and tafsir tracking. Features real-time sync across devices and progress dashboards.",
    icon: <IconBook />,
    iconBg: "bg-[#DDA23A]",
    iconColor: "text-[#013463]",
    contributors: 12,
    span: "md:col-span-12",
    dark: false,
    wide: true,
    features: ["Real-time sync", "Tafsir progress tracking", "Cross-platform"],
    stack: ["React 18", "Firebase", "Tailwind CSS", "PWA"],
  },
  {
    id: 4,
    tag: "Python · Telegram",
    tagColor: "bg-purple-100 text-purple-800",
    status: "Beta",
    statusColor: "bg-purple-100 text-purple-700",
    title: "Nejm Ask Bot v2",
    description:
      "Next-generation upgrade with advanced NLP capabilities and a new admin dashboard for community managers.",
    icon: <IconBot />,
    iconBg: "bg-[#DDA23A]",
    iconColor: "text-[#013463]",
    contributors: 4,
    span: "md:col-span-4",
    dark: false,
  },
];

/* ════════════════════════════════════════════════ */
export default function Projects() {
  const heroRef    = useFadeIn(0);
  const gridRef    = useFadeIn(100);
  const ctaRef     = useFadeIn(100);

  return (
    <main className="bg-[#f6f9fd] text-[#013463] overflow-x-hidden">

      {/* ══════════════════════════════════════════
          1. HERO — star bg, consistent with About & WhatWeDo
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* star background */}
        <img
          src={star}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover select-none z-0"
        />

        {/* light overlay */}
        <div className="absolute inset-0 z-0 bg-white/5" />

        {/* decorative rings */}
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full border-2 border-[#013463]/40 z-0 hidden lg:block" />
        <div className="absolute -right-16 -top-16 w-[320px] h-[320px] rounded-full border-2 border-[#DDA23A]/40 z-0 hidden lg:block" />

        {/* content */}
        <div
          ref={heroRef}
          className="opacity-0 translate-y-10 transition-all duration-700 ease-out relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-28 md:py-0"
        >
          <div className="max-w-3xl">

            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-6">
              <span className="inline-block w-6 h-px bg-[#DDA23A]" />
              Open Source Initiative
            </span>

            <h1 className="font-extrabold text-[#013463] text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] tracking-tight mb-6 md:mb-8">
              Building for{" "}
              <span className="relative inline-block text-[#DDA23A]">
                the Ummah
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#DDA23A]/40 rounded-full" />
              </span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mb-10">
              We build tools that solve real problems within the Muslim community,
              following modern engineering best practices. Our code is our
              contribution to the digital sanctuary.
            </p>

            {/* project count stats */}
            <div className="flex flex-wrap gap-8 sm:gap-12 mb-10">
              {[
                { value: "4+",   label: "Active Projects" },
                { value: "15+", label: "Contributors" },
                { value: "100%", label: "Open Source" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-[#DDA23A] font-extrabold text-2xl sm:text-3xl leading-none">{value}</span>
                  <span className="text-[#013463] text-xs uppercase tracking-widest mt-1 font-semibold">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/NSDA-Community-Projects"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#DDA23A] px-8 py-4 text-sm font-bold text-[#013463] shadow-lg shadow-[#DDA23A]/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-400 active:scale-95"
              >
                <IconGithub />
                Explore on GitHub
                <span className="transition-transform duration-200 group-hover:translate-x-1"><IconArrow /></span>
              </a>
              <a
                href="/register"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#013463] bg-white/60 px-8 py-4 text-sm font-bold text-[#013463] transition-all duration-200 hover:bg-[#013463] hover:text-white active:scale-95"
              >
                Become a Contributor
              </a>
            </div>
          </div>
        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f6f9fd] to-transparent z-10 pointer-events-none" />

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 animate-bounce">
          <span className="w-px h-8 bg-[#013463]/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#013463]/50" />
        </div>
      </section>


      {/* ══════════════════════════════════════════
          2. PROJECTS BENTO GRID
      ══════════════════════════════════════════ */}
      <section className="bg-[#f6f9fd] py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto">

          <div className="mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-3">
              <span className="inline-block w-6 h-px bg-[#DDA23A]" />
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#013463] leading-tight">
              Featured{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Projects</span>
                <span className="absolute bottom-0 left-0 w-full h-[6px] bg-[#DDA23A]/30 rounded-full -z-0" />
              </span>
            </h2>
          </div>

          <div
            ref={gridRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out grid gap-6 md:grid-cols-12"
          >

            {/* ── CARD 1: Nejm Ask Bot (wide) ── */}
            <div className="md:col-span-8 bg-white border border-gray-100 p-6 sm:p-8 rounded-[1.75rem] shadow-sm hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <span className="absolute top-0 left-10 h-[3px] w-12 bg-[#DDA23A] rounded-b-full" />

              <div className="flex flex-col h-full gap-6">
                {/* top row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold uppercase tracking-wider">Python</span>
                      <span className="px-2.5 py-1 rounded-full bg-sky-100 text-sky-800 text-[10px] font-bold uppercase tracking-wider">Telegram</span>
                      <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider">● Live</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#013463]">Nejm Ask Bot</h3>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#DDA23A] flex items-center justify-center text-[#013463]">
                    <IconTelegram />
                  </div>
                </div>

                <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                  A Telegram bot that bridges students and NSDA leadership. Students submit any question through the bot, leaders receive it and reply — keeping all communication organised, fast, and within the community channel.
                </p>

                {/* how it works flow */}
                

                <ul className="space-y-2.5">
                  {[
                    "Students ask questions via Telegram",
                    "Leadership receives & replies through the bot",
                    "Organised inquiry tracking per student",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#013463] flex items-center justify-center">
                        <IconCheck />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center pt-2">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {["bg-[#013463]", "bg-[#DDA23A]", "bg-teal-400"].map((c, i) => (
                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-white ${c}`} />
                      ))}
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">+8</div>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">contributors</span>
                  </div>
                </div>
              </div>

              {/* code motif bg */}
              <div className="absolute -right-8 bottom-8 opacity-[0.04] rotate-6 pointer-events-none select-none hidden lg:block">
                <pre className="text-xs font-mono text-[#013463] leading-6">
{`async def handle(update, ctx):
    query = update.message.text
    resp = lookup_knowledge_base(query)
    await update.message.reply_text(resp)`}
                </pre>
              </div>
            </div>

            {/* ── CARD 2: Daily Quran Automation (tall dark) ── */}
            <div className="md:col-span-4 bg-[#013463] text-white p-6 sm:p-8 rounded-[1.75rem] shadow-xl flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DDA23A] to-transparent" />
              <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-white/5 group-hover:scale-125 transition-transform duration-500" />

              <div className="relative z-10 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#DDA23A] flex items-center justify-center text-[#013463]">
                    <IconVideo />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-[10px] font-bold uppercase tracking-wider">● Active</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold">Daily Quran Automation</h3>

                <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                  Automatically posts a short Quran video every morning to the Telegram channel —
                  delivering Quranic verses to keep the community spiritually
                  connected at the start of each day.
                </p>

                <ul className="space-y-2">
                  {["Daily scheduled video posts", "Verse + tafsir captions", "Telegram Bot API"].map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DDA23A] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>


            </div>

            {/* ── CARD 3: Quran Study App — 3:4 split (left narrow, ecosystem wide) ── */}
            <div className="md:col-span-12 bg-white border border-gray-100 rounded-[1.75rem] shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group relative">
              <span className="absolute top-0 left-10 h-[3px] w-12 bg-[#DDA23A] rounded-b-full z-10" />
              <div className="flex flex-col lg:flex-row min-h-0">

                {/* LEFT — Quran Study App info, fully filled */}
                <div className="w-full lg:w-[37%] p-6 sm:p-8 flex flex-col justify-between gap-5 border-b lg:border-b-0 lg:border-r border-gray-100">

                  {/* header: tags + icon */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2.5">
                      <div className="flex flex-wrap gap-1.5">
                        <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-wider">React</span>
                        <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[10px] font-bold uppercase tracking-wider">Firebase</span>
                        <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-700 text-[10px] font-bold uppercase tracking-wider border border-green-200">● Live</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#013463] leading-tight">Quran Study App</h3>
                    </div>
                    <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-[#DDA23A] flex items-center justify-center text-[#013463]">
                      <IconBook />
                    </div>
                  </div>

                  {/* description */}
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    A cross-platform React + Firebase app for structured Quran study and tafsir tracking with real-time sync across all devices.
                  </p>

                  {/* study progress bars */}
                  <div className="space-y-2.5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#013463]/50">Study Progress</p>
                    {[
                      { label: "Al-Baqarah",  pct: 72 },
                      { label: "Al-Imran",    pct: 45 },
                      { label: "An-Nisa",     pct: 28 },
                    ].map(({ label, pct }) => (
                      <div key={label}>
                        <div className="flex justify-between mb-1">
                          <span className="text-[11px] font-semibold text-[#013463]">{label}</span>
                          <span className="text-[11px] font-bold text-[#DDA23A]">{pct}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#013463] to-[#DDA23A] rounded-full"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* features */}
                  <ul className="space-y-1.5">
                    {["Real-time sync across devices", "Tafsir progress tracking", "Personalized dashboards"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                        <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#013463] flex items-center justify-center">
                          <IconCheck />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* stack tags + contributors */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {["React 18", "Firebase", "Tailwind", "PWA"].map((t) => (
                        <span key={t} className="px-2 py-1 bg-[#f6f9fd] border border-gray-100 rounded-lg text-[10px] font-semibold text-[#013463]">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <div className="flex -space-x-1.5">
                        {["bg-[#013463]", "bg-[#DDA23A]", "bg-teal-400"].map((bg, i) => (
                          <div key={i} className={`w-6 h-6 rounded-full border-2 border-white ${bg}`} />
                        ))}
                        <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[9px] font-bold text-gray-500">+9</div>
                      </div>
                      <span className="text-[10px] text-gray-400 font-medium">devs</span>
                    </div>
                  </div>

                </div>

                {/* RIGHT — 4 parts: project ecosystem */}
                <div className="w-full lg:w-[63%] bg-[#f6f9fd] p-5 sm:p-6 flex items-center">
                  <div className="w-full bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">

                    {/* header */}
                    <div className="bg-[#013463] px-5 py-4 text-white flex items-center justify-between">
                      <div>
                        <p className="font-bold text-sm">Project Ecosystem</p>
                        <p className="text-white/50 text-[10px] mt-0.5">Community-driven engineering</p>
                      </div>
                      <span className="text-[10px] font-bold text-[#DDA23A] bg-[#DDA23A]/10 px-2.5 py-1 rounded-full">3 Projects</span>
                    </div>

                    {/* rows */}
                    <div className="p-4 space-y-2.5">
                      {[
                        { emoji: "🤖", title: "Nejm Ask Bot",          tech: "Python · Telegram",   desc: "Student Q&A relay bot"      },
                        { emoji: "📹", title: "Daily Quran Automation", tech: "Python · Automation", desc: "Morning Quran video poster"  },
                        { emoji: "📖", title: "Quran Study App",        tech: "React · Firebase",    desc: "Tafsir & study tracker"     },
                      ].map(({ emoji, title, tech, desc }) => (
                        <div key={title} className="flex items-center justify-between p-3 sm:p-4 bg-[#f6f9fd] rounded-xl hover:bg-gray-50 transition-colors duration-150">
                          <div className="flex items-center gap-3">
                            <span className="text-xl sm:text-2xl">{emoji}</span>
                            <div>
                              <p className="text-xs sm:text-sm font-bold text-[#013463]">{title}</p>
                              <p className="text-[10px] text-gray-400 mt-0.5">{tech} · {desc}</p>
                            </div>
                          </div>
                          <span className="flex-shrink-0 text-[#DDA23A] text-[10px] font-bold ml-2">● Live</span>
                        </div>
                      ))}
                      <div className="pt-3 border-t border-gray-100 text-center">
                        <p className="text-[11px] font-semibold text-[#013463] tracking-wide">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          3. CONTRIBUTOR CTA
      ══════════════════════════════════════════ */}
      <section className="bg-[#013463] py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div
            ref={ctaRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out grid md:grid-cols-2 gap-12 items-center"
          >

            {/* left */}
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-5">
                <span className="inline-block w-6 h-px bg-[#DDA23A]" />
                Contribute
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
                Join the{" "}
                <span className="text-[#DDA23A]">Digital Jihad</span>
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                Our repositories are open for contributions. Whether you're a designer,
                developer, or documentation wizard — there's a place for you.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Access to private mentorship channels",
                  "Hands-on experience with production stacks",
                  "Build your portfolio with real-world projects",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#DDA23A] flex items-center justify-center">
                      <IconCheck />
                    </span>
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://github.com/NSDA-Community-Projects"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#DDA23A] px-8 py-4 text-sm font-bold text-[#013463] shadow-lg shadow-[#DDA23A]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-400 active:scale-95"
              >
                <IconGithub />
                Explore GitHub Repos
                <span className="transition-transform duration-200 group-hover:translate-x-1"><IconArrow /></span>
              </a>
            </div>

            {/* right: terminal card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 font-mono text-xs backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[#DDA23A] font-bold text-sm">CONTRIBUTING.md</span>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>
              <div className="space-y-2.5 text-white/65 leading-relaxed">
                <p><span className="text-[#DDA23A]">$</span> git clone github.com/NSDA-Community-Projects</p>
                <p className="pl-4">1. Fork the target repository</p>
                <p className="pl-4">2. Create a branch: <span className="text-green-400">`feat/amazing-thing`</span></p>
                <p className="pl-4">3. Push changes and open a Pull Request</p>
                <p className="pl-4">4. Get reviewed by the community</p>
                <p className="pt-4 text-white/40 italic">// Build for the Dunya, secure the Akhira.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          4. BOTTOM CTA — consistent bg
      ══════════════════════════════════════════ */}
      <section className="bg-[#f6f9fd] py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-5">
            <span className="inline-block w-5 h-px bg-[#DDA23A]" />
            Get Involved
            <span className="inline-block w-5 h-px bg-[#DDA23A]" />
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#013463] mb-5 leading-tight">
            Ready to code for a{" "}
            <span className="text-[#DDA23A]">higher purpose?</span>
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
            Join a community that puts faith at the center of every commit.
            Build tools that matter, with people who care.
          </p>

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
              Join Telegram Channel
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}