import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export default function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  const isEven = index % 2 === 0
  return (
    <div
      className={`group relative bg-black/50 backdrop-blur-sm border ${
        isEven ? "border-cyan-500/30 hover:border-cyan-500" : "border-magenta-500/30 hover:border-magenta-500"
      } p-6 transition-all duration-300 hover:shadow-2xl ${
        isEven ? "hover:shadow-cyan-500/50" : "hover:shadow-magenta-500/50"
      }`}
    >
      {/* Corner Accents */}
      <div
        className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${isEven ? "border-cyan-400" : "border-magenta-400"}`}
      />
      <div
        className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${isEven ? "border-cyan-400" : "border-magenta-400"}`}
      />
      <div
        className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${isEven ? "border-cyan-400" : "border-magenta-400"}`}
      />
      <div
        className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${isEven ? "border-cyan-400" : "border-magenta-400"}`}
      />

      <div className="flex items-start gap-4">
        <div className="relative">
          <div
            className={`absolute inset-0 ${
              isEven ? "bg-cyan-500" : "bg-magenta-500"
            } blur-xl opacity-50 group-hover:opacity-100 transition-opacity`}
          />
          <div className={`relative bg-black border ${isEven ? "border-cyan-500" : "border-magenta-500"} p-3`}>
            <Icon className={`w-8 h-8 ${isEven ? "text-cyan-400" : "text-magenta-400"}`} strokeWidth={1.5} />
          </div>
        </div>

        <div className="flex-1">
          <div className={`cyber-body ${isEven ? "text-cyan-400/60" : "text-magenta-400/60"} text-xs tracking-widest mb-1`}>
            MODULE_{String(index + 1).padStart(2, "0")}
          </div>
          <h3
            className={`cyber-title text-xl font-bold text-white mb-3 group-hover:${
              isEven ? "text-cyan-400" : "text-magenta-400"
            } transition-colors`}
          >
            {title}
          </h3>
          <p className="cyber-body text-gray-400 leading-relaxed text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}
