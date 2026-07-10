import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLightbulb,
  FaEye,
  FaSeedling,
  FaUsers,
  FaRobot,
  FaQuoteLeft,
} from "react-icons/fa";
import man from "../assets/man.jpg";
import star from "../assets/star.jpg";

/* ─── tiny fade-in hook (IntersectionObserver, no extra lib) ─── */
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── reusable value card ─── */
function ValueCard({ icon: Icon, title, body, delay = "" }) {
  const ref = useFadeIn();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: delay }}
      className="
        opacity-0 translate-y-8 transition-all duration-700 ease-out
        group relative bg-white border border-gray-100
        rounded-2xl p-7 sm:p-8
        hover:shadow-2xl hover:-translate-y-1
        flex flex-col gap-4
      "
    >
      {/* accent bar */}
      <span className="absolute top-0 left-8 h-[3px] w-10 bg-[#DDA23A] rounded-b-full" />

      <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#eef3fb]">
        <Icon className="text-[#013463] text-lg" />
      </div>

      <div>
        <h4 className="text-[#013463] font-bold text-base mb-1">{title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

export default function About() {
  const navigate = useNavigate();

  /* section refs for scroll animation */
  const missionRef = useFadeIn();
  const genesisRef = useFadeIn();
  const valuesRef  = useFadeIn();
  const ctaRef     = useFadeIn();

  return (
    <div className="bg-white w-full overflow-x-hidden font-sans">

      {/* ═══════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden w-full">

        {/* bg image */}
        <img
          src={star}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover select-none z-0"
        />

        
        <div className="absolute inset-0 z-0 bg-white/5" />

        {/* decorative ring */}
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full border-2 border-[#013463]/40 z-0 hidden lg:block" />
        <div className="absolute -right-16 -top-16 w-[320px] h-[320px] rounded-full border-2 border-[#DDA23A]/40 z-0 hidden lg:block" />

        {/* content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-28 md:py-0">

          <div className="max-w-3xl">
            {/* eyebrow */}
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-6">
              <span className="inline-block w-6 h-px bg-[#DDA23A]" />
              Our Identity
            </span>

            <h1 className="font-extrabold text-[#013463] text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] tracking-tight mb-6 md:mb-8">
              Bridging Sacred{" "}
              <span className="relative inline-block text-[#DDA23A]">
                Wisdom
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#DDA23A]/40 rounded-full" />
              </span>
              {" "}& Silicon{" "}
              <span className="italic font-black text-[#DDA23A]">Innovation</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mb-10">
              A vibrant community of Muslim students from all universities,
              dedicated to mastering modern technology — rooted in Islamic values,
              where faith and innovation thrive together.
            </p>

            {/* stats row */}
            <div className="flex flex-wrap gap-8 sm:gap-12">
              {[
                { value: "2025", label: "Founded" },
                { value: "Multi", label: "Universities" },
                { value: "∞", label: "Impact" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-[#DDA23A] font-extrabold text-2xl sm:text-3xl leading-none">{value}</span>
                  <span className="text-[#013463] text-xs uppercase tracking-widest mt-1 font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 animate-bounce">
          <span className="w-px h-8 bg-[#013463]/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#013463]/50" />
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
          2. MISSION + VISION
      ═══════════════════════════════════════════════ */}
      <section className="bg-[#f6f9fd] py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">

        {/* section label */}
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A]">
            <span className="inline-block w-6 h-px bg-[#DDA23A]" />
            Purpose
          </span>
          <h2 className="text-[#013463] font-extrabold text-2xl sm:text-3xl md:text-4xl mt-2">
            What Drives Us
          </h2>
        </div>

        <div
          ref={missionRef}
          className="
            opacity-0 translate-y-8 transition-all duration-700 ease-out
            max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8
          "
        >
          {/* MISSION */}
          <div className="relative bg-[#013463] p-8 sm:p-10 rounded-3xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            {/* decorative circle */}
            <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-500" />

            <div className="relative z-10">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/10 mb-6">
                <FaLightbulb className="text-[#DDA23A] text-2xl" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-px bg-[#DDA23A]" />
                <span className="text-[#DDA23A] text-xs font-bold uppercase tracking-widest">Mission</span>
              </div>
              <h3 className="text-white font-extrabold text-xl sm:text-2xl mb-4 leading-snug">
                Empowering Muslim Students Nationwide
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                To empower Muslim students across the nation by providing
                mentorship, learning opportunities, and collaborative platforms
                rooted in Islamic values.
              </p>
            </div>
          </div>

          {/* VISION */}
          <div className="relative bg-white border border-gray-100 p-8 sm:p-10 rounded-3xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            {/* accent top border */}
            <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DDA23A] to-[#013463] rounded-t-3xl" />

            <div className="relative z-10">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#eef3fb] mb-6">
                <FaEye className="text-[#013463] text-2xl" />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-px bg-[#013463]" />
                <span className="text-[#013463] text-xs font-bold uppercase tracking-widest">Vision</span>
              </div>
              <h3 className="text-[#013463] font-extrabold text-xl sm:text-2xl mb-4 leading-snug">
                Leading Faith-Driven Tech Talent
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                To be the leading Muslim developer community that nurtures
                faith-driven tech talent and creates lasting impact through
                technology.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
          3. GENESIS / STORY
      ═══════════════════════════════════════════════ */}
      <section className="bg-white py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div
          ref={genesisRef}
          className="
            opacity-0 translate-y-8 transition-all duration-700 ease-out
            max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center
          "
        >
          {/* image block */}
          <div className="relative order-2 md:order-1">
            <img
              src={man}
              alt="NSDA Founder"
              className="rounded-3xl object-cover w-full h-[320px] sm:h-[420px] md:h-[480px] shadow-xl"
            />
            {/* floating badge */}
            <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-[#DDA23A] text-[#013463] rounded-2xl px-5 py-4 shadow-xl flex flex-col items-center leading-none">
              <span className="font-extrabold text-2xl sm:text-3xl">Mar</span>
              <span className="font-extrabold text-2xl sm:text-3xl">31</span>
              <span className="font-bold text-xs mt-1 opacity-80">2025</span>
            </div>
            {/* subtle frame accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#013463]/10 rounded-3xl -z-10" />
          </div>

          {/* text block */}
          <div className="order-1 md:order-2">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-3">
              <span className="inline-block w-6 h-px bg-[#DDA23A]" />
              The Genesis
            </span>

            <h2 className="text-[#013463] font-extrabold text-2xl sm:text-3xl md:text-4xl mb-5 leading-tight">
              Born from Collaboration,<br />Built for the Ummah
            </h2>

            {/* pull quote */}
            <div className="relative bg-[#f6f9fd] border-l-4 border-[#DDA23A] rounded-r-2xl px-5 py-4 mb-7">
              <FaQuoteLeft className="absolute -top-3 -left-3 text-[#DDA23A] bg-white rounded-full p-1 text-2xl shadow" />
              <p className="text-[#013463] text-sm sm:text-base italic leading-relaxed font-medium">
                "NSDA was founded through the collaboration of students from
                multiple universities, united by a shared vision to uplift
                the Ummah through technology."
              </p>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              It aims to build a faith-driven tech community that empowers
              Muslim students with purpose, knowledge, and support — where
              every line of code is an act of stewardship.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: FaSeedling,
                  title: "Rooted in Purpose",
                  body: "Every line of code is an act of stewardship over the digital realm.",
                },
                {
                  icon: FaUsers,
                  title: "Student-Led Growth",
                  body: "Built by students, for students — fostering a peer-to-peer ecosystem of excellence.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-[#eef3fb] group-hover:bg-[#013463] transition-colors duration-300">
                    <Icon className="text-[#013463] group-hover:text-white transition-colors duration-300 text-sm" />
                  </div>
                  <div>
                    <h3 className="text-[#013463] font-bold text-sm sm:text-base">{title}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════
          4. CORE VALUES
      ═══════════════════════════════════════════════ */}
      <section className="bg-[#f6f9fd] py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto">

          {/* header */}
          <div
            ref={valuesRef}
            className="
              opacity-0 translate-y-8 transition-all duration-700 ease-out
              text-center mb-12 sm:mb-16
            "
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-3">
              <span className="inline-block w-6 h-px bg-[#DDA23A]" />
              Principles
              <span className="inline-block w-6 h-px bg-[#DDA23A]" />
            </span>
            <h2 className="text-[#013463] font-extrabold text-2xl sm:text-3xl md:text-4xl mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Foundational principles that guide every algorithm we write and
              every community we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ValueCard
              icon={FaRobot}
              title="Ethical AI"
              body="Developing intelligent systems that respect human dignity, privacy, and divine principles of justice."
              delay="0ms"
            />
            <ValueCard
              icon={FaSeedling}
              title="Sadaqah Jariyah"
              body="Building open-source tools that serve humanity as a form of perpetual charity, long after the code is written."
              delay="100ms"
            />
            <ValueCard
              icon={FaUsers}
              title="Community Growth"
              body="Nurturing an environment where every developer lifts another, creating a collective chain of technical mastery."
              delay="200ms"
            />
          </div>
        </div>
      </section>


     {/* ═══════════════════════════════════════════════
     5. CTA
═══════════════════════════════════════════════ */}
<section className="bg-white py-16 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
  <div
    ref={ctaRef}
    className="
      opacity-0 translate-y-8 transition-all duration-700 ease-out
      max-w-7xl mx-auto
    "
  >
    {/* card */}
    <div className="relative bg-[#013463] rounded-3xl overflow-hidden px-8 sm:px-12 md:px-16 py-14 sm:py-16 text-center">

      {/* background geometric accents */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DDA23A]/0 via-[#DDA23A] to-[#DDA23A]/0" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-4">
          <span className="inline-block w-5 h-px bg-[#DDA23A]" />
          Join Us
          <span className="inline-block w-5 h-px bg-[#DDA23A]" />
        </span>

        <h2 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 leading-tight">
          Ready to Build for<br />
          <span className="text-[#DDA23A]">the Sanctuary?</span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-8">
          Join our community of student developers and start your journey
          of technical and spiritual excellence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              navigate("/form");
              window.scrollTo(0, 0);
            }}
            className="
              w-full sm:w-auto
              bg-[#DDA23A] text-[#013463]
              px-8 py-3.5 rounded-full
              font-bold text-sm tracking-wide
              hover:bg-yellow-400 active:scale-95
              transition-all duration-200 shadow-lg shadow-[#DDA23A]/30
            "
          >
            Apply for Membership
          </button>

          <button
            onClick={() => {
              navigate("/projects");
              window.scrollTo(0, 0);
            }}
            className="
              w-full sm:w-auto
              bg-transparent text-white border border-white/30
              px-8 py-3.5 rounded-full
              font-bold text-sm tracking-wide
              hover:bg-white/10 active:scale-95
              transition-all duration-200
            "
          >
            View Projects →
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}