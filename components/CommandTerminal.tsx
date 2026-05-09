'use client'

import { useState, useRef, useEffect } from 'react'
import { Terminal, Send } from 'lucide-react'

const commands: Record<string, string> = {
  help: 'Available commands: services, contact, pricing, about, clear',
  services: '🔹 Finance & Compliance | 🔸 Technology Solutions | 🔹 Business Automation | 🔸 IT Consulting',
  contact: 'Email: peterolympushiri@icloud.com | WhatsApp: +263784140899 / +263783350031',
  pricing: 'Visit our Pricing page for Starter, SME, Enterprise, and Retainer plans.',
  about: 'MAGPIE & CO: Business Compliance Meets Digital Innovation. A premium consulting & tech firm.',
}

export default function CommandTerminal() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<{ command: string; response: string }[]>([
    { command: 'welcome', response: 'MAGPIE & CO Terminal v1.0. Type "help" to see available commands.' },
  ])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase()
    if (command === 'clear') {
      setHistory([])
      setInput('')
      return
    }
    let response = commands[command] || `Command not found: ${command}. Type "help" for available commands.`
    setHistory(prev => [...prev, { command: cmd, response }])
    setInput('')
  }

  useEffect(() => { inputRef.current?.focus() }, [])

  return (
    <div className="glass rounded-xl border border-electric-blue/30 overflow-hidden">
      <div className="bg-navy-deep px-4 py-2 flex items-center gap-2 border-b border-electric-blue/20">
        <Terminal size={16} className="text-electric-blue" />
        <span className="text-sm font-mono text-gray-300">MAGPIE@terminal:~$</span>
      </div>
      <div className="p-4 h-80 overflow-y-auto font-mono text-sm">
        {history.map((item, idx) => (
          <div key={idx} className="mb-3">
            <div className="text-cyan">$ {item.command}</div>
            <div className="text-gray-300 ml-4">{item.response}</div>
          </div>
        ))}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-cyan">$</span>
          <input ref={inputRef} type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleCommand(input)} className="flex-1 bg-transparent outline-none text-white font-mono" placeholder="Type a command..." />
          <button onClick={() => handleCommand(input)} className="text-electric-blue hover:text-cyan"><Send size={16} /></button>
        </div>
      </div>
    </div>
  )
}