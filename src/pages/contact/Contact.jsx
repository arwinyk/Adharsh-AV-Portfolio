import { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, CheckCircle, Loader, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { db } from '../../firebase';
import Magnetic from '../../components/Magnetic';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.4, delay, ease: [0.25, 1, 0.5, 1] },
});

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', budget: '', message: '', projectType: ''
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // 1. Save to Firebase Firestore (Optional backend backup)
      await addDoc(collection(db, 'enquiries'), {
        ...form,
        createdAt: serverTimestamp()
      });

      // 2. Formulate WhatsApp Message
      const text = `Hi Adharsh, I have a new project enquiry!
      
*Name*: ${form.name}
*Email*: ${form.email}
*Service*: ${form.projectType}
*Budget*: ${form.budget || 'Not specified'}

*Message*:
${form.message}`;

      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/919488450192?text=${encodedText}`;

      // 3. Automatically open WhatsApp to send
      window.open(whatsappUrl, '_blank');

      setStatus('success');
      setForm({ name: '', email: '', budget: '', message: '', projectType: '' });
    } catch (error) {
      console.error("Error submitting form: ", error);
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: 'Email',
      value: 'hello@adharsh.design',
      href: 'mailto:hello@adharsh.design',
      color: '#3B82F6',
    },
    {
      icon: <Phone size={18} />,
      label: 'WhatsApp',
      value: '+91 94884 50192',
      href: 'https://wa.me/919488450192',
      color: '#22C55E',
    },
    {
      icon: <Calendar size={18} />,
      label: 'Book a Call',
      value: 'Calendly — 15m Discovery',
      href: 'https://calendly.com',
      color: '#8B5CF6',
    },
    {
      icon: <MapPin size={18} />,
      label: 'Location',
      value: 'India · Works Globally',
      href: null,
      color: '#F59E0B',
    },
  ];

  const projectTypes = [
    'UI/UX Design — Web',
    'UI/UX Design — Mobile App',
    'Product Strategy Consulting',
    'SaaS Dashboard Design',
    'Design System Build',
    'UX Heuristic Audit',
    'Other / Discovery',
  ];

  const budgets = [
    'Under ₹30,000',
    '₹30,000 — ₹60,000',
    '₹60,000 — ₹1,50,000',
    '₹1,50,000+',
    'Let\'s discuss',
  ];

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)',
    padding: '14px 18px',
    fontSize: '0.9rem',
    fontFamily: "'Geist', sans-serif",
    color: 'var(--text-primary)',
    transition: 'border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
    outline: 'none',
    appearance: 'none',
  };

  return (
    <div style={{ width: '100%', background: 'var(--bg-base)', position: 'relative' }}>

      {/* ── Hero ── */}
      <section className="section-pad container-xl" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-20%', right: '-5%',
          width: 450, height: 400,
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-20%', left: '-5%',
          width: 350, height: 300,
          background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)',
          filter: 'blur(50px)', pointerEvents: 'none',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
          style={{ maxWidth: 620, position: 'relative', zIndex: 1 }}
        >
          <span className="section-label">Kick Off Something</span>
          <h1 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05,
            color: 'var(--text-primary)', marginBottom: 20,
          }}>
            Let's evaluate your product<br />
            <span className="gradient-text">and build a plan together.</span>
          </h1>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            color: 'var(--text-secondary)', lineHeight: 1.8,
          }}>
            Share your product challenge and I will evaluate the best fit strategy. I respond to every well-qualified enquiry within 24 hours.
          </p>
        </motion.div>
      </section>

      <div className="divider" />

      {/* ── Main Content ── */}
      <section className="section-pad container-xl">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 48,
          alignItems: 'start',
        }}>

          {/* ── Contact Form ── */}
          <motion.div {...fadeUp(0)} style={{ gridColumn: 'span 2' }}>
            <div
              className="glass-card"
              style={{ padding: 'clamp(28px, 4vw, 48px)', position: 'relative', overflow: 'hidden' }}
            >
              {/* Ambient top glow */}
              <div style={{
                position: 'absolute', top: 0, left: '20%', right: '20%', height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), rgba(139,92,246,0.5), transparent)',
                pointerEvents: 'none',
              }} />

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    padding: '60px 24px', textAlign: 'center',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18,
                  }}
                >
                  <div style={{
                    width: 72, height: 72, borderRadius: '50%',
                    background: 'rgba(34,197,94,0.1)',
                    border: '2px solid rgba(34,197,94,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 0 30px rgba(34,197,94,0.2)',
                  }}>
                    <CheckCircle size={30} color="#22C55E" />
                  </div>
                  <h3 style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.03em',
                  }}>Message received!</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: 400 }}>
                    I've received your project enquiry and will review it within 24 hours. Look out for a reply from hello@adharsh.design
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-ghost"
                    style={{ marginTop: 8 }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <h2 style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.03em',
                    marginBottom: 4,
                  }}>Project Enquiry Form</h2>

                  {/* Row: Name + Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <label style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.62rem', textTransform: 'uppercase',
                        letterSpacing: '0.14em', color: 'var(--text-tertiary)', fontWeight: 600,
                      }}>Your Name *</label>
                      <input
                        className="cin-input"
                        type="text"
                        name="name"
                        required
                        placeholder="Rohan Mehta"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <label style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.62rem', textTransform: 'uppercase',
                        letterSpacing: '0.14em', color: 'var(--text-tertiary)', fontWeight: 600,
                      }}>Email Address *</label>
                      <input
                        className="cin-input"
                        type="email"
                        name="email"
                        required
                        placeholder="rohan@startup.co"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Row: Project Type + Budget */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <label style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.62rem', textTransform: 'uppercase',
                        letterSpacing: '0.14em', color: 'var(--text-tertiary)', fontWeight: 600,
                      }}>Project Type *</label>
                      <select
                        className="cin-input"
                        name="projectType"
                        required
                        value={form.projectType}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                      >
                        <option value="">Select a service...</option>
                        {projectTypes.map(pt => (
                          <option key={pt} value={pt} style={{ background: '#16171D' }}>{pt}</option>
                        ))}
                      </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <label style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.62rem', textTransform: 'uppercase',
                        letterSpacing: '0.14em', color: 'var(--text-tertiary)', fontWeight: 600,
                      }}>Estimated Budget</label>
                      <select
                        className="cin-input"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                      >
                        <option value="">Select budget range...</option>
                        {budgets.map(b => (
                          <option key={b} value={b} style={{ background: '#16171D' }}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <label style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.62rem', textTransform: 'uppercase',
                      letterSpacing: '0.14em', color: 'var(--text-tertiary)', fontWeight: 600,
                    }}>Describe Your Project *</label>
                    <textarea
                      className="cin-input"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your product, current design challenges, and what success looks like for you..."
                      value={form.message}
                      onChange={handleChange}
                      style={{ resize: 'vertical', lineHeight: 1.75 }}
                    />
                  </div>

                  {/* Submit */}
                  <Magnetic>
                    <button
                      type="submit"
                      className="btn-primary"
                      disabled={status === 'loading'}
                      style={{
                        padding: '15px 36px', fontSize: '0.9rem',
                        width: 'fit-content',
                        opacity: status === 'loading' ? 0.7 : 1,
                      }}
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader size={16} style={{ animation: 'spin-slow 1s linear infinite' }} />
                          Sending...
                        </>
                      ) : (
                        <>Send Project Brief →</>
                      )}
                    </button>
                  </Magnetic>

                  <p style={{
                    fontSize: '0.75rem', color: 'var(--text-tertiary)', lineHeight: 1.7,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    ↳ I respond within 24 hours · All enquiries are reviewed personally
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* ── Info Sidebar ── */}
          <motion.div {...fadeUp(0.1)} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Contact info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <h3 style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.62rem', textTransform: 'uppercase',
                letterSpacing: '0.14em', color: 'var(--text-primary)', fontWeight: 700, marginBottom: 4,
              }}>Contact Methods</h3>
              {contactInfo.map((ci, idx) => (
                <motion.div key={idx} {...fadeUp(idx * 0.06)}>
                  {ci.href ? (
                    <a
                      href={ci.href}
                      target={ci.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      className="glass-card"
                      style={{
                        display: 'flex', alignItems: 'center', gap: 14,
                        padding: '16px 20px', textDecoration: 'none',
                        borderRadius: 'var(--radius-lg)',
                      }}
                    >
                      <div style={{
                        width: 40, height: 40, borderRadius: 'var(--radius-md)',
                        background: `${ci.color}12`,
                        border: `1px solid ${ci.color}22`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: ci.color, flexShrink: 0,
                      }}>
                        {ci.icon}
                      </div>
                      <div>
                        <div style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.6rem', textTransform: 'uppercase',
                          letterSpacing: '0.12em', color: 'var(--text-tertiary)', fontWeight: 600,
                        }}>{ci.label}</div>
                        <div style={{
                          fontSize: '0.875rem', fontWeight: 600,
                          color: 'var(--text-primary)', fontFamily: "'Geist', sans-serif",
                          marginTop: 2,
                        }}>{ci.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div
                      className="glass-card"
                      style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', borderRadius: 'var(--radius-lg)' }}
                    >
                      <div style={{
                        width: 40, height: 40, borderRadius: 'var(--radius-md)',
                        background: `${ci.color}12`,
                        border: `1px solid ${ci.color}22`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: ci.color, flexShrink: 0,
                      }}>
                        {ci.icon}
                      </div>
                      <div>
                        <div style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.6rem', textTransform: 'uppercase',
                          letterSpacing: '0.12em', color: 'var(--text-tertiary)', fontWeight: 600,
                        }}>{ci.label}</div>
                        <div style={{
                          fontSize: '0.875rem', fontWeight: 600,
                          color: 'var(--text-primary)', fontFamily: "'Geist', sans-serif",
                          marginTop: 2,
                        }}>{ci.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Availability status */}
            <motion.div
              {...fadeUp(0.3)}
              className="glass-card"
              style={{
                padding: 24,
                background: 'rgba(34,197,94,0.04)',
                border: '1px solid rgba(34,197,94,0.15)',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span className="avail-dot" />
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.62rem', textTransform: 'uppercase',
                  letterSpacing: '0.14em', color: '#22C55E', fontWeight: 700,
                }}>Currently Open</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                I am actively accepting new project enquiries for Q2–Q3 2026. My typical response time is within 24 business hours.
              </p>
            </motion.div>

            {/* Response promise */}
            <motion.div {...fadeUp(0.4)} style={{
              display: 'flex', alignItems: 'flex-start', gap: 12, padding: '16px 0',
              borderTop: '1px solid var(--border)',
            }}>
              <AlertCircle size={14} color="var(--accent)" style={{ flexShrink: 0, marginTop: 2 }} />
              <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                I personally read every enquiry. Depending on fit, I'll reply with either a scope discussion or a polite redirect to a better resource.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
