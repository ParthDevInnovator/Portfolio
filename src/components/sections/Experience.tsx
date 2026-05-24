'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/effects/Animations';
import {  Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'FiveU Technologies',
    role: 'Software Developer',
    duration: 'Jan 2026 – Present',
    icon: '🚀',
    highlights: [
      'Building MyUPSC, a scalable ed-tech platform',
      'Developing RESTful APIs with Express.js and Node.js',
      'Performance optimization and caching strategies',
      'PostgreSQL and Next.js architecture',
    ],
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    company: 'EcodeDash',
    role: 'SDE Intern',
    duration: 'Mar 2026 – Present',
    icon: '💻',
    highlights: [
      'Implementing CRM workflows and backend services',
      'Backend API development and optimization',
      'Frontend integrations with React components',
      'Bug fixing and system stability improvements',
    ],
    color: 'from-cyan-500/20 to-blue-500/20',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-20">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Professional journey and career highlights
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {/* Timeline */}
          <StaggerContainer className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent opacity-20" />

            {experiences.map((exp, index) => (
              <StaggerItem key={index}>
                <motion.div className="relative md:pl-32">
                  {/* Timeline Dot */}
                  <motion.div
                    className="hidden md:block absolute -left-6 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 ring-4 ring-background"
                    whileHover={{ scale: 1.3 }}
                  />

                  {/* Card */}
                  <GlassCard className={`bg-gradient-to-br ${exp.color} hover:border-white/20`}>
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <span className="text-3xl">{exp.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                            <p className="text-purple-300 font-medium">{exp.company}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <motion.div
                            key={i}
                            className="flex gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <span className="text-purple-400 mt-1">▸</span>
                            <p className="text-gray-300">{highlight}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
