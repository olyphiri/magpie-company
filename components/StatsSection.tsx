'use client'

import { motion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'
import GlassCard from './GlassCard'
import { Users, Building2, Award, Clock } from 'lucide-react'

const stats = [
  { icon: Users, value: 250, suffix: '+', label: 'Enterprise Clients' },
  { icon: Building2, value: 15, suffix: '+', label: 'Years Combined Expertise' },
  { icon: Award, value: 98, suffix: '%', label: 'Client Satisfaction' },
  { icon: Clock, value: 500, suffix: '+', label: 'Projects Delivered' },
]

export default function StatsSection() {
  return (
    <section className="py-16 px-6 container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
            <GlassCard className="text-center">
              <stat.icon className="w-10 h-10 text-electric-blue mx-auto mb-3" />
              <div className="text-4xl font-display font-bold text-white"><AnimatedCounter end={stat.value} suffix={stat.suffix} /></div>
              <p className="text-gray-400 mt-1">{stat.label}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}