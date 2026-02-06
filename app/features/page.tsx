import Navigation from "@/components/Navigation"
import { Users, Calendar, Trophy, TrendingUp, FileText, Zap, Target, BarChart3, Book, Sparkles } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Users,
      title: "Roster Management",
      description: "Build and manage a diverse roster of wrestlers with unique attributes, personalities, gimmicks, and morale tracking.",
      gradient: "from-cyan-400 to-cyan-600"
    },
    {
      icon: Calendar,
      title: "Show & PPV Booking",
      description: "Create compelling weekly shows and pay-per-view events. Book matches, segments, and storylines with detailed planning.",
      gradient: "from-magenta-400 to-magenta-600"
    },
    {
      icon: Trophy,
      title: "Championship System",
      description: "Create and manage multiple championship titles with their own prestige, lineage tracking, and title history.",
      gradient: "from-cyan-400 to-magenta-500"
    },
    {
      icon: TrendingUp,
      title: "Promotion Growth",
      description: "Build your promotion from the ground up. Track momentum, manage finances, grow your audience, and expand globally.",
      gradient: "from-magenta-400 to-cyan-500"
    },
    {
      icon: FileText,
      title: "Brand Splits",
      description: "Create multiple brands within your promotion with separate rosters, championships, and show schedules.",
      gradient: "from-cyan-500 to-cyan-700"
    },
    {
      icon: Zap,
      title: "Match Simulation",
      description: "Watch your shows unfold with detailed match simulation, star ratings, crowd reactions, and momentum tracking.",
      gradient: "from-magenta-500 to-magenta-700"
    },
    {
      icon: Target,
      title: "Tournament System",
      description: "Create single or double elimination tournaments with smart filtering for participant selection and automatic bracket generation.",
      gradient: "from-cyan-400 to-magenta-500"
    },
    {
      icon: BarChart3,
      title: "Statistics & Analytics",
      description: "Track detailed statistics for wrestlers, shows, and your promotion's overall performance and growth.",
      gradient: "from-magenta-400 to-cyan-500"
    },
    {
      icon: Book,
      title: "Storyline Editor",
      description: "Craft intricate storylines and feuds between wrestlers with long-term planning and narrative tracking.",
      gradient: "from-cyan-500 to-magenta-600"
    },
    {
      icon: Sparkles,
      title: "Datapack Support",
      description: "Import custom datapacks to play with real wrestling promotions or create your own fantasy universe. Compatible with Promotion Wars format.",
      gradient: "from-magenta-500 to-cyan-600"
    }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">
              Features
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Everything you need to run the wrestling promotion of your dreams
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group relative p-6 rounded-lg border border-foreground/10 bg-background/40 backdrop-blur-sm hover:border-foreground/20 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-full h-full text-background" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-background backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                Built with Modern Tech
              </h2>
              <p className="text-foreground/80 mb-4">
                Powered by React, TypeScript, and Tauri for a fast, native desktop experience.
                Beautiful UI with Tailwind CSS and shadcn/ui components.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Cross-platform support (Windows, macOS, Linux)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Lightweight and fast performance
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Modern, responsive interface
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
