"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/Navigation"
import { supabase } from "@/lib/supabase"
import type { User } from "@supabase/supabase-js"

export default function Discussions() {
  const [user, setUser] = useState<User | null>(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [authError, setAuthError] = useState("")
  const [authLoading, setAuthLoading] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      const currentUser = session?.user ?? null
      setUser(currentUser)
      setIsAdmin(currentUser?.app_metadata?.role === "admin")
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user ?? null
      setUser(currentUser)
      setIsAdmin(currentUser?.app_metadata?.role === "admin")
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthLoading(true)
    setAuthError("")

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setAuthError(error.message)
    }
    setAuthLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;500;700&display=swap');
        
        .cyber-title {
          font-family: 'Orbitron', sans-serif;
          text-transform: uppercase;
        }
        
        .cyber-body {
          font-family: 'Rajdhani', sans-serif;
        }
        
        .grid-bg {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        .scan-line {
          animation: scan 4s linear infinite;
        }

        .cyber-input {
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(6, 182, 212, 0.4);
          color: #e2e8f0;
          font-family: 'Rajdhani', sans-serif;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
        }

        .cyber-input:focus {
          border-color: #06b6d4;
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.3);
        }

        .cyber-input::placeholder {
          color: rgba(156, 163, 175, 0.6);
        }
      `}} />
      <Navigation />
      <main className="min-h-screen bg-black relative overflow-hidden pt-24 pb-16 px-4">
        {/* Grid Background */}
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="scan-line absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta-500/20 rounded-full blur-[120px]" />

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <div className="cyber-body text-cyan-400 text-sm tracking-[0.3em] mb-4">COMMUNITY HUB</div>
            <h1 className="cyber-title text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-magenta-500 to-cyan-500 mb-6
                           [text-shadow:_0_0_30px_rgb(6_182_212_/_50%)]">
              DISCUSSIONS
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-6" />
          </div>

          {loading ? (
            <div className="text-center cyber-body text-cyan-400 text-xl tracking-widest">
              INITIALIZING...
            </div>
          ) : !user ? (
            /* Login Form */
            <div className="max-w-md mx-auto">
              <div className="relative bg-black/50 backdrop-blur-sm border border-cyan-500/30 p-8">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

                <div className="cyber-body text-cyan-400/60 text-xs tracking-widest mb-2">ACCESS_REQUIRED</div>
                <h2 className="cyber-title text-2xl font-bold text-white mb-6">SIGN IN</h2>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="cyber-body text-cyan-400/80 text-sm tracking-widest block mb-1">EMAIL</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="cyber-input w-full px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="cyber-body text-cyan-400/80 text-sm tracking-widest block mb-1">PASSWORD</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="cyber-input w-full px-4 py-3"
                    />
                  </div>

                  {authError && (
                    <div className="cyber-body text-red-400 text-sm border border-red-500/30 bg-red-500/10 px-4 py-2">
                      {authError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={authLoading}
                    className="cyber-title w-full py-3 font-bold text-sm tracking-widest
                               bg-gradient-to-r from-cyan-500/20 to-magenta-500/20
                               border border-cyan-500 text-cyan-400
                               hover:bg-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/30
                               disabled:opacity-50 disabled:cursor-not-allowed
                               transition-all duration-300"
                  >
                    {authLoading ? "AUTHENTICATING..." : "ACCESS DISCUSSIONS"}
                  </button>
                </form>
              </div>
            </div>
          ) : (
            /* Discussions Content */
            <div className="space-y-6">
              {/* User bar */}
              <div className="flex items-center justify-between relative bg-black/50 backdrop-blur-sm border border-cyan-500/30 px-6 py-3">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="cyber-body text-gray-300 text-sm">
                    {user.email}
                  </span>
                  {isAdmin && (
                    <span className="cyber-title text-xs px-2 py-0.5 border border-magenta-500/60 text-magenta-400 bg-magenta-500/10">
                      ADMIN
                    </span>
                  )}
                </div>
                <button
                  onClick={handleLogout}
                  className="cyber-title text-xs text-gray-400 hover:text-cyan-400 tracking-widest transition-colors"
                >
                  SIGN OUT
                </button>
              </div>

              {/* Discussions placeholder */}
              <div className="relative bg-black/50 backdrop-blur-sm border border-cyan-500/30 p-8">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

                <div className="cyber-body text-cyan-400/60 text-xs tracking-widest mb-2">STATUS</div>
                <h2 className="cyber-title text-2xl font-bold text-white mb-4">COMING SOON</h2>
                <p className="cyber-body text-gray-400 text-lg">
                  The discussions board is under construction. Check back soon for community threads, feedback, and more.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
