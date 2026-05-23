import { Link } from 'react-router-dom';
import { Mail, Calendar, ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';

const SocialLink = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    style={{
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-full)',
      border: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-secondary)',
      textDecoration: 'none',
      transition: 'border-color 0.2s, color 0.2s, background 0.2s',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'var(--accent)';
      e.currentTarget.style.color = 'var(--accent)';
      e.currentTarget.style.background = 'rgba(59,130,246,0.08)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.color = 'var(--text-secondary)';
      e.currentTarget.style.background = 'transparent';
    }}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top glow line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '10%',
        right: '10%',
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(139,92,246,0.4), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 400,
        height: 200,
        background: 'radial-gradient(ellipse, rgba(59,130,246,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-xl" style={{ paddingTop: 64, paddingBottom: 40, position: 'relative', zIndex: 1 }}>
        
        {/* Main grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 48,
          marginBottom: 48,
        }}>
          
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <span style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: '1.4rem',
                letterSpacing: '-0.04em',
                color: 'var(--text-primary)',
              }}>
                Adharsh AV
              </span>
            </Link>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 260 }}>
              Thoughtful design, built to ship. Senior product thinking for startups that move fast and care about craft.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
              <span className="avail-dot" />
              <span style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 600, fontFamily: "'Geist', sans-serif" }}>
                Available Q2–Q3 2026
              </span>
            </div>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
              <SocialLink href="https://linkedin.com" label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://twitter.com" label="Twitter">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://dribbble.com" label="Dribbble">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/>
                  <path d="M21.75 12.83c-6.62-1.41-12.15 1.7-14.73 8.06"/>
                  <path d="M5.16 19.17c2.63-7.58 8-11.4 15.59-12.33"/>
                </svg>
              </SocialLink>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <h4 style={{
              fontSize: '0.7rem',
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              fontWeight: 600,
              marginBottom: 4,
            }}>Navigation</h4>
            {[
              { to: '/projects', label: 'Work & Projects' },
              { to: '/about', label: 'Story & About' },
              { to: '/services', label: 'Services' },
              { to: '/process', label: 'Design Process' },
              { to: '/contact', label: 'Get In Touch' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  padding: '3px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h4 style={{
              fontSize: '0.7rem',
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              fontWeight: 600,
              marginBottom: 4,
            }}>Contact</h4>
            <a
              href="mailto:hello@adharsh.design"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <Mail size={15} />
              hello@adharsh.design
            </a>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <Calendar size={15} />
              Book a 15m discovery call
            </a>
            <Magnetic>
              <Link
                to="/contact"
                className="btn-primary"
                style={{ marginTop: 8, padding: '16px 36px', fontSize: '1rem', width: 'fit-content' }}
              >
                Let's Build Something Great <ArrowUpRight size={18} />
              </Link>
            </Magnetic>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" style={{ marginBottom: 24 }} />

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 8,
        }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
            Designed & built by Adharsh AV · © {new Date().getFullYear()} · All rights reserved.
          </p>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-tertiary)',
            opacity: 0.5,
          }}>
            Made with obsessive attention to detail
          </span>
        </div>
      </div>
    </footer>
  );
}
