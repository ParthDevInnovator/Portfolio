'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/effects/Animations';
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import { FloatingOrbs, GridBackground } from '@/components/effects/BackgroundEffects';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <FloatingOrbs />
      <GridBackground />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Content */}
        <ScrollReveal>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-gradient">Let&apos;s Build Something</span>
                <br />
                <span className="text-white">Amazing Together</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question or
                just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Email CTA */}
            <ScrollReveal delay={0.2}>
              <motion.a
                href="mailto:parthmakwana8998@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold transition-all shadow-xl shadow-purple-500/50 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Get In Touch
                <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </motion.a>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal delay={0.3}>
              <div className="space-y-6">
                <p className="text-gray-400 font-medium">Or connect with me on:</p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {[
                    {
                      icon: Github,
                      label: 'GitHub',
                      href: 'https://github.com/ParthDevInnovator',
                      color: 'hover:text-white',
                    },
                    {
                      icon: Linkedin,
                      label: 'LinkedIn',
                      href: 'https://www.linkedin.com/in/parth-makwana712/?skipRedirect=true',
                      color: 'hover:text-blue-400',
                    },
                    {
                      icon: Mail,
                      label: 'Email',
                      href: 'mailto:parthmakwana8998@gmail.com',
                      color: 'hover:text-purple-400',
                    },
                    {
                      icon: Download,
                      label: 'Resume',
                      href: 'https://drive.google.com/file/d/1PeEzr3EkAZKHdq2sD64aSD2dmR6sm4zh/view?usp=sharing',
                      color: 'hover:text-cyan-400',
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center gap-2 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group ${social.color}`}
                      whileHover={{ y: -5, scale: 1.05 }}
                    >
                      <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                      <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
