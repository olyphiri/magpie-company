'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import GlassCard from '@/components/GlassCard'
import { FileText, Calculator, Building, Receipt, Users, BarChart3, Shield, Briefcase } from 'lucide-react'

const services = [
  { icon: FileText, title: 'ZIMRA Registration', category: 'tax' },
  { icon: Receipt, title: 'VAT Registration & Returns', category: 'tax' },
  { icon: Users, title: 'PAYE Registration & Compliance', category: 'tax' },
  { icon: Building, title: 'Company Registration', category: 'corporate' },
  { icon: Calculator, title: 'Tax Consulting', category: 'tax' },
  { icon: BarChart3, title: 'Financial Reporting', category: 'accounting' },
  { icon: Shield, title: 'Internal Auditing', category: 'compliance' },
  { icon: Briefcase, title: 'Payroll Administration', category: 'payroll' },
]

const categories = ['all', 'tax', 'corporate', 'accounting', 'compliance', 'payroll']

export default function FinanceCompliance() {
  const [activeCategory, setActiveCategory] = useState('all')
  const filtered = services.filter(s => activeCategory === 'all' || s.category === activeCategory)

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-electric-blue to-cyan bg-clip-text text-transparent">
            Finance & Compliance
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">Expert financial consulting and government compliance services.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full capitalize transition-all ${activeCategory === cat ? 'bg-electric-blue text-navy-deep font-bold' : 'glass text-gray-300 hover:bg-electric-blue/20'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
              <GlassCard className="p-6 h-full hover:border-electric-blue">
                <service.icon className="w-10 h-10 text-gold mb-3" />
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-400 text-sm mt-2">Professional compliance and financial management tailored to your business.</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-display font-bold text-center mb-8">Compliance Tracking Dashboard</h2>
          <GlassCard className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-navy-light rounded-lg p-4 text-center">
                <p className="text-gray-400 text-sm">VAT Status</p>
                <p className="text-2xl font-bold text-green-400">Compliant</p>
              </div>
              <div className="bg-navy-light rounded-lg p-4 text-center">
                <p className="text-gray-400 text-sm">PAYE Due Date</p>
                <p className="text-2xl font-bold text-cyan">10th May</p>
              </div>
              <div className="bg-navy-light rounded-lg p-4 text-center">
                <p className="text-gray-400 text-sm">NSSA Returns</p>
                <p className="text-2xl font-bold text-gold">Pending</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}