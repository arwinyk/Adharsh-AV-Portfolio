import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projectsData';
import {
  ArrowRight, ArrowUpRight, LayoutGrid, Layers,
  ChevronDown, Star, Monitor, Sparkles, Zap,
  Mail, MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const premiumEasing = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, delay, ease: premiumEasing },
});

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: premiumEasing } }
};

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
    { num: '01', name: 'Discover', desc: 'Understanding your business goals, target audience, and market positioning.' },
    { num: '02', name: 'Define', desc: 'Creating user flows, architecture, and establishing the core UX strategy.' },
    { num: '03', name: 'Design', desc: 'Crafting high-fidelity, premium interfaces with meticulous attention to detail.' },
    { num: '04', name: 'Deliver', desc: 'Comprehensive developer handoff with interactive prototypes and design systems.' },
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
      quote: "Absolute professional. Transparent timelines and zero visual compromises. The Figma handoff was perfectly organized, making the implementation process incredibly smooth.",
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
      q: "What does your typical project timeline look like?",
      a: "Small UX audits or visual refreshes usually take 1–2 weeks. Comprehensive mobile app or web platform designs typically range from 4–8 weeks, depending on the depth of research, wireframing, and interactive prototyping required.",
    },
  ];

  const toggleFaq = (i) => setActiveFaq(activeFaq === i ? null : i);

  return (
    <div style={{ width: '100%', background: 'var(--bg-base)', position: 'relative' }}>

      {/* ══════════════════════════════════════════════
          1. HERO (Apple x Awwwards Aesthetic)
      ══════════════════════════════════════════════ */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: '120px 24px 80px',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        <motion.div 
          style={{ maxWidth: 1000, margin: '0 auto', zIndex: 1 }}
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Availability badge */}
          <motion.div variants={staggerItem} style={{ marginBottom: 32, display: 'flex', justifyContent: 'center' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '8px 20px', borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(255,255,255,0.02)',
              backdropFilter: 'blur(12px)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
            }}>
              <span className="avail-dot" />
              <span style={{
                fontSize: '0.72rem', fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--text-secondary)', fontWeight: 600,
              }}>
                Available for Q2-Q3 2026
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.05em',
              lineHeight: 1.05,
              color: 'var(--text-primary)',
              marginBottom: 24,
            }}
          >
            Adharsh AV<br />
            <span className="gradient-text">
              UI/UX Designer.
            </span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              color: 'var(--text-secondary)',
              maxWidth: 640,
              margin: '0 auto 48px',
              lineHeight: 1.6,
              fontFamily: "'Geist', sans-serif",
            }}
          >
            I craft digital experiences that are intuitive, immersive, and visually uncompromising. Turning complex problems into elegant interfaces.
          </motion.p>

          <motion.div variants={staggerItem} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/projects" className="btn-primary" style={{ padding: '16px 36px', fontSize: '0.95rem' }}>
              <span>View Selected Work</span> <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="animate-float"
          style={{
            position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: 0.5,
          }}
        >
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--text-tertiary), transparent)' }} />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          2. MARQUEE (Dual Direction)
      ══════════════════════════════════════════════ */}
      <section style={{
        padding: '40px 0',
        background: 'rgba(255,255,255,0.01)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', top: 0, bottom: 0, left: 0, width: 150,
          background: 'linear-gradient(to right, var(--bg-base), transparent)',
          zIndex: 10, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: 0, bottom: 0, right: 0, width: 150,
          background: 'linear-gradient(to left, var(--bg-base), transparent)',
          zIndex: 10, pointerEvents: 'none',
        }} />
        
        {/* Row 1 - Left */}
        <div className="animate-marquee" style={{ display: 'flex', width: '200%', gap: 64, alignItems: 'center', marginBottom: 24 }}>
          {[...Array(2)].map((_, di) => (
            <div key={di} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '50%', gap: 64 }}>
              {['Figma', 'Framer', 'Principle', 'Linear', 'Lottie', 'FigJam', 'Zeroheight'].map((tool, i) => (
                <span key={tool + i + di} style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase',
                  letterSpacing: '0.15em', color: 'var(--text-tertiary)', opacity: 0.6,
                  display: 'flex', alignItems: 'center', gap: 10, whiteSpace: 'nowrap',
                }}>
                  <Sparkles size={14} color="var(--accent)" style={{ opacity: 0.6 }} />
                  {tool}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Row 2 - Right */}
        <div className="animate-marquee" style={{ display: 'flex', width: '200%', gap: 64, alignItems: 'center', animationDirection: 'reverse' }}>
          {[...Array(2)].map((_, di) => (
            <div key={di} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '50%', gap: 64 }}>
              {['UI Design', 'UX Research', 'Prototyping', 'Design Systems', 'Interaction Design', 'Web Design', 'Mobile Apps'].map((skill, i) => (
                <span key={skill + i + di} style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '1.1rem', fontWeight: 700,
                  letterSpacing: '-0.02em', color: 'var(--text-tertiary)', opacity: 0.3,
                  whiteSpace: 'nowrap',
                }}>
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. FEATURED WORK (Immersive Cards)
      ══════════════════════════════════════════════ */}
      <section className="section-pad container-xl">
        <motion.div {...fadeUp(0)} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, marginBottom: 64 }}>
          <div>
            <span className="section-label">Selected Work</span>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1,
            }}>
              Crafting premium<br />
              <span className="gradient-text">digital products.</span>
            </h2>
          </div>
          <Link to="/projects" className="btn-ghost" style={{ padding: '14px 28px' }}>
            View Archive <ArrowUpRight size={15} />
          </Link>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 32 }}>
          {featuredProjects.map((proj, idx) => (
            <motion.div
              key={idx}
              {...fadeUp(idx * 0.1)}
              style={{ position: 'relative' }}
              className="group"
            >
              <Link to={`/projects/${proj.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div
                  className="glass-card"
                  style={{ 
                    padding: 8, display: 'flex', flexDirection: 'column', 
                    cursor: 'pointer', overflow: 'hidden',
                  }}
                >
                  {/* Thumbnail Image */}
                  <div style={{
                    aspectRatio: '16/10', borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden', position: 'relative',
                    background: 'var(--bg-tertiary)',
                  }}>
                    {proj.coverImage && (
                      <motion.img
                        src={proj.coverImage}
                        alt={proj.title}
                        style={{
                          width: '100%', height: '100%',
                          objectFit: 'cover', objectPosition: 'top',
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: premiumEasing }}
                      />
                    )}
                    {/* Hover Overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                      opacity: 0, transition: 'opacity 0.4s ease',
                      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                      padding: 32,
                    }} className="opacity-0 group-hover:opacity-100">
                      <div style={{
                        transform: 'translateY(20px)', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      }} className="group-hover:translate-y-0">
                        <span className="mono-tag" style={{ marginBottom: 12 }}>{proj.category}</span>
                        <h3 style={{
                          fontFamily: "'Sora', sans-serif", fontSize: '1.75rem', fontWeight: 800,
                          color: '#fff', letterSpacing: '-0.03em', marginBottom: 8,
                        }}>{proj.title}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--accent)' }}>
                          <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Explore Case Study</span>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Meta details outside the image for default state */}
                <div style={{ padding: '24px 8px 8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h3 style={{
                        fontFamily: "'Sora', sans-serif", fontSize: '1.35rem', fontWeight: 700,
                        color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: 8,
                      }}>{proj.title}</h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                        {proj.shortDescription}
                      </p>
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
          4. SERVICES BENTO
      ══════════════════════════════════════════════ */}
      <section className="section-pad container-xl">
        <motion.div {...fadeUp(0)}>
          <span className="section-label">Core Capabilities</span>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 64,
            lineHeight: 1.1,
          }}>
            Specialised services focused <br />
            <span className="gradient-text">on interface craftsmanship.</span>
          </h2>
        </motion.div>

        <div className="bento-grid">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              {...fadeUp(idx * 0.1)}
              className="glass-card glow-border-hover"
              style={{ 
                gridColumn: idx === 0 || idx === 3 ? 'span 7' : 'span 5',
                padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: 20,
              }}
            >
              <div style={{
                width: 56, height: 56, borderRadius: 'var(--radius-md)',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-primary)',
              }}>
                {svc.icon}
              </div>
              <h3 style={{
                fontFamily: "'Sora', sans-serif", fontSize: '1.3rem',
                fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em',
              }}>{svc.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════════
          5. PROCESS / WORKFLOW (Vertical)
      ══════════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
        <div className="container-xl">
          <motion.div {...fadeUp(0)} style={{ marginBottom: 64 }}>
            <span className="section-label">Design Workflow</span>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1,
            }}>
              A meticulous methodology<br />
              <span className="gradient-text">for consistent results.</span>
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                {...fadeUp(idx * 0.1)}
                style={{
                  position: 'relative',
                  paddingLeft: 24,
                  borderLeft: '1px solid var(--border)',
                }}
              >
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.85rem', color: 'var(--text-tertiary)', fontWeight: 600, letterSpacing: '0.1em',
                  display: 'block', marginBottom: 16,
                }}>{step.num}</span>
                <h3 style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.03em',
                  marginBottom: 12,
                }}>{step.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════════
          6. TESTIMONIALS (Masonry/Grid style)
      ══════════════════════════════════════════════ */}
      <section className="section-pad container-xl">
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: 64, maxWidth: 600, margin: '0 auto 64px' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Client Feedback</span>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1,
          }}>
            Trusted by teams <span className="gradient-text">globally.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              {...fadeUp(idx * 0.1)}
              className="glass-card"
              style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 24 }}
            >
              <div style={{ display: 'flex', gap: 4 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--text-primary)" color="var(--text-primary)" />
                ))}
              </div>

              <p style={{
                fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.7, fontWeight: 500,
              }}>
                "{t.quote}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 'auto', paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 'var(--radius-full)',
                  background: 'var(--bg-tertiary)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-secondary)',
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{t.author}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{t.role}</div>
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
      <section className="section-pad container-xl" style={{ maxWidth: 840, margin: '0 auto' }}>
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label">Pre-Qualification FAQ</span>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1,
          }}>
            Answering common concerns.
          </h2>
        </motion.div>

        <div>
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(idx)}>
                <span style={{ fontSize: '1.1rem' }}>{faq.q}</span>
                <motion.div animate={{ rotate: activeFaq === idx ? 180 : 0 }} transition={{ duration: 0.3, ease: premiumEasing }}>
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: premiumEasing }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="faq-answer" style={{ paddingBottom: 24, paddingTop: 8, fontSize: '1rem' }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          8. IMMERSIVE CONTACT CTA
      ══════════════════════════════════════════════ */}
      <section className="section-pad container-xl" style={{ paddingBottom: 120 }}>
        <motion.div
          {...fadeUp(0)}
          className="glass-card"
          style={{
            padding: 'clamp(64px, 10vw, 100px) clamp(32px, 8vw, 80px)',
            background: 'rgba(22, 23, 29, 0.95)',
            borderRadius: 'var(--radius-2xl)',
            position: 'relative', overflow: 'hidden',
            textAlign: 'center',
          }}
        >
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Let's collaborate</span>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24,
            }}>
              Have a project<br />
              <span className="gradient-text">in mind?</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 48 }}>
              I am currently available for freelance opportunities. Let's discuss your project requirements and see if we're a good fit.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/contact" className="btn-primary" style={{ padding: '16px 36px', fontSize: '1rem' }}>
                Start a Conversation <MessageSquare size={18} />
              </Link>
              <a href="mailto:hello@adharsh.design" className="btn-ghost" style={{ padding: '16px 36px', fontSize: '1rem' }}>
                Email Me directly <Mail size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
