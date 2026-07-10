import { useState, useEffect, useRef } from "react";
import star from "../assets/star.jpg";
import { Link } from "react-router-dom"; 

/* ─────────────────────────────────────────────
   EPISODE DATA — all 9 episodes, EP09 is latest
───────────────────────────────────────────── */
const episodes = [
  {
    id: 9,
    title: "Nujum-Code Ep09 (Season three) - With Abdulfetah Jemal(AJ)",
    category: "Development",
    author: "Abdulfetah Jemal(AJ)",
    duration: "—",
    date: "2026-06-05",
    videoUrl: "https://youtu.be/E_SsxigkzoU",
    description: "Senior Full Stack & Product Engineer — 'Your setbacks do not define your future , rebuilding yourself with discipline and belief does.'",
  },
  {
    id: 8,
    title: "Nujum-Code Ep08 (Season Two) - With Khalid Mohammed",
    category: "Security",
    author: "Khalid Mohammed",
    duration: "55:25",
    date: "2026-02-06",
    videoUrl: "https://www.youtube.com/watch?v=-0MC8oAlHZ0",
    description: "Software and Agent engineer — 'Until death, all defeat is psychological'",
  },
  {
    id: 7,
    title: "Nujum-Code Ep07 (Season Two) - With Abdulaziz Shewabu",
    category: "Development",
    author: "Abdulaziz Shewabu",
    duration: "1:16:26",
    date: "2026-02-06",
    videoUrl: "https://www.youtube.com/watch?v=JUqQigftd4U",
    description: "Full Stack Web Developer — 'The main part of software development is learning; once you stop learning you will stop being a programmer'",
  },
  {
    id: 6,
    title: "Nujum-Code Ep06 (Season Two) - With Seid Shemsu",
    category: "Architecture",
    author: "Seid Shemsu",
    duration: "1:20:40",
    date: "2026-02-06",
    videoUrl: "https://www.youtube.com/watch?v=nHjT8h-vJgA",
    description: "Android Engineer — Kotlin & Java",
  },
  {
    id: 5,
    title: "NUJUM-AL-CODE EP05 (Season One) - With Khalid Ebrahim",
    category: "Innovation",
    author: "Khalid Ebrahim",
    duration: "1:33:57",
    date: "2025-11-06",
    videoUrl: "https://www.youtube.com/watch?v=ltllWogkB6E",
    description: "Full Stack Developer | AI Driven Innovator",
  },
  {
    id: 4,
    title: "Nujum-Code EP04 (Season One) - With Anwar Nasir",
    category: "Development",
    author: "Anwar Nasir",
    duration: "57:19",
    date: "2025-11-06",
    videoUrl: "https://www.youtube.com/watch?v=dFnta9toyvc",
    description: "Flutter Dev @ Athena Labs | Mobile Dev @ Nova Tech",
  },
  {
    id: 3,
    title: "Nujum-Code EP03 (Initial Season) - With Ali Weber",
    category: "Full Stack",
    author: "Ali Weber",
    duration: "1:45:51",
    date: "2025-10-06",
    videoUrl: "https://www.youtube.com/watch?v=wu2oWKUMjhc",
    description: "UI/UX Developer | Full Stack Developer | Co-founder @ Evergreen Technology",
  },
  {
    id: 2,
    title: "Nujum-Code EP02 (Initial Season) - With Mohammed Ibrahim",
    category: "Engineering",
    author: "Mohammed Ibrahim",
    duration: "1:47:49",
    date: "2025-10-06",
    videoUrl: "https://www.youtube.com/watch?v=vlg-XAYSwvM",
    description: "Full Stack Developer",
  },
  {
    id: 1,
    title: "Nujum-Code EP01 (Initial Season) - With Semer Nur",
    category: "Development",
    author: "Semer Nur",
    duration: "1:54:21",
    date: "2025-06-06",
    videoUrl: "https://www.youtube.com/watch?v=d742QEZIMkw",
    description: "Software Dev | Blockchain | Fintech",
  },
];

const latestEpisode = episodes[0]; // EP09 is always first = latest

/* ─── helpers ─── */
const getVideoId = (url) => {
  if (!url) return null;
  const m = url.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
  return m && m[2].length === 11 ? m[2] : null;
};

const SEASONS = [
  { label: "All",          filter: () => true },
  { label: "Podcast",      filter: (ep) => ep.category === "Podcast" },
  { label: "Season Two",   filter: (ep) => ep.title.toLowerCase().includes("season two") },
  { label: "Season One",   filter: (ep) => ep.title.toLowerCase().includes("season one") },
  { label: "Initial",      filter: (ep) => ep.title.toLowerCase().includes("initial season") },
];

