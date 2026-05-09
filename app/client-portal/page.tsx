'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import GlassCard from '@/components/GlassCard'
import { Upload, MessageCircle, Bell, Download, LogOut, CheckCircle, Clock } from 'lucide-react'
import jsPDF from 'jspdf'

export default function ClientPortal() {
  const { user, login, register, logout } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [activeTab, setActiveTab] = useState('dashboard')
  const [notifications] = useState(['Your VAT filing is due in 5 days', 'New invoice #INV-001 generated'])

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    let success
    if (isLogin) success = await login(email, password)
    else success = await register(name, email, password)
    if (!success) alert('Authentication failed')
  }

  const generateInvoice = () => {
    const doc = new jsPDF()
    doc.text('MAGPIE & CO - Invoice', 20, 20)
    doc.text(`Invoice #: INV-${Date.now()}`, 20, 30)
    doc.text(`Client: ${user?.name}`, 20, 40)
    doc.text('Retainer Plan: $1,299', 20, 50)
    doc.save(`invoice_${Date.now()}.pdf`)
  }

  if (!user) {
    return (
      <div className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
        <GlassCard className="max-w-md w-full p-8">
          <h2 className="text-2xl font-display font-bold text-center mb-6">{isLogin ? 'Login' : 'Register'}</h2>
          <form onSubmit={handleAuth} className="space-y-4">
            {!isLogin && <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-navy-light rounded-lg px-4 py-2 outline-none focus:ring-1 focus:ring-electric-blue" required />}
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-navy-light rounded-lg px-4 py-2 outline-none focus:ring-1 focus:ring-electric-blue" required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-navy-light rounded-lg px-4 py-2 outline-none focus:ring-1 focus:ring-electric-blue" required />
            <button type="submit" className="w-full bg-gradient-to-r from-electric-blue to-cyan text-navy-deep font-bold py-2 rounded-lg">{isLogin ? 'Login' : 'Create Account'}</button>
          </form>
          <p className="text-center text-sm mt-4">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button onClick={() => setIsLogin(!isLogin)} className="text-electric-blue">{isLogin ? 'Register' : 'Login'}</button>
          </p>
        </GlassCard>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-display font-bold">Welcome, {user.name}</h1>
          <button onClick={logout} className="flex items-center gap-2 text-red-400 hover:text-red-300"><LogOut size={18} /> Logout</button>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {['dashboard', 'documents', 'invoices', 'support'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-5 py-2 rounded-full capitalize ${activeTab === tab ? 'bg-electric-blue text-navy-deep' : 'glass'}`}>{tab}</button>
          ))}
        </div>

        {activeTab === 'dashboard' && (
          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard className="p-6"><CheckCircle className="text-green-400 mb-2" /><h3 className="font-bold">Compliance Status</h3><p className="text-sm text-gray-400">VAT: Compliant | PAYE: Pending</p></GlassCard>
            <GlassCard className="p-6"><Clock className="text-cyan mb-2" /><h3 className="font-bold">Active Services</h3><p>Tax Consulting, ERP Implementation</p></GlassCard>
            <GlassCard className="p-6"><Bell className="text-gold mb-2" /><h3 className="font-bold">Notifications</h3>{notifications.map((n, i) => <p key={i} className="text-sm">• {n}</p>)}</GlassCard>
          </div>
        )}

        {activeTab === 'documents' && (
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold mb-4">Upload Documents</h3>
            <div className="border-2 border-dashed border-electric-blue/30 rounded-lg p-8 text-center">
              <Upload className="mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-400">Drag & drop or click to upload compliance documents</p>
              <input type="file" className="hidden" id="fileUpload" />
              <button className="mt-4 bg-electric-blue px-4 py-2 rounded-lg text-sm" onClick={() => alert('Upload simulation')}>Select File</button>
            </div>
          </GlassCard>
        )}

        {activeTab === 'invoices' && (
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold mb-4">Invoices</h3>
            <div className="flex justify-between items-center border-b border-white/10 py-3">
              <span>INV-001 - Retainer (April)</span>
              <button onClick={generateInvoice} className="text-electric-blue flex gap-1"><Download size={16} /> PDF</button>
            </div>
          </GlassCard>
        )}

        {activeTab === 'support' && (
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold mb-4">Support Chat</h3>
            <div className="h-64 overflow-y-auto bg-navy-light rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-400">Support: How can we help you today?</p>
            </div>
            <div className="flex gap-2">
              <input type="text" placeholder="Type your message..." className="flex-1 bg-navy-light rounded-full px-4 py-2" />
              <button className="bg-electric-blue px-4 py-2 rounded-full"><MessageCircle size={18} /></button>
            </div>
          </GlassCard>
        )}
      </div>
    </div>
  )
}