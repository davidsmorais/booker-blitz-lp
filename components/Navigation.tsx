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
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">
            BOOKER BLITZ
          </div>
        </Link>
        
        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-3 py-2 text-sm font-medium transition-colors hover:text-cyan-400",
                pathname === link.href
                  ? "text-cyan-400"
                  : "text-foreground/60"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-magenta-500" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation
