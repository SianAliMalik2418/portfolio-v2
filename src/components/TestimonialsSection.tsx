"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/magicui/marquee"
import { testimonialsRow1, testimonialsRow2 } from "@/data/testimonials"
import type { Testimonial } from "@/types/testimonial"

function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial
  className?: string
}) {
  return (
    <figure
      className={cn(
        "flex self-start w-full sm:w-72 flex-col rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.04] px-4 py-3 transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.07]",
        className
      )}
    >
      <blockquote className="text-sm sm:text-base text-black/75 dark:text-white/75 leading-relaxed mb-4">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-xs font-semibold text-neutral-600 dark:text-neutral-300 shrink-0 select-none overflow-hidden">
          {testimonial.authorAvatar ? (
            <Image
              src={testimonial.authorAvatar}
              alt={testimonial.authorName}
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          ) : (
            testimonial.authorName.charAt(0)
          )}
        </div>
        <div>
          <div className="text-sm font-semibold text-black dark:text-white leading-4">
            {testimonial.authorName}
          </div>
        </div>
      </figcaption>
    </figure>
  )
}

function TestimonialRow({
  data,
  reverse = false,
}: {
  data: Testimonial[]
  reverse?: boolean
}) {
  return (
    <div className="relative">
      <Marquee
        reverse={reverse}
        pauseOnHover
        className="[--duration:30s] [--gap:0.75rem]"
      >
        {data.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute left-0 top-0 w-20 h-full bg-linear-to-r from-white dark:from-zinc-900 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 w-20 h-full bg-linear-to-l from-white dark:from-zinc-900 to-transparent z-10" />
    </div>
  )
}

export default function TestimonialsSection() {
  const all = [...testimonialsRow1, ...testimonialsRow2]
  const scrollRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const isUserScrolling = useRef(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isUserScrolling.current) return
      const el = scrollRef.current
      if (!el) return
      const next = (current + 1) % all.length
      const cardWidth = el.scrollWidth / all.length
      el.scrollTo({ left: next * cardWidth, behavior: "smooth" })
      setCurrent(next)
    }, 3500)
    return () => clearInterval(interval)
  }, [current, all.length])

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.scrollWidth / all.length
    setCurrent(Math.round(el.scrollLeft / cardWidth))
  }

  return (
    <div className="py-7">
      <div className="mb-4">
        <h2 className="text-base sm:text-xl opacity-90 font-medium font-[family-name:var(--font-instrument-serif)]">
          What people say
        </h2>
      </div>

      {/* Mobile: auto-rotating snap carousel */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onTouchStart={() => { isUserScrolling.current = true }}
        onTouchEnd={() => { setTimeout(() => { isUserScrolling.current = false }, 1000) }}
        className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:hidden -mx-5 px-5 pb-1 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
      >
        {all.map((t, i) => (
          <div key={i} className="snap-center shrink-0 w-[calc(100vw-2.5rem)]">
            <TestimonialCard testimonial={t} />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-3 sm:hidden">
        {all.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const el = scrollRef.current
              if (!el) return
              const cardWidth = el.scrollWidth / all.length
              el.scrollTo({ left: i * cardWidth, behavior: "smooth" })
              setCurrent(i)
            }}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === current ? "w-4 bg-black/50 dark:bg-white/50" : "w-1.5 bg-black/20 dark:bg-white/20"
            )}
          />
        ))}
      </div>

      {/* Desktop: dual marquee rows */}
      <div className="hidden sm:flex flex-col gap-3">
        <TestimonialRow data={testimonialsRow1} />
        <TestimonialRow data={testimonialsRow2} reverse />
      </div>
    </div>
  )
}
