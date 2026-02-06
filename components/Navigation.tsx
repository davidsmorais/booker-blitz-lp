"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const Navigation = () => {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/changelog", label: "Changelog" },
    { href: "/buy", label: "Buy Now" },
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        
        .nav-cyber {
          font-family: 'Orbitron', sans-serif;
          text-transform: uppercase;
        }
        
        .nav-grid-bg {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}} />
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-cyan-500/30 bg-black/90 backdrop-blur-md nav-grid-bg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 relative">
          {/* Corner Accents */}
          <div className="absolute top-0 left-4 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-0 right-4 w-3 h-3 border-t-2 border-r-2 border-magenta-400" />
          
          <Link href="/" className="flex items-center gap-2 relative z-10">
            <div className="nav-cyber text-xl font-black bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent tracking-wider">
              BOOKER BLITZ
            </div>
          </Link>
          
          <div className="flex gap-1 relative z-10">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-cyber relative px-4 py-2 text-xs font-bold transition-all duration-300 tracking-wider",
                  pathname === link.href
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-cyan-400"
                )}
              >
                <span className="relative z-10">{link.label}</span>
                {pathname === link.href && (
                  <>
                    <span className="absolute inset-0 border border-cyan-500/50 bg-cyan-500/10" />
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-magenta-500" />
                  </>
                )}
                {pathname !== link.href && (
                  <span className="absolute inset-0 border border-transparent hover:border-cyan-500/30 transition-colors" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation
