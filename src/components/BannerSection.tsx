'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useMemo, useState } from 'react'
import { ShimmeringText } from './shimmering-text'

export default function BannerSection() {
  const quotes = useMemo(
    () => [
      'Turning product ideas into polished full-stack applications.',
      'Building reliable web products for teams that need to move fast.',
      'From landing pages to dashboards, I build products that work.',
      'Clean interfaces, reliable APIs, and products ready for real users.',
      'Shipping practical web solutions from concept to launch.',
    ],
    []
  )
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setQuoteIndex((current) => (current + 1) % quotes.length)
    }, 3500)

    return () => window.clearInterval(interval)
  }, [quotes.length])

  return (
    <div className="w-full mb-2 relative">
      <div className="flex h-[200px] min-h-[100px] w-full items-center justify-center bg-white px-4 text-black dark:bg-black dark:text-white sm:h-[270px]">
        <div className="grid min-h-20 place-items-center overflow-hidden text-center text-base italic font-[family-name:var(--font-instrument-serif)] sm:min-h-24 sm:text-xl">
          <AnimatePresence mode="wait">
            <motion.p
              key={quotes[quoteIndex]}
              initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -18, filter: 'blur(4px)' }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="max-w-2xl leading-relaxed"
            >
              <ShimmeringText
                text={quotes[quoteIndex]}
                duration={1.4}
                className="dark:[--color:var(--color-zinc-400)] dark:[--shimmering-color:var(--color-zinc-50)]"
              />
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
