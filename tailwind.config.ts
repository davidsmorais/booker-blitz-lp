import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        cyan: {
          DEFAULT: "#00f5ff",
          50: "#e6feff",
          100: "#ccfdff",
          200: "#99fbff",
          300: "#66f9ff",
          400: "#33f7ff",
          500: "#00f5ff",
          600: "#00c4cc",
          700: "#009399",
          800: "#006266",
          900: "#003133",
        },
        magenta: {
          DEFAULT: "#ff00ff",
          50: "#ffe6ff",
          100: "#ffccff",
          200: "#ff99ff",
          300: "#ff66ff",
          400: "#ff33ff",
          500: "#ff00ff",
          600: "#cc00cc",
          700: "#990099",
          800: "#660066",
          900: "#330033",
        },
      },
    },
  },
  plugins: [],
}

export default config
