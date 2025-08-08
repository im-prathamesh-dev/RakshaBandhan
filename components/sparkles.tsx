"use client"

import React from "react"
import { cn } from "@/lib/utils"

type Props = {
  subtle?: boolean
  className?: string
}

export default function Sparkles({ subtle, className }: Props) {
  // A few lightweight sparkles to keep performance great on mobile
  const items = Array.from({ length: subtle ? 10 : 18 })
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0",
        subtle ? "opacity-70" : "opacity-80",
        className
      )}
    >
      {items.map((_, i) => {
        const top = Math.round((i * 53) % 100) // deterministic scatter
        const left = Math.round((i * 37) % 100)
        const size = (i % 3) + 2 // 2-4px
        const delay = (i % 6) * 0.6
        return (
          <span
            key={i}
            className="absolute rounded-full shadow-[0_0_16px_4px_rgba(255,215,128,0.5)]"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: size,
              height: size,
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,215,128,1), rgba(255,145,130,0.9) 60%, rgba(255,145,130,0.2) 100%)",
              animation: `sparkle 2.8s ${delay}s ease-in-out infinite`,
            }}
          />
        )
      })}
    </div>
  )
}