/* ─── icons ─── */
const IconPlay = () => (
  <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
);
const IconArrow = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
);
const IconClose = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
  </svg>
);
const IconTelegram = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);
const IconChevronLeft = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
  </svg>
);
const IconChevronRight = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
  </svg>
);

/* ─── fade-in hook ─── */
function useFadeIn(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("opacity-100", "translate-y-0");
        el.classList.remove("opacity-0", "translate-y-10");
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

/* ════════════════════════════════════════════════ */
export default function Nujum() {
  const [selected,    setSelected]    = useState(null);
  const [seasonIdx,   setSeasonIdx]   = useState(0);
  const [showAll,     setShowAll]     = useState(false);
  const [sliderStart, setSliderStart] = useState(0);

  const heroRef    = useFadeIn(0);
  const archiveRef = useFadeIn(0);
  const ctaRef     = useFadeIn(0);

  const featuredVideoId = getVideoId(latestEpisode.videoUrl);

  /* filtered episodes */
  const filtered = episodes.filter(SEASONS[seasonIdx].filter);
  /* slider shows 3 at a time from filtered */
  const CARDS_PER_PAGE = 3;
  const canPrev = sliderStart > 0;
  const canNext = sliderStart + CARDS_PER_PAGE < filtered.length;
  const visibleCards = showAll
    ? filtered
    : filtered.slice(sliderStart, sliderStart + CARDS_PER_PAGE);

  const handleSeasonChange = (i) => { setSeasonIdx(i); setSliderStart(0); setShowAll(false); };

  return (
    <main className="bg-[#f6f9fd] text-[#013463] overflow-x-hidden">

      {/* ══════════════════════════════════════════
          1. HERO — star bg, taller video
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img src={star} alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover select-none z-0" />
        <div className="absolute inset-0 z-0 bg-white/5" />
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full border-2 border-[#013463]/40 z-0 hidden lg:block" />
        <div className="absolute -right-16 -top-16 w-[320px] h-[320px] rounded-full border-2 border-[#DDA23A]/40 z-0 hidden lg:block" />

        <div ref={heroRef}
          className="opacity-0 translate-y-10 transition-all duration-700 ease-out relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32"
          style={{ paddingTop: '6rem', paddingBottom: '5rem' }}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center lg:py-16">

            {/* ── Left ── */}
            <div className="space-y-7">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#DDA23A]">
                <span className="inline-block w-6 h-px bg-[#DDA23A]" />
                The Flagship Series
              </span>

              <h1 className="font-extrabold text-[#013463] text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] leading-[1.1] tracking-tight">
                Nujum al-Code:{" "}
                <span className="relative inline-block text-[#DDA23A]">
                  Guiding Lights
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#DDA23A]/40 rounded-full" />
                </span>
                <br />
                <span className="text-[#013463]">in the Digital Realm</span>
              </h1>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
                Our flagship series featuring deep technical dives with industry pioneers,
                focusing on both technical mastery and spiritual growth.
              </p>

              {/* stats */}
              <div className="flex flex-wrap gap-8">
                {[
                  { value: "9+",                 label: "Episodes" },
                  { value: "3",                  label: "Seasons" },
                  { value: "Free",               label: "Always" },
                ].map(({ value, label }) => (
                  <div key={label} className="flex flex-col">
                    <span className="text-[#DDA23A] font-extrabold text-2xl sm:text-3xl leading-none">{value}</span>
                    <span className="text-[#013463] text-xs uppercase tracking-widest mt-1 font-semibold">{label}</span>
                  </div>
                ))}
              </div>

              
            </div>

            {/* ── Right — taller featured video ── */}
            <div className="relative">
              <div
                onClick={() => setSelected(latestEpisode)}
                className="relative rounded-[2rem] overflow-hidden shadow-[0_40px_80px_rgba(1,52,99,0.2)] cursor-pointer group"
              >
                {featuredVideoId ? (
                  <img
                    src={`https://img.youtube.com/vi/${featuredVideoId}/maxresdefault.jpg`}
                    onError={(e) => {
                      if (e.target.src.includes("maxresdefault"))
                        e.target.src = `https://img.youtube.com/vi/${featuredVideoId}/hqdefault.jpg`;
                    }}
                    /* taller: aspect-[20/15] instead of aspect-video (16/9) */
                    className="w-full aspect-[19/14] object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={latestEpisode.title}
                  />
                ) : (
                  <div className="w-full aspect-[18/14] bg-[#013463]/10 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Thumbnail loading…</span>
                  </div>
                )}

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#DDA23A] rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-7 h-7 fill-white ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>

                {/* bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#DDA23A] text-[#013463] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Latest · EP {String(latestEpisode.id).padStart(2,"0")}
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">
                      {latestEpisode.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight mb-2">
                    {latestEpisode.title}
                  </h3>
                  <div className="flex items-center gap-3 text-[11px] text-white/60 uppercase tracking-widest">
                    <span>{latestEpisode.author}</span>
                    {latestEpisode.duration !== "—" && (
                      <><span className="opacity-40">·</span><span>{latestEpisode.duration}</span></>
                    )}
                  </div>
                </div>
              </div>

              {/* floating episode badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-[#013463] text-white rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-2xl font-extrabold leading-none text-[#DDA23A]">EP {String(latestEpisode.id).padStart(2,"0")}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mt-1">Latest</p>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f6f9fd] to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 animate-bounce">
          <span className="w-px h-8 bg-[#013463]/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#013463]/50" />
        </div>
      </section>


      {/* ══════════════════════════════════════════
          2. EPISODE ARCHIVE
      ══════════════════════════════════════════ */}
      <section id="archive" className="bg-[#f6f9fd] py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div ref={archiveRef} className="opacity-0 translate-y-10 transition-all duration-700 ease-out">

            {/* heading */}
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-3">
                <span className="inline-block w-6 h-px bg-[#DDA23A]" />
                Episodes
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#013463] leading-tight mb-3">
                Episode{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Archive</span>
                  <span className="absolute bottom-0 left-0 w-full h-[6px] bg-[#DDA23A]/30 rounded-full -z-0" />
                </span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base max-w-lg leading-relaxed">
                Browse our library of technical discourse and digital philosophy —
                {episodes.length} episodes across 3 seasons.
              </p>
            </div>

          

            {/* slider controls (only when not showAll) */}
            {!showAll && filtered.length > CARDS_PER_PAGE && (
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs text-gray-400 font-medium">
                  Showing {sliderStart + 1}–{Math.min(sliderStart + CARDS_PER_PAGE, filtered.length)} of {filtered.length}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSliderStart(s => Math.max(0, s - 1))}
                    disabled={!canPrev}
                    className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200
                      ${canPrev ? "border-[#013463] text-[#013463] hover:bg-[#013463] hover:text-white" : "border-gray-200 text-gray-300 cursor-not-allowed"}`}
                  >
                    <IconChevronLeft />
                  </button>
                  <button
                    onClick={() => setSliderStart(s => Math.min(filtered.length - CARDS_PER_PAGE, s + 1))}
                    disabled={!canNext}
                    className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200
                      ${canNext ? "border-[#013463] text-[#013463] hover:bg-[#013463] hover:text-white" : "border-gray-200 text-gray-300 cursor-not-allowed"}`}
                  >
                    <IconChevronRight />
                  </button>
                </div>
              </div>
            )}

            {/* cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleCards.map((ep) => {
                const videoId = getVideoId(ep.videoUrl);
                const isLatest = ep.id === latestEpisode.id;

                return (
                  <div
                    key={ep.id}
                    onClick={() => setSelected(ep)}
                    className="group bg-white border border-gray-100 rounded-[1.75rem] overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 relative cursor-pointer"
                  >
                    <span className="absolute top-0 left-8 h-[3px] w-10 bg-[#DDA23A] rounded-b-full z-10" />

                    {/* thumbnail */}
                    <div className="relative aspect-video overflow-hidden bg-[#013463]/5">
                      {videoId ? (
                        <>
                          <img
                            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                            onError={(e) => { e.target.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`; }}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            alt={ep.title}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-12 h-12 bg-[#DDA23A] rounded-full flex items-center justify-center shadow-xl">
                              <IconPlay />
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                            <IconPlay />
                          </div>
                          <span className="text-[11px] text-gray-400">No thumbnail</span>
                        </div>
                      )}

                      {/* badges */}
                      <div className="absolute top-3 right-3 flex gap-1.5">
                        {isLatest && (
                          <span className="bg-[#DDA23A] text-[#013463] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow">
                            Latest
                          </span>
                        )}
                        {ep.duration && ep.duration !== "—" && (
                          <span className="bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                            {ep.duration}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* content */}
                    <div className="p-5 sm:p-6 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#DDA23A]">{ep.category}</span>
                        <span className="text-[10px] font-bold text-[#013463]/40 uppercase tracking-wider">
                          EP {String(ep.id).padStart(2,"0")}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-extrabold text-[#013463] leading-tight line-clamp-2 group-hover:text-[#DDA23A] transition-colors duration-200">
                        {ep.title}
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{ep.description}</p>
                      <div className="flex items-center justify-between pt-1 border-t border-gray-50">
                        <span className="text-[11px] text-gray-500 font-medium">{ep.author}</span>
                        <span className="text-[10px] font-bold text-[#DDA23A] flex items-center gap-1">Watch <IconArrow /></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* progress dots + show more */}
            <div className="mt-10 flex flex-col items-center gap-5">
              {/* dots */}
              {!showAll && filtered.length > CARDS_PER_PAGE && (
                <div className="flex gap-2">
                  {Array.from({ length: filtered.length }).map((_, i) => (
                    <div key={i}
                      className={`h-1.5 rounded-full transition-all duration-300
                        ${i >= sliderStart && i < sliderStart + CARDS_PER_PAGE
                          ? "w-8 bg-[#013463]"
                          : "w-2 bg-[#013463]/20"}`}
                    />
                  ))}
                </div>
              )}

              <button
                onClick={() => { setShowAll(!showAll); setSliderStart(0); }}
                className="inline-flex items-center gap-2 text-[#013463] font-bold text-sm hover:text-[#DDA23A] transition-colors duration-200"
              >
                {showAll ? "View Less" : `View All ${filtered.length} Episodes`}
                <IconArrow />
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          3. TELEGRAM CTA
      ══════════════════════════════════════════ */}
      <section className="bg-[#013463] py-20 sm:py-28 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto">
          <div ref={ctaRef}
            className="opacity-0 translate-y-10 transition-all duration-700 ease-out flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-5">
                <span className="inline-block w-6 h-px bg-[#DDA23A]" />
                Stay Connected
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                Join the <span className="text-[#DDA23A]">Telegram Lightstream</span>
              </h2>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                Connect instantly with the Nujum community for updates,
                discussions, and new episodes every week.
              </p>
            </div>
            <div className="w-full lg:max-w-md flex-shrink-0">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-1.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="flex-1 px-4 py-3 text-sm text-white/50 select-none">t.me/nsda_community</div>
                <a href="https://t.me/nsda_community" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#DDA23A] text-[#013463] px-7 py-3 rounded-xl font-bold text-sm hover:bg-yellow-400 transition-all duration-200 active:scale-95 whitespace-nowrap">
                  <IconTelegram /> Join Us
                </a>
              </div>
              <p className="text-[10px] text-white/30 mt-3 uppercase tracking-[0.2em] text-center lg:text-left">
                Connect instantly via Telegram
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          4. BOTTOM CTA
      ══════════════════════════════════════════ */}
      <section className="bg-[#f6f9fd] py-20 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-5">
            <span className="inline-block w-5 h-px bg-[#DDA23A]" />Get Involved
            <span className="inline-block w-5 h-px bg-[#DDA23A]" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#013463] mb-5 leading-tight">
            Ready to code for a <span className="text-[#DDA23A]">higher purpose?</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
            Join a community that puts faith at the centre of every commit. Build tools that matter, with people who care.
          </p>
          <div className="w-16 h-1 bg-[#DDA23A] rounded-full mx-auto mb-10" />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* የነበረው: <a href="/form" ... > */}
            <Link to="/form"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#DDA23A] px-10 py-4 text-sm font-bold text-[#013463] shadow-lg shadow-[#DDA23A]/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-400 active:scale-95">
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


     {/* ══════════════════════════════════════════
          VIDEO MODAL — Optimized for long titles & mobile layout
      ══════════════════════════════════════════ */}
      {selected && (
        <div className="fixed inset-0 bg-[#013463]/95 z-[9999] flex items-center justify-center p-4 sm:p-6 backdrop-blur-md"
          onClick={() => setSelected(null)}>
          <div className="bg-white rounded-[2rem] sm:rounded-[3rem] max-w-4xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}>
            
            {/* Video Container */}
            <div className="aspect-video bg-black">
              {getVideoId(selected.videoUrl) ? (
                <iframe width="100%" height="100%"
                  src={`https://www.youtube.com/embed/${getVideoId(selected.videoUrl)}?autoplay=1&rel=0`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen title={selected.title} />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-sm">Video unavailable</div>
              )}
            </div>

            {/* Details Footer Section */}
            <div className="p-5 sm:p-8 flex items-start justify-between gap-4">
              {/* flex-1 and min-w-0 stops the text from squishing the close button */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center flex-wrap gap-2 mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#DDA23A]">
                    EP {String(selected.id).padStart(2,"0")}
                  </span>
                  <span className="text-gray-300">·</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    {selected.category}
                  </span>
                </div>
                {/* break-words handles long titles gracefully on tiny screens */}
                <h2 className="text-base sm:text-2xl font-extrabold text-[#013463] leading-tight break-words">
                  {selected.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1.5 font-medium truncate">
                  {selected.author}{selected.duration !== "—" ? ` · ${selected.duration}` : ""}
                </p>
              </div>

              {/* Close Button — self-start keeps it aligned to the top right regardless of title height */}
              <button onClick={() => setSelected(null)}
                className="flex-shrink-0 self-start w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#013463] hover:bg-[#013463] hover:text-white transition-colors duration-200">
                <IconClose />
              </button>
            </div>

          </div>
        </div>
      )}

    </main>
  );
}