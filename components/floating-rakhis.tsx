"use client"

import React from "react"
import { cn } from "@/lib/utils"

export default function FloatingRakhis({ className }: { className?: string }) {
  // Create a few decorative "rakhi" medallions using CSS only
  const rakhis = [
    { top: "12%", left: "8%", hue: 18, delay: 0 },
    { top: "22%", left: "85%", hue: 340, delay: 0.7 },
    { top: "55%", left: "6%", hue: 28, delay: 1.1 },
    { top: "70%", left: "88%", hue: 8, delay: 0.3 },
    { top: "82%", left: "25%", hue: 358, delay: 1.6 },
  ]
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
      {rakhis.map((r, i) => (
        <div
          key={i}
          className="absolute"
          style={{ top: r.top, left: r.left, animation: `float 5s ${r.delay}s ease-in-out infinite` }}
        >
          <div
            className="relative"
            style={{
              width: 28,
              height: 28,
              borderRadius: 999,
              boxShadow: "0 0 16px rgba(255,180,120,0.45)",
              background: `radial-gradient(circle at 30% 30%, hsl(${r.hue} 95% 70%), hsl(${r.hue} 85% 55%) 60%, hsl(${r.hue} 85% 45%))`,
              border: "2px solid rgba(255, 215, 128, 0.8)",
            }}
          >
            {/* Threads */}
            <span
              className="absolute left-[-40px] top-1/2 h-[2px] w-[40px] -translate-y-1/2"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,215,128,0), rgba(255,215,128,0.9))",
              }}
            />
            <span
              className="absolute right-[-40px] top-1/2 h-[2px] w-[40px] -translate-y-1/2"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,215,128,0.9), rgba(255,215,128,0))",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
