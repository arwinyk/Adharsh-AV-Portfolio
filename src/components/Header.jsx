import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Work', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ── Floating Pill Navbar ── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          padding: '16px 24px 0',
          pointerEvents: 'none',
        }}
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 8px 8px 20px',
            borderRadius: 'var(--radius-full)',
            background: scrolled ? 'rgba(11, 11, 15, 0.82)' : 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.5)' : '0 4px 24px rgba(0,0,0,0.2)',
            transition: 'background 0.4s ease, box-shadow 0.4s ease',
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6, marginRight: 8 }}>
            <span style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              fontSize: '1rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.04em',
            }}>
              Adharsh AV
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navLinks.map(({ name, path }) => {
              const isActive = location.pathname.startsWith(path) ||
                (path === '/projects' && location.pathname.startsWith('/work'));
              return (
                <Link
                  key={name}
                  to={path}
                  style={{
                    padding: '7px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 500,
                    color: isActive ? '#fff' : 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s, background 0.2s',
                    background: isActive ? 'rgba(59,130,246,0.15)' : 'transparent',
                    position: 'relative',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-primary)'; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navActive"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(59,130,246,0.12)',
                        border: '1px solid rgba(59,130,246,0.2)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1 }}>{name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 8 }}>
            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              style={{
                width: 36, height: 36,
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border)',
                background: 'transparent',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            {/* CTA button */}
            <Link
              to="/contact"
              className="btn-primary hidden-mobile"
              style={{ padding: '9px 22px', fontSize: '0.825rem' }}
            >
              Let's Work <ArrowUpRight size={14} />
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(o => !o)}
              className="show-mobile"
              aria-label="Toggle menu"
              style={{
                width: 36, height: 36,
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border)',
                background: 'transparent',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* ── Mobile Overlay Menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99,
              background: 'rgba(11,11,15,0.97)',
              backdropFilter: 'blur(28px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            {navLinks.map(({ name, path }, i) => (
              <motion.div
                key={path}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.25,1,0.5,1] }}
              >
                <Link
                  to={path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'block',
                    fontSize: '2.25rem',
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    color: location.pathname.startsWith(path) ? 'var(--accent)' : 'var(--text-primary)',
                    textDecoration: 'none',
                    padding: '10px 32px',
                    textAlign: 'center',
                    letterSpacing: '-0.03em',
                    transition: 'color 0.2s',
                  }}
                >
                  {name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              style={{ marginTop: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}
            >
              <Link
                to="/contact"
                className="btn-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let's Work Together <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
