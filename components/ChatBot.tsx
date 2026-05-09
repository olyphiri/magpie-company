'use client'

import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import GlassCard from './GlassCard'

const botResponses: Record<string, string> = {
  default: "Thank you for reaching out! I'm the MAGPIE AI assistant. How can I help you with compliance, finance, or technology today?",
  services: "We offer Financial & Compliance (ZIMRA, VAT, PAYE), Technology Solutions (web dev, AI, automation), and Business Automation (ERP, CRM, dashboards).",
  pricing: "Our plans: Starter ($299/mo), SME ($799/mo), Enterprise (custom). We also have retainer and technology support plans.",
  contact: "You can email peterolympushiri@icloud.com or WhatsApp +263784140899 / +263783350031.",
  portal: "The Client Portal allows you to track services, upload documents, generate invoices, and chat with support. Please login/register.",
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Hello! I am your MAGPIE AI assistant. Ask me about services, pricing, or the client portal.' },
  ])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (!input.trim()) return
    const userMsg = input
    setMessages(prev => [...prev, { role: 'user', text: userMsg }])
    setInput('')

    const lowerMsg = userMsg.toLowerCase()
    let reply = botResponses.default
    if (lowerMsg.includes('service')) reply = botResponses.services
    else if (lowerMsg.includes('price') || lowerMsg.includes('cost')) reply = botResponses.pricing
    else if (lowerMsg.includes('contact')) reply = botResponses.contact
    else if (lowerMsg.includes('portal') || lowerMsg.includes('login')) reply = botResponses.portal

    setTimeout(() => setMessages(prev => [...prev, { role: 'bot', text: reply }]), 500)
  }

  return (
    <>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-electric-blue to-cyan text-navy-deep p-4 rounded-full shadow-2xl hover:scale-110 transition">
          <MessageCircle size={28} />
        </button>
      )}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-80 md:w-96">
          <GlassCard className="p-0 overflow-hidden">
            <div className="bg-navy-deep p-4 flex justify-between items-center border-b border-electric-blue/20">
              <span className="font-bold">MAGPIE AI Assistant</span>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white"><X size={20} /></button>
            </div>
            <div className="h-96 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-xl ${msg.role === 'user' ? 'bg-electric-blue text-navy-deep' : 'glass text-white'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-white/10 flex gap-2">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()} placeholder="Ask me anything..." className="flex-1 bg-navy-light rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-electric-blue" />
              <button onClick={sendMessage} className="bg-electric-blue p-2 rounded-full hover:bg-cyan transition"><Send size={18} /></button>
            </div>
          </GlassCard>
        </div>
      )}
    </>
  )
}