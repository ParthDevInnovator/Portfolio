'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`rounded-2xl bg-white/4 border border-white/8 backdrop-blur-xl p-6 md:p-8 overflow-hidden ${hover ? 'glow-effect' : ''} ${className}`}
      whileHover={hover ? { y: -5 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
