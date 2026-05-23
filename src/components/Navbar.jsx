import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Work', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        style={{
          position: 'fixed', top: scrolled ? 16 : 24, left: 0, right: 0, zIndex: 100,
          display: 'flex', justifyContent: 'center',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'none',
          padding: '0 20px',
        }}
      >
        <div style={{
          pointerEvents: 'auto',
          width: '100%',
          maxWidth: scrolled ? 840 : 1200,
          height: 64,
          background: scrolled ? 'rgba(5,5,7,0.98)' : 'transparent',
          border: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          borderRadius: scrolled ? 999 : 0,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: scrolled ? '0 12px 0 24px' : '0',
          boxShadow: scrolled ? '0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)' : 'none',
        }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: '1.15rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}>
              Adharsh AV
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4, position: 'relative' }} className="hidden-mobile">
            {navLinks.map(({ label, to }) => {
              // We want exact match for active state
              const isActive = location.pathname.startsWith(to);
              return (
                <Link
                  key={to}
                  to={to}
                  style={{ position: 'relative', textDecoration: 'none' }}
                >
                  {isActive && (
                    <div
                      style={{
                        position: 'absolute', inset: 0,
                        background: 'rgba(255,255,255,0.08)',
                        borderRadius: 999,
                        zIndex: 0,
                      }}
                    />
                  )}
                  <span style={{
                    position: 'relative', zIndex: 1,
                    padding: '8px 16px', display: 'block',
                    fontSize: '0.85rem', fontWeight: 500,
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    transition: 'color 0.2s',
                  }}>
                    {label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              onClick={toggle}
              style={{
                width: 40, height: 40, borderRadius: '50%',
                border: scrolled ? '1px solid var(--border)' : '1px solid transparent',
                background: scrolled ? 'rgba(255,255,255,0.03)' : 'transparent',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--text-primary)';
                if (scrolled) e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                if (scrolled) e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <Link to="/contact" className="btn-primary hidden-mobile" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
              Let's Work <ArrowUpRight size={14} />
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="show-mobile"
              style={{
                width: 40, height: 40, borderRadius: '50%',
                border: scrolled ? '1px solid var(--border)' : '1px solid transparent',
                background: scrolled ? 'rgba(255,255,255,0.03)' : 'transparent',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
              aria-label="Open menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99,
              background: 'rgba(5,5,7,1)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 8,
            }}
          >
            {navLinks.map(({ label, to }, i) => {
              const isActive = location.pathname.startsWith(to);
              return (
                <div key={to}>
                  <Link
                    to={to}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'block',
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      textDecoration: 'none',
                      padding: '12px 32px',
                      textAlign: 'center',
                      letterSpacing: '-0.02em',
                      transition: 'color 0.2s',
                    }}
                  >
                    {label}
                  </Link>
                </div>
              );
            })}
            <div style={{ marginTop: 24 }}>
              <Link to="/contact" className="btn-primary" onClick={() => setMobileOpen(false)}>
                Let's Work <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
