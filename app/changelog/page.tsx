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
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">
              Changelog
            </h1>
            <p className="text-xl text-foreground/70">
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
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-magenta-500 p-0.5">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <span className="text-xs font-bold bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
                          v{release.version}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-2">
                      <h2 className="text-2xl font-bold mb-1">Version {release.version}</h2>
                      <p className="text-sm text-foreground/60">{release.date}</p>
                    </div>

                    <div className="space-y-6">
                      {release.changes.map((section, sectionIndex) => (
                        <div
                          key={sectionIndex}
                          className="p-4 rounded-lg border border-foreground/10 bg-background/40 backdrop-blur-sm"
                        >
                          <h3 className="font-semibold mb-3 text-cyan-400">{section.type}</h3>
                          <ul className="space-y-2">
                            {section.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2 text-foreground/80">
                                <span className="text-magenta-400 mt-1">•</span>
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
