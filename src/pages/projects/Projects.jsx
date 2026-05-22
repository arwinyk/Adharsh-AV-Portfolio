import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projectsData';
import { ArrowRight, Filter, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expandedSlug, setExpandedSlug] = useState(null);

  const filters = ['All', 'Product Design', 'UI/UX Design'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const toggleExpand = (slug) => {
    setExpandedSlug(prev => prev === slug ? null : slug);
  };

  const getAccentForProject = (idx) => {
    const accents = [
      { color: 'var(--accent)', glow: 'rgba(59,130,246,0.15)' },
      { color: '#D4AF37', glow: 'rgba(212,175,55,0.15)' },
      { color: 'var(--accent2)', glow: 'rgba(139,92,246,0.15)' },
      { color: 'var(--accent)', glow: 'rgba(59,130,246,0.15)' },
    ];
    return accents[idx % accents.length];
  };

  return (
    <div style={{ width: '100%', background: 'var(--bg-base)', position: 'relative' }}>

      {/* ── Hero ── */}
      <section className="section-pad container-xl">
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Background glow */}
          <div style={{
            position: 'absolute', top: '-40%', left: '-5%',
            width: 500, height: 400,
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)',
            filter: 'blur(40px)', pointerEvents: 'none',
          }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
        >
          <span className="section-label">Case Studies</span>
          <h1 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05,
            color: 'var(--text-primary)', marginBottom: 20,
          }}>
            Selected <span className="gradient-text">Works</span>
          </h1>
          <p style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: 'var(--text-secondary)', maxWidth: 560, lineHeight: 1.75,
            fontFamily: "'Geist', sans-serif",
          }}>
            A curation of high-fidelity digital experiences where technical precision meets cinematic storytelling.
          </p>
        </motion.div>
      </section>

      {/* ── Filter Bar ── */}
      <section style={{ padding: '0 0 24px' }} className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginRight: 4, color: 'var(--text-secondary)' }}>
            <Filter size={14} />
            <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.12em', fontWeight: 700 }}>Filter</span>
          </div>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: '7px 20px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontFamily: "'Geist', sans-serif",
                fontWeight: 600,
                cursor: 'pointer',
                border: '1px solid',
                transition: 'all 0.25s ease',
                background: activeFilter === f ? 'linear-gradient(135deg, var(--accent), var(--accent2))' : 'transparent',
                borderColor: activeFilter === f ? 'transparent' : 'var(--border)',
                color: activeFilter === f ? '#fff' : 'var(--text-secondary)',
                boxShadow: activeFilter === f ? '0 4px 20px rgba(59,130,246,0.35)' : 'none',
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>
      </section>

      <div className="divider" />

      {/* ── Project Cards — Expandable Case Studies ── */}
      <section className="container-xl" style={{ paddingTop: 48, paddingBottom: 80 }}>
        <AnimatePresence mode="popLayout">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {filteredProjects.map((proj, idx) => {
              const isExpanded = expandedSlug === proj.slug;
              const accent = getAccentForProject(idx);

              return (
                <motion.div
                  layout
                  key={proj.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                >
                  {/* Card shell */}
                  <div
                    className={`card-animated-border ${isExpanded ? '' : 'glass-card'}`}
                    style={{
                      borderRadius: 'var(--radius-2xl)',
                      border: '1px solid',
                      borderColor: isExpanded ? `rgba(${accent.color === 'var(--accent)' ? '59,130,246' : '212,175,55'},0.35)` : 'rgba(255,255,255,0.08)',
                      background: 'rgba(255,255,255,0.02)',
                      backdropFilter: 'blur(16px)',
                      overflow: 'hidden',
                      cursor: isExpanded ? 'default' : 'pointer',
                      transition: 'border-color 0.4s, box-shadow 0.4s',
                      boxShadow: isExpanded ? `0 0 60px ${accent.glow}, 0 16px 60px rgba(0,0,0,0.4)` : undefined,
                    }}
                  >
                    {/* Hero Image Area — always visible */}
                    <div
                      style={{
                        position: 'relative',
                        height: 'clamp(280px, 45vw, 520px)',
                        overflow: 'hidden',
                        borderRadius: isExpanded ? '24px 24px 0 0' : 'var(--radius-2xl)',
                        cursor: 'pointer',
                      }}
                      onClick={() => toggleExpand(proj.slug)}
                    >
                      {proj.coverImage ? (
                        <img
                          src={proj.coverImage}
                          alt={proj.title}
                          style={{
                            width: '100%', height: '100%',
                            objectFit: 'cover', objectPosition: 'top',
                            transition: 'transform 0.6s ease',
                            transform: isExpanded ? 'scale(1)' : undefined,
                          }}
                        />
                      ) : (
                        <div style={{
                          width: '100%', height: '100%',
                          background: `linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-base) 100%)`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <div style={{
                            position: 'absolute', top: '20%', right: '15%',
                            width: 240, height: 240,
                            background: `radial-gradient(circle, ${accent.glow} 0%, transparent 70%)`,
                            borderRadius: '50%', filter: 'blur(40px)',
                          }} />
                          <div style={{
                            position: 'absolute', bottom: '20%', left: '15%',
                            width: 180, height: 180,
                            background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
                            borderRadius: '50%', filter: 'blur(30px)',
                          }} />
                          {/* Abstract UI mockup */}
                          <div className="glass-card-2" style={{ width: '60%', maxWidth: 440, padding: 28, borderRadius: 20 }}>
                            <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
                              <div style={{ width: 9, height: 9, borderRadius: '50%', background: 'rgba(239,68,68,0.6)' }} />
                              <div style={{ width: 9, height: 9, borderRadius: '50%', background: 'rgba(234,179,8,0.6)' }} />
                              <div style={{ width: 9, height: 9, borderRadius: '50%', background: 'rgba(34,197,94,0.6)' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                              <div style={{ height: 10, width: '55%', borderRadius: 4, background: 'rgba(255,255,255,0.1)' }} />
                              <div style={{ height: 6, width: '80%', borderRadius: 3, background: 'rgba(255,255,255,0.05)' }} />
                              <div style={{ height: 6, width: '65%', borderRadius: 3, background: 'rgba(255,255,255,0.05)' }} />
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginTop: 4 }}>
                                {[1,2,3].map(i => (
                                  <div key={i} style={{ height: 48, borderRadius: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }} />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Dark overlay gradient */}
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(11,11,15,0.95) 0%, rgba(11,11,15,0.3) 40%, transparent 70%)',
                      }} />

                      {/* Hero text overlay */}
                      <div style={{
                        position: 'absolute', bottom: 0, left: 0, right: 0,
                        padding: 'clamp(24px, 4vw, 48px)',
                        display: 'flex', justifyContent: 'space-between',
                        alignItems: 'flex-end', gap: 20, flexWrap: 'wrap',
                      }}>
                        <div>
                          {/* Tags */}
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
                            <span style={{
                              padding: '4px 14px', borderRadius: 'var(--radius-full)',
                              fontSize: '0.72rem', fontFamily: "'JetBrains Mono', monospace",
                              fontWeight: 600, letterSpacing: '0.08em',
                              background: `${accent.glow}`,
                              color: accent.color === 'var(--accent)' ? '#93C5FD' : '#D4AF37',
                              border: `1px solid ${accent.glow}`,
                            }}>
                              {proj.category}
                            </span>
                            {proj.tags.slice(0, 2).map(tag => (
                              <span key={tag} style={{
                                padding: '4px 14px', borderRadius: 'var(--radius-full)',
                                fontSize: '0.72rem', fontFamily: "'JetBrains Mono', monospace",
                                fontWeight: 500, letterSpacing: '0.08em',
                                background: 'rgba(255,255,255,0.08)',
                                color: 'rgba(255,255,255,0.8)',
                                border: '1px solid rgba(255,255,255,0.12)',
                              }}>
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h2 style={{
                            fontFamily: "'Sora', sans-serif",
                            fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
                            fontWeight: 800, letterSpacing: '-0.04em',
                            color: '#fff', lineHeight: 1.05, marginBottom: 10,
                            textShadow: '0 2px 20px rgba(0,0,0,0.5)',
                          }}>
                            {proj.title}
                          </h2>
                          <p style={{
                            color: 'rgba(228,225,231,0.75)',
                            maxWidth: 520,
                            fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                            lineHeight: 1.65,
                          }}>
                            {proj.shortDescription}
                          </p>
                        </div>

                        {/* Toggle CTA */}
                        <motion.button
                          onClick={(e) => { e.stopPropagation(); toggleExpand(proj.slug); }}
                          whileHover={{ gap: 12 }}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 8,
                            padding: '12px 22px', borderRadius: 'var(--radius-full)',
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: accent.color === 'var(--accent)' ? '#93C5FD' : '#D4AF37',
                            fontSize: '0.85rem', fontFamily: "'Geist', sans-serif",
                            fontWeight: 600, cursor: 'pointer',
                            transition: 'background 0.2s, border-color 0.2s',
                            flexShrink: 0,
                          }}
                        >
                          <span>{isExpanded ? 'Close Case Study' : 'View Case Study'}</span>
                          <motion.div
                            animate={{ rotate: isExpanded ? 90 : 0 }}
                            transition={{ duration: 0.35 }}
                          >
                            <ArrowRight size={16} />
                          </motion.div>
                        </motion.button>
                      </div>
                    </div>

                    {/* ── Expandable Case Study Content ── */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          key="case-content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                          style={{ overflow: 'hidden' }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div style={{ padding: 'clamp(24px, 4vw, 56px)', paddingTop: 40 }}>

                            {/* Project metadata + overview */}
                            <div style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                              gap: 32, marginBottom: 56,
                            }}>
                              {/* Meta sidebar */}
                              <div className="glass-card-2" style={{ padding: 28, borderRadius: 20, display: 'flex', flexDirection: 'column', gap: 20 }}>
                                {[
                                  { label: 'Role', value: proj.role },
                                  { label: 'Client', value: proj.client },
                                  { label: 'Platform', value: proj.platform },
                                  { label: 'Timeline', value: proj.timeline },
                                ].map(({ label, value }) => (
                                  <div key={label}>
                                    <span style={{
                                      fontSize: '0.65rem', fontFamily: "'JetBrains Mono', monospace",
                                      textTransform: 'uppercase', letterSpacing: '0.12em',
                                      color: 'var(--text-tertiary)', display: 'block', marginBottom: 4,
                                    }}>{label}</span>
                                    <span style={{
                                      fontFamily: "'Geist', sans-serif", fontWeight: 600,
                                      fontSize: '0.9rem', color: '#fff',
                                    }}>{value}</span>
                                  </div>
                                ))}
                              </div>

                              {/* Overview + metrics */}
                              <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: 24 }}>
                                <h3 style={{
                                  fontFamily: "'Sora', sans-serif",
                                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                                  fontWeight: 700, letterSpacing: '-0.03em',
                                  color: accent.color === 'var(--accent)' ? '#93C5FD' : '#D4AF37',
                                }}>
                                  {proj.category === 'Product Design' ? 'Strategic Product Redesign' :
                                   proj.category === 'Design Systems' ? 'Enterprise Design System' :
                                   'Crafting the Experience'}
                                </h3>
                                <p style={{
                                  fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
                                  color: 'var(--text-secondary)', lineHeight: 1.8,
                                }}>
                                  {proj.overview}
                                </p>
                                {/* Metrics */}
                                <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                                  {proj.metrics.map((m, mi) => (
                                    <div key={mi}>
                                      <div style={{
                                        fontFamily: "'Sora', sans-serif",
                                        fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
                                        fontWeight: 800, color: '#fff', marginBottom: 4,
                                      }}>{m.value}</div>
                                      <div style={{
                                        fontSize: '0.68rem', fontFamily: "'JetBrains Mono', monospace",
                                        textTransform: 'uppercase', letterSpacing: '0.12em',
                                        color: accent.color === 'var(--accent)' ? '#93C5FD' : '#D4AF37',
                                        fontWeight: 600,
                                      }}>{m.label}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Problem / Solution */}
                            <div style={{
                              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                              gap: 20, marginBottom: 48,
                            }}>
                              <div style={{
                                background: 'linear-gradient(135deg, rgba(239,68,68,0.08), transparent)',
                                borderRadius: 20, padding: 32,
                                border: '1px solid rgba(239,68,68,0.2)', position: 'relative', overflow: 'hidden',
                              }}>
                                <div style={{
                                  position: 'absolute', right: -20, top: -20, width: 120, height: 120,
                                  background: 'rgba(239,68,68,0.15)', borderRadius: '50%', filter: 'blur(30px)',
                                }} />
                                <div style={{
                                  fontSize: '2rem', marginBottom: 12,
                                  filter: 'drop-shadow(0 0 8px rgba(239,68,68,0.5))',
                                }}>⚠</div>
                                <h4 style={{
                                  fontFamily: "'Sora', sans-serif", fontSize: '1.1rem',
                                  fontWeight: 700, color: '#fff', marginBottom: 12,
                                }}>The Challenge</h4>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                                  {proj.challenge}
                                </p>
                              </div>

                              <div style={{
                                background: 'linear-gradient(135deg, rgba(34,197,94,0.08), transparent)',
                                borderRadius: 20, padding: 32,
                                border: '1px solid rgba(34,197,94,0.2)', position: 'relative', overflow: 'hidden',
                              }}>
                                <div style={{
                                  position: 'absolute', right: -20, top: -20, width: 120, height: 120,
                                  background: 'rgba(34,197,94,0.15)', borderRadius: '50%', filter: 'blur(30px)',
                                }} />
                                <div style={{
                                  fontSize: '2rem', marginBottom: 12,
                                  filter: 'drop-shadow(0 0 8px rgba(34,197,94,0.5))',
                                }}>✓</div>
                                <h4 style={{
                                  fontFamily: "'Sora', sans-serif", fontSize: '1.1rem',
                                  fontWeight: 700, color: '#fff', marginBottom: 12,
                                }}>The Solution</h4>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                                  {proj.solution}
                                </p>
                              </div>
                            </div>

                            {/* Deliverables + Outcomes */}
                            <div style={{
                              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                              gap: 20, marginBottom: 40,
                            }}>
                              <div className="glass-card-2" style={{ padding: 28, borderRadius: 20 }}>
                                <h4 style={{
                                  fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem',
                                  textTransform: 'uppercase', letterSpacing: '0.14em',
                                  color: 'var(--text-primary)', marginBottom: 16, fontWeight: 700,
                                }}>Shipped Deliverables</h4>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                  {proj.deliverables.map((d, di) => (
                                    <li key={di} style={{
                                      display: 'flex', alignItems: 'flex-start', gap: 10,
                                      fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6,
                                    }}>
                                      <span style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }}>✓</span>
                                      <span>{d}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="glass-card-2" style={{ padding: 28, borderRadius: 20 }}>
                                <h4 style={{
                                  fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem',
                                  textTransform: 'uppercase', letterSpacing: '0.14em',
                                  color: 'var(--text-primary)', marginBottom: 16, fontWeight: 700,
                                }}>Key Outcomes</h4>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                  {proj.outcomes.map((o, oi) => (
                                    <li key={oi} style={{
                                      display: 'flex', alignItems: 'flex-start', gap: 10,
                                      fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6,
                                    }}>
                                      <span style={{ color: 'var(--success)', marginTop: 2, flexShrink: 0 }}>→</span>
                                      <span>{o}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* CTA */}
                            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
                              <Link
                                to={`/projects/${proj.slug}`}
                                className="btn-primary"
                                style={{ padding: '12px 28px' }}
                              >
                                View Full Case Study <ArrowUpRight size={15} />
                              </Link>
                              <button
                                onClick={() => toggleExpand(proj.slug)}
                                className="btn-ghost"
                              >
                                Close
                              </button>
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
            {/* ── More Coming Soon ── */}
            <motion.div
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: filteredProjects.length * 0.06 }}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                padding: '64px 24px', borderRadius: 'var(--radius-2xl)',
                border: '1px dashed rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.01)',
                marginTop: 24, textCenter: 'center',
              }}
            >
              <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: 8 }}>More Projects Coming Soon</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: "'Geist', sans-serif" }}>
                Curating and documenting more high-fidelity case studies.
              </p>
            </motion.div>
          </div>
        </AnimatePresence>
      </section>
    </div>
  );
}
