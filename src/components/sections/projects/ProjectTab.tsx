import type { Ref } from "react"
import { motion } from "motion/react"
import type { Project } from "@/types/content"
import { StatusBadge } from "@/components/sections/projects/StatusBadge"
import { easeOutQuart } from "@/lib/motion"
import { pad } from "@/lib/pad"

type ProjectTabProps = {
  ref: Ref<HTMLButtonElement>
  project: Project
  index: number
  active: boolean
  baseId: string
  onSelect: (index: number) => void
}

export function ProjectTab({ ref, project, index, active, baseId, onSelect }: ProjectTabProps) {
  return (
    <button
      ref={ref}
      type="button"
      role="tab"
      id={`${baseId}-tab-${index}`}
      aria-selected={active}
      aria-controls={`${baseId}-panel`}
      tabIndex={active ? 0 : -1}
      onClick={() => onSelect(index)}
      onFocus={() => onSelect(index)}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") onSelect(index)
      }}
      className={`relative flex w-full cursor-pointer items-center gap-4 px-5 py-3.5 text-left transition-colors duration-150 focus-visible:-outline-offset-4 md:px-6 md:py-4 ${
        active ? "bg-edge/40" : "hover:bg-edge/20"
      }`}
    >
      {active ? (
        <motion.span
          layoutId={`${baseId}-indicator`}
          transition={{ duration: 0.35, ease: easeOutQuart }}
          aria-hidden="true"
          className="absolute inset-y-2 left-0 w-[3px] rounded-r-full bg-heart"
        />
      ) : null}
      <span className="label w-6 shrink-0 text-ghost">{pad(index + 1)}</span>
      <span className={`min-w-0 flex-1 text-[1.0625rem] leading-[1.3] ${active ? "text-heart" : "text-snow"}`}>
        {project.title}
      </span>
      <span className="label shrink-0 text-ghost max-sm:hidden">{project.year}</span>
      <StatusBadge status={project.status} compact />
    </button>
  )
}
