import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import star from '../assets/star.jpg';

/* ─── fade-in hook ─── */
function useFadeIn(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('opacity-100', 'translate-y-0');
        el.classList.remove('opacity-0', 'translate-y-10');
        obs.disconnect();
      }
    }, { threshold: 0.05, rootMargin: '0px 0px -60px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

/* ─── SVG Icons ─── */
const IconArrow = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
);
const IconChevron = ({ up }) => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d={up ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}/>
  </svg>
);
const IconLinkedin = () => (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const IconHeart = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
  </svg>
);
const IconStar = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
  </svg>
);
const IconUsers = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
);
const IconCode = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
  </svg>
);
const IconBot = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
  </svg>
);
const IconBook = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
  </svg>
);
const IconZap = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
  </svg>
);

/* ════════════════════════════════════════════════
   HERO — star bg, consistent with all other pages
════════════════════════════════════════════════ */
function Hero() {
  const ref = useFadeIn(0);
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">

      {/* star background — covers 100% on all screens */}
      <img
        src={star}
        alt=""
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
      />
      {/* light overlay */}
      <div className="absolute inset-0 bg-white/5" style={{ zIndex: 1 }} />

      {/* decorative rings — desktop only */}
      <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full border-2 border-[#013463]/40 hidden lg:block" style={{ zIndex: 2 }} />
      <div className="absolute -right-16 -top-16 w-[320px] h-[320px] rounded-full border-2 border-[#DDA23A]/40 hidden lg:block" style={{ zIndex: 2 }} />

      {/* content */}
      <div
        ref={ref}
        className="opacity-0 translate-y-10 transition-all duration-700 ease-out w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 md:py-0"
        style={{ position: 'relative', zIndex: 10 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-screen lg:min-h-0 lg:py-28">

          {/* ── Left: text ── */}
          <div className="lg:col-span-7 space-y-7">

            {/* eyebrow — same as other pages */}
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#DDA23A]">
              <span className="inline-block w-6 h-px bg-[#DDA23A]" />
              Est. March 31, 2025
            </span>

            {/* Title — left-aligned always, 2-line on mobile */}
            <h1 className="font-extrabold text-[#013463] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Nejm Student{' '}
              <span className="text-[#DDA23A]">Developers</span>
              <br />
              <span className="relative inline-block">
                Association
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#DDA23A]/40 rounded-full" />
              </span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
              A nationwide community of Muslim students and developers advancing in tech while staying true to Islamic values.
            </p>

            {/* trust badges */}
            <div className="flex flex-wrap gap-3">
              {["Faith-Driven", "Open-Source", "Student-Led"].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 bg-white/70 border border-gray-200 px-3 py-1.5 rounded-full text-xs font-semibold text-[#013463]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DDA23A]" />
                  {badge}
                </span>
              ))}
            </div>

            {/* stats — like About / Projects / Leadership hero */}
          

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://t.me/nsda_community"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#DDA23A] px-8 py-4 text-sm font-bold text-[#013463] shadow-lg shadow-[#DDA23A]/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-400 active:scale-95"
              >
                Join NSDA
                <span className="transition-transform duration-200 group-hover:translate-x-1"><IconArrow /></span>
              </a>
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#013463] bg-white/60 px-8 py-4 text-sm font-bold text-[#013463] transition-all duration-200 hover:bg-[#013463] hover:text-white active:scale-95"
              >
                Register
              </Link>
            </div>
          </div>

          {/* ── Right: image — hidden on mobile ── */}
          <div className="lg:col-span-5 relative hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl translate-x-3 translate-y-3 bg-[#DDA23A]/20" />
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img alt="Coding workspace" className="w-full h-full object-cover" src="/hero-image.jpg" />
              </div>
              <div className="absolute -bottom-4 -left-4 p-4 rounded-2xl shadow-xl bg-[#DDA23A]">
                <span className="text-2xl font-extrabold block leading-none text-[#013463]">2025</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#013463]/70">Foundation</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f6f9fd] to-transparent pointer-events-none" style={{ zIndex: 10 }} />
      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce" style={{ zIndex: 20 }}>
        <span className="w-px h-8 bg-[#013463]/30" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#013463]/50" />
      </div>
    </header>
  );
}

/* ════════════════════════════════════════════════
   ABOUT
════════════════════════════════════════════════ */
function About() {
  const ref = useFadeIn(0);
  return (
    <section className="py-20 sm:py-28 bg-[#F6F9FD] relative overflow-hidden" id="about">
      <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-700 ease-out max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A]">
              <span className="w-6 h-px bg-[#DDA23A]" />
              Our Genesis
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#013463]">
              Bridging Sacred Wisdom and <span className="text-[#DDA23A]">Silicon Innovation</span>
            </h2>
            <div className="space-y-4 text-gray-500 text-base leading-relaxed">
              <p>Founded on <span className="font-semibold text-[#013463]">March 31, 2025</span>, NSDA emerged from a vision to nurture a generation of developers who build for the dunya while securing their akhira.</p>
              <p>Our mission is to create a digital sanctuary where Muslim technical talent can thrive, collaborate on open-source projects, and find mentorship aligned with their spiritual identity.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: "Our Vision",  body: "To be the global hub for ethical software development excellence." },
                { title: "Our Mission", body: "Empowering students through technical mastery and spiritual grounding." },
              ].map(({ title, body }) => (
                <div key={title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
                  <span className="absolute top-0 left-6 h-[3px] w-8 bg-[#DDA23A] rounded-b-full" />
                  <h4 className="font-bold text-sm mb-2 text-[#013463]">{title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden sm:block">
            <div className="absolute inset-0 rounded-3xl translate-x-4 translate-y-4 bg-[#DDA23A]/15" />
            <img alt="Team collaboration" className="rounded-2xl shadow-xl relative z-10 w-full object-cover aspect-[4/3]"
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   WHAT WE DO
════════════════════════════════════════════════ */
function WhatWeDo() {
  const ref = useFadeIn(0);
  const pillars = [
    { icon: <IconHeart />, title: "Sadaqah Jariyah", description: "Building open-source tools that serve the Ummah and earn continuous reward.", dark: false },
    { icon: <IconStar />,  title: "Nujum al-Code",   description: "Engaging technical deep-dives and webinars with industry veterans.",          dark: true  },
    { icon: <IconUsers />, title: "Mentorship",      description: "One-on-one guidance connecting seasoned devs with aspiring students.",         dark: false },
    { icon: <IconCode />,  title: "NSDA Hackathon",  description: "An internal 48-hour hackathon exclusively for NSDA students.",                dark: true  },
  ];
  return (
    <section className="py-20 sm:py-28 bg-white relative" id="what-we-do">
      <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-700 ease-out max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-4">
            <span className="w-6 h-px bg-[#DDA23A]" />What We Do<span className="w-6 h-px bg-[#DDA23A]" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#013463] mb-4">Our Pillars of Excellence</h2>
          <div className="w-16 h-1 bg-[#DDA23A] rounded-full mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className={`group relative rounded-3xl p-8 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300
              ${p.dark ? 'bg-[#013463] text-white shadow-xl' : 'bg-white border border-gray-100 shadow-sm'}`}>
              <span className="absolute top-0 left-8 h-[3px] w-10 bg-[#DDA23A] rounded-b-full" />
              {p.dark && <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/5 group-hover:scale-125 transition-transform duration-500" />}
              <div className="relative z-10 w-12 h-12 rounded-2xl bg-[#DDA23A] text-[#013463] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">{p.icon}</div>
              <h3 className={`relative z-10 text-lg font-extrabold mb-3 ${p.dark ? 'text-white' : 'text-[#013463]'}`}>{p.title}</h3>
              <p className={`relative z-10 leading-relaxed text-sm ${p.dark ? 'text-white/70' : 'text-gray-500'}`}>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   MENTORSHIP
════════════════════════════════════════════════ */
function Mentorship() {
  const ref = useFadeIn(0);
  const stats = [
    { value: "11+",  label: "Expert Mentors"    },
    { value: "80+",  label: "Active Students"   },
    { value: "15+",  label: "Universities"      },
    { value: "24/7", label: "Community Support" },
  ];
  return (
    <section className="py-20 sm:py-28 bg-[#013463] relative overflow-hidden" id="mentorship">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 bg-[#DDA23A] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-5 bg-white blur-3xl pointer-events-none" />
      <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-700 ease-out max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A]">
              <span className="w-6 h-px bg-[#DDA23A]" />Mentorship Program
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">Scaling Impact Through Guidance</h2>
            <p className="text-white/65 text-base sm:text-lg leading-relaxed">Our mentorship program isn't just about code review — it's about holistic growth. We measure success by the strength of our community.</p>
            <div className="space-y-5">
              {[
                { label: "Mentor-Student Ratio", value: "1:7",  pct: "85%" },
                { label: "Project Success Rate", value: "85%",  pct: "85%" },
              ].map(({ label, value, pct }) => (
                <div key={label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/75 text-sm font-semibold">{label}</span>
                    <span className="text-[#DDA23A] text-sm font-bold">{value}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-[#DDA23A]" style={{ width: pct }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {stats.map((s, i) => (
              <div key={i} className="group bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl text-center hover:bg-white/10 hover:border-[#DDA23A]/40 transition-all duration-300">
                <div className="text-4xl sm:text-5xl font-extrabold mb-2 text-[#DDA23A]">{s.value}</div>
                <div className="text-white/60 text-[10px] sm:text-xs uppercase tracking-widest font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   PROJECTS
════════════════════════════════════════════════ */
function Projects() {
  const ref = useFadeIn(0);
  const projects = [
    { tech: "Python / Telegram", title: "Nejm Ask Bot",           description: "A Telegram bot that bridges students and NSDA leadership — keeping all communication organised, fast, and within the community channel.", icon: <IconBot />,  dark: true  },
    { tech: "React / Firebase",  title: "Quran Study App",        description: "A cross-platform app for structured Quran study and tafsir tracking with real-time sync across all devices.",                             icon: <IconBook />, dark: false },
    { tech: "Python / Auto",     title: "Daily Quran Automation", description: "Automatically posts a short Quran video every morning to the Telegram channel — delivering Quranic verses to keep the community spiritually connected.", icon: <IconZap />,  dark: false },
  ];
  return (
    <section className="py-20 sm:py-28 bg-[#f6f9fd] relative" id="projects">
      <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-700 ease-out max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-4">
            <span className="w-6 h-px bg-[#DDA23A]" />Open Source<span className="w-6 h-px bg-[#DDA23A]" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#013463]">Open Source Ecosystem</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">We build tools that solve problems within the community while following modern engineering best practices.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className={`group rounded-3xl overflow-hidden border shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-7 sm:p-8 relative
              ${p.dark ? 'bg-[#013463] border-[#013463]' : 'bg-white border-gray-100'}`}>
              <span className="absolute top-0 left-8 h-[3px] w-10 bg-[#DDA23A] rounded-b-full" />
              {p.dark && <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/5 group-hover:scale-125 transition-transform duration-500" />}
              <div className="relative z-10 flex justify-between items-start mb-5">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${p.dark ? 'bg-white/10 text-white/80' : 'bg-[#013463]/8 text-[#013463]'}`}>{p.tech}</span>
                <div className="w-10 h-10 rounded-xl bg-[#DDA23A] flex items-center justify-center text-[#013463] group-hover:scale-110 transition-transform duration-300">{p.icon}</div>
              </div>
              <h3 className={`relative z-10 text-xl font-extrabold mb-3 ${p.dark ? 'text-white' : 'text-[#013463]'}`}>{p.title}</h3>
              <p className={`relative z-10 leading-relaxed text-sm ${p.dark ? 'text-white/70' : 'text-gray-500'}`}>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   NUJUM
════════════════════════════════════════════════ */
function Nujum() {
  const ref = useFadeIn(0);
  const videos = [
    { id: "wu2oWKUMjhc", topic: "EP03 — Full Stack Development", author: "Ali Weber"      },
    { id: "nHjT8h-vJgA", topic: "EP06 — Android Engineering",    author: "Seid Shemsu"   },
    { id: "ltllWogkB6E", topic: "EP05 — AI Driven Innovation",   author: "Khalid Ebrahim"},
  ];
  return (
    <section className="py-20 sm:py-28 bg-[#013463] relative overflow-hidden" id="nujum">
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 bg-[#DDA23A] blur-3xl pointer-events-none" />
      <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-700 ease-out max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-4">
            <span className="w-6 h-px bg-[#DDA23A]" />Webinar Series<span className="w-6 h-px bg-[#DDA23A]" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white">Nujum al-Code</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">Deep technical dives with industry pioneers from the NSDA community.</p>
          <div className="w-16 h-1 bg-[#DDA23A] rounded-full mx-auto mt-5" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.map((v) => (
            <div key={v.id} className="rounded-2xl overflow-hidden shadow-2xl bg-black/40 border border-white/10 hover:-translate-y-1 transition-all duration-300">
              <div className="relative pb-[56.25%] h-0">
                <iframe className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                  title={v.topic} frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />
              </div>
              <div className="p-4 border-t border-white/10">
                <h4 className="text-white font-bold text-sm mb-1 line-clamp-1">{v.topic}</h4>
                <p className="text-white/50 text-xs">{v.author}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="https://youtube.com/@NSDA_Community" target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 font-bold text-sm uppercase tracking-wider rounded-full bg-[#DDA23A] text-[#013463] shadow-lg shadow-[#DDA23A]/20 hover:scale-105 transition-all duration-200">
            Watch All Episodes
            <span className="transition-transform duration-200 group-hover:translate-x-1"><IconArrow /></span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   LEADERSHIP
════════════════════════════════════════════════ */
function Leadership() {
  const ref = useFadeIn(0);
  const [showAll, setShowAll] = useState(false);

  const mainLeaders = [
    { name: "Osama Seid",        role: "President",                  university: "Jimma University",       gender: "male",   icon: "fa-user-tie",  linkedin: "https://www.linkedin.com/in/osama-seid-a2978129a"        },
    { name: "Nebiyou Elias",     role: "Vice President",             university: "AASTU",                  gender: "male",   icon: "fa-user",      linkedin: "https://www.linkedin.com/in/nebiyou-elias-mohammed/"     },
    { name: "Abdelaziz Ebrahim", role: "Content Head",               university: "Bahir Dar University",   gender: "male",   icon: "fa-newspaper", linkedin: "https://www.linkedin.com/in/abdelazizEbrahim/"           },
    { name: "Sumeya Muhammed",   role: "Sisters Communication Head", university: "Jimma University",       gender: "female", icon: "fa-comments",  linkedin: "http://linkedin.com/in/sumeya-muhammed-a83168319/"       },
    { name: "Sumeya Awel",       role: "Sisters President",          university: "ASTU",                   gender: "female", icon: "fa-crown",     linkedin: "https://www.linkedin.com/in/sumeya-awel-320286306?"      },
    { name: "Miftah Fentaw",     role: "Communication Head",         university: "Haramaya University",    gender: "male",   icon: "fa-bullhorn",  linkedin: "https://www.linkedin.com/in/miftah-fentaw/"              },
  ];

  const moreLeaders = [
    { name: "Semeriya Seid",     role: "Sisters Production Head", university: "Haramaya University",    gender: "female", icon: "fa-video",     linkedin: "https://www.linkedin.com/in/sud-seid-b24b48356/"         },
    { name: "Fozia Mohammed",    role: "Sisters Project Head",    university: "Addis Ababa University",  gender: "female", icon: "fa-tasks",     linkedin: "https://www.linkedin.com/in/fozia-mohammed-50132730b/"  },
    { name: "Hanan Nasir",       role: "Sisters Content Head",    university: "Arba Minch University",   gender: "female", icon: "fa-pen-fancy", linkedin: "https://www.linkedin.com/in/hanan-nasir2014"             },
    { name: "Muaz Sani",         role: "Production Head",         university: "Jimma University",        gender: "male",   icon: "fa-video",     linkedin: "https://www.linkedin.com/in/muaz-sani-85643a2b2?"       },
    { name: "Abdulselam Kemal",  role: "Technical Head",          university: "Addis Ababa University",  gender: "male",   icon: "fa-microchip", linkedin: "https://www.linkedin.com/in/ab-adam74"                   },
    { name: "Rehmet Muhammed",   role: "Sisters Technical Head",  university: "Bahir Dar University",    gender: "female", icon: "fa-code",      linkedin: "https://www.linkedin.com/in/rehmet-muhammed777"          },
    { name: "Abdulaziz Ayalew",  role: "Content Head",            university: "AASTU",                   gender: "male",   icon: "fa-newspaper", linkedin: "https://www.linkedin.com/in/abdulaziz-ayalew"            },
    { name: "Sitra Seyfu",       role: "Sisters Production Head", university: "Jimma University",        gender: "female", icon: "fa-video",     linkedin: "https://www.linkedin.com/in/sitra-seyfu-a727b3324?"     },
    { name: "Imadudin Keremu",   role: "Project Manager",         university: "Haramaya University",     gender: "male",   icon: "fa-tasks",     linkedin: "https://www.linkedin.com/in/imadudin-keremu-72630a325?" },
  ];

  const getIconColor = (gender) => gender === 'female' ? '#e91e63' : '#3498db';

  const MemberCard = ({ member }) => (
    <a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="group text-center block transition-all duration-300 hover:-translate-y-2"
    >
      <div className="relative inline-flex items-center justify-center mb-3">
        <div
          className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-xl md:text-2xl relative z-10 transition-all duration-300 group-hover:ring-4 group-hover:ring-[#DDA23A]/50"
          style={{ backgroundColor: 'rgba(1,52,99,0.08)', color: getIconColor(member.gender) }}
        >
          <i className={`fas ${member.icon}`} />
        </div>
        <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#DDA23A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 text-white">
          <IconLinkedin />
        </span>
      </div>
      <h5 className="font-bold text-xs md:text-sm text-[#013463] leading-tight">{member.name}</h5>
      <p className="text-[10px] md:text-xs font-semibold mt-0.5 text-[#DDA23A]">{member.role}</p>
      <p className="text-[10px] md:text-xs text-gray-400 mt-0.5 leading-tight">{member.university}</p>
    </a>
  );

  return (
    <section className="py-20 sm:py-28 bg-[#f6f9fd] relative" id="leadership">
      <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-700 ease-out max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-4">
            <span className="w-6 h-px bg-[#DDA23A]" />Leadership<span className="w-6 h-px bg-[#DDA23A]" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#013463]">Guided by Visionaries</h2>
          <div className="w-16 h-1 bg-[#DDA23A] rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {mainLeaders.map((m, i) => <MemberCard key={i} member={m} />)}
        </div>

        <div className="overflow-hidden transition-all duration-500" style={{ maxHeight: showAll ? '1200px' : '0', opacity: showAll ? 1 : 0 }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 mt-10">
            {moreLeaders.map((m, i) => <MemberCard key={i} member={m} />)}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(p => !p)}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 bg-[#013463] text-white hover:bg-[#DDA23A] hover:text-[#013463] active:scale-95 shadow-md"
          >
            {showAll ? 'Show Less' : 'Show More'}
            <IconChevron up={showAll} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   CTA
════════════════════════════════════════════════ */
function CTA() {
  const ref = useFadeIn(0);
  return (
    <section className="py-20 sm:py-28 bg-[#f6f9fd] relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-5 bg-[#DDA23A] blur-3xl pointer-events-none" />
      <div ref={ref} className="opacity-0 translate-y-10 transition-all duration-700 ease-out max-w-4xl mx-auto px-6 sm:px-10 text-center relative z-10">
        <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-5">
          <span className="w-5 h-px bg-[#DDA23A]" />Join the Movement<span className="w-5 h-px bg-[#DDA23A]" />
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-[#013463] leading-tight">
          Ready to Build for the <span className="text-[#DDA23A]">Ummah?</span>
        </h2>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-10">
          Join 80+ Muslim developers across the country. Be part of a community that grows together, codes together, and prays together.
        </p>
        <div className="w-16 h-1 bg-[#DDA23A] rounded-full mx-auto mb-10" />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://t.me/nsda_community" target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#DDA23A] px-10 py-4 text-sm font-bold text-[#013463] shadow-lg shadow-[#DDA23A]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-400 active:scale-95">
            JOIN NSDA NOW
            <span className="transition-transform duration-200 group-hover:translate-x-1"><IconArrow /></span>
          </a>
          <a href="https://t.me/NejmAskBot" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#013463] bg-transparent px-10 py-4 text-sm font-bold text-[#013463] transition-all duration-200 hover:bg-[#013463] hover:text-white active:scale-95">
            TELEGRAM SUPPORT
          </a>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   HOME (MAIN EXPORT)
════════════════════════════════════════════════ */
export default function Home() {
  return (
    <main className="overflow-x-hidden" style={{ paddingTop: '70px' }}>
      <Hero />
      <div id="about">      <About />      </div>
      <div id="what-we-do"> <WhatWeDo />   </div>
      <div id="mentorship"> <Mentorship /> </div>
      <div id="projects">   <Projects />   </div>
      <div id="nujum">      <Nujum />      </div>
      <div id="leadership"> <Leadership /> </div>
      <CTA />
    </main>
  );
}