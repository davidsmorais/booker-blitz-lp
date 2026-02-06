"use client"

import Navigation from "@/components/Navigation"
import { Users, Calendar, Trophy, TrendingUp, FileText, Zap, Target, BarChart3, Book, Sparkles } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Users,
      title: "Roster Management",
      description: "Build and manage a diverse roster of wrestlers with unique attributes, personalities, gimmicks, and morale tracking.",
      gradient: "from-cyan-400 to-cyan-600"
    },
    {
      icon: Calendar,
      title: "Show & PPV Booking",
      description: "Create compelling weekly shows and pay-per-view events. Book matches, segments, and storylines with detailed planning.",
      gradient: "from-magenta-400 to-magenta-600"
    },
    {
      icon: Trophy,
      title: "Championship System",
      description: "Create and manage multiple championship titles with their own prestige, lineage tracking, and title history.",
      gradient: "from-cyan-400 to-magenta-500"
    },
    {
      icon: TrendingUp,
      title: "Promotion Growth",
      description: "Build your promotion from the ground up. Track momentum, manage finances, grow your audience, and expand globally.",
      gradient: "from-magenta-400 to-cyan-500"
    },
    {
      icon: FileText,
      title: "Brand Splits",
      description: "Create multiple brands within your promotion with separate rosters, championships, and show schedules.",
      gradient: "from-cyan-500 to-cyan-700"
    },
    {
      icon: Zap,
      title: "Match Simulation",
      description: "Watch your shows unfold with detailed match simulation, star ratings, crowd reactions, and momentum tracking.",
      gradient: "from-magenta-500 to-magenta-700"
    },
    {
      icon: Target,
      title: "Tournament System",
      description: "Create single or double elimination tournaments with smart filtering for participant selection and automatic bracket generation.",
      gradient: "from-cyan-400 to-magenta-500"
    },
    {
      icon: BarChart3,
      title: "Statistics & Analytics",
      description: "Track detailed statistics for wrestlers, shows, and your promotion's overall performance and growth.",
      gradient: "from-magenta-400 to-cyan-500"
    },
    {
      icon: Book,
      title: "Storyline Editor",
      description: "Craft intricate storylines and feuds between wrestlers with long-term planning and narrative tracking.",
      gradient: "from-cyan-500 to-magenta-600"
    },
    {
      icon: Sparkles,
      title: "Datapack Support",
      description: "Import custom datapacks to play with real wrestling promotions or create your own fantasy universe. Compatible with Promotion Wars format.",
      gradient: "from-magenta-500 to-cyan-600"
    }
  ]

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
      `}} />
      <Navigation />
      <main className="min-h-screen bg-black relative overflow-hidden pt-24 pb-16 px-4">
        {/* Grid Background */}
        <div className="absolute inset-0 grid-bg opacity-30" />
        
        {/* Scan Line Effect */}
        <div className="scan-line absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta-500/20 rounded-full blur-[120px]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="cyber-body text-cyan-400 text-sm tracking-[0.3em] mb-4">SYSTEM FEATURES</div>
            <h1 className="cyber-title text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-magenta-500 to-cyan-500 mb-6
                           [text-shadow:_0_0_30px_rgb(6_182_212_/_50%)]">
              FEATURES
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-6" />
            <p className="cyber-body text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to run the wrestling promotion of your dreams
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const isEven = index % 2 === 0
              return (
                <div
                  key={index}
                  className={`group relative bg-black/50 backdrop-blur-sm border ${isEven ? 'border-cyan-500/30 hover:border-cyan-500' : 'border-magenta-500/30 hover:border-magenta-500'} p-6 transition-all duration-300 hover:shadow-2xl ${isEven ? 'hover:shadow-cyan-500/50' : 'hover:shadow-magenta-500/50'}`}
                >
                  {/* Corner Accents */}
                  <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${isEven ? 'border-cyan-400' : 'border-magenta-400'}`} />
                  <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${isEven ? 'border-cyan-400' : 'border-magenta-400'}`} />
                  <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${isEven ? 'border-cyan-400' : 'border-magenta-400'}`} />
                  <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${isEven ? 'border-cyan-400' : 'border-magenta-400'}`} />
                  
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className={`absolute inset-0 ${isEven ? 'bg-cyan-500' : 'bg-magenta-500'} blur-xl opacity-50 group-hover:opacity-100 transition-opacity`} />
                      <div className={`relative bg-black border ${isEven ? 'border-cyan-500' : 'border-magenta-500'} p-3`}>
                        <Icon className={`w-8 h-8 ${isEven ? 'text-cyan-400' : 'text-magenta-400'}`} strokeWidth={1.5} />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className={`cyber-body ${isEven ? 'text-cyan-400/60' : 'text-magenta-400/60'} text-xs tracking-widest mb-1`}>MODULE_{String(index + 1).padStart(2, '0')}</div>
                      <h3 className={`cyber-title text-xl font-bold text-white mb-3 group-hover:${isEven ? 'text-cyan-400' : 'text-magenta-400'} transition-colors`}>
                        {feature.title}
                      </h3>
                      <p className="cyber-body text-gray-400 leading-relaxed text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 relative bg-black/50 backdrop-blur-sm border border-cyan-500/30 p-12">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />
            
            <div className="relative">
              <h2 className="cyber-title text-4xl font-black text-center text-white mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-500">
                  SYSTEM SPECIFICATIONS
                </span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center border border-cyan-500/30 p-6 bg-black/50">
                  <div className="cyber-body text-cyan-400 text-xs tracking-widest mb-2">FRAMEWORK</div>
                  <div className="cyber-title text-xl font-bold text-white">REACT + TAURI</div>
                </div>
                <div className="text-center border border-magenta-500/30 p-6 bg-black/50">
                  <div className="cyber-body text-magenta-400 text-xs tracking-widest mb-2">PERFORMANCE</div>
                  <div className="cyber-title text-xl font-bold text-white">NATIVE SPEED</div>
                </div>
                <div className="text-center border border-cyan-500/30 p-6 bg-black/50">
                  <div className="cyber-body text-cyan-400 text-xs tracking-widest mb-2">COMPATIBILITY</div>
                  <div className="cyber-title text-xl font-bold text-white">MULTI-PLATFORM</div>
                </div>
              </div>
              
              <div className="cyber-body text-gray-300 text-center">
                <p className="mb-4">Powered by React, TypeScript, and Tauri for a fast, native desktop experience.</p>
                <ul className="space-y-2 text-sm inline-block text-left">
                  <li className="flex items-center gap-3">
                    <span className="text-cyan-400 text-lg">▸</span>
                    Cross-platform support (Windows, macOS, Linux)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-magenta-400 text-lg">▸</span>
                    Lightweight and fast performance
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-cyan-400 text-lg">▸</span>
                    Modern, responsive interface
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
