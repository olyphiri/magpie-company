'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('magpie_user')
    if (stored) setUser(JSON.parse(stored))
  }, [])

  const login = async (email: string, password: string) => {
    const mockUser = { email, name: email.split('@')[0] }
    setUser(mockUser)
    localStorage.setItem('magpie_user', JSON.stringify(mockUser))
    return true
  }

  const register = async (name: string, email: string, password: string) => {
    const newUser = { email, name }
    setUser(newUser)
    localStorage.setItem('magpie_user', JSON.stringify(newUser))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('magpie_user')
  }

  return <AuthContext.Provider value={{ user, login, register, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}