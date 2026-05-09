'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Finance & Compliance', href: '/finance-compliance' },
  { name: 'Technology Solutions', href: '/technology-solutions' },
  { name: 'Business Automation', href: '/business-automation' },
  { name: 'Client Portal', href: '/client-portal' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Tech Support', href: '/tech-support' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-display font-bold bg-gradient-to-r from-electric-blue to-cyan bg-clip-text text-transparent">
          MAGPIE & CO
          <span className="text-xs block text-gold">× OLYTECH</span>
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-electric-blue ${pathname === link.href ? 'text-electric-blue border-b-2 border-electric-blue' : 'text-gray-300'}`}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden glass border-t border-white/10">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium py-2 transition-colors ${pathname === link.href ? 'text-electric-blue' : 'text-gray-300'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2"><ThemeToggle /></div>
          </div>
        </div>
      )}
    </nav>
  )
}