import type { Project } from "@/types/content"
import { projectFacts } from "@/components/sections/projects/projectFormat"

type ProjectFactsProps = {
  project: Project
}

export function ProjectFacts({ project }: ProjectFactsProps) {
  return (
    <dl className="flex flex-wrap gap-x-8 gap-y-4">
      {projectFacts(project).map((fact) => (
        <div key={fact.label}>
          <dt className="label text-ghost">{fact.label}</dt>
          <dd className="mt-1.5 text-[0.875rem] text-snow">{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}
