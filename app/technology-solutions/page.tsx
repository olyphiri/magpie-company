'use client'

import { motion } from 'framer-motion'
import GlassCard from '@/components/GlassCard'
import { Code2, Layout, Shield, Cloud, Bot, Wifi, Database, Cpu } from 'lucide-react'

const solutions = [
  { icon: Code2, title: 'Web & Software Development', desc: 'Custom websites, web apps, and enterprise software.' },
  { icon: Layout, title: 'UI/UX Design', desc: 'Premium, conversion-focused digital experiences.' },
  { icon: Shield, title: 'Cybersecurity', desc: 'Protect your business with advanced security protocols.' },
  { icon: Cloud, title: 'Cloud Systems', desc: 'Scalable cloud infrastructure and migration.' },
  { icon: Bot, title: 'AI Solutions', desc: 'Intelligent automation and machine learning integration.' },
  { icon: Wifi, title: 'Networking & IT Support', desc: 'Reliable network infrastructure and 24/7 support.' },
  { icon: Database, title: 'ERP & CRM Systems', desc: 'Unified platforms for business management.' },
  { icon: Cpu, title: 'Digital Transformation', desc: 'End-to-end modernization of business processes.' },
]

export default function TechnologySolutions() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-cyan to-electric-blue bg-clip-text text-transparent">
            Technology Solutions
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">Cutting-edge digital innovation by OLYTECH PROJECTS.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
              <GlassCard className="p-6 h-full group hover:border-cyan">
                <sol.icon className="w-12 h-12 text-cyan mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{sol.title}</h3>
                <p className="text-gray-400">{sol.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}