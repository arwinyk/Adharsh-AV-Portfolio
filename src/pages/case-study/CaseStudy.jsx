import { useState, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../../data/projectsData';
import {
  ArrowLeft, ArrowRight, Target, LayoutGrid, ArrowUpRight, ChevronLeft, ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Magnetic from '../../components/Magnetic';

const premiumEasing = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.4, delay, ease: [0.25, 1, 0.5, 1] },
});

function ScreenCarousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const dragStartX = useRef(0);

  const go = (dir) => {
    const next = current + dir;
    if (next < 0 || next >= slides.length) return;
    setDirection(dir);
    setCurrent(next);
  };

  const variants = {
    enter: (d) => ({ x: prefersReducedMotion ? 0 : d > 0 ? '100%' : '-100%', opacity: prefersReducedMotion ? 0 : 1 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: prefersReducedMotion ? 0 : d > 0 ? '-100%' : '100%', opacity: prefersReducedMotion ? 0 : 1 }),
  };

  const slide = slides[current];
  const isMobile = slide.frame === 'mobile';

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-base)' }}>
      <div className="container-xl">
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>All Screens</span>
          <h1 style={{
            fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1,
          }}>
            Visual <span className="gradient-text">Walkthrough.</span>
          </h1>
        </motion.div>

        {/* Carousel Viewport */}
        <div style={{
          position: 'relative',
          maxWidth: isMobile ? 360 : 900,
          margin: '0 auto',
          userSelect: 'none',
        }}>
          {/* Slide area */}
          <div style={{
            overflow: 'hidden',
            borderRadius: isMobile ? 44 : 20,
            boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'var(--bg-secondary)',
          }}>
            <AnimatePresence custom={direction} mode="popLayout" initial={false}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragStart={(_, info) => { dragStartX.current = info.point.x; }}
                onDragEnd={(_, info) => {
                  const delta = info.point.x - dragStartX.current;
                  if (delta < -50) go(1);
                  else if (delta > 50) go(-1);
                }}
                style={{ cursor: 'grab' }}
              >
                <img
                  src={slide.src}
                  srcSet={`${slide.src.replace('.webp', '-400w.webp')} 400w, ${slide.src.replace('.webp', '-800w.webp')} 800w, ${slide.src} 1200w`}
                  sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
                  alt={slide.label}
                  draggable={false}
                  width={isMobile ? 360 : 800}
                  height={isMobile ? 720 : 500}
                  style={{ width: '100%', height: 'auto', display: 'block', pointerEvents: 'none' }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Arrow */}
          {current > 0 && (
            <button
              onClick={() => go(-1)}
              aria-label="Previous screen"
              style={{
                position: 'absolute', left: isMobile ? -56 : -64, top: '50%',
                transform: 'translateY(-50%)',
                width: 44, height: 44, borderRadius: '50%',
                background: 'var(--bg-secondary)', border: '1px solid var(--border)',
                color: 'var(--text-primary)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 0.2s, background 0.2s',
                zIndex: 2,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'rgba(59,130,246,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-secondary)'; }}
            >
              <ChevronLeft size={18} />
            </button>
          )}

          {/* Right Arrow */}
          {current < slides.length - 1 && (
            <button
              onClick={() => go(1)}
              aria-label="Next screen"
              style={{
                position: 'absolute', right: isMobile ? -56 : -64, top: '50%',
                transform: 'translateY(-50%)',
                width: 44, height: 44, borderRadius: '50%',
                background: 'var(--bg-secondary)', border: '1px solid var(--border)',
                color: 'var(--text-primary)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 0.2s, background 0.2s',
                zIndex: 2,
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'rgba(59,130,246,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-secondary)'; }}
            >
              <ChevronRight size={18} />
            </button>
          )}
        </div>

        {/* Label */}
        <p style={{
          textAlign: 'center', marginTop: 20,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.8rem', color: 'var(--text-secondary)',
          letterSpacing: '0.08em',
        }}>
          {slide.label}
        </p>

        {/* Dot Indicators */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          gap: 8, marginTop: 20,
        }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              aria-label={`Go to screen ${i + 1}`}
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                borderRadius: 99,
                background: i === current ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'width 0.3s ease, background 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


