import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

interface User {
  id: string
  email: string
  name: string
  capabilities: string[]
}

function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/v1/auth/me', { credentials: 'include' })
      .then(res => res.ok ? res.json() : null)
      .then(data => { setUser(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const hasCapability = (cap: string) => user?.capabilities.includes(cap) ?? false
  return { user, loading, hasCapability }
}

function Login() {
  useEffect(() => {
    window.location.href = '/api/v1/auth/login'
  }, [])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
      <div className="text-center"><h1 className="text-2xl font-bold">Sign in to Shiryu Team</h1></div>
    </div>
  )
}

function ProtectedRoute({ children, capability }: { children: React.ReactNode; capability?: string }) {
  const { user, loading, hasCapability } = useAuth()
  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin h-8 w-8 border-4 border-indigo-500 border-t-transparent rounded-full" /></div>
  if (!user) return <Navigate to="/login" replace />
  if (capability && !hasCapability(capability)) return <Navigate to="/" replace />
  return <>{children}</>
}

export default function App() {
  const settings = require('../settings.json')
  const capability = settings.capabilities?.[0]
  
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={
        <ProtectedRoute capability={capability}>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-6">
            <h1 className="text-2xl font-bold">{settings.name}</h1>
            <p className="mt-2 text-gray-500">{settings.description}</p>
          </div>
        </ProtectedRoute>
      } />
    </Routes>
  )
}
