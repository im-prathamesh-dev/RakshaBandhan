"use client"

import React from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  as?: keyof JSX.IntrinsicElements
  className?: string
  children: React.ReactNode
}

export default function SectionReveal({ as = "section", className, children }: RevealProps) {
  const ref = React.useRef<HTMLElement | null>(null)
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShow(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const Comp = as as any
  return (
    <Comp ref={ref} className={cn(show ? "reveal-show" : "reveal-hidden", className)}>
      {children}
    </Comp>
  )
}
