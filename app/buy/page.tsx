"use client"

import Navigation from "@/components/Navigation"
import { Heart } from "lucide-react"

export default function Buy() {
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
      <main className="min-h-screen bg-black relative overflow-hidden pt-24 pb-16 px-4 flex items-center justify-center">
        {/* Grid Background */}
        <div className="absolute inset-0 grid-bg opacity-30" />
        
        {/* Scan Line Effect */}
        <div className="scan-line absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta-500/20 rounded-full blur-[120px]" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <div className="cyber-body text-cyan-400 text-sm tracking-[0.3em] mb-4">PURCHASE OPTIONS</div>
            <h1 className="cyber-title text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-magenta-500 to-cyan-500 mb-6
                           [text-shadow:_0_0_30px_rgb(6_182_212_/_50%)]">
              GET BOOKER BLITZ
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-6" />
            <p className="cyber-body text-xl text-gray-300">
              Choose your platform and start booking today
            </p>
          </div>

          <div className="mb-12">
            {/* Steam Card */}
            <div className="group relative bg-black/50 backdrop-blur-sm border border-cyan-500/30 p-12 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />
              
              <div className="text-center">
                <div className="cyber-body text-cyan-400/60 text-xs tracking-widest mb-4">PLATFORM_01</div>
                <h2 className="cyber-title text-4xl font-bold text-white mb-6">STEAM</h2>
                <p className="cyber-body text-gray-300 mb-8 text-lg">
                  Get the full experience with Steam integration, achievements, and cloud saves.
                </p>
                <div className="mb-8">
                  <div className="cyber-title text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300 mb-2">
                    COMING SOON
                  </div>
                  <p className="cyber-body text-sm text-gray-400">Available in Early Access Q2 2026</p>
                </div>
                <button
                  disabled
                  className="cyber-title w-full py-4 bg-cyan-500/10 text-cyan-400 font-bold border-2 border-cyan-500/40 cursor-not-allowed hover:bg-cyan-500/20 transition-colors"
                >
                  WISHLIST ON STEAM
                </button>
              </div>
            </div>
          </div>

          {/* System Requirements */}
          <div className="relative bg-black/50 backdrop-blur-sm border border-magenta-500/30 p-8">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-magenta-400" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-magenta-400" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-magenta-400" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-magenta-400" />
            
            <h3 className="cyber-title text-2xl font-bold mb-6 flex items-center justify-center gap-3 text-white">
              <Heart className="w-6 h-6 text-magenta-400" />
              SYSTEM REQUIREMENTS
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-cyan-500/30 p-6 bg-black/50">
                <h4 className="cyber-title font-bold text-cyan-400 mb-4 text-lg">MINIMUM</h4>
                <ul className="space-y-3 cyber-body text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 text-lg">▸</span>
                    <span>OS: Windows 10, macOS 11, Linux</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 text-lg">▸</span>
                    <span>Memory: 4 GB RAM</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 text-lg">▸</span>
                    <span>Storage: 500 MB available space</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 text-lg">▸</span>
                    <span>Graphics: Any modern GPU</span>
                  </li>
                </ul>
              </div>
              <div className="border border-magenta-500/30 p-6 bg-black/50">
                <h4 className="cyber-title font-bold text-magenta-400 mb-4 text-lg">RECOMMENDED</h4>
                <ul className="space-y-3 cyber-body text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-magenta-400 text-lg">▸</span>
                    <span>OS: Windows 11, macOS 14, Linux</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-magenta-400 text-lg">▸</span>
                    <span>Memory: 8 GB RAM</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-magenta-400 text-lg">▸</span>
                    <span>Storage: 1 GB available space</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-magenta-400 text-lg">▸</span>
                    <span>Graphics: Dedicated GPU</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="cyber-body text-gray-400 text-lg">
              Questions? Reach out to us on{" "}
              <a href="https://discord.gg/bookerblitz" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Discord
              </a>{" "}
              or{" "}
              <a href="https://github.com/yourusername/booker-blitz/issues" className="text-magenta-400 hover:text-magenta-300 transition-colors">
                GitHub
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
