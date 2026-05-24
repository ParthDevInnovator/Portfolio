'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 md:py-12 overflow-hidden border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          {/* Left Content */}
          <motion.div
            className="text-center md:text-left space-y-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 text-sm md:text-base">
              Designed & Developed by{' '}
              <span className="text-gradient font-semibold">Parth Makwana</span>
            </p>
            <p className="text-gray-500 text-xs md:text-sm">
              © {currentYear} • All rights reserved
            </p>
          </motion.div>

          {/* Center Links */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {[
              { label: 'GitHub', href: 'https://github.com/ParthDevInnovator' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/parth-makwana712' },
              { label: 'Twitter', href: 'https://x.com/Unofficial8381' },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors text-sm font-medium"
                whileHover={{ scale: 1.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex items-center gap-2 text-gray-400 text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Made with
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            and
            <motion.span
              className="text-gradient font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              AI
            </motion.span>
          </motion.div>
        </div>

        {/* Bottom Border Animation */}
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>
    </footer>
  );
}
