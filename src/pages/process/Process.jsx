import { Link } from 'react-router-dom';
import {
  ArrowRight, Search, Compass, Eye, Edit3, Paintbrush,
  Cpu, Users, PackageOpen
} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: [0.25, 1, 0.5, 1] },
});

export default function Process() {
  const steps = [
    {
      num: '01', title: 'Discover & Onboard', icon: <Compass size={22} />,
      color: '#3B82F6',
      focus: 'Understanding the core user context, aligning on visual goals, and auditing the existing interface environment.',
      activities: [
        'Stakeholder alignment interviews',
        'Current-state UI/UX Audit',
        'Reviewing user friction points',
        'Defining project visual direction & scope',
      ],
      handoff: 'Project kick-off brief and shared communication workspace.',
    },
    {
      num: '02', title: 'Research & Context', icon: <Search size={22} />,
      color: '#8B5CF6',
      focus: 'Extracting data on user mental models, competitor workflows, and standardizing product benchmarks.',
      activities: [
        'Conducting user and customer sync sessions',
        'Deconstruct competitor feature structures',
        'Mapping out quantitative telemetry drops',
        'Identifying design opportunities in market gaps',
      ],
      handoff: 'User persona sheets and comparative design strategy benchmark.',
    },
    {
      num: '03', title: 'Define Architecture', icon: <Eye size={22} />,
      color: '#06B6D4',
      focus: 'Structuring information density, site hierarchies, and product workflows prior to screen design.',
      activities: [
        'Building full product sitemaps',
        'Drafting complex user transaction charts',
        'Defining primary vs secondary workspaces logic',
        'Mapping search, filter, and sorting flows',
      ],
      handoff: 'Canonical Information Architecture Sitemap and core user journey maps.',
    },
    {
      num: '04', title: 'Wireframe Blueprints', icon: <Edit3 size={22} />,
      color: '#F59E0B',
      focus: 'Constructing low-fidelity and high-fidelity wireframes to establish layouts, typography, and density columns.',
      activities: [
        'Drafting quick responsive wireframe iterations',
        'Establishing column layouts & alignment grids',
        'Defining content progressive disclosure plans',
        'Validating initial flows with engineering stakeholders',
      ],
      handoff: 'Interactive grayscale Figma wireframe suite covering all core flows.',
    },
    {
      num: '05', title: 'Visual UI Design', icon: <Paintbrush size={22} />,
      color: '#EC4899',
      focus: 'Polishing high-fidelity screens. Introducing brand-tailored color schemes, dark surfaces, and custom CSS-aligned tokens.',
      activities: [
        'Applying premium colors & harmonious styling',
        'Crafting data visualization charts & widgets',
        'Setting up semantic tokens inside Figma variables',
        'Assembling comprehensive UI component library',
      ],
      handoff: 'Production-ready visual UI screen suites in Figma (Auto-layout 5.0).',
    },
    {
      num: '06', title: 'Interactive Prototype', icon: <Cpu size={22} />,
      color: '#22C55E',
      focus: 'Connecting designed frames into click-path flows to simulate real-app haptics, physics, and transitions.',
      activities: [
        'Creating high-fidelity clickable flows (Figma)',
        'Building gesture animations (Principle/ProtoPie)',
        'Animating layout micro-interactions',
        'Simulating custom sidebar & dropdown animations',
      ],
      handoff: 'Interactive mobile & web click-prototypes for testing.',
    },
    {
      num: '07', title: 'Usability Testing', icon: <Users size={22} />,
      color: '#3B82F6',
      focus: 'Putting prototypes in front of real users to identify cognitive blocks, friction points, and edge-case issues.',
      activities: [
        'Moderating user prototype walkthroughs',
        'Logging task-completion speed & drop rates',
        'Analyzing heatmaps & layout confusion nodes',
        'Iterating design structures based on logs',
      ],
      handoff: 'Testing findings summary and refined design iterations.',
    },
    {
      num: '08', title: 'Deliver & Handoff', icon: <PackageOpen size={22} />,
      color: '#8B5CF6',
      focus: 'Executing a detailed engineering handoff. Aligning tokens to CSS files and remaining available during build phases.',
      activities: [
        'Annotating margins, paddings, and variables in Figma',
        'Running cross-functional dev walkthrough sync',
        'Exporting asset specs & Lottie files',
        'QA auditing developer builds prior to staging',
      ],
      handoff: 'Fully documented Figma Handoff spec and design token guidelines.',
    },
  ];

  return (
    <div style={{ width: '100%', background: 'var(--bg-base)', position: 'relative' }}>

      {/* ── Hero ── */}
      <section className="section-pad container-xl" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-30%', right: '0',
          width: 500, height: 400,
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
          style={{ maxWidth: 640, position: 'relative', zIndex: 1 }}
        >
          <span className="section-label">Operational Blueprint</span>
          <h1 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05,
            color: 'var(--text-primary)', marginBottom: 20,
          }}>
            A meticulous framework,<br />
            <span className="gradient-text">optimized to eliminate risk.</span>
          </h1>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            color: 'var(--text-secondary)', lineHeight: 1.8,
          }}>
            Design is an intentional process. By splitting my workflow into 8 highly structured phases, I ensure every interface decision is purposeful, visually stunning, and seamlessly ready for development.
          </p>
        </motion.div>
      </section>

      <div className="divider" />

      {/* ── Steps Timeline ── */}
      <section className="section-pad container-xl">
        <div style={{ position: 'relative' }}>
          {/* Vertical glowing line */}
          <div style={{
            position: 'absolute',
            left: 24,
            top: 0, bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, transparent, var(--accent) 10%, var(--accent2) 90%, transparent)',
            display: 'none',
          }} className="hidden-mobile" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                {...fadeUp(idx * 0.04)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: 24,
                  alignItems: 'start',
                  padding: '40px 0 40px 0',
                  paddingLeft: 0,
                  borderBottom: idx < steps.length - 1 ? '1px solid var(--border)' : 'none',
                  position: 'relative',
                }}
              >
                {/* Step identifier + title */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    {/* Number badge */}
                    <div style={{
                      width: 44, height: 44, borderRadius: 'var(--radius-full)',
                      background: `${step.color}14`,
                      border: `2px solid ${step.color}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.72rem', fontWeight: 700,
                      color: step.color,
                      flexShrink: 0,
                      boxShadow: `0 0 12px ${step.color}30`,
                    }}>
                      {step.num}
                    </div>
                    {/* Icon */}
                    <div style={{
                      width: 40, height: 40, borderRadius: 'var(--radius-md)',
                      background: `${step.color}10`,
                      border: `1px solid ${step.color}22`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: step.color, flexShrink: 0,
                    }}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                    fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)',
                  }}>{step.title}</h3>
                  <p style={{
                    fontSize: '0.875rem', color: 'var(--text-secondary)',
                    lineHeight: 1.75, fontWeight: 500,
                  }}>{step.focus}</p>
                </div>

                {/* Activities */}
                <div
                  className="glass-card"
                  style={{ padding: 24, borderLeft: `2px solid ${step.color}30` }}
                >
                  <h4 style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.62rem', textTransform: 'uppercase',
                    letterSpacing: '0.14em', color: 'var(--text-primary)', fontWeight: 700, marginBottom: 14,
                  }}>Key Activities</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {step.activities.map((a, ai) => (
                      <li key={ai} style={{
                        display: 'flex', alignItems: 'flex-start', gap: 8,
                        fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: 1.6,
                      }}>
                        <span style={{
                          width: 5, height: 5, borderRadius: '50%',
                          background: step.color, flexShrink: 0, marginTop: 7,
                        }} />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Handoff */}
                <div
                  className="glass-card"
                  style={{
                    padding: 24,
                    borderLeft: `2px solid ${step.color}`,
                    background: `${step.color}05`,
                  }}
                >
                  <h4 style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.62rem', textTransform: 'uppercase',
                    letterSpacing: '0.14em', color: step.color, fontWeight: 700, marginBottom: 12,
                  }}>Phase Handoff Spec</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 500 }}>
                    {step.handoff}
                  </p>
                  <div style={{
                    marginTop: 16,
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    padding: '4px 12px', borderRadius: 'var(--radius-full)',
                    background: `${step.color}12`,
                    border: `1px solid ${step.color}28`,
                    fontSize: '0.68rem', fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: step.color, fontWeight: 700,
                  }}>
                    Phase {step.num}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── CTA ── */}
      <section className="section-pad container-xl">
        <motion.div
          {...fadeUp(0)}
          className="glass-card card-animated-border"
          style={{
            padding: 'clamp(40px, 5vw, 72px)',
            textAlign: 'center',
            maxWidth: 720, margin: '0 auto',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24,
            position: 'relative', overflow: 'hidden',
          }}
        >
          <div className="animate-glow-pulse" style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15,
            position: 'relative', zIndex: 1,
          }}>
            Want to see how this workflow<br />
            <span className="gradient-text">elevates your product interface?</span>
          </h2>
          <p style={{
            fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75,
            maxWidth: 480, position: 'relative', zIndex: 1,
          }}>
            I can drop seamlessly into your project and start transforming your user experience immediately. Let's arrange a sync call to align on timelines.
          </p>
          <Link to="/contact" className="btn-primary" style={{ position: 'relative', zIndex: 1, padding: '14px 36px' }}>
            Schedule Alignment Sync <ArrowRight size={15} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
