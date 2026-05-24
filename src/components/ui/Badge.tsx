'use client';

import { motion } from 'framer-motion';

interface BadgeProps {
  children: string;
  variant?: 'default' | 'success' | 'warning';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-purple-500/20 border-purple-500/30 text-purple-200',
    success: 'bg-green-500/20 border-green-500/30 text-green-200',
    warning: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-200',
  };

  return (
    <motion.span
      className={`${variants[variant]} px-3 py-1 rounded-full text-xs font-medium border inline-flex items-center gap-1`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <span className="w-2 h-2 rounded-full bg-current" />
      {children}
    </motion.span>
  );
}
