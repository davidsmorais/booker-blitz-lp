"use client"

import Link from "next/link"
import Navigation from "@/components/Navigation"
import { ChevronRight } from "lucide-react"

/**
 * DESIGN 4: "NEON CYBERPUNK GRID"
 * 
 * Dark cyberpunk with electric neon accents
 * - Grid-based technical aesthetic
 * - Glowing elements
 * - Futuristic tech-forward feel
 */

export default function Home() {
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
        
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        
        .scan-line {
          animation: scan 4s linear infinite;
        }
        
        .glitch:hover {
          animation: glitch 0.3s ease-in-out;
        }
      `}} />
      <Navigation />
      <main className="min-h-screen bg-black relative overflow-hidden">
        
        {/* Grid Background */}
        <div className="absolute inset-0 grid-bg opacity-30" />
        
        {/* Scan Line Effect */}
        <div className="scan-line absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta-500/20 rounded-full blur-[120px]" />
        
        <div className="relative z-10 container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center max-w-7xl">
          {/* Hero */}
          <div className="text-center mb-20">
            <div className="cyber-body text-cyan-400 text-sm tracking-[0.3em] mb-4">WRESTLING MANAGEMENT SYSTEM</div>
            <h1 className="cyber-title text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-magenta-500 to-cyan-500 mb-8
                           [text-shadow:_0_0_30px_rgb(6_182_212_/_50%)]">
              BOOKER BLITZ
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-8" />
            <p className="cyber-body text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The ultimate wrestling promotion management simulator. <span className="text-cyan-400">Manage shows</span>, <span className="text-magenta-400">build storylines</span>, and create unforgettable moments.
            </p>
          </div>

          {/* Navigation Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link href="/features" className="group relative bg-black/50 backdrop-blur-sm border border-cyan-500/30 p-8 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 glitch">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />
              
              <div className="cyber-body text-cyan-400/60 text-xs tracking-widest mb-2">MODULE_01</div>
              <h3 className="cyber-title text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-4">FEATURES</h3>
              <ChevronRight className="w-6 h-6 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link href="/roadmap" className="group relative bg-black/50 backdrop-blur-sm border border-magenta-500/30 p-8 hover:border-magenta-500 transition-all duration-300 hover:shadow-2xl hover:shadow-magenta-500/50 glitch">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-magenta-400" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-magenta-400" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-magenta-400" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-magenta-400" />
              
              <div className="cyber-body text-magenta-400/60 text-xs tracking-widest mb-2">MODULE_02</div>
              <h3 className="cyber-title text-2xl font-bold text-white group-hover:text-magenta-400 transition-colors mb-4">ROADMAP</h3>
              <ChevronRight className="w-6 h-6 text-magenta-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link href="/changelog" className="group relative bg-black/50 backdrop-blur-sm border border-cyan-500/30 p-8 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 glitch">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />
              
              <div className="cyber-body text-cyan-400/60 text-xs tracking-widest mb-2">MODULE_03</div>
              <h3 className="cyber-title text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-4">CHANGELOG</h3>
              <ChevronRight className="w-6 h-6 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link href="/buy" className="group relative bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 backdrop-blur-sm border-2 border-cyan-400 p-8 hover:border-magenta-400 transition-all duration-300 hover:shadow-2xl hover:shadow-magenta-500/50 hover:scale-105 glitch">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-magenta-500/10 to-cyan-500/10 animate-pulse" style={{animationDuration: '2s'}} />
              
              <div className="relative">
                <div className="cyber-body text-white/80 text-xs tracking-widest mb-2">MODULE_04</div>
                <h3 className="cyber-title text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-400 mb-4">BUY NOW</h3>
                <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
