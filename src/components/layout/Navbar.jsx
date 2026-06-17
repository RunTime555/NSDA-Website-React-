import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home',       href: '/'           },
  { label: 'About',      href: '/about'      },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Projects',   href: '/projects'   },
  { label: 'Nujum',      href: '/nujum'      },
  { label: 'Leadership', href: '/leadership' },
];

const IconMenu = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
  </svg>
);
const IconClose = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
  </svg>
);

export default function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const location  = useLocation();
  const navigate  = useNavigate();

  /* scroll to top on route change */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setMenuOpen(false);
  }, [location.pathname]);

  /* shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* which link is active */
  const getActive = () => {
    const p = location.pathname;
    if (p === '/')            return 'home';
    if (p === '/about')       return 'about';
    if (p === '/what-we-do')  return 'what-we-do';
    if (p === '/projects')    return 'projects';
    if (p === '/nujum')       return 'nujum';
    if (p === '/leadership')  return 'leadership';
    if (p === '/register')    return 'register';
    return '';
  };
  const active = getActive();

  const handleLogoClick = () => {
    if (location.pathname !== '/') navigate('/');
    else window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] bg-white transition-shadow duration-300 ${scrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.1)]' : 'shadow-[0_1px_3px_rgba(0,0,0,0.06)]'}`}>

      {/* ── main bar ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex items-center justify-between h-[70px]">

        {/* logo */}
        <div onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer flex-shrink-0">
          <img
            src="/nsda.png"
            alt="NSDA"
            className="h-9 w-auto"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span className="text-xl font-extrabold text-[#013463] tracking-wide">NSDA</span>
        </div>

        {/* ── desktop links ── */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-9">
          {NAV_LINKS.map(({ label, href }) => {
            const key = href === '/' ? 'home' : href.replace('/', '');
            const isAct = active === key;
            return (
              <Link
                key={href}
                to={href}
                className={`text-[13px] font-semibold uppercase tracking-wider transition-colors duration-200 pb-0.5
                  ${isAct
                    ? 'text-[#013463] border-b-2 border-[#DDA23A]'
                    : 'text-[#333] border-b-2 border-transparent hover:text-[#013463] hover:border-[#DDA23A]/50'}`}
              >
                {label}
              </Link>
            );
          })}

          <Link
            to="/register"
            className={`ml-2 px-5 py-2 rounded-lg text-[13px] font-bold uppercase tracking-wider transition-all duration-200 active:scale-95
              ${active === 'register'
                ? 'bg-[#013463] text-white'
                : 'bg-[#DDA23A] text-[#013463] hover:opacity-85'}`}
          >
            Register
          </Link>
        </div>

        {/* ── mobile hamburger ── */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-[#013463] hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {menuOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* ── mobile dropdown ── */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100
        ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-5 sm:px-8 py-4 flex flex-col gap-1">

          {NAV_LINKS.map(({ label, href }) => {
            const key = href === '/' ? 'home' : href.replace('/', '');
            const isAct = active === key;
            return (
              <Link
                key={href}
                to={href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-200
                  ${isAct
                    ? 'bg-[#013463]/8 text-[#013463] border-l-4 border-[#DDA23A]'
                    : 'text-[#333] hover:bg-gray-50 hover:text-[#013463] border-l-4 border-transparent'}`}
              >
                {label}
              </Link>
            );
          })}

          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-center bg-[#DDA23A] text-[#013463] hover:opacity-85 transition-opacity duration-200 active:scale-95"
          >
            Register
          </Link>
        </div>
      </div>

    </nav>
  );
}