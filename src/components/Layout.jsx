import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import CustomCursor from './CustomCursor';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    let lenis;
    let rafId;

    // Delay the layout read (window.innerWidth) to prevent forced synchronous reflows
    requestAnimationFrame(() => {
      if (window.innerWidth < 768) return;

      import('@studio-freight/lenis').then(({ default: Lenis }) => {
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        });

        function raf(time) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);
      });
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        position: 'relative',
        background: 'var(--bg-base)',
        color: 'var(--text-primary)',
        transition: 'background 0.3s ease, color 0.3s ease',
        overflowX: 'hidden',
        cursor: 'none', // Hide default cursor for premium feel
      }}
    >
      <CustomCursor />
      {/* Global ambient light blobs */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: '-10%',
          right: '-5%',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 0,
          animation: 'ambient-drift 10s ease-in-out infinite',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          bottom: '10%',
          left: '-8%',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          zIndex: 0,
          animation: 'ambient-drift 14s ease-in-out infinite reverse',
        }}
      />

      {/* Persistent Nav */}
      <Header />

      {/* Page Content */}
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        style={{
          flexGrow: 1,
          paddingTop: 80,
          zIndex: 10,
          position: 'relative',
        }}
      >
        {children}
      </motion.main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}
