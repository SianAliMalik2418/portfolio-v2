import Image from "next/image";
import type { Skill } from "@/data/skills";
import { cn } from "@/lib/utils";

type SkillIconProps = {
  skill: Pick<Skill, "name" | "icon" | "darkIcon">;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  unoptimized?: boolean;
};

export function SkillIcon({
  skill,
  width,
  height,
  className,
  imageClassName,
  unoptimized,
}: SkillIconProps) {
  const imageClass = cn("object-contain", imageClassName);

  return (
    <span className={cn("relative inline-flex items-center justify-center", className)}>
      <Image
        src={skill.icon}
        alt={skill.name}
        width={width}
        height={height}
        className={cn(imageClass, skill.darkIcon && "dark:hidden")}
        unoptimized={unoptimized}
      />
      {skill.darkIcon ? (
        <Image
          src={skill.darkIcon}
          alt={skill.name}
          width={width}
          height={height}
          className={cn(imageClass, "hidden dark:block")}
          unoptimized={unoptimized}
        />
      ) : null}
    </span>
  );
}
