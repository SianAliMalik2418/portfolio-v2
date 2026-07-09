"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { experiences } from "@/data/experience";

export default function ExperienceContent() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpanded = (company: string) => {
    setExpanded((prev) => ({
      ...prev,
      [company]: !prev[company],
    }));
  };

  return (
    <div className="space-y-4 dark:text-white/70 text-black/70">
      {experiences.map((exp, expIndex) => {
        const isFirstExperience = expIndex === 0;
        const isExpanded = isFirstExperience || expanded[exp.company];
        const isCurrentRole = exp.duration.toLowerCase().includes("present");
        const visibleAchievements = isFirstExperience
          ? (exp.achievements ?? [])
          : (exp.achievements?.slice(0, 3) ?? []);
        const hiddenAchievements = isFirstExperience
          ? []
          : (exp.achievements?.slice(3) ?? []);
        const hasHiddenAchievements = hiddenAchievements.length > 0;

        return (
          <div key={exp.company} className="rounded-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center overflow-hidden shrink-0">
                  {exp.logoUrl ? (
                    <Image
                      src={exp.logoUrl}
                      alt={exp.company}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-sm sm:text-lg font-medium dark:text-white text-black">
                      {exp.company.charAt(0)}
                    </span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="flex items-center gap-2 font-medium dark:text-white text-black text-sm sm:text-lg">
                    {exp.href ? (
                      <Link
                        href={exp.href}
                        target="_blank"
                        className="hover:text-[#006FEE] transition-colors"
                      >
                        {exp.company}
                      </Link>
                    ) : (
                      exp.company
                    )}
                    {isCurrentRole && (
                      <span
                        className="relative inline-flex size-2 shrink-0"
                        aria-label="Current role"
                      >
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                      </span>
                    )}
                  </h3>
                  <p className="text-[10px] sm:text-sm opacity-70">
                    {exp.position}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="pl-13 sm:pl-0 sm:text-right shrink-0">
                  <p className="text-[10px] sm:text-sm opacity-50">
                    {exp.duration}
                  </p>
                </div>

                {hasHiddenAchievements && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => toggleExpanded(exp.company)}
                        className="shrink-0 p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        aria-expanded={isExpanded}
                        aria-label={
                          isExpanded ? "Collapse details" : "Expand details"
                        }
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      {isExpanded ? "Collapse details" : "Expand details"}
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
            </div>

            {visibleAchievements.length > 0 && (
              <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <ul className="space-y-2.5 text-sm sm:text-base opacity-80">
                  {visibleAchievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-[#006FEE]">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {hasHiddenAchievements && (
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isExpanded
                    ? "max-h-[1000px] opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-2">
                  <ul className="space-y-2.5 text-sm sm:text-base opacity-80">
                    {hiddenAchievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-[#006FEE]">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
