"use client"

import Navigation from "@/components/Navigation"
import FeatureCard from "@/components/FeatureCard"
import { features } from "@/lib/features"

export default function Features() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
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
      `,
        }}
      />
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
            <h1
              className="cyber-title text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-magenta-500 to-cyan-500 mb-6
                           [text-shadow:_0_0_30px_rgb(6_182_212_/_50%)]"
            >
              FEATURES
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-6" />
            <p className="cyber-body text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to run the wrestling promotion of your dreams
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                index={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
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
