import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

/* ─── inline SVGs ─── */
const IconTelegram = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);
const IconLinkedin = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const IconYoutube = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
const IconHeart = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);
const IconArrow = () => (
  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  /* navigate to page and scroll to top */
  const handleNav = (href) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home',       href: '/'           },
    { name: 'About',      href: '/about'      },
    { name: 'What We Do', href: '/what-we-do' },
    { name: 'Projects',   href: '/projects'   },
    { name: 'Nujum',      href: '/nujum'      },
    { name: 'Leadership', href: '/leadership' },
  ];

  const socialLinks = [
    { name: 'Telegram', href: 'https://t.me/nsda_community',                       icon: <IconTelegram /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/nsda-community/',   icon: <IconLinkedin /> },
    { name: 'YouTube',  href: 'https://youtube.com/@NSDA_Community',                 icon: <IconYoutube />  },
  ];

  return (
    <footer className="bg-[#013463] text-white overflow-x-hidden">

      {/* gold top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#DDA23A] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-14 pb-8">

        {/* ── 3-column grid (Community column removed) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-8 mb-12">

          {/* Brand */}
          <div className="space-y-5">
            <div>
              <span className="text-[#DDA23A] font-extrabold text-3xl tracking-tight leading-none">NSDA</span>
              <div className="w-8 h-[3px] bg-[#DDA23A] rounded-full mt-2" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Empowering Muslim student developers to achieve technical excellence through faith-centered collaboration.
            </p>
            {/* social icons */}
            <div className="flex gap-3 pt-1">
              {socialLinks.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="w-9 h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#DDA23A] hover:text-[#013463] hover:border-[#DDA23A] transition-all duration-200 hover:-translate-y-0.5"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation — scroll to top on click */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DDA23A]">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ name, href }) => (
                <li key={name}>
                  <button
                    onClick={() => handleNav(href)}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200 text-left"
                  >
                    <span className="w-0 group-hover:w-3 transition-all duration-200 overflow-hidden opacity-0 group-hover:opacity-100 text-[#DDA23A]">
                      <IconArrow />
                    </span>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#DDA23A]">Get Involved</h4>
            <div className="space-y-3">
              <button
                onClick={() => handleNav('/register')}
                className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                <span className="w-5 h-5 rounded-full bg-[#DDA23A]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#DDA23A] transition-colors duration-200">
                  <IconArrow />
                </span>
                Join NSDA
              </button>

              <a
                href="https://t.me/nsda_community"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200"
              >
                <span className="w-5 h-5 rounded-full bg-[#DDA23A]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#DDA23A] transition-colors duration-200">
                  <IconArrow />
                </span>
                Telegram Community
              </a>

              {/* sisters card */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdPH5aY0OimzAYIL49Ks-tnJhZLkE8F9eVFiZWyPGfb0rbAZA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-[#DDA23A]/40 transition-all duration-200"
                >
                  <span className="text-pink-400 mt-0.5 flex-shrink-0"><IconHeart /></span>
                  <div>
                    <p className="text-sm font-bold text-white leading-tight">Sisters Only</p>
                    <p className="text-[11px] text-white/50 mt-0.5 leading-relaxed">Join our private sisters' space</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ── bottom bar ── */}
        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {year} Nejm Student Developers Association. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            <span>🇪🇹</span>
            <span className="w-px h-3 bg-white/20" />
            <span>Built for the Ummah</span>
            <span className="w-px h-3 bg-white/20" />
            <span>🤲</span>
            <span>Alhamdulillah</span>
          </div>
        </div>

      </div>
    </footer>
  );
}