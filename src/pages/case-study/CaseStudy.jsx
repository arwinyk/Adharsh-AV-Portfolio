import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../../data/projectsData';
import {
  ArrowLeft, ArrowRight, CheckCircle, ShieldCheck, Target, Sparkles,
  ChevronLeft, ChevronRight, Activity, Cpu, Search, Layers, LayoutGrid
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: [0.25, 1, 0.5, 1] },
});

export default function CaseStudy() {
  const { slug } = useParams();
  const [activeSlide, setActiveSlide] = useState(0);

  const project = projects.find(p => p.slug === slug);
  if (!project) return <Navigate to="/projects" replace />;

  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div style={{ width: '100%', background: 'var(--bg-base)', position: 'relative' }}>

      {/* ── Back Nav ── */}
      <div className="container-xl" style={{ paddingTop: 24, paddingBottom: 0 }}>
        <Link
          to="/projects"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: '0.8rem', fontWeight: 600,
            color: 'var(--text-secondary)', textDecoration: 'none',
            padding: '8px 0',
            transition: 'color 0.2s',
            fontFamily: "'Geist', sans-serif",
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
        >
          <ArrowLeft size={15} />
          Back to All Projects
        </Link>
      </div>

      {/* ── Case Hero Title ── */}
      <section style={{ padding: '48px 0 32px' }} className="container-xl">
        <motion.div {...fadeUp(0)} style={{ maxWidth: 800 }}>
          <span className="mono-tag" style={{ marginBottom: 12 }}>{project.category} // CASE STUDY</span>
          <h1 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05,
            color: 'var(--text-primary)', marginBottom: 16,
          }}>
            {project.title}
          </h1>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            color: 'var(--text-secondary)', lineHeight: 1.8, fontWeight: 500,
          }}>
            {project.shortDescription}
          </p>
          {project.about?.goals && (
            <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {project.about.goals.map((goal, gi) => (
                <div key={gi} style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '6px 14px', borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.03)',
                  fontSize: '0.75rem', fontFamily: "'Geist', sans-serif", color: 'var(--text-secondary)',
                }}>
                  <Target size={12} color="var(--accent)" />
                  {goal}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* ── Cover Visual ── */}
      <section className="container-xl" style={{ marginBottom: 64 }}>
        <motion.div {...fadeUp(0.1)}>
          {project.slides && project.slides.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {/* Main viewer */}
              <div style={{
                width: '100%',
                position: 'relative',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
              }}
              className="group"
              >
                {project.slides[activeSlide].frame === 'mobile' ? (
                  <motion.div
                    key={`mobile-${activeSlide}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      width: '100%', maxWidth: '360px', margin: '0 auto',
                      background: '#0a0a0c', borderRadius: '40px',
                      padding: '8px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                      border: '1px solid rgba(255,255,255,0.08)'
                    }}
                  >
                    <div style={{ width: '100%', borderRadius: '32px', overflow: 'hidden', background: '#000', display: 'flex' }}>
                      <img src={project.slides[activeSlide].src} alt={project.slides[activeSlide].label} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
                    </div>
                  </motion.div>
                ) : project.slides[activeSlide].frame === 'mac' ? (
                  <motion.div
                    key={`mac-${activeSlide}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      width: '100%', margin: '0 auto',
                      background: '#1a1a1a', borderRadius: '12px', overflow: 'hidden',
                      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 16px', background: '#1e1e20', borderBottom: '1px solid #2c2c2e' }}>
                      <div style={{ position: 'absolute', left: 16, display: 'flex', gap: '8px' }}>
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#8e8e93', fontFamily: "'Geist', sans-serif" }}>
                        {project.title} - Figma
                      </span>
                    </div>
                    <div style={{ width: '100%', background: '#0a0a0c', display: 'flex' }}>
                      <img src={project.slides[activeSlide].src} alt={project.slides[activeSlide].label} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
                    </div>
                  </motion.div>
                ) : (
                  <motion.img
                    key={`img-${activeSlide}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    src={project.slides[activeSlide].src}
                    alt={project.slides[activeSlide].label}
                    style={{ maxWidth: '100%', maxHeight: '600px', objectFit: 'contain', objectPosition: 'center', borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                  />
                )}
                <div style={{
                  position: 'absolute', bottom: 14, left: 14,
                }}>
                  <span className="mono-tag" style={{
                    background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)',
                    padding: '4px 12px', borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}>
                    {project.slides[activeSlide].label}
                  </span>
                </div>
                {/* Nav arrows */}
                {project.slides.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveSlide(i => (i - 1 + project.slides.length) % project.slides.length)}
                      style={{
                        position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
                        width: 36, height: 36, borderRadius: '50%',
                        background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(8px)', color: '#fff', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'background 0.2s',
                      }}
                    >
                      <ChevronLeft size={17} />
                    </button>
                    <button
                      onClick={() => setActiveSlide(i => (i + 1) % project.slides.length)}
                      style={{
                        position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                        width: 36, height: 36, borderRadius: '50%',
                        background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(8px)', color: '#fff', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'background 0.2s',
                      }}
                    >
                      <ChevronRight size={17} />
                    </button>
                  </>
                )}
              </div>
              {/* Thumbnail strip */}
              <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 4, scrollbarWidth: 'none' }}>
                {project.slides.map((slide, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    style={{
                      flexShrink: 0, width: 88,
                      aspectRatio: '16/9', borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden', background: '#111',
                      border: '2px solid',
                      borderColor: activeSlide === idx ? 'var(--accent)' : 'var(--border)',
                      opacity: activeSlide === idx ? 1 : 0.5,
                      transform: activeSlide === idx ? 'scale(1.04)' : 'scale(1)',
                      transition: 'all 0.2s',
                      cursor: 'pointer',
                    }}
                  >
                    <img src={slide.src} alt={slide.label} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Abstract fallback */
            <div style={{
              aspectRatio: '21/9', width: '100%',
              borderRadius: 'var(--radius-2xl)',
              border: '1px solid var(--border)',
              background: 'var(--bg-tertiary)',
              position: 'relative', overflow: 'hidden',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{
                position: 'absolute', top: '20%', right: '10%',
                width: 300, height: 300,
                background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(60px)',
              }} />
              <div className="glass-card-2" style={{ width: '55%', padding: 32, borderRadius: 20, position: 'relative', zIndex: 1 }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'var(--text-secondary)', marginBottom: 12, letterSpacing: '0.1em' }}>CASE_HANDOFF.figma</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ height: 12, width: '40%', borderRadius: 4, background: 'rgba(255,255,255,0.1)' }} />
                  <div style={{ height: 6, width: '80%', borderRadius: 3, background: 'rgba(255,255,255,0.05)' }} />
                  <div className="divider" style={{ margin: '8px 0' }} />
                  <div style={{ height: 40, borderRadius: 8, background: 'rgba(59,130,246,0.15)' }} />
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </section>

      {/* ── Metadata + Metrics Grid ── */}
      <section className="container-xl" style={{ marginBottom: 64 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 32,
        }}>
          {/* Metadata */}
          <motion.div {...fadeUp(0.15)}>
            <h3 style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.62rem', textTransform: 'uppercase',
              letterSpacing: '0.14em', color: 'var(--text-primary)', fontWeight: 700, marginBottom: 16,
            }}>Project Metadata</h3>
            <div
              className="glass-card"
              style={{ overflow: 'hidden', borderRadius: 'var(--radius-xl)', padding: 0 }}
            >
              {[
                { label: 'Client', val: project.client },
                { label: 'My Role', val: project.role },
                { label: 'Platform', val: project.platform },
                { label: 'Timeline', val: project.timeline },
              ].map(({ label, val }, i, arr) => (
                <div key={label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 20px',
                  borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontFamily: "'Geist', sans-serif" }}>{label}</span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Geist', sans-serif", textAlign: 'right' }}>{val}</span>
                </div>
              ))}
              <div style={{ padding: '14px 20px', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {project.tags.map(tag => (
                  <span key={tag} className="tag-chip" style={{ fontSize: '0.65rem' }}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Metrics + Overview */}
          <motion.div {...fadeUp(0.2)} style={{ display: 'flex', flexDirection: 'column', gap: 24, gridColumn: 'span 2' }}>
            {project.metrics && project.metrics.length > 0 && (
              <div>
                <h3 style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.62rem', textTransform: 'uppercase',
                  letterSpacing: '0.14em', color: 'var(--text-primary)', fontWeight: 700, marginBottom: 16,
                }}>Key Performance Outcomes</h3>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(120px, 1fr))`, gap: 16 }}>
                  {project.metrics.map((m, mi) => (
                    <div
                      key={mi}
                      className="glass-card"
                      style={{
                        padding: '20px 16px',
                        borderLeft: '2px solid var(--accent)',
                        background: 'rgba(59,130,246,0.02)',
                      }}
                    >
                      <span style={{
                        display: 'block',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.62rem', textTransform: 'uppercase',
                        letterSpacing: '0.1em', color: 'var(--text-tertiary)', marginBottom: 6,
                      }}>{m.label}</span>
                      <span style={{
                        fontFamily: "'Sora', sans-serif",
                        fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                        fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1,
                      }}>{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.62rem', textTransform: 'uppercase',
                letterSpacing: '0.14em', color: 'var(--text-primary)', fontWeight: 700, marginBottom: 12,
              }}>Project Overview</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                {project.overview}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Problem & Research (If available) ── */}
      {project.research && (
        <section className="section-pad container-xl">
          <motion.div {...fadeUp(0)}>
            <span className="section-label">Research & Definition</span>
            <h2 style={{
              fontFamily: "'Sora', sans-serif", fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 40,
            }}>
              Discovering the Core <span className="gradient-text">Problem</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40 }}>
            {/* Left: Challenge/Solution text */}
            <motion.div {...fadeUp(0.1)} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div className="glass-card" style={{ padding: 32, borderLeft: '2px solid rgba(239,68,68,0.5)', background: 'rgba(239,68,68,0.02)' }}>
                <Target size={20} color="#EF4444" style={{ marginBottom: 16 }} />
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>The Challenge</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>{project.challenge}</p>
              </div>
              <div className="glass-card" style={{ padding: 32, borderLeft: '2px solid rgba(34,197,94,0.5)', background: 'rgba(34,197,94,0.02)' }}>
                <Sparkles size={20} color="#22C55E" style={{ marginBottom: 16 }} />
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>The Solution</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>{project.solution}</p>
              </div>
            </motion.div>

            {/* Right: Research Insights & Quotes */}
            <motion.div {...fadeUp(0.2)} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
                <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-primary)', fontWeight: 700 }}>Key Insights</h3>
                {project.research.insights.map((insight, ii) => (
                  <div key={ii} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <Search size={16} color="var(--accent)" style={{ marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{insight.title}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{insight.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {project.research.quotes && project.research.quotes.length > 0 && (
                <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-primary)', fontWeight: 700 }}>User Voices</h3>
                  {project.research.quotes.slice(0, 2).map((quote, qi) => (
                    <blockquote key={qi} style={{
                      padding: '16px 20px', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-lg)',
                      borderLeft: '2px solid var(--border)'
                    }}>
                      <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 8 }}>"{quote.text}"</p>
                      <cite style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}>— {quote.author}</cite>
                    </blockquote>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── If no detailed research, fallback to basic challenge/solution ── */}
      {!project.research && (
        <section className="section-pad container-xl">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            <motion.div {...fadeUp(0)} className="glass-card" style={{ padding: 32, borderLeft: '2px solid rgba(239,68,68,0.5)', background: 'rgba(239,68,68,0.02)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EF4444', marginBottom: 20 }}><Target size={22} /></div>
              <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)', marginBottom: 14 }}>The Challenge</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>{project.challenge}</p>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="glass-card" style={{ padding: 32, borderLeft: '2px solid rgba(34,197,94,0.5)', background: 'rgba(34,197,94,0.02)' }}>
              <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22C55E', marginBottom: 20 }}><Sparkles size={22} /></div>
              <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)', marginBottom: 14 }}>The Solution</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>{project.solution}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Screen Deep Dive ── */}
      {project.screens && project.screens.length > 0 && (
        <>
          <div className="divider" />
          <section className="section-pad container-xl">
            <motion.div {...fadeUp(0)} style={{ marginBottom: 48, textAlign: 'center' }}>
              <span className="section-label">Screen Showcase</span>
              <h2 style={{
                fontFamily: "'Sora', sans-serif", fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15,
              }}>
                Interface <span className="gradient-text">Breakdown</span>
              </h2>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
              {project.screens.map((screen, si) => (
                <motion.div
                  key={si}
                  {...fadeUp(0.1)}
                  className="screen-showcase-grid screen-showcase-row"
                  style={{
                    borderBottom: si !== project.screens.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                     {/* Render Mac or Mobile Mockup based on project */}
                     {project.slides && project.slides[si] ? (
                       project.slug === 't-expo' ? (
                         /* iPhone Mockup */
                         <div style={{
                           width: '100%', maxWidth: '340px',
                           aspectRatio: '9/19', background: '#0a0a0c', borderRadius: '48px',
                           padding: '10px', boxShadow: '0 30px 60px -12px rgba(0,0,0,0.6)',
                           position: 'relative', border: '1px solid rgba(255,255,255,0.05)',
                         }}>
                           {/* Dynamic Island */}
                           <div style={{
                             position: 'absolute', top: 22, left: '50%', transform: 'translateX(-50%)',
                             width: '110px', height: '32px', background: '#000',
                             borderRadius: '16px', zIndex: 10
                           }} />
                           <div style={{ width: '100%', height: '100%', borderRadius: '38px', overflow: 'hidden', background: '#fff' }}>
                             <img src={project.slides[si].src} alt={screen.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                           </div>
                         </div>
                       ) : (
                         /* MacBook Mockup */
                         <div style={{
                           width: '100%', maxWidth: '900px',
                           background: '#1a1a1a', borderRadius: '16px', overflow: 'hidden',
                           boxShadow: '0 30px 60px -12px rgba(0,0,0,0.6)',
                           border: '1px solid rgba(255,255,255,0.1)'
                         }}>
                           <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 16px', background: '#1e1e20', borderBottom: '1px solid #2c2c2e' }}>
                             <div style={{ position: 'absolute', left: 16, display: 'flex', gap: '8px' }}>
                               <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
                               <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
                               <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
                             </div>
                           </div>
                           <div style={{ width: '100%', background: '#0a0a0c', display: 'flex' }}>
                             <img src={project.slides[si].src} alt={screen.title} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} />
                           </div>
                           {/* Bottom Lip */}
                           <div style={{ height: '12px', background: 'linear-gradient(to bottom, #2a2a2c, #1a1a1a)' }} />
                         </div>
                       )
                     ) : (
                       <div style={{ textAlign: 'center', opacity: 0.5 }}>
                         <LayoutGrid size={48} style={{ marginBottom: 16 }} />
                         <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem' }}>SCREEN_PREVIEW</div>
                       </div>
                     )}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: 'var(--success)' }}>
                      {(si + 1).toString().padStart(2, '0')}
                    </div>
                    <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
                      {screen.title}
                    </h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>
                      {screen.description}
                    </p>
                    <div>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        {screen.decisions.map((dec, di) => (
                          <li key={di} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            <CheckCircle size={18} color="var(--success)" style={{ marginTop: 2, flexShrink: 0 }} />
                            <span>{dec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ── Features & Process ── */}
      {(project.features || project.process) && (
        <>
          <div className="divider" />
          <section className="section-pad container-xl">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 48 }}>
              
              {/* Features */}
              {project.features && (
                <motion.div {...fadeUp(0)}>
                  <span className="section-label">Capabilities</span>
                  <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 32 }}>Key Features</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {project.features.map((feat, fi) => (
                      <div key={fi} className="glass-card" style={{ padding: 24 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                          <Activity size={18} color="var(--accent)" />
                          <h4 style={{ fontFamily: "'Sora', sans-serif", fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>{feat.title}</h4>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{feat.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Process */}
              {project.process && (
                <motion.div {...fadeUp(0.1)}>
                  <span className="section-label">Workflow</span>
                  <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 32 }}>Project Phases</h2>
                  <div style={{ position: 'relative', paddingLeft: 24 }}>
                    <div style={{ position: 'absolute', left: 0, top: 12, bottom: 12, width: 2, background: 'linear-gradient(to bottom, var(--accent), var(--accent2))' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                      {project.process.map((step, si) => (
                        <div key={si} style={{ position: 'relative' }}>
                          <div style={{ position: 'absolute', left: -29, top: 4, width: 12, height: 12, borderRadius: '50%', background: 'var(--bg-base)', border: '2px solid var(--accent)' }} />
                          <h4 style={{ fontFamily: "'Sora', sans-serif", fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>{step.phase}</h4>
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{step.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

            </div>
          </section>
        </>
      )}

      {/* ── Design System (If available) ── */}
      {project.designSystem && (
        <>
          <div className="divider" />
          <section className="section-pad container-xl">
            <motion.div {...fadeUp(0)} className="glass-card card-animated-border" style={{ padding: 'clamp(32px, 5vw, 56px)', borderRadius: 'var(--radius-2xl)', background: 'linear-gradient(135deg, rgba(16,17,22,0.8), rgba(11,11,15,0.9))' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <Layers size={24} color="var(--accent)" />
                <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>Design System</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32 }}>
                <div>
                  <h4 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-tertiary)', marginBottom: 12 }}>Visual Direction</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {project.designSystem.visuals.map(v => <span key={v} className="tag-chip">{v}</span>)}
                  </div>
                </div>
                <div>
                  <h4 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-tertiary)', marginBottom: 12 }}>Color Palette</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{project.designSystem.colors}</p>
                </div>
                <div>
                  <h4 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-tertiary)', marginBottom: 12 }}>Typography</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{project.designSystem.typography}</p>
                </div>
              </div>
            </motion.div>
          </section>
        </>
      )}

      <div className="divider" />

      {/* ── Standard Deliverables & Outcomes ── */}
      <section className="section-pad container-xl">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48 }}>
          <motion.div {...fadeUp(0)}>
            <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-primary)', fontWeight: 700, marginBottom: 24 }}>Shipped Deliverables</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {project.deliverables.map((del, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <CheckCircle size={16} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{del}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeUp(0.1)} style={{ paddingLeft: 0, borderTop: '1px solid var(--border)', paddingTop: 32 }}>
            <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text-primary)', fontWeight: 700, marginBottom: 24 }}>Key Outcomes</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {project.outcomes.map((out, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <ShieldCheck size={16} color="var(--success)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{out}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Next Project ── */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', textAlign: 'center' }}>
        <div className="container-xl">
          <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>Next Case Study</span>
          <Link
            to={`/projects/${nextProject.slug}`}
            style={{
              display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 16,
              textDecoration: 'none', marginTop: 8,
            }}
          >
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(1.4rem, 4vw, 2.8rem)',
              fontWeight: 800, letterSpacing: '-0.04em',
              color: 'var(--text-primary)', lineHeight: 1.1,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
            >
              {nextProject.title}
            </h2>
            <span className="btn-ghost">
              Read Next Case Study
              <ArrowRight size={15} />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
