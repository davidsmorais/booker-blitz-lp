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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-cyan-500/40 bg-cyan-500/5"
      case "in-progress":
        return "border-magenta-500/40 bg-magenta-500/5"
      default:
        return "border-foreground/10 bg-background/40"
    }
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">
              Roadmap
            </h1>
            <p className="text-xl text-foreground/70">
              Our journey to create the ultimate booking simulator
            </p>
          </div>

          <div className="space-y-8">
            {roadmapItems.map((milestone, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${getStatusColor(milestone.status)}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  {getStatusIcon(milestone.status)}
                  <div className="flex-1">
                    <div className="text-sm text-foreground/60 mb-1">{milestone.version}</div>
                    <h2 className="text-2xl font-bold">{milestone.title}</h2>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    milestone.status === "completed" 
                      ? "bg-cyan-500/20 text-cyan-400" 
                      : milestone.status === "in-progress"
                      ? "bg-magenta-500/20 text-magenta-400"
                      : "bg-foreground/10 text-foreground/60"
                  }`}>
                    {milestone.status === "completed" ? "Completed" : milestone.status === "in-progress" ? "In Progress" : "Planned"}
                  </span>
                </div>
                <ul className="space-y-2 ml-10">
                  {milestone.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-lg border border-foreground/10 bg-background/40 backdrop-blur-sm text-center">
            <p className="text-foreground/70">
              This roadmap is subject to change based on community feedback and development progress.
              Join our community to help shape the future of Booker Blitz!
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
