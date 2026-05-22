import { Link } from 'react-router-dom';
import { FileText, Compass, Feather, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.25, 1, 0.5, 1] },
});

export default function About() {
  const experiences = [
    {
      year: '2024 — Present',
      role: 'Independent Freelance UI/UX Designer',
      company: 'Global Clients & Agencies',
      desc: 'Partnering with ambitious teams to design premium web and mobile experiences. Creating intuitive user journeys, high-fidelity interfaces, and robust design systems.',
    },
    {
      year: '2022 — 2024',
      role: 'Senior UI/UX Designer',
      company: 'Creative Digital Studio',
      desc: 'Led the visual and UX design for complex consumer-facing apps. Standardised Figma component libraries, ensuring pixel-perfect design consistency across platforms.',
    },
    {
      year: '2020 — 2022',
      role: 'UI/UX Designer',
      company: 'PixelTech Software Systems',
      desc: 'Collaborated on complex consumer-facing web products and native mobile apps. Executed high-fidelity wireframing, interactive prototyping, and extensive A/B usability audits.',
    },
    {
      year: '2017 — 2020',
      role: 'Interaction Design Specialisation',
      company: 'Academy of Design Research',
      desc: 'Focussed studies on heuristic human-computer interaction, color psychology, and responsive typography grid systems.',
    },
  ];

  const beliefs = [
    {
      icon: <Compass size={22} />,
      num: '01',
      title: 'Clarity Over Simplification',
      desc: 'A complex data tool does not need to be watered down. It needs to be clarified. Progressive disclosure and rigorous visual hierarchy solve complexity.',
      color: '#3B82F6',
    },
    {
      icon: <Feather size={22} />,
      num: '02',
      title: 'Constraints Breed Craft',
      desc: 'Designing without technical boundaries is art. Crafting within the tight borders of engineering schedules, performance loads, and CSS frameworks is design.',
      color: '#8B5CF6',
    },
    {
      icon: <ShieldCheck size={22} />,
      num: '03',
      title: 'Design is in the Details',
      desc: 'My Figma layouts are built with absolute precision. Consistent spacing, typographic rhythm, and thoughtful micro-interactions are what elevate a product from good to premium.',
      color: '#22C55E',
    },
  ];

  const skills = [
    'User Research', 'Information Architecture', 'User Flows', 'Wireframing (Lo-fi/Hi-fi)',
    'Visual UI Design', 'Interactive Prototyping', 'Usability Heuristic Testing',
    'Design Tokens Systems', 'Responsive Web Layouts', 'Native Mobile Design', 'Motion Design',
  ];

  const tools = [
    'Figma (Expert)', 'Framer (Expert)', 'Principle', 'ProtoPie',
    'Zeroheight', 'Notion', 'Linear', 'Adobe After Effects', 'Lottie',
  ];

  const stats = [
    { value: '6+', label: 'Years Experience' },
    { value: '40+', label: 'Interfaces Crafted' },
    { value: '100%', label: 'Visual Precision' },
    { value: '∞', label: 'Pixels Pushed' },
  ];

  return (
    <div style={{ width: '100%', background: 'var(--bg-base)', position: 'relative' }}>

      {/* ══════════════════════════════════════════════
          1. HERO SECTION
      ══════════════════════════════════════════════ */}
      <section className="section-pad container-xl">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 64, alignItems: 'center',
        }}>

          {/* Portrait Card */}
          <motion.div {...fadeUp(0)}>
            <div style={{
              aspectRatio: '3/4',
              borderRadius: 'var(--radius-2xl)',
              overflow: 'hidden',
              position: 'relative',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
            }}>
              {/* Background layers */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-base) 100%)',
              }} />
              <div style={{
                position: 'absolute', inset: 0, opacity: 0.08,
                backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }} />
              <div className="animate-glow-pulse" style={{
                position: 'absolute', bottom: '20%', right: '-10%',
                width: 200, height: 200,
                background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(40px)',
              }} />
              <div style={{
                position: 'absolute', top: '10%', left: '-5%',
                width: 150, height: 150,
                background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
                borderRadius: '50%', filter: 'blur(30px)',
              }} />

              {/* Content */}
              <div className="glass-card-2" style={{
                position: 'absolute', inset: 24,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                padding: 24, borderRadius: 20,
              }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em',
                  color: 'var(--text-tertiary)',
                }}>System Spec // ADHARSH</span>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, margin: 'auto 0' }}>
                  {/* Avatar ring */}
                  <div style={{
                    width: 88, height: 88, borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))',
                    border: '2px solid rgba(59,130,246,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2rem',
                    boxShadow: '0 0 30px rgba(59,130,246,0.2)',
                  }}>
                    ✦
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <h3 style={{
                      fontFamily: "'Sora', sans-serif",
                      fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.03em',
                      color: 'var(--text-primary)',
                    }}>Adharsh</h3>
                    <p style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem', color: 'var(--text-secondary)',
                    }}>UI/UX Designer</p>
                  </div>

                  {/* Mini stats */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, width: '100%', marginTop: 8 }}>
                    {stats.slice(0, 4).map(({ value, label }) => (
                      <div key={label} className="glass-card" style={{
                        padding: '12px 10px', textAlign: 'center', borderRadius: 12,
                      }}>
                        <div style={{
                          fontFamily: "'Sora', sans-serif",
                          fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)',
                        }}>{value}</div>
                        <div style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.58rem', color: 'var(--text-tertiary)',
                          textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2,
                        }}>{label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  borderTop: '1px solid var(--border)', paddingTop: 12,
                }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: 'var(--text-tertiary)' }}>
                    Loc: India
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: 'var(--text-tertiary)' }}>
                    Engagements: Global
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Story */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <motion.div {...fadeUp(0.1)}>
              <span className="section-label">The Story</span>
              <h1 style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05,
                color: 'var(--text-primary)', marginBottom: 20,
              }}>
                Premium design craft <br />
                <span className="gradient-text">for digital experiences.</span>
              </h1>
            </motion.div>

            <motion.div {...fadeUp(0.2)}>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                Hello, I am Adharsh. Over the past 6+ years, I have worked deeply within the UI/UX space — mapping complex user journeys, executing meticulous interface designs, and structuring visual design systems. I choose to operate as an independent freelance designer because it allows me to focus purely on what matters: crafting exceptional user experiences and beautiful interfaces.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.25)}>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                My philosophy is simple: beautiful design is the baseline, but intuitive, seamless functionality is the goal. I study user behavior, refine visual hierarchies, and construct layouts that feel inherently natural and effortless to navigate.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.3)}>
              <blockquote style={{
                borderLeft: '2px solid var(--accent)',
                paddingLeft: 20,
                margin: '8px 0',
                background: 'rgba(59,130,246,0.04)',
                borderRadius: '0 8px 8px 0',
                padding: '14px 20px',
              }}>
                <p style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '0.95rem', fontStyle: 'italic',
                  color: 'var(--text-primary)', lineHeight: 1.7,
                }}>
                  "I believe the best interfaces are the ones that dissolve into the background — they simply feel right, allowing the user to complete their tasks with zero cognitive load."
                </p>
              </blockquote>
            </motion.div>

            <motion.div {...fadeUp(0.35)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/resume.pdf" target="_blank" download className="btn-primary">
                <FileText size={15} />
                Download Résumé
              </a>
              <Link to="/contact" className="btn-ghost">
                Start a Project <ArrowUpRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════════
          2. DESIGN BELIEFS
      ══════════════════════════════════════════════ */}
      <section className="section-pad container-xl">
        <motion.div {...fadeUp(0)}>
          <span className="section-label">Design Manifesto</span>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 48,
          }}>
            Three beliefs that govern<br />
            <span className="gradient-text">my workflow.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {beliefs.map((b, idx) => (
            <motion.div
              key={idx}
              {...fadeUp(idx * 0.1)}
              className="glass-card glow-border-hover card-animated-border"
              style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 16, position: 'relative' }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(90deg, ${b.color}, transparent)`,
                borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
              }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 'var(--radius-md)',
                  background: `${b.color}18`,
                  border: `1px solid ${b.color}28`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: b.color,
                }}>
                  {b.icon}
                </div>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.65rem', color: 'var(--text-tertiary)', fontWeight: 600,
                  letterSpacing: '0.1em',
                }}>{b.num}</span>
              </div>
              <h3 style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: '1.05rem', fontWeight: 700, letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
              }}>{b.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════════
          3. EXPERIENCE TIMELINE
      ══════════════════════════════════════════════ */}
      <section className="section-pad container-xl" style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label">Track Record</span>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1,
          }}>
            Professional Evolution
          </h2>
        </motion.div>

        <div style={{ position: 'relative', paddingLeft: 40 }}>
          {/* Glowing vertical timeline line */}
          <div style={{
            position: 'absolute',
            left: 12,
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, transparent, var(--accent) 15%, var(--accent2) 85%, transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                {...fadeUp(idx * 0.1)}
                style={{ position: 'relative' }}
              >
                {/* Dot */}
                <div style={{
                  position: 'absolute',
                  left: -35,
                  top: 20,
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: idx === 0
                    ? 'linear-gradient(135deg, var(--accent), var(--accent2))'
                    : 'var(--bg-tertiary)',
                  border: '2px solid var(--accent)',
                  boxShadow: idx === 0 ? '0 0 16px rgba(59,130,246,0.5)' : 'none',
                }} />

                <div
                  className="glass-card"
                  style={{ padding: 28 }}
                >
                  <span className="mono-tag" style={{ marginBottom: 8 }}>{exp.year}</span>
                  <h3 style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: '1.05rem', fontWeight: 700, letterSpacing: '-0.02em',
                    color: 'var(--text-primary)', marginBottom: 4,
                  }}>{exp.role}</h3>
                  <h4 style={{
                    fontSize: '0.85rem', color: 'var(--accent)',
                    fontWeight: 600, marginBottom: 12,
                    fontFamily: "'Geist', sans-serif",
                  }}>{exp.company}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                    {exp.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ══════════════════════════════════════════════
          4. SKILLS & TOOLS
      ══════════════════════════════════════════════ */}
      <section className="section-pad container-xl">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 48,
        }}>
          {/* Design Skills */}
          <motion.div {...fadeUp(0)} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <span className="section-label">Disciplines</span>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)',
            }}>Design Capabilities</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              My core strengths lie in structuring user experiences and visual refinement. I map and execute full-funnel interaction flows.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {skills.map((skill) => (
                <span key={skill} className="tag-chip">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            {...fadeUp(0.1)}
            style={{
              display: 'flex', flexDirection: 'column', gap: 20,
              paddingLeft: 0,
              borderTop: '1px solid var(--border)', paddingTop: 32,
            }}
          >
            <span className="section-label">Software</span>
            <h2 style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)',
            }}>Production Stack</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              I utilize industry-standard tools to construct design assets, tokens libraries, complex interactions, and prototype deliverables.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {tools.map((tool) => (
                <span
                  key={tool}
                  style={{
                    padding: '6px 16px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--border)',
                    fontSize: '0.75rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    color: 'var(--text-secondary)',
                    background: 'var(--bg-secondary)',
                    transition: 'border-color 0.2s, color 0.2s',
                    cursor: 'default',
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
