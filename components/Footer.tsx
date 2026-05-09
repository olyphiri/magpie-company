import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-electric-blue/20 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-electric-blue to-cyan bg-clip-text text-transparent mb-4">MAGPIE & CO</h3>
            <p className="text-gray-400 text-sm">Business Compliance Meets Digital Innovation.</p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-400 hover:text-electric-blue transition"><Linkedin size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-electric-blue transition"><Twitter size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-electric-blue transition"><Facebook size={20} /></Link>
              <Link href="#" className="text-gray-400 hover:text-electric-blue transition"><Instagram size={20} /></Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Finance & Compliance', 'Technology Solutions', 'Business Automation', 'Pricing'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="text-gray-400 hover:text-electric-blue text-sm transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm"><Phone size={16} className="text-electric-blue" /><span>+263 78 414 0899</span></li>
              <li className="flex items-center gap-3 text-gray-400 text-sm"><Phone size={16} className="text-electric-blue" /><span>+263 78 335 0031</span></li>
              <li className="flex items-center gap-3 text-gray-400 text-sm"><Mail size={16} className="text-electric-blue" /><span>peterolympushiri@icloud.com</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-3">Get the latest insights on compliance and tech.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="bg-navy-light px-4 py-2 rounded-l-lg text-sm w-full focus:outline-none focus:ring-1 focus:ring-electric-blue" />
              <button className="bg-electric-blue text-navy-deep px-4 py-2 rounded-r-lg font-semibold text-sm hover:bg-cyan transition">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} MAGPIE & CO × OLYTECH PROJECTS. All rights reserved.
        </div>
      </div>
    </footer>
  )
}