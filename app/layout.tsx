import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/contexts/AuthContext'
import FloatingParticles from '@/components/FloatingParticles'
import WhatsAppButton from '@/components/WhatsAppButton'
import ChatBot from '@/components/ChatBot'
import WelcomeModal from '@/components/WelcomeModal'

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'MAGPIE & CO | Business Compliance Meets Digital Innovation',
  description: 'Premium financial consulting, government compliance, business automation, and digital transformation solutions for enterprises.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.variable} font-sans`}>
        <AuthProvider>
          <Navbar />
          <main className="relative overflow-x-hidden">
            {children}
          </main>
          <Footer />
          <FloatingParticles />
          <WhatsAppButton />
          <ChatBot />
          <WelcomeModal />
        </AuthProvider>
      </body>
    </html>
  )
}