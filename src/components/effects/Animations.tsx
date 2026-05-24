'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function ScrollReveal({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: ScrollRevealProps) {
  const directions = {
    up: { initial: { y: 30, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    down: { initial: { y: -30, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    left: { initial: { x: 30, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    right: { initial: { x: -30, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  };

  return (
    <motion.div
      initial={directions[direction].initial}
      whileInView={directions[direction].animate}
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
}

export function StaggerContainer({ children, className = '' }: StaggerContainerProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

export function FloatingElement({ children, delay = 0, duration = 6 }: FloatingElementProps) {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ duration, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
