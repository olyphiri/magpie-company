'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Shield, Zap, BarChart3 } from 'lucide-react'
import GlassCard from '@/components/GlassCard'
import StatsSection from '@/components/StatsSection'
import CommandTerminal from '@/components/CommandTerminal'

export default function Home() {
  const services = [
    { icon: TrendingUp, title: 'Financial & Compliance', description: 'ZIMRA, VAT, PAYE, NSSA, tax consulting & auditing.' },
    { icon: Zap, title: 'Digital Innovation', description: 'Websites, software, AI, automation & IT support.' },
    { icon: Shield, title: 'Business Automation', description: 'ERP, CRM, payroll, invoicing & dashboards.' },
    { icon: BarChart3, title: 'Strategic Consulting', description: 'SME advisory, tender docs & process optimization.' },
  ]

  return (
    <div className="relative">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy to-navy-light opacity-90" />
        <div className="container mx-auto px-6 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full glass border border-electric-blue/30 mb-6"
          >
            <span className="text-cyan text-sm font-semibold">✦ Business Compliance Meets Digital Innovation</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight"
          >
            Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyan">Business</span>
            <br />
            With Elite Compliance & Tech
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mt-6"
          >
            MAGPIE & CO provides world-class financial consulting, government compliance, and OLYTECH PROJECTS delivers cutting-edge digital transformation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <Link href="/finance-compliance" className="group bg-gradient-to-r from-electric-blue to-cyan text-navy-deep font-bold py-4 px-8 rounded-full hover:shadow-lg transition flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
            <Link href="/contact" className="glass border border-electric-blue/50 text-white font-bold py-4 px-8 rounded-full hover:bg-electric-blue/10 transition">
              Contact Sales
            </Link>
          </motion.div>
        </div>
      </section>

      <StatsSection />

      <section className="py-24 px-6 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Integrated Excellence</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <GlassCard key={idx} className="text-center p-6">
              <div className="inline-flex p-3 rounded-full bg-electric-blue/20 text-electric-blue mb-4">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Explore Our Capabilities</h2>
          <p className="text-gray-400">Type <span className="text-cyan">'help'</span></p>
        </div>
        <CommandTerminal />
      </section>

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-cyan/10 blur-3xl" />
        <div className="container mx-auto text-center relative z-10">
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Ready to Elevate Your Enterprise?</h2>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-yellow-500 text-navy-deep font-bold py-4 px-8 rounded-full hover:shadow-lg transition">
              Schedule a Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}