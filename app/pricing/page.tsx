'use client'

import { motion } from 'framer-motion'
import GlassCard from '@/components/GlassCard'
import { Check, Zap, Building2, Crown } from 'lucide-react'

const plans = [
  { name: 'Starter', icon: Zap, price: '$299', features: ['Basic Compliance', 'Tax Filing Support', 'Email Support', '1 User'] },
  { name: 'SME', icon: Building2, price: '$799', features: ['Full Compliance Suite', 'Payroll System', 'CRM Access', 'Priority Support', '5 Users'] },
  { name: 'Enterprise', icon: Crown, price: 'Custom', features: ['Custom ERP', 'Dedicated Account Manager', '24/7 Support', 'Unlimited Users', 'AI Automation'] },
]

export default function Pricing() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold">Premium Pricing Plans</h1>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">Choose the plan that fits your enterprise needs.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
              <GlassCard className="p-8 h-full text-center relative overflow-hidden">
                {idx === 2 && <div className="absolute top-0 right-0 bg-gold text-navy-deep px-4 py-1 rounded-bl-lg text-sm font-bold">Most Popular</div>}
                <plan.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-3xl font-display font-bold mt-4">{plan.price}<span className="text-sm text-gray-400">/mo</span></p>
                <ul className="mt-6 space-y-3 text-left">
                  {plan.features.map((feat, i) => <li key={i} className="flex items-center gap-2"><Check size={16} className="text-cyan" /> {feat}</li>)}
                </ul>
                <button className="mt-8 w-full bg-gradient-to-r from-electric-blue to-cyan text-navy-deep font-bold py-3 rounded-full hover:shadow-lg transition">Get Started</button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}