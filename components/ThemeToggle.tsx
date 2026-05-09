'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [isDark])

  return (
    <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition" aria-label="Toggle theme">
      {isDark ? <Sun size={18} className="text-gold" /> : <Moon size={18} className="text-electric-blue" />}
    </button>
  )
}