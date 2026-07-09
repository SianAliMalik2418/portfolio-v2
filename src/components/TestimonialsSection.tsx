"use client"

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
        "flex h-full w-full sm:w-72 flex-col rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.04] px-4 py-3 transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.07]",
        className
      )}
    >
      <blockquote className="grow text-sm text-black/75 dark:text-white/75 leading-relaxed mb-4 font-[family-name:var(--font-instrument-serif)] italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-xs font-semibold text-neutral-600 dark:text-neutral-300 shrink-0 select-none">
          {testimonial.authorName.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold text-black dark:text-white leading-4">
            {testimonial.authorName}
          </div>
          <div className="text-xs text-neutral-500 dark:text-neutral-400 leading-4 mt-0.5">
            {testimonial.authorTagline}
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
        className="[--duration:45s] [--gap:0.75rem]"
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
  return (
    <div className="py-7">
      <div className="mb-4">
        <h2 className="text-base sm:text-xl opacity-90 font-medium font-[family-name:var(--font-instrument-serif)]">
          What people say
        </h2>
      </div>

      {/* Mobile: vertical stack */}
      <div className="flex flex-col gap-3 sm:hidden">
        {[...testimonialsRow1, ...testimonialsRow2].map((t, i) => (
          <TestimonialCard key={i} testimonial={t} />
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
