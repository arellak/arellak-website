import { motion, useReducedMotion } from "motion/react"
import type { Project } from "@/types/content"
import { ProjectTools } from "@/components/sections/projects/ProjectTools"
import { ProjectFacts } from "@/components/sections/projects/ProjectFacts"
import { ProjectActions } from "@/components/sections/projects/ProjectActions"
import { easeOutQuart } from "@/lib/motion"

type ProjectDetailsProps = {
  project: Project
  active: boolean
}

export function ProjectDetails({ project, active }: ProjectDetailsProps) {
  const reduce = useReducedMotion() ?? false
  const offset = reduce ? 0 : 8

  return (
    <motion.article
      aria-hidden={!active}
      inert={!active}
      className={`col-start-1 row-start-1 grid min-w-0 content-start gap-x-14 gap-y-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] ${
        active ? "" : "pointer-events-none"
      }`}
      initial={false}
      animate={active ? { opacity: 1, y: 0, visibility: "visible" } : { opacity: 0, y: offset, transitionEnd: { visibility: "hidden" } }}
      transition={{ duration: active ? 0.35 : 0.15, ease: easeOutQuart }}
    >
      <div className="min-w-0">
        <h3 className="text-[1.625rem] leading-[1.15] text-snow md:text-[2rem]">{project.title}</h3>
        <p className="mt-2 text-[0.9375rem] text-heart">{project.summary}</p>
        <p className="mt-4 max-w-[62ch] text-[0.875rem] leading-[1.8] text-dim">{project.description}</p>
      </div>
      <div className="flex min-w-0 flex-col gap-8">
        <ProjectTools stack={project.stack} />
        <div className="mt-auto flex flex-wrap items-end justify-between gap-x-8 gap-y-6 border-t border-edge pt-6">
          <ProjectFacts project={project} />
          <ProjectActions project={project} />
        </div>
      </div>
    </motion.article>
  )
}
