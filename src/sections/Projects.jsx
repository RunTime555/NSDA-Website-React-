import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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

/* ─── SVG icons ─── */
const IconArrow = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);
const IconExternal = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);
const IconCheck = () => (
  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
const IconTelegram = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);
const IconVideo = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.868v6.264a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);
const IconPortal = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);
const IconHeart = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);
const IconQuran = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);
const IconPrayer = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconUsers = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

/* ── project data ── */
const PROJECTS = [
  {
    id: 1,
    title: "Nejm Ask Bot",
    desc: "A Telegram bot bridging students and NSDA leadership. Students submit questions through the bot; leaders receive and reply — keeping all communication organised and fast.",
    tag: "Python · Telegram",
    status: "Live",
    statusDot: "bg-green-400",
    tagBg: "bg-blue-50 text-blue-700",
    icon: <IconTelegram />,
    dark: false,
    link: "https://t.me/NejmAskBot",
    linkLabel: "@NejmAskBot",
    features: ["Student inquiry handling", "Leadership reply system", "Organised tracking"],
    contributors: 8,
  },
  {
    id: 2,
    title: "Daily Quran Automation",
    desc: "Automatically posts a short Quran video every morning to the NSDA Telegram channel — delivering Quranic verses with tafsir to keep the community spiritually connected.",
    tag: "Python · Automation",
    status: "Active",
    statusDot: "bg-yellow-400",
    tagBg: "bg-yellow-50 text-yellow-700",
    icon: <IconVideo />,
    dark: true,
    link: "https://t.me/nsda_community/1126",
    linkLabel: "View on Telegram",
    features: ["Daily scheduled posts", "Verse + tafsir captions", "Telegram Bot API"],
    contributors: 5,
  },
  {
    id: 3,
    title: "NSDA Portal",
    desc: "The future of our mentorship program — an educational web platform connecting NSDA students with mentors, resources, and structured learning paths.",
    tag: "React · Web",
    status: "Live",
    statusDot: "bg-green-400",
    tagBg: "bg-teal-50 text-teal-700",
    icon: <IconPortal />,
    dark: false,
    link: "https://nsda-portal-frontend.vercel.app/",
    linkLabel: "nsda-portal-frontend.vercel.app",
    features: ["Mentorship matching", "Learning resources", "Student dashboard"],
    contributors: 8,
  },
  {
    id: 4,
    title: "MSU Collaboration Portal",
    desc: "Our collaboration with Muslim Students Unions across each university — a unified platform connecting Muslim student communities nationwide.",
    tag: "Web · Collaboration",
    status: "Live",
    statusDot: "bg-green-400",
    tagBg: "bg-purple-50 text-purple-700",
    icon: <IconUsers />,
    dark: false,
    link: "https://final-portal-project.netlify.app",
    linkLabel: "final-portal-project.netlify.app",
    features: ["University MSU network", "Community collaboration", "Shared resources"],
    contributors: 7,
  },
  {
    id: 5,
    title: "Spiritual Mood App",
    desc: "How are you feeling today? A spiritual wellbeing app that connects your emotional state with Quranic guidance and Islamic reflection prompts.",
    tag: "Web App",
    status: "Live",
    statusDot: "bg-green-400",
    tagBg: "bg-pink-50 text-pink-700",
    icon: <IconHeart />,
    dark: false,
    link: "https://nejwanova.github.io/Spritual-App-NSDA/index.html#",
    linkLabel: "Try it",
    features: ["Mood tracking", "Quranic guidance", "Spiritual reflection"],
    contributors: 5,
  },
  {
    id: 6,
    title: "Quran Mood Matcher",
    desc: "A more advanced Quran mood tracker — matches your current emotional state with relevant Quranic verses and surah recommendations.",
    tag: "React · Web",
    status: "Live",
    statusDot: "bg-green-400",
    tagBg: "bg-indigo-50 text-indigo-700",
    icon: <IconQuran />,
    dark: true,
    link: "https://quran-mood-matcher-website.netlify.app/",
    linkLabel: "quran-mood-matcher-website.netlify.app",
    features: ["Advanced mood matching", "Verse recommendations", "Surah guidance"],
    contributors: 4,
  },
  {
    id: 7,
    title: "Prayer Time & Zikr Counter",
    desc: "A focused Islamic productivity tool combining accurate prayer time notifications with a digital dhikr (zikr) counter for daily worship tracking.",
    tag: "Web App",
    status: "Live",
    statusDot: "bg-green-400",
    tagBg: "bg-emerald-50 text-emerald-700",
    icon: <IconPrayer />,
    dark: false,
    link: "https://prayer-time-zikir-counter.vercel.app/",
    linkLabel: "prayer-time-zikir-counter.vercel.app",
    features: ["Prayer time alerts", "Zikr/dhikr counter", "Daily tracking"],
    contributors: 5,
  },
  {
    id: 8,
    title: "Ihsan",
    desc: "An Islamic countdown & productivity app — track Ramadan, Eid, Hajj and personal events with beautiful timers, prayer times for Addis Ababa, tasbih counter, Qur'an streak, Qibla finder, Zakat calculator and daily dua.",
    tag: "Web App · Islamic",
    status: "Live",
    statusDot: "bg-green-400",
    tagBg: "bg-amber-50 text-amber-700",
    icon: <IconPrayer />,
    dark: true,
    link: "https://ihsan-xi.vercel.app/",
    linkLabel: "ihsan-xi.vercel.app",
    features: ["Islamic countdown timers", "Prayer times & Qibla finder", "Tasbih, Zakat & Qur'an streak"],
    contributors: 6,
  },
  {
    id: 9,
    title: "Majlis",
    desc: "A community engagement platform for the Ethiopian Islamic Affairs Supreme Council — the country's highest Islamic authority, representing Ethiopian Muslims both domestically and abroad.",
    tag: "Web · Community",
    status: "Live",
    statusDot: "bg-green-400",
    tagBg: "bg-green-50 text-green-700",
    icon: <IconUsers />,
    dark: false,
    link: "https://majlis-community-engagement.vercel.app/index.html",
    linkLabel: "majlis-community-engagement.vercel.app",
    features: ["Community engagement", "Islamic authority platform", "Ethiopian Muslim representation"],
    contributors: 5,
  },
];

