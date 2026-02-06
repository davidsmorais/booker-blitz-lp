import Navigation from "@/components/Navigation"
import { Github, Heart } from "lucide-react"

export default function Buy() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">
              Get Booker Blitz
            </h1>
            <p className="text-xl text-foreground/70">
              Choose your platform and start booking today
            </p>
          </div>

          <div className=" gap-8 mb-12">
            {/* Steam Card */}
            <div className="group relative p-8 rounded-lg border-2 border-cyan-500/40 bg-gradient-to-br from-cyan-500/10 to-background backdrop-blur-sm hover:border-cyan-500 transition-all duration-300 hover:scale-105">

              <h2 className="text-2xl font-bold mb-4 mt-8">Steam</h2>
              <p className="text-foreground/70 mb-6">
                Get the full experience with Steam integration, achievements, and cloud saves.
              </p>
              <div className="mb-6">
                <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                  Coming Soon
                </div>
                <p className="text-sm text-foreground/60 mt-1">Available in Early Access Q2 2026</p>
              </div>
              <button
                disabled
                className="w-full py-3 rounded-lg bg-cyan-500/20 text-cyan-400 font-semibold border border-cyan-500/40 cursor-not-allowed"
              >
                Wishlist on Steam
              </button>
            </div>

          </div>

          {/* System Requirements */}
          <div className="p-6 rounded-lg border border-foreground/10 bg-background/40 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-cyan-400" />
              System Requirements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Minimum</h4>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>• OS: Windows 10, macOS 11, Linux</li>
                  <li>• Memory: 4 GB RAM</li>
                  <li>• Storage: 500 MB available space</li>
                  <li>• Graphics: Any modern GPU</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-magenta-400 mb-2">Recommended</h4>
                <ul className="space-y-1 text-sm text-foreground/70">
                  <li>• OS: Windows 11, macOS 14, Linux</li>
                  <li>• Memory: 8 GB RAM</li>
                  <li>• Storage: 1 GB available space</li>
                  <li>• Graphics: Dedicated GPU</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-foreground/60">
              Questions? Reach out to us on{" "}
              <a href="https://discord.gg/bookerbli tz" className="text-cyan-400 hover:underline">
                Discord
              </a>{" "}
              or{" "}
              <a href="https://github.com/yourusername/booker-blitz/issues" className="text-magenta-400 hover:underline">
                GitHub
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