export default function CaseStudy() {
  const { slug } = useParams();

  const project = projects.find(p => p.slug === slug);
  if (!project) return <Navigate to="/projects" replace />;

  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div style={{ width: '100%', background: 'var(--bg-base)', position: 'relative' }}>

      {/* ── Cinematic Hero ── */}
      <section style={{ height: '90vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', paddingBottom: '10vh' }}>
        {project.coverImage ? (
          <div style={{
            position: 'absolute', inset: 0, zIndex: 0,
          }}>
            <img 
              src={project.coverImage} 
              srcSet={`${project.coverImage.replace('.webp', '-800w.webp')} 800w, ${project.coverImage.replace('.webp', '-1200w.webp')} 1200w, ${project.coverImage} 1600w`}
              sizes="100vw"
              alt={project.title} 
              width="1200" 
              height="800" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-base) 0%, rgba(5,5,7,0.3) 100%)' }} />
          </div>
        ) : (
          <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-tertiary)', zIndex: 0 }}>
          </div>
        )}
        
        <div className="container-xl" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <motion.div {...fadeUp(0)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
              <Link to="/projects" style={{
                width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(16px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', textDecoration: 'none', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', border: '1px solid rgba(255,255,255,0.1)'
              }} onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'scale(1)'; }}>
                <ArrowLeft size={20} />
              </Link>
              <span className="mono-tag" style={{ background: 'rgba(0,0,0,0.6)', padding: '8px 20px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                {project.category}
              </span>
            </div>
            
            <h1 style={{
              fontFamily: "'Sora', sans-serif", fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05,
              color: '#fff', maxWidth: 1000, textShadow: '0 10px 40px rgba(0,0,0,0.5)'
            }}>
              {project.title}
            </h1>
            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'rgba(255,255,255,0.8)',
              marginTop: 24, maxWidth: 800, lineHeight: 1.6, fontWeight: 500,
              textShadow: '0 4px 20px rgba(0,0,0,0.5)'
            }}>
              {project.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Project Brief & Metadata ── */}
      <section className="container-xl" style={{ marginTop: '-40px', position: 'relative', zIndex: 10, paddingBottom: 120 }}>
        <motion.div {...fadeUp(0.1)} className="glass-card" style={{ padding: 'clamp(32px, 5vw, 64px)', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40 }}>
            {[
              { label: 'Client', val: project.client },
              { label: 'Role', val: project.role },
              { label: 'Platform', val: project.platform },
              { label: 'Timeline', val: project.timeline },
            ].map(({ label, val }, i) => (
              <div key={label}>
                <span style={{ display: 'block', fontSize: '0.75rem', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-tertiary)', marginBottom: 8 }}>{label}</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Geist', sans-serif" }}>{val}</span>
              </div>
            ))}
          </div>

          <div className="divider" style={{ margin: '48px 0' }} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64 }}>
            <div>
              <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-tertiary)', marginBottom: 24 }}>The Goal</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {project.about?.goals ? project.about.goals.map((goal, gi) => (
                  <li key={gi} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <Target size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{goal}</span>
                  </li>
                )) : <li>No goals provided.</li>}
              </ul>
            </div>
            <div>
              <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-tertiary)', marginBottom: 24 }}>Project Overview</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: 1.8, fontWeight: 400 }}>
                {project.overview}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Problem & Solution (Editorial Block) ── */}
      {(project.challenge || project.solution) && (
        <section className="section-pad container-xl">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 120 }}>
            {/* Problem */}
            <motion.div {...fadeUp(0)} style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 64, alignItems: 'center' }}>
              <div>
                <span className="section-label" style={{ color: 'var(--error)' }}>The Problem</span>
                <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24 }}>
                  Why this needed to change.
                </h2>
              </div>
              <div>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  {project.challenge}
                </p>
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div {...fadeUp(0)} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 64, alignItems: 'center' }}>
              <div style={{ order: 2 }}>
                <span className="section-label" style={{ color: 'var(--success)' }}>The Solution</span>
                <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24 }}>
                  A strategic approach to UX.
                </h2>
              </div>
              <div style={{ order: 1 }}>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  {project.solution}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <div className="divider" />

      {/* ── Key Metrics ── */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="section-pad container-xl">
          <motion.div {...fadeUp(0)} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            {project.metrics.map((m, mi) => (
              <div
                key={mi}
                className="glass-card"
                style={{
                  padding: '40px 32px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03), transparent)',
                }}
              >
                <span style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                  fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1,
                  background: 'linear-gradient(to bottom, #fff, rgba(255,255,255,0.6))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  marginBottom: 16,
                }}>{m.value}</span>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.85rem', textTransform: 'uppercase',
                  letterSpacing: '0.15em', color: 'var(--text-secondary)', fontWeight: 600,
                }}>{m.label}</span>
              </div>
            ))}
          </motion.div>
        </section>
      )}

      {/* ── Part 1: Carousel ── */}
      {project.slides && project.slides.length > 0 && (
        <ScreenCarousel slides={project.slides} />
      )}

      {/* ── Part 2: Screen Breakdown ── */}
      {project.screens && project.screens.length > 0 && (
        <section style={{ background: 'var(--bg-secondary)', padding: '120px 0' }}>
          <div className="container-xl">
            <motion.div {...fadeUp(0)} style={{ marginBottom: 80, textAlign: 'center' }}>
              <span className="section-label" style={{ justifyContent: 'center' }}>Screen Breakdown</span>
              <h2 style={{
                fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1,
              }}>
                Interface <span className="gradient-text">Details.</span>
              </h2>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 120 }}>
              {project.screens.map((screen, si) => {
                const slide = project.slides && project.slides[si];
                const isOdd = si % 2 === 0; // 0-indexed: even index = odd screen = image left
                return (
                  <motion.div
                    key={si}
                    {...fadeUp(0)}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                      gap: 64,
                      alignItems: 'center',
                    }}
                  >
                    {/* Image */}
                    <div style={{ order: isOdd ? 1 : 2 }}>
                      {slide ? (
                        <div style={{
                          borderRadius: slide.frame === 'mobile' ? 40 : 16,
                          overflow: 'hidden',
                          boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          maxWidth: slide.frame === 'mobile' ? 340 : '100%',
                          margin: isOdd ? '0 auto 0 0' : '0 0 0 auto',
                        }}>
                          <img
                            src={slide.src}
                            srcSet={`${slide.src.replace('.webp', '-400w.webp')} 400w, ${slide.src.replace('.webp', '-800w.webp')} 800w, ${slide.src} 1200w`}
                            sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
                            alt={screen.title}
                            loading={si === 0 ? "eager" : "lazy"}
                            width={slide.frame === 'mobile' ? 360 : 800}
                            height={slide.frame === 'mobile' ? 720 : 500}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                          />
                        </div>
                      ) : (
                        <div style={{
                          aspectRatio: '9/16', background: 'rgba(255,255,255,0.02)',
                          borderRadius: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <LayoutGrid size={48} opacity={0.2} />
                        </div>
                      )}
                    </div>

                    {/* Text */}
                    <div style={{ order: isOdd ? 2 : 1 }}>
                      <div style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem',
                        color: 'var(--accent)', fontWeight: 700, marginBottom: 12,
                        textTransform: 'uppercase', letterSpacing: '0.15em',
                      }}>
                        {(si + 1).toString().padStart(2, '0')} — Screen
                      </div>
                      <h3 style={{
                        fontFamily: "'Sora', sans-serif",
                        fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                        fontWeight: 800, color: 'var(--text-primary)',
                        letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 20,
                      }}>
                        {screen.title.split('—')[0]}
                        {screen.title.includes('—') && (
                          <>
                            <br />
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.75em' }}>
                              {screen.title.split('—')[1]}
                            </span>
                          </>
                        )}
                      </h3>
                      <p style={{
                        fontSize: '1.05rem', color: 'var(--text-secondary)',
                        lineHeight: 1.8, marginBottom: 36,
                      }}>
                        {screen.description}
                      </p>

                      <h4 style={{
                        fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem',
                        textTransform: 'uppercase', letterSpacing: '0.15em',
                        color: 'var(--text-primary)', marginBottom: 16,
                      }}>Design Decisions</h4>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {screen.decisions.map((dec, di) => (
                          <li key={di} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                            <div style={{
                              width: 6, height: 6, borderRadius: '50%',
                              background: 'var(--accent)', marginTop: 9, flexShrink: 0,
                            }} />
                            <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                              {dec}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Visual Gallery / Prototype Flow ── */}
      <section className="section-pad container-xl">
        <motion.div {...fadeUp(0)} style={{ marginBottom: 64, textAlign: 'center' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Gallery</span>
          <h2 style={{
            fontFamily: "'Sora', sans-serif", fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1,
          }}>
            Final <span className="gradient-text">Visuals.</span>
          </h2>
        </motion.div>

        {project.slides && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 32 }}>
            {project.slides.map((slide, idx) => (
              <motion.div key={idx} {...fadeUp(idx * 0.1)} style={{
                borderRadius: 'var(--radius-xl)', overflow: 'hidden',
                border: '1px solid var(--border)', background: 'var(--bg-tertiary)',
              }}>
                 <img src={slide.src} alt={slide.label} loading="lazy" width={slide.frame === 'mobile' ? 360 : 800} height={slide.frame === 'mobile' ? 720 : 500} style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s ease' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                 <div style={{ padding: 20, borderTop: '1px solid var(--border)' }}>
                   <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{slide.label}</span>
                 </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <div className="divider" />

      {/* ── Next Project ── */}
      <section style={{ padding: '120px 0', background: 'var(--bg-secondary)', textAlign: 'center', overflow: 'hidden', position: 'relative' }}>
         {/* Background removed for performance */}
        
        <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-label" style={{ textAlign: 'center', display: 'block', marginBottom: 24 }}>Next Case Study</span>
          <Link
            to={`/projects/${nextProject.slug}`}
            className="group"
            style={{
              display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 24,
              textDecoration: 'none',
            }}
          >
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 800, letterSpacing: '-0.05em',
              color: 'var(--text-primary)', lineHeight: 1.05,
              transition: 'color 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500"
            >
              {nextProject.title}
            </h2>
            <Magnetic>
              <div className="btn-primary" style={{ padding: '16px 36px', fontSize: '1rem' }}>
                Let's build together <ArrowUpRight size={18} />
              </div>
            </Magnetic>
          </Link>
        </div>
      </section>
    </div>
  );
}
