'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/effects/Animations';
import { Trophy, Zap } from 'lucide-react';

export default function Hackathon() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="mb-16 md:mb-20">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Hackathon Achievement</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Innovation and problem-solving at scale
            </p>
          </div>
        </ScrollReveal>

        {/* Hackathon Card */}
        <ScrollReveal>
          <motion.div
            className="relative"
            whileHover={{ y: -10 }}
          >
            <GlassCard className="bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 border-white/10 hover:border-yellow-500/30">
              <div className="space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 flex items-center justify-center flex-shrink-0"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      <Trophy className="w-8 h-8 text-yellow-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        Smart India Hackathon 2025
                      </h3>
                      <p className="text-purple-300 font-medium mt-2">National Innovation Challenge</p>
                    </div>
                  </div>
                  <motion.div
                    className="px-6 py-3 rounded-lg bg-yellow-500/20 border border-yellow-500/30 text-yellow-200 font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    Innovation
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed">
                  Built an innovative <span className="text-gradient font-semibold">Earthquake-Safe Dialysis System</span> combining
                  hardware and software expertise. This project demonstrates advanced sensor integration, real-time data
                  processing, and emergency response systems.
                </p>

                {/* Tech Stack */}
                <div className="space-y-4">
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    Technical Implementation
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      'Raspberry Pi Zero',
                      'ESP32',
                      'IMU Sensors',
                      'PID Control System',
                      'Emergency SOS System',
                      'Real-time Stabilization',
                    ].map((tech, i) => (
                      <motion.div
                        key={i}
                        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.05, x: 5 }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  {[
                    { label: 'Lives Impacted', value: 'Millions' },
                    { label: 'Innovation Level', value: 'Critical' },
                    { label: 'Scope', value: 'National' },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      className="p-4 rounded-lg bg-white/5 text-center"
                      whileHover={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                    >
                      <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                      <p className="text-gradient text-lg font-bold">{stat.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
