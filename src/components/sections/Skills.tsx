'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/effects/Animations';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['Next.js', 'React.js', 'Tailwind CSS', 'Redux', 'React Query'],
    color: 'from-pink-500/20 to-purple-500/20',
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets'],
    color: 'from-purple-500/20 to-blue-500/20',
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: ['MongoDB', 'PostgreSQL', 'Prisma', 'Mongoose'],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'AI & Automation',
    icon: '🤖',
    skills: ['OpenAI API', 'Prompt Engineering', 'Context-Aware Pipelines', 'Webhook Automation'],
    color: 'from-cyan-500/20 to-green-500/20',
  },
  {
    title: 'DevOps',
    icon: '🚀',
    skills: ['Docker', 'GitHub Actions', 'Vercel', 'Git', 'Postman'],
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Languages',
    icon: '💻',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C++'],
    color: 'from-emerald-500/20 to-pink-500/20',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-20">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Skills & Technologies</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              A comprehensive toolkit for building modern applications
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <GlassCard
                  className={`bg-gradient-to-br ${category.color} h-full`}
                  hover={true}
                >
                  <div className="space-y-6">
                    {/* Category Header */}
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{category.icon}</span>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>

                    {/* Skills */}
                    <div className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-2 group cursor-pointer"
                          whileHover={{ x: 5 }}
                        >
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 opacity-70 group-hover:opacity-100" />
                          <span className="text-gray-300 group-hover:text-white transition-colors">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Proficiency Indicators */}
        <ScrollReveal delay={0.3} className="mt-16 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { label: 'Full Stack Development', percentage: 95 },
              { label: 'AI Integration', percentage: 85 },
              { label: 'UI/UX Design', percentage: 80 },
              { label: 'Performance Optimization', percentage: 90 },
            ].map((skill, i) => (
              <motion.div
                key={i}
                className="space-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium text-white">{skill.label}</p>
                  <p className="text-purple-400 font-semibold">{skill.percentage}%</p>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
