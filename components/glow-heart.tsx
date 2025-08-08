"use client"

import React from "react"

export default function GlowHeart() {
  const [show, setShow] = React.useState(true)

  React.useEffect(() => {
    const t = setTimeout(() => setShow(false), 2600)
    return () => clearTimeout(t)
  }, [])

  if (!show) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center">
      <div
        className="select-none text-5xl sm:text-6xl"
        style={{
          filter: "drop-shadow(0 0 18px rgba(255, 80, 90, 0.7))",
          animation: "glowHeart 2.2s ease forwards",
        }}
      >
        {"❤️"}
      </div>
      <style jsx global>{`
        @keyframes glowHeart {
          0% { transform: translateY(16px) scale(0.6); opacity: 0; }
          30% { opacity: 1; }
          60% { transform: translateY(-4px) scale(1.05); }
          100% { transform: translateY(-24px) scale(0.9); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
