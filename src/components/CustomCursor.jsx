import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

export default function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setIsVisible(true);

    const moveCursor = (e) => {
      mouseX.set(e.clientX - 16); // Center the 32px cursor
      mouseY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      // Scale up on links, buttons, or elements with cursor: pointer
      const target = e.target;
      const isClickable = 
        target.tagName?.toLowerCase() === 'a' ||
        target.tagName?.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, prefersReducedMotion]);

  if (!isVisible || prefersReducedMotion) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 32,
        height: 32,
        borderRadius: '50%',
        backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.1)' : '#fff',
        border: isHovered ? '1px solid rgba(255, 255, 255, 0.4)' : 'none',
        pointerEvents: 'none',
        zIndex: 99999,
        mixBlendMode: 'difference',
        x: cursorX,
        y: cursorY,
        scale: isHovered ? 2 : 0.4,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 0.2 }}
    />
  );
}
