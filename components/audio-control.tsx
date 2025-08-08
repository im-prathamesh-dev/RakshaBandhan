"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Music2, PauseCircle, PlayCircle } from 'lucide-react'

export default function AudioControl() {
  const audioRef = React.useRef<HTMLAudioElement | null>(null)
  const [ready, setReady] = React.useState(false)
  const [playing, setPlaying] = React.useState(false)
  const [overlayVisible, setOverlayVisible] = React.useState(true)

  React.useEffect(() => {
    const el = new Audio("/audio/song.mp3")
    audioRef.current = el
    const onCanPlay = () => setReady(true)
    const onEnded = () => setPlaying(false)
    el.addEventListener("canplay", onCanPlay)
    el.addEventListener("ended", onEnded)
    el.volume = 0.5

    return () => {
      el.pause()
      el.removeEventListener("canplay", onCanPlay)
      el.removeEventListener("ended", onEnded)
    }
  }, [])

  const startMusic = async () => {
    const el = audioRef.current
    if (!el) return
    try {
      await el.play()
      setPlaying(true)
      setOverlayVisible(false)
    } catch (e) {
      console.warn("Audio play error:", e)
    }
  }

  const toggle = async () => {
    const el = audioRef.current
    if (!el) return
    if (playing) {
      el.pause()
      setPlaying(false)
    } else {
      try {
        await el.play()
        setPlaying(true)
      } catch (e) {
        console.warn("Play error:", e)
      }
    }
  }

  return (
    <>
      {/* Overlay */}
      {overlayVisible && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-amber-200 to-rose-200">
          <Music2 size={48} className="text-amber-800 mb-4" />
          <h1 className="mb-6 text-xl font-bold text-amber-900">
            Didi… tap here or I’ll start singing myself 🎤😂
          </h1>
          <Button
            onClick={startMusic}
            className="rounded-full bg-gradient-to-r from-amber-400 to-rose-400 px-6 py-3 text-lg text-white shadow-lg hover:from-amber-500 hover:to-rose-500 active:scale-95"
          >
            Start
          </Button>
        </div>
      )}

      {/* Control Bar */}
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
    </>
  )
}
