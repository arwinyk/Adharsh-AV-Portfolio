import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
          background: scrolled ? 'rgba(10,10,10,0.82)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        }}
      >
        <div className="container-xl" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
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
          <nav style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="hidden-mobile">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className="link-underline"
                style={({ isActive }) => ({
                  padding: '6px 14px',
                  borderRadius: 8,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                })}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              onClick={toggle}
              style={{
                width: 38, height: 38, borderRadius: 10,
                border: '1px solid var(--border)',
                background: 'transparent',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <Link to="/contact" className="btn-primary hidden-mobile" style={{ padding: '9px 20px', fontSize: '0.825rem' }}>
              Let's Work <ArrowUpRight size={14} />
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="show-mobile"
              style={{
                width: 38, height: 38, borderRadius: 10,
                border: '1px solid var(--border)',
                background: 'transparent',
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
              background: 'rgba(10,10,10,0.97)',
              backdropFilter: 'blur(24px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 8,
            }}
          >
            {navLinks.map(({ label, to }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
              >
                <NavLink
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  style={({ isActive }) => ({
                    display: 'block',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                    textDecoration: 'none',
                    padding: '12px 32px',
                    textAlign: 'center',
                    letterSpacing: '-0.02em',
                  })}
                >
                  {label}
                </NavLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              style={{ marginTop: 24 }}
            >
              <Link to="/contact" className="btn-primary" onClick={() => setMobileOpen(false)}>
                Let's Work <ArrowUpRight size={14} />
              </Link>
            </motion.div>
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
