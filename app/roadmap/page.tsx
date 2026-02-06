"use client"

import Navigation from "@/components/Navigation"
import { CheckCircle2, Circle, Clock } from "lucide-react"

export default function Roadmap() {
  const roadmapItems = [
    {
      status: "completed",
      version: "v0.1.0 - Alpha",
      title: "Core Gameplay",
      items: [
        "Basic promotion management",
        "Show and PPV booking",
        "Wrestler roster management",
        "Championship system",
        "Match simulation engine",
        "Brand split functionality"
      ]
    },
    {
      status: "in-progress",
      version: "v0.2.0 - Current",
      title: "Enhanced Features",
      items: [
        "Tournament system with smart filtering",
        "Advanced storyline editor",
        "Improved UI/UX with keyboard shortcuts",
        "Save game management",
        "Performance optimizations",
        "Bug fixes and stability improvements"
      ]
    },
    {
      status: "planned",
      version: "v0.3.0",
      title: "Community & Content",
      items: [
        "Steam Workshop integration",
        "Enhanced datapack support",
        "Custom wrestler creation",
        "Historical statistics tracking",
        "Achievement system",
        "Multi-language support"
      ]
    },
    {
      status: "planned",
      version: "v1.0.0 - Full Release",
      title: "Complete Experience",
      items: [
        "Multiplayer booking mode",
        "Advanced AI opponents",
        "Career mode with story events",
        "Modding API",
        "Cloud save synchronization",
        "Full Steam integration"
      ]
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-6 h-6 text-cyan-400" />
      case "in-progress":
        return <Clock className="w-6 h-6 text-magenta-400 animate-pulse" />
      default:
        return <Circle className="w-6 h-6 text-foreground/30" />
    }
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
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <div className="cyber-body text-cyan-400 text-sm tracking-[0.3em] mb-4">DEVELOPMENT TIMELINE</div>
            <h1 className="cyber-title text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-magenta-500 to-cyan-500 mb-6
                           [text-shadow:_0_0_30px_rgb(6_182_212_/_50%)]">
              ROADMAP
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-6" />
            <p className="cyber-body text-xl text-gray-300">
              Our journey to create the ultimate booking simulator
            </p>
          </div>

          <div className="space-y-8">
            {roadmapItems.map((milestone, index) => {
              const borderColor = milestone.status === "completed" 
                ? "border-cyan-500/30 hover:border-cyan-500" 
                : milestone.status === "in-progress"
                ? "border-magenta-500/30 hover:border-magenta-500"
                : "border-gray-500/30 hover:border-gray-500";
              
              const glowColor = milestone.status === "completed"
                ? "shadow-cyan-500/50"
                : milestone.status === "in-progress"
                ? "shadow-magenta-500/50"
                : "shadow-gray-500/50";
              
              return (
                <div
                  key={index}
                  className={`relative bg-black/50 backdrop-blur-sm border ${borderColor} p-8 transition-all duration-300 hover:shadow-2xl ${glowColor}`}
                >
                  {/* Corner Accents */}
                  <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${
                    milestone.status === "completed" ? "border-cyan-400" :
                    milestone.status === "in-progress" ? "border-magenta-400" : "border-gray-400"
                  }`} />
                  <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${
                    milestone.status === "completed" ? "border-cyan-400" :
                    milestone.status === "in-progress" ? "border-magenta-400" : "border-gray-400"
                  }`} />
                  <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${
                    milestone.status === "completed" ? "border-cyan-400" :
                    milestone.status === "in-progress" ? "border-magenta-400" : "border-gray-400"
                  }`} />
                  <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${
                    milestone.status === "completed" ? "border-cyan-400" :
                    milestone.status === "in-progress" ? "border-magenta-400" : "border-gray-400"
                  }`} />
                  
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative">
                      <div className={`absolute inset-0 blur-xl opacity-50 ${
                        milestone.status === "completed" ? "bg-cyan-500" :
                        milestone.status === "in-progress" ? "bg-magenta-500" : "bg-gray-500"
                      }`} />
                      <div className="relative">
                        {getStatusIcon(milestone.status)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className={`cyber-body text-xs tracking-widest mb-2 ${
                        milestone.status === "completed" ? "text-cyan-400/60" :
                        milestone.status === "in-progress" ? "text-magenta-400/60" : "text-gray-400/60"
                      }`}>
                        MILESTONE_{String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="cyber-body text-sm text-gray-400 mb-2">{milestone.version}</div>
                      <h2 className="cyber-title text-3xl font-bold text-white mb-2">{milestone.title}</h2>
                    </div>
                    <span className={`cyber-body px-4 py-2 text-xs font-bold tracking-wider border ${
                      milestone.status === "completed" 
                        ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" 
                        : milestone.status === "in-progress"
                        ? "bg-magenta-500/10 text-magenta-400 border-magenta-500/30"
                        : "bg-gray-500/10 text-gray-400 border-gray-500/30"
                    }`}>
                      {milestone.status === "completed" ? "COMPLETED" : milestone.status === "in-progress" ? "IN PROGRESS" : "PLANNED"}
                    </span>
                  </div>
                  <ul className="space-y-3 ml-12">
                    {milestone.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 cyber-body text-gray-300">
                        <span className={`mt-1 text-lg ${
                          milestone.status === "completed" ? "text-cyan-400" :
                          milestone.status === "in-progress" ? "text-magenta-400" : "text-gray-500"
                        }`}>▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-12 relative bg-black/50 backdrop-blur-sm border border-cyan-500/30 p-8 text-center">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />
            
            <p className="cyber-body text-gray-300 text-lg">
              This roadmap is subject to change based on community feedback and development progress.
              Join our community to help shape the future of Booker Blitz!
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
