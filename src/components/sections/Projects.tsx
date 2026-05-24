'use client';

import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/effects/Animations';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Slide',
    description:
      'AI-powered Instagram DM automation platform with intelligent pipelines, webhook handling, Stripe billing integration, and secure Clerk authentication.',
    longDescription:
      'A sophisticated automation platform that leverages AI to handle Instagram direct messages intelligently. Features include context-aware response generation, payment processing, and user management.',
    tech: ['Next.js', 'TypeScript', 'Clerk', 'OpenAI API', 'Stripe'],
    image: '🤖',
    link: '#',
    github: 'https://github.com/ParthDevInnovator/Slide',
    color: 'from-purple-500/20 to-pink-500/20',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Wallet',
    description:
      'Real-time digital wallet with peer-to-peer transfers, merchant payments, WebSocket notifications, and comprehensive analytics dashboard.',
    longDescription:
      'A modern fintech solution enabling seamless money transfers and payments with real-time updates. Built with cutting-edge technologies for reliability and performance.',
    tech: ['Next.js', 'Prisma', 'NextAuth', 'TypeScript', 'WebSockets'],
    image: '💳',
    link: 'https://wallet-user-app-lilac.vercel.app/',
    github: 'https://github.com/ParthDevInnovator/wallet',
    color: 'from-cyan-500/20 to-blue-500/20',
    gradient: 'from-cyan-600 to-blue-600',
  },
  {
    title: 'StudyClub',
    description:
      'Comprehensive ed-tech learning platform with role-based access control, payment integration, progress tracking, and interactive learning tools.',
    longDescription:
      'An educational platform designed for collaborative learning. Includes course management, student progress tracking, and multiple payment options.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Razorpay'],
    image: '📚',
    link: 'https://studyclub.vercel.app',
    github: 'https://github.com/ParthDevInnovator/studyclub',
    color: 'from-green-500/20 to-emerald-500/20',
    gradient: 'from-green-600 to-emerald-600',
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height - 0.5;
    const y = (e.clientX - rect.left) / rect.width - 0.5;
    setRotation({ x: x * 5, y: y * 5 });
  };

  return (
    <StaggerItem>
      <motion.div
        className="h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          setRotation({ x: 0, y: 0 });
          setIsHovered(false);
        }}
        onMouseEnter={() => setIsHovered(true)}
      >
        <motion.div
          className={`relative rounded-2xl bg-gradient-to-br ${project.color} border border-white/10 backdrop-blur-xl overflow-hidden h-full group cursor-pointer`}
          style={{
            rotateX: rotation.x,
            rotateY: rotation.y,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          whileHover={{ y: -10 }}
        >
          {/* Animated Border Gradient */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20" />
          </div>

          {/* Content */}
          <div className="relative p-6 md:p-8 h-full flex flex-col justify-between z-10">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{project.image}</span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <ExternalLink className="w-5 h-5 text-purple-400" />
                </motion.div>
              </div>

              <p className="text-gray-300 leading-relaxed">{project.description}</p>

              {/* Tech Stack Tags */}
              <motion.div
                className="flex flex-wrap gap-2 pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-xs font-medium text-purple-200 hover:bg-white/20 transition-colors cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Actions */}
            <motion.div
              className="flex gap-3 pt-6 border-t border-white/10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            >
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600/80 to-purple-700/80 hover:from-purple-500 hover:to-purple-600 text-white text-sm font-medium transition-all flex items-center justify-center gap-2 group/btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Live Demo
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all flex items-center justify-center gap-2 border border-white/20 hover:border-white/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                Code
              </motion.a>
            </motion.div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-0 bg-radial-gradient blur-2xl" />
          </div>
        </motion.div>
      </motion.div>
    </StaggerItem>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-20">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Showcase of recent work demonstrating full-stack capabilities and innovative solutions
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </StaggerContainer>

        {/* View All Projects */}
        <ScrollReveal delay={0.3} className="flex justify-center mt-16 md:mt-20">
          <motion.a
            href="https://github.com/ParthDevInnovator"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold transition-all shadow-lg shadow-purple-500/50 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
}
