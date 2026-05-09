'use client'

import { motion } from 'framer-motion'
import GlassCard from '@/components/GlassCard'
import {
  Laptop,
  ShieldCheck,
  Printer,
  Cloud,
  Cpu,
  Code,
  Wrench,
  Star,
  Globe,
  Mail,
} from 'lucide-react'
import Link from 'next/link'

export default function TechSupport() {
  const services = [
    { icon: Laptop, title: 'Complete Computer Engineering', desc: 'Professional IT services to keep your systems, networks, and business running smoothly.' },
    { icon: ShieldCheck, title: 'Virus & Malware Removal', desc: 'Remove viruses, malware, ransomware and secure your system.' },
    { icon: Printer, title: 'Printer & Peripheral Fix', desc: 'Fix printer errors, driver issues, scanning problems and more.' },
    { icon: Cloud, title: 'Cloud & Backup', desc: 'Setup cloud storage, automatic backups and data synchronization.' },
    { icon: Cpu, title: 'Driver Installation', desc: 'Install, update and fix missing or corrupted device drivers.' },
    { icon: Code, title: 'Software Installation', desc: 'Install and configure software, applications and essential tools.' },
    { icon: Wrench, title: 'Technical Consulting', desc: 'Expert advice on IT infrastructure, systems and digital strategy.' },
  ]

  const processSteps = [
    { step: '1. Diagnose', desc: 'Analyze the issue thoroughly.' },
    { step: '2. Plan', desc: 'Create the best solution for you.' },
    { step: '3. Fix', desc: 'I implement and repair the system.' },
    { step: '4. Optimize', desc: 'Fine-tune for maximum performance.' },
    { step: '5. Support', desc: 'Provide ongoing assistance.' },
  ]

  const popularSolutions = [
    'Fix Windows 10/11 Slow Performance',
    'Fix Wi-Fi Connected But No Internet',
    'Fix Blue Screen Errors (BSOD)',
    'Fix Driver Problems',
    'Remove Viruses & Protect PC',
  ]

  const serviceAreas = [
    'Windows Repair',
    'Network & Internet Solutions',
    'System Maintenance',
    'Cybersecurity',
    'Web Development',
    'Remote & Onsite Support',
  ]

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-electric-blue to-cyan bg-clip-text text-transparent">
            PETER O PHIRI
          </h1>
          <p className="text-electric-blue text-xl mt-2">BUSINESS ASSOCIATE & WEB SPECIALIST</p>
          <p className="text-2xl font-bold text-white mt-4">TECH SOLUTIONS THAT POWER YOUR BUSINESS</p>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            I provide expert computer engineering services, Windows repair, Wi-Fi solutions, network troubleshooting,
            system optimization, and web development to keep your systems running at peak performance.
          </p>
          <div className="flex gap-4 justify-center mt-6">
            <Link href="/contact" className="bg-gradient-to-r from-electric-blue to-cyan text-navy-deep font-bold py-2 px-6 rounded-full hover:shadow-lg transition">
              GET SUPPORT
            </Link>
            <Link href="#services" className="glass border border-electric-blue/50 text-white font-bold py-2 px-6 rounded-full hover:bg-electric-blue/10 transition">
              VIEW SERVICES
            </Link>
          </div>
        </motion.div>

        {/* What I Do - Services Grid */}
        <div id="services" className="mb-20">
          <h2 className="text-3xl font-display font-bold text-center mb-12">WHAT I DO</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 h-full">
                  <service.icon className="w-10 h-10 text-cyan mb-3" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* My Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-display font-bold text-center mb-4">MY PROCESS</h2>
          <p className="text-center text-gray-400 mb-12">Simple. Effective. Reliable.</p>
          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, idx) => (
              <GlassCard key={idx} className="text-center p-4">
                <div className="text-2xl font-bold text-cyan mb-2">{step.step}</div>
                <p className="text-sm text-gray-300">{step.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-20">
          <GlassCard className="p-8 text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-gold" />
              ))}
            </div>
            <p className="text-gray-200 italic text-lg">
              “Peter is professional, fast and very reliable. He fixed my system and network issues perfectly. Highly recommended!”
            </p>
            <p className="text-cyan mt-4 font-bold">— Business Client</p>
          </GlassCard>
        </div>

        {/* Popular Solutions & Service Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <GlassCard className="p-6">
            <h3 className="text-2xl font-bold mb-4">POPULAR SOLUTIONS</h3>
            <ul className="space-y-2">
              {popularSolutions.map((sol, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-cyan">✓</span> {sol}
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="text-2xl font-bold mb-4">SERVICE AREAS</h3>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area, idx) => (
                <span key={idx} className="glass px-3 py-1 rounded-full text-sm">
                  {area}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Contact & Hours */}
        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard className="p-6">
            <h3 className="text-2xl font-bold mb-4">CONTACT INFO</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Globe className="text-cyan" size={18} />
                <a href="https://peterphiri.vercel.app" className="hover:text-cyan">peterphiri.vercel.app</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-cyan" size={18} />
                <a href="mailto:peterolympushiri@icloud.com" className="hover:text-cyan">peterolympushiri@icloud.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="text-cyan" size={18} />
                <a href="#" className="hover:text-cyan">get in touch (contact page)</a>
              </li>
            </ul>
          </GlassCard>
          <GlassCard className="p-6">
            <h3 className="text-2xl font-bold mb-4">WORK HOURS</h3>
            <ul className="space-y-2">
              <li className="flex justify-between"><span>Monday - Friday:</span><span>8:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span><span>9:00 AM - 2:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span><span>Closed</span></li>
              <li className="mt-4 text-cyan">Available for remote support 24/7</li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}