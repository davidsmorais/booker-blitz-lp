import Navigation from "@/components/Navigation"
import { Users, Calendar, Trophy, TrendingUp, FileText, Zap, Target, BarChart3, Book, Sparkles } from "lucide-react"

/**
 * DESIGN 1: "WRESTLING POSTER MAXIMALISM"
 * 
 * Aesthetic: Bold, high-contrast poster design inspired by vintage wrestling posters
 * - Dramatic typography with impact
 * - High-energy color blocking
 * - Layered compositions with depth
 * - Retro-modern fusion
 */

export default function Features() {
    const features = [
        {
            icon: Users,
            title: "Roster Management",
            description: "Build and manage a diverse roster of wrestlers with unique attributes, personalities, gimmicks, and morale tracking.",
            color: "bg-red-600",
            accent: "border-yellow-400"
        },
        {
            icon: Calendar,
            title: "Show & PPV Booking",
            description: "Create compelling weekly shows and pay-per-view events. Book matches, segments, and storylines with detailed planning.",
            color: "bg-blue-600",
            accent: "border-red-400"
        },
        {
            icon: Trophy,
            title: "Championship System",
            description: "Create and manage multiple championship titles with their own prestige, lineage tracking, and title history.",
            color: "bg-yellow-500",
            accent: "border-blue-600"
        },
        {
            icon: TrendingUp,
            title: "Promotion Growth",
            description: "Build your promotion from the ground up. Track momentum, manage finances, grow your audience, and expand globally.",
            color: "bg-purple-600",
            accent: "border-yellow-400"
        },
        {
            icon: FileText,
            title: "Brand Splits",
            description: "Create multiple brands within your promotion with separate rosters, championships, and show schedules.",
            color: "bg-green-600",
            accent: "border-red-400"
        },
        {
            icon: Zap,
            title: "Match Simulation",
            description: "Watch your shows unfold with detailed match simulation, star ratings, crowd reactions, and momentum tracking.",
            color: "bg-orange-600",
            accent: "border-blue-400"
        },
        {
            icon: Target,
            title: "Tournament System",
            description: "Create single or double elimination tournaments with smart filtering for participant selection and automatic bracket generation.",
            color: "bg-pink-600",
            accent: "border-yellow-400"
        },
        {
            icon: BarChart3,
            title: "Statistics & Analytics",
            description: "Track detailed statistics for wrestlers, shows, and your promotion's overall performance and growth.",
            color: "bg-indigo-600",
            accent: "border-green-400"
        },
        {
            icon: Book,
            title: "Storyline Editor",
            description: "Craft intricate storylines and feuds between wrestlers with long-term planning and narrative tracking.",
            color: "bg-red-700",
            accent: "border-yellow-400"
        },
        {
            icon: Sparkles,
            title: "Datapack Support",
            description: "Import custom datapacks to play with real wrestling promotions or create your own fantasy universe. Compatible with Promotion Wars format.",
            color: "bg-cyan-600",
            accent: "border-pink-400"
        }
    ]

    return (
        <>
            <Navigation />
            <main className="min-h-screen pt-24 pb-16 px-4 bg-black">
                <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;700&display=swap');
          
          .poster-title {
            font-family: 'Bebas Neue', sans-serif;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          
          .poster-body {
            font-family: 'Oswald', sans-serif;
          }
          
          @keyframes slam {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.05) rotate(-1deg); }
          }
          
          .feature-card:hover {
            animation: slam 0.3s ease-in-out;
          }
        `}</style>

                <div className="container mx-auto max-w-7xl">
                    {/* Hero Section */}
                    <div className="text-center mb-20 relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-red-600/20 via-transparent to-transparent blur-3xl" />
                        <h1 className="poster-title text-8xl md:text-9xl font-black mb-6 text-white relative z-10 
                           [text-shadow:_4px_4px_0_rgb(220_38_38),_8px_8px_0_rgb(234_179_8)]">
                            FEATURES
                        </h1>
                        <div className="inline-block bg-yellow-400 text-black px-8 py-3 -rotate-2 relative z-10">
                            <p className="poster-body text-2xl font-bold uppercase">
                                The Main Event Lineup
                            </p>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {features.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <div
                                    key={index}
                                    className={`feature-card relative group cursor-pointer`}
                                    style={{
                                        animationDelay: `${index * 0.1}s`
                                    }}
                                >
                                    <div className={`absolute inset-0 ${feature.color} transform rotate-1 group-hover:rotate-2 transition-transform`} />
                                    <div className={`relative bg-black border-4 ${feature.accent} p-8 transform -rotate-1 group-hover:rotate-0 transition-transform`}>
                                        <div className="flex items-start gap-6">
                                            <div className={`${feature.color} p-4 border-2 ${feature.accent}`}>
                                                <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="poster-title text-3xl font-bold text-white mb-3 uppercase">
                                                    {feature.title}
                                                </h3>
                                                <p className="poster-body text-gray-300 text-lg leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Tech Section */}
                    <div className="relative mt-20">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl" />
                        <div className="relative bg-black border-4 border-yellow-400 p-12 transform rotate-1">
                            <div className="bg-black border-4 border-white p-8 transform -rotate-2">
                                <h2 className="poster-title text-5xl font-bold text-white mb-6 uppercase text-center">
                                    Championship-Grade Technology
                                </h2>
                                <div className="grid md:grid-cols-3 gap-6 text-center">
                                    <div>
                                        <div className="text-6xl font-black text-red-500 poster-title">FAST</div>
                                        <p className="poster-body text-gray-300 mt-2">Lightning-quick performance</p>
                                    </div>
                                    <div>
                                        <div className="text-6xl font-black text-yellow-400 poster-title">MODERN</div>
                                        <p className="poster-body text-gray-300 mt-2">Built with latest tech</p>
                                    </div>
                                    <div>
                                        <div className="text-6xl font-black text-blue-500 poster-title">CROSS-PLATFORM</div>
                                        <p className="poster-body text-gray-300 mt-2">Works everywhere</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
