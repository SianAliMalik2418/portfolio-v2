"use client";

import { Marquee } from "@/components/magicui/marquee";
import { skills } from "@/data/skills";
import { SkillIcon } from "@/components/SkillIcon";

interface TechIconProps {
  tech: (typeof skills)[0];
  className?: string;
}

function TechIcon({ tech, className = "" }: TechIconProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-2 sm:p-3 transition-all duration-300 hover:scale-105 min-w-[80px] sm:min-w-[90px] group ${className}`}
    >
      {/* Icon Container */}
      <div className="relative w-8 h-8 sm:w-10 sm:h-10 mb-1.5 sm:mb-2 flex items-center justify-center">
        {/* Try to load actual SVG, fallback to grey placeholder */}
        <div className="w-full h-full relative">
          <SkillIcon
            skill={tech}
            width={40}
            height={40}
            className="w-full h-full"
            imageClassName="w-full h-full grayscale opacity-70 hover:opacity-90 transition-opacity"
          />
        </div>
      </div>

      {/* Tech Name */}
      <span className="text-[10px] sm:text-xs text-center font-medium text-gray-700 dark:text-gray-300 leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        {tech.name}
      </span>
    </div>
  );
}

interface TechStackMarqueeProps {
  className?: string;
}

export default function TechStackMarquee({
  className = "",
}: TechStackMarqueeProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Title - matching other component styles */}
      <div className="mb-4">
        <h2 className="text-base font-[family-name:var(--font-instrument-serif)] sm:text-xl opacity-60 -tracking-[0.01em]">
          Stack I use
        </h2>
        <p className="text-sm sm:text-base dark:text-white/70 text-black/70 leading-relaxed">
          Technologies I use to build full-stack products and production
          workflows
        </p>
      </div>

      {/* Single Marquee Container */}
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:80s] [--gap:1rem]">
          {skills.map((tech, index) => (
            <TechIcon key={`${tech.name}-${index}`} tech={tech} />
          ))}
        </Marquee>

        {/* Fade edges for better visual effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-linear-to-r from-white dark:from-zinc-900 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-linear-to-l from-white dark:from-zinc-900 to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}
