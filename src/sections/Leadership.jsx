import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import star from '../assets/star.jpg';
import { leadershipMembers } from '../data/leadership';


/* data lives in src/data/leadership.js */
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
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

/* ─── icon color by gender ─── */
const getIconColor = (gender) =>
  gender === 'female' ? '#e91e63' : '#3498db';

/* ─── icons ─── */
const IconArrow = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
);
const IconLinkedin = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

/* ─── Member Card — opens LinkedIn directly on click ─── */
function MemberCard({ member, dark = false }) {
  const hasLink = Boolean(member.linkedin);

  const sharedClass = `group relative rounded-[1.75rem] overflow-hidden transition-all duration-300 flex flex-col items-center text-center p-6 pt-7
    ${hasLink ? 'cursor-pointer hover:-translate-y-2 hover:shadow-2xl' : 'cursor-default'}
    ${dark
      ? 'bg-white/8 border border-white/10 hover:bg-white/15 hover:border-[#DDA23A]/40'
      : 'bg-white border border-gray-100 shadow-sm'}`;

  const body = (
    <>
      <span className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-10 bg-[#DDA23A] rounded-b-full" />
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-xl sm:text-2xl mb-4 transition-all duration-300 group-hover:ring-4 group-hover:ring-[#DDA23A]/50 flex-shrink-0"
        style={{ backgroundColor: 'rgba(1,52,99,0.08)', color: getIconColor(member.gender) }}
      >
        <i className={`fas ${member.icon}`} />
      </div>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DDA23A] mb-1">{member.role}</p>
      <h3 className={`font-extrabold text-sm sm:text-base leading-tight mb-1 ${dark ? 'text-white' : 'text-[#013463]'}`}>
        {member.name}
      </h3>
      <p className={`text-[11px] leading-tight mb-3 ${dark ? 'text-white/50' : 'text-gray-400'}`}>
        {member.university}
      </p>
      {hasLink ? (
        <div className={`flex items-center gap-1.5 text-xs font-bold transition-colors duration-200
          ${dark ? 'text-white/50 group-hover:text-[#DDA23A]' : 'text-[#013463] group-hover:text-[#DDA23A]'}`}>
          <IconLinkedin />
          <span>LinkedIn</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1"><IconArrow /></span>
        </div>
      ) : (
        <span className={`text-[10px] ${dark ? 'text-white/25' : 'text-gray-300'}`}>No profile yet</span>
      )}
    </>
  );

  if (hasLink) {
    return (
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={sharedClass}>
        {body}
      </a>
    );
  }
  return <div className={sharedClass}>{body}</div>;
}

/* ════════════════════════════════════════════════
   LEADERSHIP PAGE
════════════════════════════════════════════════ */
export default function Leadership() {
  const heroRef     = useFadeIn(0);
  const foundersRef = useFadeIn(0);
  const batchRef    = useFadeIn(0);
  const valuesRef   = useFadeIn(0);

  const founders    = leadershipMembers.filter(m => m.group === 'Founders');
  const secondBatch = leadershipMembers.filter(m => m.group === '2nd Batch');

  return (
    <main className="bg-[#f6f9fd] text-[#013463] overflow-x-hidden">

      {/* ══════════════════════════════════════════
          1. HERO — star bg, text only, no card
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img src={star} alt="" aria-hidden="true"
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', zIndex:0 }} />
        <div className="absolute inset-0 bg-white/5" style={{ zIndex:1 }} />
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full border-2 border-[#013463]/40 hidden lg:block" style={{ zIndex:2 }} />
        <div className="absolute -right-16 -top-16 w-[320px] h-[320px] rounded-full border-2 border-[#DDA23A]/40 hidden lg:block" style={{ zIndex:2 }} />

        <div
          ref={heroRef}
          className="opacity-0 translate-y-10 transition-all duration-700 ease-out w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-20 md:py-0"
          style={{ position:'relative', zIndex:10 }}
        >
          <div className="md:min-h-0 md:py-28 flex flex-col justify-center max-w-3xl">

            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-6">
              <span className="inline-block w-6 h-px bg-[#DDA23A]" />
              NSDA Leadership
            </span>

            <h1 className="font-extrabold text-[#013463] text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] tracking-tight mb-6 md:mb-8">
              Our{' '}
              <span className="relative inline-block text-[#DDA23A]">
                Leadership
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#DDA23A]/40 rounded-full" />
              </span>{' '}
              Team
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8 md:mb-10">
              The team that applies academic rigor, community stewardship, and creative strategy to empower the next generation of Muslim developers across Ethiopia.
            </p>

            {/* stats row */}
            <div className="flex flex-wrap gap-8 sm:gap-12 mb-8 md:mb-10">
              {[
               
                { value: '15',  label: 'Founders'        },
                { value: '8+',   label: 'Emerging Leaders'},
                { value: '15+', label: 'Universities'    },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-[#DDA23A] font-extrabold text-2xl sm:text-3xl leading-none">{value}</span>
                  <span className="text-[#013463] text-xs uppercase tracking-widest mt-1 font-semibold">{label}</span>
                </div>
              ))}
            </div>

           
            <div className="flex flex-col sm:flex-row gap-4">
             
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f6f9fd] to-transparent pointer-events-none" style={{ zIndex:10 }} />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce" style={{ zIndex:20 }}>
          <span className="w-px h-8 bg-[#013463]/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#013463]/50" />
        </div>
      </section>


      {/* ══════════════════════════════════════════
          2. FOUNDING LEADERSHIP
      ══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-[#f6f9fd]">
        <div className="max-w-7xl mx-auto">
          <div ref={foundersRef} className="opacity-0 translate-y-10 transition-all duration-700 ease-out">

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-3">
                  <span className="inline-block w-6 h-px bg-[#DDA23A]" />
                  Founding Team
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#013463] leading-tight">
                  Founding{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10">Leadership</span>
                    <span className="absolute bottom-0 left-0 w-full h-[5px] bg-[#DDA23A]/30 rounded-full -z-0" />
                  </span>
                </h2>
                <p className="mt-2 text-gray-500 text-sm max-w-xl leading-relaxed">
                  These members established NSDA's vision and continue to guide the community with purpose and creativity.
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#DDA23A] font-bold hidden sm:block pb-1">
                Click any card to view profile
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
              {founders.map(m => <MemberCard key={m.id} member={m} dark={false} />)}
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          3. EMERGING LEADERS — navy bg
      ══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-[#013463]">
        <div className="max-w-7xl mx-auto">
          <div ref={batchRef} className="opacity-0 translate-y-10 transition-all duration-700 ease-out">

            <div className="mb-10 sm:mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-3">
                <span className="inline-block w-6 h-px bg-[#DDA23A]" />
                2nd Batch
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Emerging <span className="text-[#DDA23A]">Leaders</span>
              </h2>
              <p className="mt-2 text-white/60 text-sm max-w-xl leading-relaxed">
                Our second batch brings fresh energy, new voices, and a strong commitment to sisterhood and technical excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
              {secondBatch.map(m => <MemberCard key={m.id} member={m} dark={true} />)}
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════
          4. GUIDED BY VALUES
      ══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-[#f6f9fd]">
        <div className="max-w-7xl mx-auto">
          <div ref={valuesRef} className="opacity-0 translate-y-10 transition-all duration-700 ease-out">

            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-3">
                <span className="inline-block w-6 h-px bg-[#DDA23A]" />
                Principles
                <span className="inline-block w-6 h-px bg-[#DDA23A]" />
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#013463] mb-3">
                Guided by <span className="text-[#DDA23A]">Values</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Our leadership is rooted in service, discipline, knowledge sharing, and faith-driven excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {[
                { title: 'Faith & Excellence', body: 'We pursue ihsan in every project, decision, and interaction, striving for the highest moral and professional standard.', style: 'dark' },
                { title: 'Discipline',          body: 'Consistency, responsibility, and quality in our work — ensuring academic rigour translates into tangible results.',         style: 'light' },
                { title: 'Knowledge Sharing',   body: 'We uplift one another through open mentorship and collaborative learning, fostering continuous intellectual growth.',       style: 'light' },
                { title: 'Service to Ummah',    body: 'We build technology and communication platforms that bring lasting benefit to our communities and global society.',          style: 'gold' },
              ].map(({ title, body, style }) => (
                <div key={title} className={`relative rounded-2xl p-6 sm:p-7 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300
                  ${style === 'dark'  ? 'bg-[#013463] text-white shadow-lg'
                  : style === 'gold'  ? 'bg-[#DDA23A] text-[#013463] shadow-lg'
                  : 'bg-white border border-gray-100 shadow-sm'}`}
                >
                  <span className="absolute top-0 left-7 h-[3px] w-10 rounded-b-full"
                    style={{ backgroundColor: style === 'light' ? '#DDA23A' : style === 'gold' ? '#013463' : '#DDA23A' }} />
                  {(style === 'dark' || style === 'gold') && (
                    <div className="absolute -bottom-7 -right-7 w-24 h-24 rounded-full bg-white/10" />
                  )}
                  <h3 className={`relative z-10 text-base sm:text-lg font-extrabold mb-3
                    ${style === 'dark' ? 'text-white' : style === 'gold' ? 'text-[#013463]' : 'text-[#013463]'}`}>
                    {title}
                  </h3>
                  <p className={`relative z-10 text-sm leading-relaxed
                    ${style === 'dark' ? 'text-white/70' : style === 'gold' ? 'text-[#013463]/80' : 'text-gray-500'}`}>
                    {body}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


   {/* 5. BOTTOM CTA
══════════════════════════════════════════ */}
<section className="bg-[#F6F9FD] py-16 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
  <div className="max-w-7xl mx-auto text-center">
    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#DDA23A] mb-5">
      <span className="inline-block w-5 h-px bg-[#DDA23A]" />
      Get Involved
      <span className="inline-block w-5 h-px bg-[#DDA23A]" />
    </span>
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#013463] mb-5 leading-tight">
      Ready to code for a <span className="text-[#DDA23A]">higher purpose?</span>
    </h2>
    <p className="text-[#013463]/70 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
      Join a community that puts faith at the centre of every commit. Build tools that matter, with people who care.
    </p>
    <div className="w-16 h-1 bg-[#DDA23A] rounded-full mx-auto mb-10" />
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link 
        to="/form"
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#DDA23A] px-10 py-4 text-sm font-bold text-[#013463] shadow-lg shadow-[#DDA23A]/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-400 active:scale-95">
          Become a Member
          <span className="transition-transform duration-200 group-hover:translate-x-1">
          <IconArrow />
          </span>
          </Link>
      <a href="https://t.me/nsda_community" target="_blank" rel="noreferrer"
        className="inline-flex items-center justify-center rounded-full border-2 border-[#013463]/60 bg-transparent px-10 py-4 text-sm font-bold text-[#013463] transition-all duration-200 hover:border-[#013463] hover:bg-[#013463] hover:text-white active:scale-95">
        Join Telegram Channel
      </a>
    </div>
  </div>
</section>

    </main>
  );
}