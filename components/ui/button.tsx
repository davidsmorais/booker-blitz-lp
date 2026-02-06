import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            "default": "bg-gradient-to-r from-cyan-500 to-magenta-500 text-white hover:from-cyan-600 hover:to-magenta-600",
            "outline": "border border-foreground/20 hover:bg-foreground/10",
            "ghost": "hover:bg-foreground/10",
            "link": "underline-offset-4 hover:underline",
          }[variant],
          {
            "default": "h-10 py-2 px-4",
            "sm": "h-9 px-3 rounded-md text-sm",
            "lg": "h-11 px-8 rounded-md",
          }[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
