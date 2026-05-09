'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I need assistance with your premium services.')
    window.open(`https://wa.me/263784140899?text=${message}`, '_blank')
  }

  return (
    <button onClick={handleWhatsApp} className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 group" aria-label="Chat on WhatsApp">
      <MessageCircle size={28} />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-navy-deep text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">Chat with us</span>
    </button>
  )
}