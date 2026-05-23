import { Link } from 'react-router-dom';
import {
  LayoutGrid, Layers, Monitor, Smartphone, Search, Database,
  CheckCircle, ArrowRight, MessageSquare
} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Services() {
  const serviceOffers = [
    {
      icon: <LayoutGrid size={28} />,
      title: 'UI/UX Design',
      color: '#3B82F6',
      desc: 'End-to-end interface and user experience design for web and mobile products. I translate user journeys into clean, responsive, and highly polished visual designs in Figma.',
      deliverables: [
        'User Flow Mapping & Logic Charts',
        'Responsive Web Layouts (Figma)',
        'Clickable Interactive Prototypes',
        'Figma UI Component System',
        'Developer Handoff Specifications',
      ],
      ideal: 'Teams looking to build visually stunning, highly intuitive digital products from scratch or seeking to elevate their current interface.',
      workflow: [
        'Discovery & Briefing Alignment',
        'Information Architecture & Wireframes',
        'Visual Style Direction Selection',
        'High-Fidelity Screen Design',
        'Prototyping & Dev Handoff',
      ],
    },
    {
      icon: <Layers size={28} />,
      title: 'User Experience (UX) Design',
      color: '#8B5CF6',
      desc: 'Strategic UX design focused on user empathy, clear navigation, and seamless journeys. I solve complex interaction problems to ensure your product is effortless to use.',
      deliverables: [
        'UX Architecture & Sitemap',
        'Low-Fidelity Wireframes',
        'Journey Mapping & Personas',
        'Interactive Structural Prototypes',
        'Usability Testing Assets',
      ],
      ideal: 'Products struggling with user retention or complex workflows that need a clear, user-centered redesign.',
      workflow: [
        'Deep Product Discovery',
        'UX Architecture Mapping',
        'Wireframing & Iterations',
        'Core Flow Refinements',
        'Final UX Structure Handoff',
      ],
    },
    {
      icon: <Monitor size={28} />,
      title: 'Dashboard & Web App Design',
      color: '#06B6D4',
      desc: 'Specialised interface design for data-heavy platforms and web applications. I focus on clean typography, visual hierarchy, and creating breathable layouts for complex information.',
      deliverables: [
        'Clean Table & Grid Systems',
        'Data Visualisation UI',
        'Search & Filter Interface Patterns',
        'Dashboard Navigation Systems',
        'Responsive Web Breakpoints',
      ],
      ideal: 'Web applications and platforms that require a high degree of visual clarity to manage complex data without overwhelming the user.',
      workflow: [
        'Data Audit & Information Hierarchy',
        'Layout Prototyping',
        'Visual Density Balancing',
        'Dashboard Suite Design',
        'Interactive State Handoff',
      ],
    },
    {
      icon: <Smartphone size={28} />,
      title: 'Mobile App Design',
      color: '#F59E0B',
      desc: 'Premium mobile app layouts for iOS and Android. I design highly tactile, gesture-driven interfaces focusing on modern aesthetics and smooth micro-interactions.',
      deliverables: [
        'App Flow Schematics',
        'iOS & Android Screen Suites',
        'Gestural UI & Micro-interactions',
        'Mobile UI Component Kit',
        'App Store Visual Assets',
      ],
      ideal: 'Mobile-first products that want a world-class, premium feel with intuitive, fluid navigation.',
      workflow: [
        'Platform Guideline Alignment',
        'Gestural Wireframing',
        'High-Fidelity Screen Assemblies',
        'Micro-Animation Prototyping',
        'Final Asset Handoff',
      ],
    },
    {
      icon: <Search size={28} />,
      title: 'UI/UX Visual Audit',
      color: '#EC4899',
      desc: 'A comprehensive visual and functional evaluation of your existing digital product. I review your interface for aesthetic inconsistencies, usability friction, and layout balance.',
      deliverables: [
        'Visual Consistency Report',
        'Usability Friction Log',
        'Typography & Spacing Review',
        'Proposed Screen Redesign Mockups',
        'Design Alignment Call',
      ],
      ideal: 'Existing products that feel outdated, cluttered, or lack the premium visual finish needed to stand out.',
      workflow: [
        'Complete Interface Walkthrough',
        'Visual & UX Problem Collection',
        'Drafting Mockup UI Upgrades',
        'Structuring the Actionable Report',
        'Walkthrough Call',
      ],
    },
    {
      icon: <Database size={28} />,
      title: 'Design Systems & UI Kits',
      color: '#22C55E',
      desc: 'Creation of robust, highly organised design systems in Figma. I build reusable component libraries and visual guidelines that keep your product visually consistent as it scales.',
      deliverables: [
        'Color & Typography Token System',
        'Responsive Figma Components',
        'Interactive States (Hover/Active)',
        'Iconography & Spacing Guidelines',
        'Figma File Organization Structure',
      ],
      ideal: 'Design teams or companies wanting to standardise their visual language and speed up their interface design process.',
      workflow: [
        'Existing UI Pattern Auditing',
        'Foundational Styles Setup',
        'Component Construction',
        'Variant & Auto-Layout Assembly',
        'Design Guidelines Handover',
      ],
    },
  ];

  return (
    <div style={{ width: '100%', background: 'var(--bg-base)', position: 'relative' }}>

      {/* ── Hero ── */}
      <section className="section-pad container-xl" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-20%', right: '-5%',
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <motion.div {...fadeUp(0)} style={{ maxWidth: 640, position: 'relative', zIndex: 1 }}>
          <span className="section-label">Services Ecosystem</span>
          <h1 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05,
            color: 'var(--text-primary)', marginBottom: 20,
          }}>
            Outcome-focused design,<br />
            <span className="gradient-text">structured to scale.</span>
          </h1>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            color: 'var(--text-secondary)', lineHeight: 1.8,
            fontFamily: "'Geist', sans-serif",
          }}>
            I don't sell random mockups. I deliver structured, researched design assets that help startups ship fast, reduce engineering friction, and delight users.
          </p>
        </motion.div>
      </section>

      <div className="divider" />

      {/* ── Service Cards ── */}
      <section className="section-pad container-xl">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {serviceOffers.map((svc, idx) => (
            <motion.div
              key={idx}
              {...fadeUp(idx * 0.05)}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: 32,
                alignItems: 'start',
                padding: '48px 0',
                borderBottom: idx < serviceOffers.length - 1 ? '1px solid var(--border)' : 'none',
                position: 'relative',
              }}
            >
              {/* Left — description */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, gridColumn: 'span 2' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 'var(--radius-lg)',
                  background: `${svc.color}14`,
                  border: `1px solid ${svc.color}28`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: svc.color,
                }}>
                  {svc.icon}
                </div>
                <h2 style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
                  fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text-primary)',
                }}>{svc.title}</h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  {svc.desc}
                </p>
                <div style={{
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-lg)',
                  background: `${svc.color}08`,
                  border: `1px solid ${svc.color}18`,
                }}>
                  <h3 style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.62rem', textTransform: 'uppercase',
                    letterSpacing: '0.14em', color: svc.color,
                    fontWeight: 600, marginBottom: 6,
                  }}>Ideal Client Match</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{svc.ideal}</p>
                </div>
              </div>

              {/* Middle — Deliverables */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h3 style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.62rem', textTransform: 'uppercase',
                  letterSpacing: '0.14em', color: 'var(--text-primary)', fontWeight: 700,
                  marginBottom: 4,
                }}>Key Deliverables</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {svc.deliverables.map((d, di) => (
                    <li key={di} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 10,
                      fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: 1.65,
                    }}>
                      <CheckCircle size={13} color={svc.color} style={{ flexShrink: 0, marginTop: 3 }} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — Workflow */}
              <div style={{
                display: 'flex', flexDirection: 'column', gap: 12,
                paddingLeft: 24,
                borderLeft: `2px solid ${svc.color}20`,
              }}>
                <h3 style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.62rem', textTransform: 'uppercase',
                  letterSpacing: '0.14em', color: 'var(--text-primary)', fontWeight: 700,
                  marginBottom: 4,
                }}>Engagement Workflow</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {svc.workflow.map((flow, fi) => (
                    <div key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <span style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.65rem', fontWeight: 700,
                        color: svc.color,
                        background: `${svc.color}14`,
                        border: `1px solid ${svc.color}22`,
                        padding: '2px 8px', borderRadius: 4, flexShrink: 0,
                      }}>
                        0{fi + 1}
                      </span>
                      <span style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: 1.65, fontWeight: 500 }}>
                        {flow}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
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
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 400, height: 200,
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            width: 56, height: 56, borderRadius: '50%',
            background: 'rgba(59,130,246,0.1)',
            border: '1px solid rgba(59,130,246,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.5rem',
          }}>
            ⚡
          </div>
          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, position: 'relative', zIndex: 1,
          }}>
            Not sure which service matches<br />
            <span className="gradient-text">your product maturity?</span>
          </h2>
          <p style={{
            fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75,
            maxWidth: 480, position: 'relative', zIndex: 1,
          }}>
            Let's organize a 15-minute diagnostic call. I will audit your current product state and recommend the narrowest, most cost-effective path to success.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
            <Link to="/contact" className="btn-primary">
              Schedule Diagnostic Sync <ArrowRight size={15} />
            </Link>
            <a href="mailto:hello@adharsh.design" className="btn-ghost">
              <MessageSquare size={15} />
              Write an email
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
