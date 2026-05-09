'use client'

import { motion } from 'framer-motion'
import GlassCard from '@/components/GlassCard'
import { BarChart3, CreditCard, Users, Settings, PieChart, TrendingUp } from 'lucide-react'

const automations = [
  { icon: CreditCard, title: 'Payroll Systems', desc: 'Automated salary processing, tax deductions, and payslips.' },
  { icon: BarChart3, title: 'Invoice Systems', desc: 'Generate, send, and track invoices automatically.' },
  { icon: Users, title: 'CRM Systems', desc: 'Customer relationship management with sales automation.' },
  { icon: Settings, title: 'ERP Systems', desc: 'End-to-end resource planning for enterprises.' },
  { icon: PieChart, title: 'Business Dashboards', desc: 'Real-time KPIs and analytics for decision making.' },
  { icon: TrendingUp, title: 'Business Intelligence', desc: 'Data-driven insights and predictive analytics.' },
]

export default function BusinessAutomation() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-gold to-yellow-500 bg-clip-text text-transparent">
            Business Automation
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">Streamline operations, reduce costs, and scale with intelligent automation.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automations.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
              <GlassCard className="p-6 h-full">
                <item.icon className="w-10 h-10 text-gold mb-3" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-display font-bold text-center mb-8">Automation Impact Analytics</h2>
          <GlassCard className="p-6">
            <div className="h-64 flex items-end justify-around gap-4">
              {[65, 80, 45, 92, 78, 88].map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${val}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="w-16 bg-gradient-to-t from-electric-blue to-cyan rounded-t-lg"
                  style={{ height: `${val}%` }}
                >
                  <div className="text-center text-sm text-white mt-2">{val}%</div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-6">Efficiency gains after automation implementation</p>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}