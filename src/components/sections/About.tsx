'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/effects/Animations';
import { Code2, Lightbulb, Zap } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'Building scalable applications from frontend to backend with modern architectures.',
  },
  {
    icon: Lightbulb,
    title: 'AI Integration',
    description: 'Leveraging AI and machine learning to create intelligent, context-aware solutions.',
  },
  {
    icon: Zap,
    title: 'Performance Focused',
    description: 'Optimizing for speed, efficiency, and user experience across all projects.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-20">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Software engineer passionate about building innovative solutions
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a software developer focused on building scalable full-stack applications, AI-powered workflows,
                and high-performance digital experiences. I enjoy solving real-world problems with clean architecture,
                thoughtful UI design, and modern technologies.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                With expertise in both frontend and backend development, I create end-to-end solutions that combine
                technical excellence with intuitive user experiences. My passion lies in exploring cutting-edge
                technologies and implementing them to deliver measurable business value.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Currently working on innovative projects that blend web development, AI integration, and cloud
                infrastructure. Always eager to learn and collaborate on projects that push the boundaries of what's
                possible in modern software development.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { label: 'Projects', value: '15+' },
                  { label: 'Tech Stack', value: '12+' },
                  { label: 'Experience', value: '2Y' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="text-center p-4 rounded-lg bg-white/5 border border-white/10"
                    whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  >
                    <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Content - Features */}
          <StaggerContainer className="space-y-4">
            {features.map((feature, i) => (
              <StaggerItem key={i}>
                <GlassCard className="hover:border-purple-500/30 transition-colors">
                  <div className="flex gap-6">
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <feature.icon className="w-6 h-6 text-purple-400" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
