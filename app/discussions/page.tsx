"use client"

import { useState, useEffect, useCallback } from "react"
import Navigation from "@/components/Navigation"
import { supabase, type Post, type PostCategory } from "@/lib/supabase"
import { Megaphone, Users, Bug, ChevronUp, Plus, X, Loader2, Pin } from "lucide-react"

const TABS: { id: PostCategory; label: string; icon: React.ElementType; color: string }[] = [
  { id: "announcement", label: "Announcements",       icon: Megaphone, color: "cyan"    },
  { id: "community",    label: "Community Creations", icon: Users,     color: "magenta" },
  { id: "bug_report",   label: "Bug Reports",         icon: Bug,       color: "yellow"  },
]

const COLOR_MAP: Record<string, string> = {
  cyan:    "border-cyan-500",
  magenta: "border-magenta-500",
  yellow:  "border-yellow-500",
}

const TEXT_MAP: Record<string, string> = {
  cyan:    "text-cyan-400",
  magenta: "text-magenta-400",
  yellow:  "text-yellow-400",
}

const GLOW_MAP: Record<string, string> = {
  cyan:    "hover:shadow-cyan-500/50",
  magenta: "hover:shadow-magenta-500/50",
  yellow:  "hover:shadow-yellow-500/50",
}

const TAB_ACTIVE_MAP: Record<string, string> = {
  cyan:    "text-cyan-400 border border-b-0 border-cyan-500/50 bg-black/40",
  magenta: "text-magenta-400 border border-b-0 border-magenta-500/50 bg-black/40",
  yellow:  "text-yellow-400 border border-b-0 border-yellow-500/50 bg-black/40",
}

const TAB_ACCENT_MAP: Record<string, string> = {
  cyan:    "bg-cyan-500",
  magenta: "bg-magenta-500",
  yellow:  "bg-yellow-500",
}

const UPVOTE_HOVER_MAP: Record<string, string> = {
  cyan:    "hover:text-cyan-400",
  magenta: "hover:text-magenta-400",
  yellow:  "hover:text-yellow-400",
}

const CARD_BORDER_MAP: Record<string, string> = {
  cyan:    "border-cyan-500/30",
  magenta: "border-magenta-500/30",
  yellow:  "border-yellow-500/30",
}

