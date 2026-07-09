"use client";
import { FaLinkedin, FaXTwitter, FaGithub, FaPaperclip } from "react-icons/fa6";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import * as React from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { profileConfig } from "@/config/profile";

interface ProfileHeaderProps {
  name?: string;
  age?: string;
  title?: string;
  profileImage?: string;
  socialLinks?: {
    twitter?: string;
    resume?: string;
    github?: string;
    linkedin?: string;
  };
}

export default function ProfileHeader({
  name = profileConfig.name,
  age = profileConfig.age,
  title = profileConfig.title,
  profileImage = profileConfig.avatar,
  socialLinks = profileConfig.socials,
}: ProfileHeaderProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex gap-6 ">
      {/*Avatar*/}
      <div className="flex items-center justify-between">
        <div
          className="w-24 h-24 sm:w-28 sm:h-28 relative z-10 rounded-sm overflow-hidden bg-cover bg-center shrink-0 ring-4 ring-white dark:ring-white shadow-lg"
          role="img"
          aria-label={name}
          style={{ backgroundImage: `url("${profileImage}")` }}
        />
      </div>

      {/*Name and Title*/}
      <div className="sm:flex sm:justify-between sm:items-center w-full flex-col sm:flex-row">
        <div>
          <h1 className="font-[family-name:var(--font-instrument-serif)] text-2xl sm:text-4xl tracking-[0.01em] font-medium mb-0">
            {name}
          </h1>
          <p className="opacity-40 text-xs sm:text-sm">
            {[age, title].filter(Boolean).join(" • ")}
          </p>
        </div>

        {/*Social Links*/}
        <div className="flex justify-start gap-1 sm:gap-2 mt-3 sm:mt-0">
          {socialLinks.github && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full flex items-center justify-center">
                  <a
                    className="touch-manipulation active:opacity-75 flex items-center justify-center w-full h-full"
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      WebkitTapHighlightColor: "transparent",
                      WebkitTouchCallout: "none",
                      WebkitUserSelect: "none",
                      userSelect: "none",
                    }}
                  >
                    <FaGithub className="text-[13px] sm:text-[16px] text-black/75 dark:text-white/80" />
                  </a>
                </div>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>
          )}
          {socialLinks.twitter && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full flex items-center justify-center">
                  <a
                    className="touch-manipulation active:opacity-75 flex items-center justify-center w-full h-full"
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      WebkitTapHighlightColor: "transparent",
                      WebkitTouchCallout: "none",
                      WebkitUserSelect: "none",
                      userSelect: "none",
                    }}
                  >
                    <FaXTwitter className="text-[13px] sm:text-[16px] text-black/75 dark:text-white/80" />
                  </a>
                </div>
              </TooltipTrigger>
              <TooltipContent>Twitter</TooltipContent>
            </Tooltip>
          )}
          {socialLinks.resume && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full flex items-center justify-center">
                  <a
                    className="touch-manipulation active:opacity-75 flex items-center justify-center w-full h-full"
                    href={socialLinks.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      WebkitTapHighlightColor: "transparent",
                      WebkitTouchCallout: "none",
                      WebkitUserSelect: "none",
                      userSelect: "none",
                    }}
                  >
                    <FaPaperclip className="text-[13px] sm:text-[16px] text-black/75 dark:text-white/80" />
                  </a>
                </div>
              </TooltipTrigger>
              <TooltipContent>Resume</TooltipContent>
            </Tooltip>
          )}
          {socialLinks.linkedin && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full flex items-center justify-center">
                  <a
                    className="touch-manipulation active:opacity-75 flex items-center justify-center w-full h-full"
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      WebkitTapHighlightColor: "transparent",
                      WebkitTouchCallout: "none",
                      WebkitUserSelect: "none",
                      userSelect: "none",
                    }}
                  >
                    <FaLinkedin className="text-[13px] sm:text-[16px] text-black/75 dark:text-white/80" />
                  </a>
                </div>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>
          )}
          {mounted && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full flex items-center justify-center">
                  <button
                    onClick={() => {
                      const newTheme = theme === "light" ? "dark" : "light";
                      if (
                        typeof document !== "undefined" &&
                        "startViewTransition" in document
                      ) {
                        (
                          document as Document & {
                            startViewTransition: (callback: () => void) => void;
                          }
                        ).startViewTransition(() => {
                          setTheme(newTheme);
                        });
                      } else {
                        setTheme(newTheme);
                      }
                    }}
                    className="touch-manipulation active:opacity-75 flex items-center justify-center w-full h-full"
                    aria-label={
                      theme === "light"
                        ? "Switch to dark theme"
                        : "Switch to light theme"
                    }
                    style={{
                      WebkitTapHighlightColor: "transparent",
                      WebkitTouchCallout: "none",
                      WebkitUserSelect: "none",
                      userSelect: "none",
                    }}
                  >
                    {theme === "light" ? (
                      <Moon className="size-[12px] sm:size-[14px] -mt-px" aria-hidden="true" />
                    ) : (
                      <Sun className="size-[12px] sm:size-[14px] -mt-px" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                {theme === "light"
                  ? "Switch to dark theme"
                  : "Switch to light theme"}
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
}
