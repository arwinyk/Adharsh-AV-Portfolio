import { useRef } from 'react';
import { motion, useSpring, useReducedMotion } from 'framer-motion';

export default function Magnetic({ children, strength = 30 }) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const bounds = useRef(null);

  const handleMouseEnter = () => {
    if (prefersReducedMotion || !ref.current) return;
    bounds.current = ref.current.getBoundingClientRect();
  };

  const handleMouse = (e) => {
    if (prefersReducedMotion || !ref.current || !bounds.current) return;
    
    const { clientX, clientY } = e;
    const { height, width, left, top } = bounds.current;
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    x.set(middleX * (strength / 100));
    y.set(middleY * (strength / 100));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      style={{ position: 'relative', display: 'inline-flex', x, y }}
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
}