export default function Discussions() {
  const [activeTab, setActiveTab]   = useState<PostCategory>("announcement")
  const [posts, setPosts]           = useState<Post[]>([])
  const [loading, setLoading]       = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [showForm, setShowForm]     = useState(false)
  const [error, setError]           = useState<string | null>(null)
  const [form, setForm]             = useState({ title: "", content: "", author: "" })

  const activeTabData = TABS.find((t) => t.id === activeTab)!
  const tabColor = activeTabData.color

  const fetchPosts = useCallback(async () => {
    setLoading(true)
    setError(null)
    const { data, error: fetchError } = await supabase
      .from("posts")
      .select("*")
      .eq("category", activeTab)
      .order("pinned", { ascending: false })
      .order("created_at", { ascending: false })

    if (fetchError) {
      setError("Could not load posts. Supabase credentials may not be configured yet.")
      setPosts([])
    } else {
      setPosts(data as Post[])
    }
    setLoading(false)
  }, [activeTab])

  useEffect(() => { fetchPosts() }, [fetchPosts])

  const handleUpvote = async (postId: string, currentUpvotes: number) => {
    const { error: upvoteError } = await supabase
      .from("posts")
      .update({ upvotes: currentUpvotes + 1 })
      .eq("id", postId)
    if (!upvoteError) {
      setPosts((prev) => prev.map((p) => (p.id === postId ? { ...p, upvotes: currentUpvotes + 1 } : p)))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.title.trim() || !form.content.trim() || !form.author.trim()) return
    setSubmitting(true)
    const { error: insertError } = await supabase.from("posts").insert({
      title: form.title.trim(),
      content: form.content.trim(),
      author: form.author.trim(),
      category: activeTab,
      upvotes: 0,
      pinned: false,
    })
    if (!insertError) {
      setForm({ title: "", content: "", author: "" })
      setShowForm(false)
      fetchPosts()
    } else {
      setError("Failed to submit post. Supabase credentials may not be configured yet.")
    }
    setSubmitting(false)
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;500;700&display=swap');
        .cyber-title { font-family: 'Orbitron', sans-serif; text-transform: uppercase; }
        .cyber-body  { font-family: 'Rajdhani', sans-serif; }
        .grid-bg {
          background-image:
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        @keyframes scan {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .scan-line { animation: scan 4s linear infinite; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeIn 0.3s ease forwards; }
      `}} />

      <Navigation />

      <main className="min-h-screen bg-black relative overflow-hidden pt-24 pb-16 px-4">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="scan-line absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta-500/20 rounded-full blur-[120px]" />

        <div className="container mx-auto max-w-5xl relative z-10">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="cyber-body text-cyan-400 text-sm tracking-[0.3em] mb-4">COMMUNITY HUB</div>
            <h1 className="cyber-title text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-magenta-500 to-cyan-500 mb-6
                           [text-shadow:_0_0_30px_rgb(6_182_212_/_50%)]">
              DISCUSSIONS
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-6" />
            <p className="cyber-body text-xl text-gray-300">
              Connect with the Booker Blitz community — share creations, stay informed, report bugs.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-cyan-500/20">
            {TABS.map((tab) => {
              const Icon = tab.icon
              const active = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setShowForm(false) }}
                  className={`relative cyber-body text-sm font-bold tracking-widest px-6 py-3 flex items-center gap-2 transition-all duration-300
                    ${active
                      ? TAB_ACTIVE_MAP[tab.color]
                      : "text-gray-400 hover:text-gray-200 border border-transparent"
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                  {active && (
                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 ${TAB_ACCENT_MAP[tab.color]}`} />
                  )}
                </button>
              )
            })}
          </div>

          {/* Action bar */}
          <div className="flex justify-between items-center mb-6">
            <div className={`cyber-body text-xs tracking-widest ${TEXT_MAP[tabColor]}`}>
              {activeTabData.label.toUpperCase()} / THREAD_LIST
            </div>
            {activeTab !== "announcement" && (
              <button
                onClick={() => setShowForm((v) => !v)}
                className={`flex items-center gap-2 cyber-body text-xs font-bold tracking-widest px-5 py-2.5 border transition-all duration-300
                  ${showForm
                    ? "border-gray-600 text-gray-400 hover:border-gray-400"
                    : `${COLOR_MAP[tabColor]} ${TEXT_MAP[tabColor]} hover:shadow-lg ${GLOW_MAP[tabColor]}`
                  }`}
              >
                {showForm
                  ? <><X className="w-4 h-4" /> CANCEL</>
                  : <><Plus className="w-4 h-4" /> NEW POST</>
                }
              </button>
            )}
          </div>

          {/* New-post form */}
          {showForm && activeTab !== "announcement" && (
            <div className={`relative bg-black/60 backdrop-blur-sm border ${COLOR_MAP[tabColor]} p-6 mb-8 fade-in`}>
              <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${COLOR_MAP[tabColor]}`} />
              <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${COLOR_MAP[tabColor]}`} />
              <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${COLOR_MAP[tabColor]}`} />
              <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${COLOR_MAP[tabColor]}`} />
              <h3 className={`cyber-title text-lg font-bold ${TEXT_MAP[tabColor]} mb-6`}>NEW POST</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="cyber-body text-xs tracking-widest text-gray-400 block mb-1">YOUR NAME</label>
                  <input
                    type="text"
                    value={form.author}
                    onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))}
                    placeholder="e.g. BookerFan99"
                    className="w-full bg-black border border-gray-600 focus:outline-none focus:border-cyan-500 text-white cyber-body px-4 py-2.5 text-sm placeholder:text-gray-600"
                    required
                  />
                </div>
                <div>
                  <label className="cyber-body text-xs tracking-widest text-gray-400 block mb-1">TITLE</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                    placeholder={activeTab === "community" ? "My awesome datapack..." : "Describe the bug briefly..."}
                    className="w-full bg-black border border-gray-600 focus:outline-none focus:border-cyan-500 text-white cyber-body px-4 py-2.5 text-sm placeholder:text-gray-600"
                    required
                  />
                </div>
                <div>
                  <label className="cyber-body text-xs tracking-widest text-gray-400 block mb-1">DETAILS</label>
                  <textarea
                    rows={5}
                    value={form.content}
                    onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
                    placeholder={activeTab === "bug_report"
                      ? "Steps to reproduce, expected vs actual behaviour..."
                      : "Describe your creation, share links, screenshots..."}
                    className="w-full bg-black border border-gray-600 focus:outline-none focus:border-cyan-500 text-white cyber-body px-4 py-2.5 text-sm placeholder:text-gray-600 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`flex items-center gap-2 cyber-body text-xs font-bold tracking-widest px-8 py-3 border transition-all duration-300 disabled:opacity-50
                    ${COLOR_MAP[tabColor]} ${TEXT_MAP[tabColor]} hover:shadow-lg ${GLOW_MAP[tabColor]}`}
                >
                  {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> SUBMITTING…</> : "SUBMIT POST"}
                </button>
              </form>
            </div>
          )}

          {/* Posts */}
          {loading ? (
            <div className="flex justify-center items-center py-24">
              <Loader2 className="w-10 h-10 text-cyan-400 animate-spin" />
            </div>
          ) : error ? (
            <div className="relative bg-black/50 backdrop-blur-sm border border-yellow-500/40 p-8 text-center fade-in">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-400" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-400" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-400" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-400" />
              <p className="cyber-body text-yellow-400 text-lg font-bold mb-2">DATABASE NOT CONNECTED</p>
              <p className="cyber-body text-gray-400 text-sm">{error}</p>
              <p className="cyber-body text-gray-500 text-xs mt-4">
                Set <span className="text-cyan-400">NEXT_PUBLIC_SUPABASE_URL</span> and{" "}
                <span className="text-cyan-400">NEXT_PUBLIC_SUPABASE_ANON_KEY</span> to activate.
              </p>
            </div>
          ) : posts.length === 0 ? (
            <div className="relative bg-black/50 backdrop-blur-sm border border-cyan-500/20 p-12 text-center fade-in">
              <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${COLOR_MAP[tabColor]}`} />
              <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${COLOR_MAP[tabColor]}`} />
              <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${COLOR_MAP[tabColor]}`} />
              <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${COLOR_MAP[tabColor]}`} />
              <p className={`cyber-title text-2xl ${TEXT_MAP[tabColor]} mb-3`}>NO POSTS YET</p>
              <p className="cyber-body text-gray-400">
                {activeTab === "announcement"
                  ? "No announcements have been posted yet. Check back soon!"
                  : "Be the first to post in this section!"}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((post, i) => (
                <PostCard key={post.id} post={post} index={i} tabColor={tabColor} onUpvote={handleUpvote} />
              ))}
            </div>
          )}

        </div>
      </main>
    </>
  )
}

function PostCard({
  post, index, tabColor, onUpvote,
}: {
  post: Post; index: number; tabColor: string; onUpvote: (id: string, votes: number) => void
}) {
  return (
    <div
      className={`relative bg-black/50 backdrop-blur-sm border ${CARD_BORDER_MAP[tabColor]} p-6 transition-all duration-300 hover:shadow-xl fade-in`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${COLOR_MAP[tabColor]}`} />
      <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${COLOR_MAP[tabColor]}`} />
      <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${COLOR_MAP[tabColor]}`} />
      <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${COLOR_MAP[tabColor]}`} />

      <div className="flex gap-4">
        {/* Upvote */}
        <div className="flex flex-col items-center gap-1 min-w-[40px]">
          <button
            onClick={() => onUpvote(post.id, post.upvotes)}
            className={`p-1 transition-colors text-gray-500 ${UPVOTE_HOVER_MAP[tabColor]}`}
            aria-label="Upvote"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
          <span className={`cyber-body text-sm font-bold ${TEXT_MAP[tabColor]}`}>{post.upvotes}</span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            {post.pinned && (
              <span className={`flex items-center gap-1 cyber-body text-xs text-yellow-400 tracking-widest`}>
                <Pin className="w-3 h-3" /> PINNED
              </span>
            )}
            <span className="cyber-body text-xs text-gray-500">
              {new Date(post.created_at).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}
            </span>
            <span className="cyber-body text-xs text-gray-600">·</span>
            <span className={`cyber-body text-xs ${TEXT_MAP[tabColor]} tracking-widest`}>{post.author}</span>
          </div>
          <h3 className="cyber-title text-xl font-bold text-white mb-2 break-words">{post.title}</h3>
          <p className="cyber-body text-gray-300 text-sm leading-relaxed line-clamp-3">{post.content}</p>
        </div>
      </div>
    </div>
  )
}
