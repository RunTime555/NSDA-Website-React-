import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const sections = ['about', 'what-we-do', 'mentorship', 'projects', 'nujum', 'leadership'];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');

  // Scroll to the top of the page when the route/pathname changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') {
      const timer = setTimeout(() => {
        setActiveSection('');
      }, 0);
      return () => clearTimeout(timer);
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('');
      window.history.pushState(null, '', '/');
    }
  };

  const isActive = () => {
    if (location.pathname === '/register') return 'register';
    if (location.pathname === '/projects') return 'projects';
    if (location.pathname === '/about') return 'about';
    if (location.pathname === '/what-we-do') return 'what-we-do';
    if (location.pathname === '/nujum') return 'nujum';
    if (location.pathname === '/leadership') return 'leadership';
    if (location.pathname === '/') {
      if (activeSection) return activeSection;
      return 'home';
    }
    return null;
  };

  const active = isActive();

  return (
    <nav style={{ 
      backgroundColor: 'white',
      boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : '0 1px 3px rgba(0,0,0,0.05)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      width: '100%'
    }}>
      {/* Increased right padding here from 24px to 48px */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 60px 25px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        
        <div onClick={handleHomeClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img 
            src="/nsda.png" 
            alt="NSDA Logo" 
            className="h-[45px] w-auto block"
            onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
          />
          <span style={{ fontSize: '24px', fontWeight: '700', color: '#013463', letterSpacing: '1px' }}>NSDA</span>
        </div>

        <div className="desktop-nav" style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link to="/" style={{ textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#000000', borderBottom: active === 'home' ? '2px solid #DDA23A' : '2px solid transparent', paddingBottom: '4px', fontSize: '14px', fontWeight: '500', textTransform: 'uppercase' }}>Home</Link>
          <Link to="/about" style={{ textDecoration: 'none', color: '#000000', borderBottom: active === 'about' ? '2px solid #DDA23A' : '2px solid transparent', paddingBottom: '4px', fontSize: '14px', fontWeight: '500', textTransform: 'uppercase' }}>About</Link>
          <Link to="/what-we-do" style={{ textDecoration: 'none', color: '#000000', borderBottom: active === 'what-we-do' ? '2px solid #DDA23A' : '2px solid transparent', paddingBottom: '4px', fontSize: '14px', fontWeight: '500', textTransform: 'uppercase' }}>What We Do</Link>
          <Link to="/projects" style={{ textDecoration: 'none', color: '#000000', borderBottom: active === 'projects' ? '2px solid #DDA23A' : '2px solid transparent', paddingBottom: '4px', fontSize: '14px', fontWeight: '500', textTransform: 'uppercase' }}>Projects</Link>
          <Link to="/nujum" style={{ textDecoration: 'none', color: '#000000', borderBottom: active === 'nujum' ? '2px solid #DDA23A' : '2px solid transparent', paddingBottom: '4px', fontSize: '14px', fontWeight: '500', textTransform: 'uppercase' }}>Nujum</Link>
          <Link to="/leadership" style={{ textDecoration: 'none', color: '#000000', borderBottom: active === 'leadership' ? '2px solid #DDA23A' : '2px solid transparent', paddingBottom: '4px', fontSize: '14px', fontWeight: '500', textTransform: 'uppercase' }}>Leadership</Link>
          <Link to="/register" style={{ backgroundColor: '#DDA23A', color: '#013463', padding: '8px 24px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase' }} onMouseEnter={(e) => e.target.style.opacity = '0.85'} onMouseLeave={(e) => e.target.style.opacity = '1'}>Register</Link>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ display: 'none', background: 'none', border: 'none', fontSize: '28px', cursor: 'pointer', color: '#013463' }} className="mobile-menu-btn">☰</button>
      </div>

      {isMenuOpen && (
        <div style={{ padding: '20px 30px', borderTop: '1px solid #eee', display: 'flex', flexDirection: 'column', gap: '12px', backgroundColor: 'white' }}>
          <Link to="/" style={{ color: '#000000', textDecoration: 'none', fontWeight: '500', padding: '8px 0' }} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" style={{ color: '#000000', textDecoration: 'none', fontWeight: '500', padding: '8px 0' }} onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/what-we-do" style={{ color: '#000000', textDecoration: 'none', fontWeight: '500', padding: '8px 0' }} onClick={() => setIsMenuOpen(false)}>What We Do</Link>
          <Link to="/projects" style={{ color: '#000000', textDecoration: 'none', fontWeight: '500', padding: '8px 0' }} onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link to="/nujum" style={{ color: '#000000', textDecoration: 'none', fontWeight: '500', padding: '8px 0' }} onClick={() => setIsMenuOpen(false)}>Nujum</Link>
          <Link to="/leadership" style={{ color: '#000000', textDecoration: 'none', fontWeight: '500', padding: '8px 0' }} onClick={() => setIsMenuOpen(false)}>Leadership</Link>
          <Link to="/register" style={{ backgroundColor: '#DDA23A', color: '#013463', padding: '10px', borderRadius: '8px', textAlign: 'center', textDecoration: 'none', fontWeight: 'bold' }} onClick={() => setIsMenuOpen(false)}>Register</Link>
        </div>
      )}
    </nav>
  );
}