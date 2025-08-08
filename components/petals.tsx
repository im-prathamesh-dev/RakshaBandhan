"use client"

import React from "react"

export default function Petals() {
  // Deterministic positions for performance and SSR friendliness
  const petals = [
    { left: "10%", delay: 0 },
    { left: "22%", delay: 0.8 },
    { left: "34%", delay: 1.4 },
    { left: "46%", delay: 0.2 },
    { left: "58%", delay: 1.1 },
    { left: "70%", delay: 0.6 },
    { left: "82%", delay: 1.8 },
    { left: "16%", delay: 1.0 },
    { left: "28%", delay: 1.6 },
    { left: "64%", delay: 0.4 },
  ]

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p, i) => (
        <span
          key={i}
          className="absolute top-[-10vh] block"
          style={{
            left: p.left,
            width: 10,
            height: 16,
            borderRadius: "10px 10px 10px 0",
            background:
              "radial-gradient(circle at 40% 20%, rgba(255,160,175,1), rgba(255,120,140,0.95) 60%, rgba(255,120,140,0.5))",
            transformOrigin: "50% 0%",
            filter: "drop-shadow(0 2px 4px rgba(255,100,130,0.2))",
            animation: `drift 8.5s ${p.delay}s linear infinite`,
            opacity: 0.85,
          }}
        />
      ))}
    </div>
  )
}
