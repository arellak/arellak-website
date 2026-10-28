import type { Project } from "@/types/content"
import { ProjectDetails } from "@/components/sections/projects/ProjectDetails"

type ProjectDetailStackProps = {
  projects: Project[]
  selected: number
  className?: string
}

export function ProjectDetailStack({ projects, selected, className = "" }: ProjectDetailStackProps) {
  return (
    <div className={`grid ${className}`}>
      {projects.map((project, index) => (
        <ProjectDetails key={project.slug} project={project} active={index === selected} />
      ))}
    </div>
  )
}
