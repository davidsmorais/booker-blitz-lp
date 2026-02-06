import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Booker Blitz - Wrestling Promotion Management Game",
  description: "Book your way to glory in Booker Blitz, the ultimate wrestling promotion management simulator. Manage shows, build storylines, and create unforgettable moments.",
  keywords: ["wrestling game", "management simulator", "booking game", "wrestling promotion", "pro wrestling"],
  authors: [{ name: "Booker Blitz Team" }],
  openGraph: {
    title: "Booker Blitz - Wrestling Promotion Management Game",
    description: "Book your way to glory in Booker Blitz, the ultimate wrestling promotion management simulator.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Booker Blitz - Wrestling Promotion Management Game",
    description: "Book your way to glory in Booker Blitz, the ultimate wrestling promotion management simulator.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
