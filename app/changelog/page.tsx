"use client"

import Navigation from "@/components/Navigation"

export default function Changelog() {
  const versions = [
    {
      version: "0.2.0",
      date: "February 2026",
      changes: [
        {
          type: "✨ New Features",
          items: [
            "Tournament system with smart filtering for participant selection",
            "Enhanced keyboard shortcuts for faster navigation",
            "Improved segment simulation with detailed outcomes"
          ]
        },
        {
          type: "🔮 Improvements",
          items: [
            "Better UI responsiveness across all screens",
            "Optimized database queries for faster load times",
            "Enhanced brand split management"
          ]
        },
        {
          type: "🐛 Bug Fixes",
          items: [
            "Fixed issue with championship title assignments",
            "Resolved crash when loading certain datapacks",
            "Corrected momentum calculations for shows"
          ]
        }
      ]
    },
    {
      version: "0.1.0",
      date: "December 2025",
      changes: [
        {
          type: "✨ Initial Release",
          items: [
            "Core promotion management system",
            "Show and PPV booking functionality",
            "Wrestler roster management",
            "Championship title system",
            "Basic match simulation",
            "Brand split support",
            "Datapack import (Promotion Wars format)",
            "Save game management"
          ]
        }
      ]
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
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <div className="cyber-body text-cyan-400 text-sm tracking-[0.3em] mb-4">VERSION HISTORY</div>
            <h1 className="cyber-title text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-magenta-500 to-cyan-500 mb-6
                           [text-shadow:_0_0_30px_rgb(6_182_212_/_50%)]">
              CHANGELOG
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-6" />
            <p className="cyber-body text-xl text-gray-300">
              Track our progress and see what&apos;s new
            </p>
          </div>

          <div className="space-y-12">
            {versions.map((release, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < versions.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 to-magenta-500/50" />
                )}

                <div className="flex gap-6">
                  {/* Version badge */}
                  <div className="flex-shrink-0">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-50" />
                      <div className="relative w-full h-full border-2 border-cyan-500 bg-black flex items-center justify-center">
                        <span className="cyber-title text-xs font-bold text-cyan-400">
                          v{release.version}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <div className="cyber-body text-cyan-400/60 text-xs tracking-widest mb-1">RELEASE_{String(index + 1).padStart(2, '0')}</div>
                      <h2 className="cyber-title text-3xl font-bold text-white mb-2">VERSION {release.version}</h2>
                      <p className="cyber-body text-sm text-gray-400">{release.date}</p>
                    </div>

                    <div className="space-y-4">
                      {release.changes.map((section, sectionIndex) => (
                        <div
                          key={sectionIndex}
                          className="relative bg-black/50 backdrop-blur-sm border border-cyan-500/30 p-6 hover:border-cyan-500 transition-all duration-300"
                        >
                          {/* Corner Accents */}
                          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
                          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
                          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
                          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />
                          
                          <h3 className="cyber-body font-bold mb-4 text-cyan-400 text-lg">{section.type}</h3>
                          <ul className="space-y-3">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3 cyber-body text-gray-300">
                                <span className="text-magenta-400 mt-1 text-lg">▸</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
