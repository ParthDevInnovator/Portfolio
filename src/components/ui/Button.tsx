'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  target?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  target,
  onClick,
}: ButtonProps) {
  const variants = {
    primary:
      'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white shadow-lg shadow-purple-500/50',
    secondary:
      'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40',
    ghost: 'bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const baseClass = `${variants[variant]} ${sizes[size]} rounded-lg font-medium transition-all duration-300 cursor-pointer inline-flex items-center gap-2 group ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className={baseClass}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={baseClass}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
