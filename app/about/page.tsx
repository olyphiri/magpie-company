'use client'

import { motion } from 'framer-motion'
import GlassCard from '@/components/GlassCard'
import { Target, Eye, Shield, Zap, Users, Award } from 'lucide-react'

export default function About() {
  const values = [
    { icon: Shield, title: 'Integrity', desc: 'Uncompromising ethical standards in every engagement.' },
    { icon: Zap, title: 'Innovation', desc: 'Leveraging cutting-edge tech for business growth.' },
    { icon: Award, title: 'Excellence', desc: 'Delivering premium results that exceed expectations.' },
    { icon: Users, title: 'Client Success', desc: 'Your growth is our primary metric for success.' },
  ]

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-electric-blue to-cyan bg-clip-text text-transparent">
            About MAGPIE & CO
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Business Compliance Meets Digital Innovation — We bridge finance, compliance, and technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-3xl font-display font-bold mb-4">Peter O Phiri</h2>
            <p className="text-electric-blue text-xl mb-4">Business Associate & Web Specialist | Finance + Technology Expertise</p>
            <p className="text-gray-300 leading-relaxed">
              With deep expertise in both financial compliance and digital innovation, Peter leads the convergence of traditional business consulting with modern technology solutions. His vision drives MAGPIE & CO to deliver enterprise-grade services that empower businesses across Africa and beyond.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="relative h-64 lg:h-auto rounded-2xl overflow-hidden glass">
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-cyan/20" />
            <div className="flex items-center justify-center h-full text-center p-6">
              <div>
                <p className="text-2xl font-display font-bold">Peter O Phiri</p>
                <p className="text-cyan">Principal Consultant</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <GlassCard className="p-8">
            <Target className="w-12 h-12 text-electric-blue mb-4" />
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-300">To empower businesses through professional compliance, financial intelligence, technology-driven solutions, and strategic consulting that drive sustainable growth.</p>
          </GlassCard>
          <GlassCard className="p-8">
            <Eye className="w-12 h-12 text-cyan mb-4" />
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-300">To become a leading African business solutions and digital consulting firm recognized for transforming businesses through innovation, compliance, and automation.</p>
          </GlassCard>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
                <GlassCard className="text-center h-full">
                  <val.icon className="w-10 h-10 text-gold mx-auto mb-3" />
                  <h4 className="text-xl font-bold mb-2">{val.title}</h4>
                  <p className="text-gray-400 text-sm">{val.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-display font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['SMEs & Startups', 'Financial Services', 'Retail', 'Construction', 'Education', 'Healthcare', 'Logistics', 'Tech Companies'].map(industry => (
              <div key={industry} className="glass rounded-lg p-4 text-sm font-medium">{industry}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}