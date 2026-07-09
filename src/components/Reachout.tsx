"use client";
import { FaLinkedin, FaXTwitter, FaGithub, FaPaperclip } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Tooltip } from "./ui/tooltip-card";
import { profileConfig } from "@/config/profile";

interface ReachoutProps {
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  socialLinks?: {
    twitter?: string;
    resume?: string;
    github?: string;
    linkedin?: string;
    mail?: string;
  };
}

export default function Reachout({
  title = "Let's connect",
  subtitle = "Find me on these platforms",
  align = "left",
  socialLinks = profileConfig.socials,
}: ReachoutProps) {
  const isCentered = align === "center";

  return (
    <div className="pb-5">
      <div className={`${isCentered ? "text-center" : "text-left"} w-full`}>
        <div className="mb-4 sm:mb-6">
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-lg sm:text-xl opacity-60">
            {title}
          </h2>
          {subtitle && (
            <p className="opacity-40 text-md sm:text-lg mb-3 sm:mb-4">
              {subtitle}
            </p>
          )}
        </div>

        <div
          className={`flex gap-3 sm:gap-3 ${isCentered ? "justify-center" : "justify-center sm:justify-start"}`}
        >
          {socialLinks.github && (
            <Tooltip content="GitHub">
              <a
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full touch-manipulation active:opacity-75"
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
                <FaGithub className="text-[18px] sm:text-[18px] text-black/75 dark:text-white/80 shrink-0" />
                <span className="hidden sm:inline text-sm font-medium text-black/75 dark:text-white/80">
                  GitHub
                </span>
              </a>
            </Tooltip>
          )}

          {socialLinks.twitter && (
            <Tooltip content="Twitter">
              <a
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full touch-manipulation active:opacity-75"
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
                <FaXTwitter className="text-[18px] sm:text-[18px] text-black/75 dark:text-white/80 shrink-0" />
                <span className="hidden sm:inline text-sm font-medium text-black/75 dark:text-white/80">
                  Twitter
                </span>
              </a>
            </Tooltip>
          )}

          {socialLinks.linkedin && (
            <Tooltip content="LinkedIn">
              <a
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full touch-manipulation active:opacity-75"
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
                <FaLinkedin className="text-[18px] sm:text-[18px] text-black/75 dark:text-white/80 shrink-0" />
                <span className="hidden sm:inline text-sm font-medium text-black/75 dark:text-white/80">
                  LinkedIn
                </span>
              </a>
            </Tooltip>
          )}

          {socialLinks.mail && (
            <Tooltip content="Contact me">
              <a
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full touch-manipulation active:opacity-75"
                href={socialLinks.mail}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  WebkitTapHighlightColor: "transparent",
                  WebkitTouchCallout: "none",
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
              >
                <IoMdMail className="text-[18px] sm:text-[18px] text-black/75 dark:text-white/80 shrink-0" />
                <span className="hidden sm:inline text-sm font-medium text-black/75 dark:text-white/80">
                  Mail
                </span>
              </a>
            </Tooltip>
          )}

          {socialLinks.resume && (
            <Tooltip content="Resume">
              <a
                className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-black/5 dark:bg-white/10 has-hover:hover:bg-black/10 dark:has-hover:hover:bg-white/20 transition-[colors] duration-200 rounded-full touch-manipulation active:opacity-75"
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
                <FaPaperclip className="text-[18px] sm:text-[18px] text-black/75 dark:text-white/80 shrink-0" />
                <span className="hidden sm:inline text-sm font-medium text-black/75 dark:text-white/80">
                  Resume
                </span>
              </a>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
}
