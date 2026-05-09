'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import GlassCard from '@/components/GlassCard'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent! We will contact you shortly.')
    console.log(form)
  }

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold">Contact Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">Reach out to our enterprise sales and support team.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="w-full bg-navy-light rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-electric-blue" required />
              <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="w-full bg-navy-light rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-electric-blue" required />
              <textarea rows={5} placeholder="How can we help?" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="w-full bg-navy-light rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-electric-blue" required />
              <button type="submit" className="w-full bg-gradient-to-r from-electric-blue to-cyan text-navy-deep font-bold py-3 rounded-lg flex items-center justify-center gap-2"><Send size={18} /> Send Message</button>
            </form>
          </GlassCard>

          <div className="space-y-6">
            <GlassCard className="p-6 flex items-center gap-4">
              <Phone className="w-8 h-8 text-electric-blue" />
              <div><p className="font-bold">WhatsApp / Call</p><p className="text-gray-400">+263 78 414 0899<br />+263 78 335 0031</p></div>
            </GlassCard>
            <GlassCard className="p-6 flex items-center gap-4">
              <Mail className="w-8 h-8 text-electric-blue" />
              <div><p className="font-bold">Email</p><p className="text-gray-400">peterolympushiri@icloud.com</p></div>
            </GlassCard>
            <GlassCard className="p-6 flex items-center gap-4">
              <MapPin className="w-8 h-8 text-electric-blue" />
              <div><p className="font-bold">Location</p><p className="text-gray-400">Harare, Zimbabwe / Global Remote</p></div>
            </GlassCard>
            <div className="glass rounded-2xl overflow-hidden h-64">
              <iframe src="https://maps.google.com/maps?q=Harare&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-full" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}