/* ════════════════════════════════════════════════ */
export default function Projects() {
  const heroRef = useFadeIn(0);
  const gridRef = useFadeIn(100);
  const ctaRef  = useFadeIn(100);

  return (
    <main className="bg-[#f6f9fd] text-[#013463] overflow-x-hidden">

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img src={star} alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover select-none z-0" />
        <div className="absolute inset-0 z-0 bg-white/25" />
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full border-2 border-[#013463]/40 z-0 hidden lg:block" />
        <div className="absolute -right-16 -top-16 w-[320px] h-[320px] rounded-full border-2 border-[#DDA23A]/40 z-0 hidden lg:block" />

        <div ref={heroRef}
          className="opacity-0 translate-y-10 transition-all duration-700 ease-out relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-24 pb-16 md:pt-32 md:pb-24">
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
            <div className="flex flex-wrap gap-8 sm:gap-12">
              {[
                { value: "9+",    label: "Active Projects" },
                { value: "50+",  label: "Contributors" },
                { value: "100%", label: "Open Source" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-[#DDA23A] font-extrabold text-2xl sm:text-3xl leading-none">{value}</span>
                  <span className="text-[#013463] text-xs uppercase tracking-widest mt-1 font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f6f9fd] to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 animate-bounce">
          <span className="w-px h-8 bg-[#013463]/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#013463]/50" />
        </div>
      </section>


      {/* ══ PROJECTS GRID ══ */}
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
            <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl">
              9+ projects built by NSDA students for the Ummah — click any card to visit.
            </p>
          </div>

          <div ref={gridRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {PROJECTS.map((p) => (
              <a
                key={p.id}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative rounded-[1.75rem] overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-pointer
                  ${p.dark
                    ? 'bg-[#013463] text-white shadow-xl'
                    : 'bg-white border border-gray-100 shadow-sm'}`}
              >
                {/* gold accent top bar */}
                <span className="absolute top-0 left-8 h-[3px] w-10 bg-[#DDA23A] rounded-b-full" />

                {/* dark card: decorative circle */}
                {p.dark && (
                  <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-white/5 group-hover:scale-125 transition-transform duration-500" />
                )}
                {p.dark && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#DDA23A] to-transparent" />
                )}

                <div className="relative z-10 p-6 sm:p-7 flex flex-col gap-4 flex-1">

                  {/* header row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1.5">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${p.dark ? 'bg-white/10 text-white/80' : p.tagBg}`}>
                          {p.tag}
                        </span>
                        <span className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${p.dark ? 'bg-white/10 text-white/70' : 'bg-gray-50 text-gray-500'}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${p.statusDot}`} />
                          {p.status}
                        </span>
                      </div>
                      <h3 className={`text-lg sm:text-xl font-extrabold leading-tight ${p.dark ? 'text-white' : 'text-[#013463]'}`}>
                        {p.title}
                      </h3>
                    </div>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${p.dark ? 'bg-[#DDA23A] text-[#013463]' : 'bg-[#DDA23A] text-[#013463]'}`}>
                      {p.icon}
                    </div>
                  </div>

                  {/* description */}
                  <p className={`text-sm leading-relaxed ${p.dark ? 'text-white/70' : 'text-gray-500'}`}>
                    {p.desc}
                  </p>

                  {/* features */}
                  <ul className="space-y-1.5">
                    {p.features.map((f) => (
                      <li key={f} className={`flex items-center gap-2 text-xs font-medium ${p.dark ? 'text-white/65' : 'text-gray-500'}`}>
                        <span className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${p.dark ? 'bg-[#DDA23A]' : 'bg-[#013463]'}`}>
                          <IconCheck />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* footer: contributors + link */}
                  <div className={`mt-auto pt-4 border-t flex items-center justify-between ${p.dark ? 'border-white/10' : 'border-gray-100'}`}>
                    <span className={`text-[10px] font-medium ${p.dark ? 'text-white/40' : 'text-gray-300'}`}>
                      {p.contributors} contributors
                    </span>
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors duration-200 ${p.dark ? 'text-[#DDA23A] group-hover:gap-2.5' : 'text-[#013463] group-hover:text-[#DDA23A] group-hover:gap-2.5'}`}>
                      {p.linkLabel}
                      <IconExternal />
                    </span>
                  </div>

                </div>
              </a>
            ))}

          </div>
        </div>
      </section>


      {/* ══ "WHAT WE DO" / CONTRIBUTOR CTA ══ */}
      <section className="bg-[#013463] py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div ref={ctaRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out grid md:grid-cols-2 gap-12 items-center">

            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-5">
                <span className="inline-block w-6 h-px bg-[#DDA23A]" />
                Contribute
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
                Join the <span className="text-[#DDA23A]">Digital Jihad</span>
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
            </div>

            {/* terminal */}
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
                <p className="pl-4">2. Create your branch</p>
                <p className="pl-4">3. Push changes and open a Pull Request</p>
                <p className="pl-4">4. Get reviewed by the community</p>
                <p className="pt-4 text-white/40 italic">// Build for the Dunya, secure the Akhira.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══ BOTTOM CTA ══ */}
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
            
            
            <Link 
              to="/form"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#DDA23A] px-10 py-4 text-sm font-bold text-[#013463] shadow-lg shadow-[#DDA23A]/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-400 active:scale-95"
            >
              Become a Member
              <span className="transition-transform duration-200 group-hover:translate-x-1"><IconArrow /></span>
            </Link>

            <a href="https://t.me/nsda_community" target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#013463] bg-transparent px-10 py-4 text-sm font-bold text-[#013463] transition-all duration-200 hover:bg-[#013463] hover:text-white active:scale-95">
              Join Telegram Channel
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}