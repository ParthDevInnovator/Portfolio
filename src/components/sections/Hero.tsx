'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code2, ExternalLink, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal, FloatingElement } from '@/components/effects/Animations';
import {
  FloatingOrbs,
  SpotlightEffect,
  GridBackground,
  NoiseOverlay,
  FloatingParticles,
} from '@/components/effects/BackgroundEffects';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Effects */}
      <FloatingOrbs />
      <GridBackground />
      <NoiseOverlay />
      <FloatingParticles />
      <SpotlightEffect />

      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <ScrollReveal delay={0.1}>
              <motion.div className="flex items-center gap-3 w-fit">
                <Badge variant="success">Available for Projects</Badge>
              </motion.div>
            </ScrollReveal>

            {/* Main Heading */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="text-gradient">Software Engineer</span>
                  <br />
                  <span className="text-white">&</span>
                  <br />
                  <span className="text-gradient">AI Developer</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
                  I build scalable web applications, AI-driven systems, and modern user experiences with
                  performance-focused architecture.
                </p>
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={0.3} className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('#projects')}
              >
                View Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('#contact')}
              >
                Contact Me
              </Button>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal delay={0.4}>
              <div className="flex items-center gap-6">
                <p className="text-gray-400 text-sm font-medium">Connect with me:</p>
                <div className="flex gap-4">
                  {[
                    {
                      icon: Code2,
                      href: 'https://github.com/parthmakwana',
                      label: 'GitHub',
                    },
                    {
                      icon: ExternalLink,
                      href: 'https://linkedin.com/in/parth-makwana',
                      label: 'LinkedIn',
                    },
                    {
                      icon: Mail,
                      href: 'mailto:parthmakwana.dev@gmail.com',
                      label: 'Email',
                    },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 hover:border-white/40 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 group"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side - Floating Cards/Visual */}
          <ScrollReveal delay={0.5} className="hidden lg:flex justify-center">
            <div className="relative w-full h-96 md:h-[500px]">
              {/* Floating Code Card */}
              <FloatingElement delay={0} duration={6}>
                <motion.div
                  className="absolute top-0 right-0 w-80 h-48 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 shadow-2xl"
                  whileHover={{ y: -10 }}
                >
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    </div>
                    <code className="text-sm text-purple-300 block">
                      <span className="text-pink-300">const</span> build = (
                      <span className="text-cyan-300">ideas</span>)
                      <br />
                      &nbsp;&nbsp;<span className="text-yellow-300">→</span>{' '}
                      <span className="text-green-300">scalable</span>
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="text-blue-300">solutions</span>;
                    </code>
                  </div>
                </motion.div>
              </FloatingElement>

              {/* Stats Card */}
              <FloatingElement delay={0.2} duration={7}>
                <motion.div
                  className="absolute bottom-0 left-0 w-64 h-40 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-white/10 backdrop-blur-xl p-6 shadow-2xl"
                  whileHover={{ y: -10 }}
                >
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-400">Projects Built</p>
                      <p className="text-3xl font-bold text-gradient">15+</p>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <p className="text-xs text-gray-500">Technologies</p>
                        <p className="text-sm font-semibold text-white">12+</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Experience</p>
                        <p className="text-sm font-semibold text-white">2 Years</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FloatingElement>

              {/* Tech Stack Circle */}
              <FloatingElement delay={0.1} duration={8}>
                <motion.div
                  className="absolute top-32 left-1/2 transform -translate-x-1/2 w-56 h-56 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-purple-500/5 to-cyan-500/5 border border-white/5 flex items-center justify-center">
                    <div className="text-center space-y-3">
                      <p className="text-2xl font-bold text-gradient">Tech Stack</p>
                      <p className="text-xs text-gray-400">Next.js • React • TypeScript</p>
                      <p className="text-xs text-gray-400">Node.js • AI/ML • DevOps</p>
                    </div>
                  </div>
                </motion.div>
              </FloatingElement>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-500">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-center justify-center">
            <motion.div
              className="w-1 h-2 bg-white/40 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
