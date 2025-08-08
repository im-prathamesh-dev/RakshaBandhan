"use client";
import Image from "next/image"
import { Heart } from 'lucide-react'
import { cn } from "@/lib/utils"
import { greatVibes, caveat } from "@/lib/fonts"
import Sparkles from "@/components/sparkles"
import FloatingRakhis from "@/components/floating-rakhis"
import Petals from "@/components/petals"
import GlowHeart from "@/components/glow-heart"
import SectionReveal from "@/components/section-reveal"
import AudioControl from "@/components/audio-control"

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Festive gradient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,200,100,0.35),transparent),radial-gradient(800px_400px_at_80%_10%,rgba(255,140,120,0.25),transparent)]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-rose-50 to-pink-50" aria-hidden="true" />

      {/* Subtle, faint Shinchan sketch overlay */}
      <div className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-[0.08]">
        <div className="relative h-full w-full">
          <Image
            src="/faint-shinchan-outline.png"
            alt=""
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Decorative overlays */}
      <Sparkles />
      <FloatingRakhis />
      <Petals />

      {/* Floating audio control */}
      <div className="fixed bottom-4 right-4 z-50">
        <AudioControl />
      </div>

      {/* Welcome glow heart on load */}
      <GlowHeart />

      <div className="relative z-10 mx-auto w-full max-w-screen-md px-4 py-8 sm:py-10 md:py-12">
        {/* Hero Section */}
        <SectionReveal as="section" className="mb-10 sm:mb-12">
          <h1
            className={cn(
              "mx-auto text-center text-4xl leading-tight sm:text-5xl",
              greatVibes.className
            )}
            style={{
              textShadow:
                "0 0 18px rgba(255, 193, 7, 0.55), 0 0 4px rgba(255, 94, 94, 0.35)",
            }}
          >
            {"Happy Rakshabandhan, Didi ❤️"}
          </h1>

          <div className="mt-6 sm:mt-8">
            <div className="group relative overflow-hidden rounded-2xl border border-amber-200/50 bg-white/70 shadow-lg backdrop-blur-sm transition-transform duration-300 active:scale-[0.98]">
              <Image
                src="/shin.png"
                alt="Shinchan and Himawari smiling in a festive Rakshabandhan scene"
                width={864}
                height={480}
                className="h-auto w-full"
                priority
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-amber-300/30"
              />
              {/* gentle sparkle overlay */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-[&]:opacity-100">
                <Sparkles subtle />
              </div>
            </div>
          </div>

          <p className="sr-only">
            A festive banner to celebrate Rakshabandhan with warm colors, sparkles, and joy.
          </p>
        </SectionReveal>

        {/* Letter Section */}
        <SectionReveal as="section" className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Illustration */}
            <div className="order-1 lg:order-none">
              <div className="group relative overflow-hidden rounded-2xl border border-rose-200/50 bg-white/70 shadow-md transition-transform duration-300 hover:scale-[1.01] active:scale-[0.98]">
                <Image
                  src="/shinchan-himawari-smiling.png"
                  alt="Cute illustration of Shinchan and Himawari"
                  width={480}
                  height={360}
                  className="h-auto w-full"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-rose-50/40 to-transparent" />
              </div>
            </div>

            {/* Letter */}
            <article className="order-2 rounded-2xl border border-amber-200/60 bg-white/80 p-5 shadow-md backdrop-blur-sm">
              <header className="mb-2">
                <h2 className={cn("text-xl text-rose-700", caveat.className)}>
                  {"A Letter for You"}
                </h2>
              </header>
              <p className="text-[15px] leading-7 text-stone-700">
                {"Dear Didi,"}
                <br />
                {"On this Rakshabandhan, I want you to know that you are my best friend, my biggest supporter, and my forever protector in life’s ups and downs."}
                <br />
                {"Thank you for always being there for me, through every laugh and every tear."}
                <br />
                {"You are more than a sister — you are my guiding light, my strength, and my favorite person to annoy endlessly!"}
                <br />
                {"I promise to always stand by you, protect you, and be your partner-in-crime for life."}
                <br />
                {"Love you always ❤️"}
                <br />
                {"– Prathamesh"}
              </p>
            </article>
          </div>
        </SectionReveal>

        {/* Closing Section */}
        <SectionReveal as="section" className="mb-20 sm:mb-24">
          <div className="group relative overflow-hidden rounded-2xl border border-pink-200/60 bg-white/70 shadow-lg transition-transform duration-300 hover:scale-[1.01] active:scale-[0.98]">
            <Image
              src="/shinchan-himawari-rakhi.png"
              alt="Shinchan tying Rakhi to Himawari in a cozy moment"
              width={864}
              height={500}
              className="h-auto w-full"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100"
              style={{
                boxShadow: "inset 0 0 120px 40px rgba(255, 160, 160, 0.25)",
              }}
            />
          </div>

          <p
            className={cn(
              "mt-4 text-center text-3xl text-rose-700 sm:text-4xl",
              greatVibes.className
            )}
            style={{ textShadow: "0 0 12px rgba(255, 105, 97, 0.35)" }}
          >
            {"Love You Didi ❤️"}
          </p>
        </SectionReveal>

        {/* Footer */}
        <footer className="relative z-10 mt-10 pb-6 text-center">
          <p className="text-sm text-stone-600">
            Made with ❤️ by <span className="font-semibold text-rose-700">Prathamesh</span>
          </p>
          <a
            href="https://instagram.com/prathamesh_d_1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-sm text-pink-600 hover:text-pink-800 transition-colors"
          >
            @prathamesh_d_1
          </a>
        </footer>
      </div>

      {/* Lightweight animation styles */}
      <style jsx global>{`
        @keyframes sparkle {
          0% { transform: scale(0.8) rotate(0deg); opacity: 0; }
          25% { opacity: 1; }
          50% { transform: scale(1) rotate(60deg); opacity: 0.9; }
          75% { opacity: 1; }
          100% { transform: scale(0.8) rotate(120deg); opacity: 0; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes drift {
          0% { transform: translateY(-10vh) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          50% { transform: translateY(40vh) translateX(-10px) rotate(30deg); }
          100% { transform: translateY(90vh) translateX(10px) rotate(60deg); opacity: 0; }
        }
        .reveal-hidden { opacity: 0; transform: translateY(12px); }
        .reveal-show { opacity: 1; transform: translateY(0); transition: opacity 600ms ease, transform 600ms ease; }
        * { -webkit-tap-highlight-color: rgba(0,0,0,0); }
      `}</style>
    </main>
  )
}
