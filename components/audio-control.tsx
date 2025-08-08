"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Music2, PauseCircle, PlayCircle } from 'lucide-react'

export default function AudioControl() {
  const audioRef = React.useRef<HTMLAudioElement | null>(null)
  const [ready, setReady] = React.useState(false)
  const [playing, setPlaying] = React.useState(false)

  React.useEffect(() => {
    const el = new Audio("/audio/festive.mp3")
    audioRef.current = el
    const onCanPlay = () => setReady(true)
    const onEnded = () => setPlaying(false)
    el.addEventListener("canplay", onCanPlay)
    el.addEventListener("ended", onEnded)
    // Friendly volume for mobile
    el.volume = 0.5
    return () => {
      el.pause()
      el.removeEventListener("canplay", onCanPlay)
      el.removeEventListener("ended", onEnded)
    }
  }, [])

  const toggle = async () => {
    const el = audioRef.current
    if (!el) return
    try {
      if (playing) {
        el.pause()
        setPlaying(false)
      } else {
        await el.play()
        setPlaying(true)
      }
    } catch (e) {
      // Autoplay may be blocked; user interaction will allow play
      console.warn("Audio play error:", e)
    }
  }

  return (
    <div className="flex items-center gap-2 rounded-full border border-amber-200/50 bg-white/80 p-1 shadow backdrop-blur">
      <span className="ml-2 flex items-center gap-1 text-sm text-amber-800">
        <Music2 size={16} />
        {"Music"}
      </span>
      <Button
        size="lg"
        onClick={toggle}
        className="h-10 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 px-4 text-white shadow hover:from-amber-500 hover:to-rose-500 active:scale-95"
      >
        {playing ? (
          <span className="flex items-center gap-2">
            <PauseCircle size={18} />
            {"Pause"}
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <PlayCircle size={18} />
            {"Play"}
          </span>
        )}
      </Button>
    </div>
  )
}
