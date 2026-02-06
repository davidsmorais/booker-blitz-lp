"use client"

import Link from "next/link"
import Navigation from "@/components/Navigation"
import { ChevronRight } from "lucide-react"

// Custom font imports (example: retro-futuristic display + editorial body)
// Font imports removed; use CSS in globals.css and Tailwind config

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex flex-col items-stretch justify-center relative overflow-hidden font-lora">
        {/* Layered animated backgrounds */}
        <div className="absolute inset-0 z-0">
          {/* Gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900 via-magenta-900/60 to-background animate-bgmesh" />
          {/* Editorial grid overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 mix-blend-overlay" />
          {/* Noise texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        </div>

        {/* Decorative orbs and shapes */}
        <div className="absolute left-[-6rem] top-1/3 w-[32rem] h-[32rem] bg-cyan-400/30 rounded-full blur-[160px] animate-orb" />
        <div className="absolute right-[-8rem] bottom-1/4 w-[40rem] h-[40rem] bg-magenta-400/30 rounded-full blur-[192px] animate-orb [animation-delay:1.5s]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] h-24 bg-gradient-to-r from-magenta-500/30 via-cyan-500/10 to-transparent blur-[32px]" />

        {/* Content: asymmetric editorial layout */}
        <section className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 py-24 md:py-32 max-w-7xl mx-auto gap-16">
          {/* Left: Title & tagline */}
          <div className="flex-1 min-w-[320px] text-left">
            <div className="mb-8">
              <h2 className="font-major-mono-display text-[3.5rem] md:text-[6rem] font-extrabold tracking-tight leading-none bg-gradient-to-r from-cyan-300 via-magenta-400 to-cyan-500 bg-clip-text text-transparent animate-gradient drop-shadow-lg">
                BOOKER BLITZ
              </h2>
              <div className="h-2 w-2/3 bg-gradient-to-r from-magenta-400 via-cyan-400 to-magenta-500 rounded-full shadow-lg mb-6 animate-bar" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-foreground/90 font-lora tracking-tight">
              Book Your Way to Glory
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-xl font-lora">
              The ultimate wrestling promotion management simulator.<br />
              <span className="text-magenta-400 font-semibold">Manage shows</span>, <span className="text-cyan-400 font-semibold">build storylines</span>, and <span className="text-magenta-400 font-semibold">create unforgettable moments</span>.
            </p>
          </div>

          {/* Right: Navigation Cards */}
          <div className="flex-1 min-w-[320px] grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/features"
              className="group relative p-8 rounded-2xl border-2 border-cyan-400/30 bg-gradient-to-br from-cyan-900/40 to-background/60 shadow-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <div className="text-2xl font-major-mono-display font-bold mb-3 bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                Features
              </div>
              <ChevronRight className="absolute bottom-6 right-6 w-6 h-6 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/roadmap"
              className="group relative p-8 rounded-2xl border-2 border-magenta-400/30 bg-gradient-to-br from-magenta-900/40 to-background/60 shadow-lg hover:border-magenta-400 hover:bg-magenta-400/10 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-magenta-400"
            >
              <div className="text-2xl font-major-mono-display font-bold mb-3 bg-gradient-to-r from-magenta-300 to-magenta-400 bg-clip-text text-transparent">
                Roadmap
              </div>
              <ChevronRight className="absolute bottom-6 right-6 w-6 h-6 text-magenta-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/changelog"
              className="group relative p-8 rounded-2xl border-2 border-cyan-400/30 bg-gradient-to-br from-cyan-900/40 to-background/60 shadow-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <div className="text-2xl font-major-mono-display font-bold mb-3 bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent">
                Changelog
              </div>
              <ChevronRight className="absolute bottom-6 right-6 w-6 h-6 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link
              href="/buy"
              className="group relative p-8 rounded-2xl border-2 border-magenta-400 bg-gradient-to-br from-magenta-400/30 to-cyan-400/30 shadow-xl hover:from-magenta-400/50 hover:to-cyan-400/50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-magenta-400"
            >
              <div className="text-2xl font-major-mono-display font-bold mb-3 bg-gradient-to-r from-magenta-300 to-cyan-300 bg-clip-text text-transparent">
                Buy Now
              </div>
              <ChevronRight className="absolute bottom-6 right-6 w-6 h-6 text-magenta-400 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Custom CSS for gradient, orb, and bar animations */}
        <style jsx>{`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient {
            background-size: 200% auto;
            animation: gradient 3.5s cubic-bezier(.4,0,.2,1) infinite;
          }
          @keyframes orb {
            0%, 100% { transform: scale(1) translateY(0); }
            50% { transform: scale(1.08) translateY(16px); }
          }
          .animate-orb {
            animation: orb 4s ease-in-out infinite;
          }
          @keyframes bar {
            0% { width: 0; }
            100% { width: 66%; }
          }
          .animate-bar {
            animation: bar 1.2s cubic-bezier(.7,0,.3,1) forwards;
          }
          @keyframes bgmesh {
            0% { filter: blur(0px) brightness(1); }
            50% { filter: blur(8px) brightness(1.1); }
            100% { filter: blur(0px) brightness(1); }
          }
          .animate-bgmesh {
            animation: bgmesh 6s ease-in-out infinite;
          }
        `}</style>
      </main>
    </>
  )
// ...existing code...

}
