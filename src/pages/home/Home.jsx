import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projectsData';
import {
  ArrowRight, ArrowUpRight, LayoutGrid, Layers, Database,
  ChevronDown, Check, Star, Monitor, Sparkles, Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.25, 1, 0.5, 1] },
});

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const featuredProjects = projects.filter(p => p.featured);

  const services = [
    {
      icon: <LayoutGrid size={22} />,
      title: 'UI/UX Design',
      desc: 'Crafting pixel-perfect, highly intuitive interfaces for digital products. From user flows to final visual design.',
    },
    {
      icon: <Monitor size={22} />,
      title: 'Web & Dashboard Design',
      desc: 'Creating clean layouts for complex data and beautiful, responsive web experiences that users love.',
    },
    {
      icon: <Layers size={22} />,
      title: 'Mobile App Design',
      desc: 'End-to-end iOS & Android interface design focusing on seamless gestural interactions and usability.',
    },
    {
      icon: <Zap size={22} />,
      title: 'Prototyping & Systems',
      desc: 'Building reusable Figma component libraries and interactive prototypes to communicate design intent clearly.',
    },
  ];

  const processSteps = [
    { num: '01', name: 'Discover' },
    { num: '02', name: 'Research' },
    { num: '03', name: 'Define' },
    { num: '04', name: 'Wireframe' },
    { num: '05', name: 'Visual' },
    { num: '06', name: 'Prototype' },
    { num: '07', name: 'Test' },
    { num: '08', name: 'Deliver' },
  ];

  const testimonials = [
    {
      quote: "Adharsh brought an incredible level of visual polish to our mobile app. His attention to typography, spacing, and micro-interactions completely elevated the feel of our product.",
      author: "Sarah Jenkins",
      role: "Product Manager",
      initials: "SJ",
    },
    {
      quote: "Finding a designer who truly understands user experience and modern aesthetics is rare. Adharsh delivered beautiful, intuitive screens that our users instantly fell in love with.",
      author: "Michael Chen",
      role: "Creative Director",
      initials: "MC",
    },
    {
      quote: "Absolute professional. Transparent timelines and zero visual compromises. The Figma handoff was perfectly organized, making the implementation process incredibly smooth for the developers.",
      author: "Elena Rodriguez",
      role: "Lead Product Designer",
      initials: "ER",
    },
  ];

  const faqs = [
    {
      q: "What types of projects do you typically take on?",
      a: "I specialise in crafting premium UI/UX designs for mobile applications, web platforms, and complex dashboards. I work best on projects that require a high degree of visual polish, strong user-centered thinking, and clean interface systems.",
    },
    {
      q: "What do your freelance rates look like?",
      a: "I work on a per-project or weekly sprint model. Project quotes are based on the scope, number of screens, and complexity of the UX requirements. I provide clear, transparent deliverables so you know exactly what design assets you will receive.",
    },
    {
      q: "How do you deliver your design files?",
      a: "All of my work is delivered via Figma. I structure my files meticulously with clean layers, auto-layout components, and clear developer handoff annotations to ensure the final coded product matches the design perfectly.",
    },
    {
      q: "Do you take on international projects?",
      a: "Yes! A majority of my client base is global. I structure asynchronous communication channels using Loom videos, Figma comments, and email, making timezone differences seamless.",
    },
    {
      q: "What does your typical project timeline look like?",
      a: "Small UX audits or visual refreshes usually take 1–2 weeks. Comprehensive mobile app or web platform designs typically range from 4–8 weeks, depending on the depth of research, wireframing, and interactive prototyping required.",
    },
  ];

  const toggleFaq = (i) => setActiveFaq(activeFaq === i ? null : i);

  return (
    <div style={{ width: '100%', background: 'var(--bg-base)', position: 'relative' }}>

      {/* ══════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════ */}
      <section style={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: '100px 24px 80px',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* Background glows */}
        <div style={{
          position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)',
          width: 700, height: 400,
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.1) 0%, rgba(139,92,246,0.06) 50%, transparent 75%)',
          filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0,
        }} />
        <div className="animate-glow-pulse" style={{
          position: 'absolute', top: '30%', left: '20%',
          width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
        }} />
        <div className="animate-glow-pulse" style={{
          position: 'absolute', top: '20%', right: '15%',
          width: 250, height: 250,
          background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
          animationDelay: '1.5s',
        }} />

        <div style={{ maxWidth: 900, margin: '0 auto', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>

          {/* Availability badge */}
          <motion.div {...fadeUp(0)} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '7px 18px', borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(34,197,94,0.2)',
            background: 'rgba(34,197,94,0.05)',
            backdropFilter: 'blur(10px)',
          }}>
            <span className="avail-dot" />
            <span style={{
              fontSize: '0.72rem', fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--success)', fontWeight: 600,
            }}>
              Available for Q2-Q3 2026
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: 'var(--text-primary)',
            }}
          >
            Adharsh AV<br />
            <span style={{
              background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              UI/UX Designer.
            </span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            {...fadeUp(0.2)}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: 'var(--text-secondary)',
              maxWidth: 580,
              lineHeight: 1.75,
              fontFamily: "'Geist', sans-serif",
            }}
          >
            Designing intuitive digital experiences. I focus on crafting modern mobile & web interfaces, turning ideas into clean, user-centered experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/projects" className="btn-primary" style={{ padding: '14px 32px', fontSize: '0.9rem' }}>
              <span>See My Work</span> <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-ghost" style={{ padding: '13px 28px', fontSize: '0.9rem' }}>
              Let's Talk <Sparkles size={16} />
            </Link>
          </motion.div>

          {/* Tag cloud */}
          <motion.div {...fadeUp(0.4)} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginTop: 8 }}>
            {['#UIDesign', '#UXResearch', '#MobileApps', '#WebDesign'].map(tag => (
              <span key={tag} className="tag-chip">{tag}</span>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="animate-float"
          style={{
            position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, opacity: 0.45,
          }}
        >
          <span style={{
            fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em',
            fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-tertiary)',
          }}>Scroll</span>
          <ChevronDown size={13} color="var(--text-tertiary)" />
        </motion.div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════════
          2. MARQUEE
      ══════════════════════════════════════════════ */}
      <section style={{
        padding: '32px 0',
        background: 'var(--bg-secondary)',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', top: 0, bottom: 0, left: 0, width: 120,
          background: 'linear-gradient(to right, var(--bg-secondary), transparent)',
          zIndex: 10, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: 0, bottom: 0, right: 0, width: 120,
          background: 'linear-gradient(to left, var(--bg-secondary), transparent)',
          zIndex: 10, pointerEvents: 'none',
        }} />
        <div className="animate-marquee" style={{ display: 'flex', width: '200%', gap: 48, alignItems: 'center' }}>
          {[...Array(2)].map((_, di) => (
            <div key={di} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '50%', gap: 48 }}>
              {['Figma', 'Framer', 'Principle', 'Linear', 'Lottie', 'FigJam', 'Zeroheight', 'Notion', 'After Effects'].map((tool, i) => (
                <span key={tool + i + di} style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.12em', color: 'var(--text-tertiary)', opacity: 0.4,
                  display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap',
                }}>
                  <Check size={12} color="var(--accent)" style={{ opacity: 0.8 }} />
                  {tool}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════════
          3. SERVICES BENTO
      ══════════════════════════════════════════════ */}
      <section className="section-pad container-xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Core Capabilities</span>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
            fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 48,
            lineHeight: 1.15,
          }}>
            Specialised services focused <br />
            <span className="gradient-text">on interface craftsmanship.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card glow-border-hover card-animated-border"
              style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 16, position: 'relative' }}
            >
              {/* Icon */}
              <div style={{
                width: 48, height: 48, borderRadius: 'var(--radius-md)',
                background: 'rgba(59,130,246,0.1)',
                border: '1px solid rgba(59,130,246,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent)',
              }}>
                {svc.icon}
              </div>
              <h3 style={{
                fontFamily: "'Sora', sans-serif", fontSize: '1.1rem',
                fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em',
              }}>{svc.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                {svc.desc}
              </p>
              <Link
                to="/services"
                style={{
                  fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent)',
                  textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4,
                  marginTop: 'auto', paddingTop: 12,
                  transition: 'gap 0.2s',
                }}
              >
                View Deliverables <ArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════════
          4. FEATURED WORK
      ══════════════════════════════════════════════ */}
      <section className="section-pad container-xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, marginBottom: 48 }}
        >
          <div>
            <span className="section-label">Selected Work</span>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
              fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15,
            }}>
              Crafting premium digital products.
            </h2>
          </div>
          <Link to="/projects" className="btn-ghost">
            View All Projects <ArrowUpRight size={15} />
          </Link>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 24 }}>
          {featuredProjects.slice(0, 2).map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
            >
              <Link to={`/projects/${proj.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div
                  className="glass-card card-animated-border"
                  style={{ padding: 20, display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer' }}
                >
                  {/* Thumbnail */}
                  <div style={{
                    aspectRatio: '16/9', borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden', position: 'relative', marginBottom: 20,
                    background: 'var(--bg-tertiary)',
                  }}>
                    {proj.coverImage ? (
                      <>
                        <img
                          src={proj.coverImage}
                          alt={proj.title}
                          style={{
                            position: 'absolute', inset: 0, width: '100%', height: '100%',
                            objectFit: 'cover', objectPosition: 'top',
                            transition: 'transform 0.6s ease',
                          }}
                          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                        <div style={{
                          position: 'absolute', inset: 0,
                          background: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent)',
                          opacity: 0, transition: 'opacity 0.3s',
                        }} />
                      </>
                    ) : (
                      <>
                        <div style={{
                          position: 'absolute', inset: 0,
                          background: 'linear-gradient(135deg, var(--bg-tertiary), var(--bg-base))',
                        }} />
                        <div style={{
                          position: 'absolute', top: '25%', right: '10%',
                          width: 200, height: 200,
                          background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(139,92,246,0.15) 100%)',
                          borderRadius: '50%', filter: 'blur(40px)',
                        }} />
                        <div style={{
                          position: 'absolute', inset: 0,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <div className="glass-card-2" style={{ width: '75%', padding: 20, borderRadius: 'var(--radius-lg)' }}>
                            <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
                              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(239,68,68,0.6)' }} />
                              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(234,179,8,0.6)' }} />
                              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(34,197,94,0.6)' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                              <div style={{ height: 28, borderRadius: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', paddingLeft: 10, gap: 6 }}>
                                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
                                <div style={{ width: 48, height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.1)' }} />
                              </div>
                              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 8 }}>
                                <div style={{ height: 36, borderRadius: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }} />
                                <div style={{ height: 36, borderRadius: 6, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <span className="mono-tag" style={{ marginBottom: 8 }}>{proj.category}</span>
                  <h3 style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em',
                    color: 'var(--text-primary)', marginBottom: 8,
                    transition: 'color 0.2s',
                  }}>{proj.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 16 }}>
                    {proj.shortDescription}
                  </p>

                  {/* Metrics */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 20,
                    marginTop: 'auto', paddingTop: 16,
                    borderTop: '1px solid var(--border)',
                  }}>
                    {proj.metrics.slice(0, 2).map((m, mi) => (
                      <div key={mi}>
                        <span style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em', display: 'block' }}>{m.label}</span>
                        <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>{m.value}</span>
                      </div>
                    ))}
                    <div style={{ marginLeft: 'auto', color: 'var(--text-tertiary)', transition: 'color 0.2s, transform 0.2s' }}>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════════
          5. PROCESS PREVIEW
      ══════════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)', overflow: 'hidden' }}>
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Design Workflow</span>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
              fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 40,
            }}>
              A meticulous 8-step process<br />
              <span className="gradient-text">for crafting experiences.</span>
            </h2>
          </motion.div>

          <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 16, scrollbarWidth: 'none' }}>
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="glass-card"
                style={{
                  flexShrink: 0,
                  width: 130,
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: 20,
                  cursor: 'default',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.65rem', color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.1em',
                }}>{step.num}</span>
                <span style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em',
                }}>{step.name}</span>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: 32, display: 'flex', justifyContent: 'flex-end' }}>
            <Link to="/process" className="btn-ghost">
              Explore Process Details <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════════
          6. TESTIMONIALS
      ══════════════════════════════════════════════ */}
      <section className="section-pad container-xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Client Feedback</span>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
            fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 48,
          }}>
            What teams say about <br />
            <span className="gradient-text">my design craftsmanship.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card"
              style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 20, position: 'relative' }}
            >
              {/* Quote mark decoration */}
              <div style={{
                position: 'absolute', top: 20, right: 24,
                fontSize: '5rem', lineHeight: 1, fontFamily: "'Sora', sans-serif",
                color: 'rgba(59,130,246,0.06)', fontWeight: 800, userSelect: 'none',
              }}>"</div>

              <div style={{ display: 'flex', gap: 3 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              <p style={{
                fontSize: '0.875rem', fontStyle: 'italic',
                color: 'var(--text-secondary)', lineHeight: 1.8, position: 'relative', zIndex: 1,
              }}>
                "{t.quote}"
              </p>

              <div style={{
                display: 'flex', alignItems: 'center', gap: 12,
                paddingTop: 16, borderTop: '1px solid var(--border)', marginTop: 'auto',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 'var(--radius-full)',
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))',
                  border: '1px solid rgba(59,130,246,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: '0.8rem', color: 'var(--accent)',
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>{t.author}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════════
          7. FAQ
      ══════════════════════════════════════════════ */}
      <section className="section-pad container-xl" style={{ maxWidth: 820, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <span className="section-label">Pre-Qualification FAQ</span>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15,
          }}>
            Answering common client concerns.
          </h2>
        </motion.div>

        <div>
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(idx)}>
                <span>{faq.q}</span>
                <motion.div animate={{ rotate: activeFaq === idx ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDown size={17} />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{ height: activeFaq === idx ? 'auto' : 0, opacity: activeFaq === idx ? 1 : 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <div className="faq-answer" style={{ paddingBottom: 20 }}>
                  {faq.a}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════════
          8. CONTACT CTA BLOCK
      ══════════════════════════════════════════════ */}
      <section className="section-pad container-xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="glass-card card-animated-border"
          style={{
            padding: 'clamp(40px, 6vw, 80px)',
            background: 'linear-gradient(135deg, rgba(11,11,15,0.8), rgba(16,17,22,0.9))',
            borderRadius: 'var(--radius-2xl)',
            display: 'flex', flexWrap: 'wrap',
            alignItems: 'center', justifyContent: 'space-between',
            gap: 40, position: 'relative', overflow: 'hidden',
          }}
        >
          {/* Decorative glow */}
          <div className="animate-glow-pulse" style={{
            position: 'absolute', top: '50%', right: '5%', transform: 'translateY(-50%)',
            width: 320, height: 320,
            background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', top: '30%', right: '25%',
            width: 200, height: 200,
            background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(30px)', pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 520, zIndex: 1 }}>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16,
            }}>
              Have a UI/UX <br />
              <span className="gradient-text">project in mind?</span>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              Let's evaluate whether we are a good fit. I review and respond to all qualified freelance enquiries within 24 hours.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, zIndex: 1 }}>
            <Link to="/contact" className="btn-primary" style={{ padding: '14px 36px', fontSize: '0.9rem' }}>
              Start a Conversation
            </Link>
            <a href="mailto:hello@adharsh.design" className="btn-ghost" style={{ textAlign: 'center', justifyContent: 'center' }}>
              hello@adharsh.design
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
