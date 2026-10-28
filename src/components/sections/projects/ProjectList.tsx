import { useRef } from "react"
import type { KeyboardEvent } from "react"
import type { Project } from "@/types/content"
import { ProjectTab } from "@/components/sections/projects/ProjectTab"

type ProjectListProps = {
  projects: Project[]
  selected: number
  onSelect: (index: number) => void
  baseId: string
}

export function ProjectList({ projects, selected, onSelect, baseId }: ProjectListProps) {
  const tabs = useRef<Array<HTMLButtonElement | null>>([])

  const move = (index: number) => {
    const next = (index + projects.length) % projects.length
    onSelect(next)
    tabs.current[next]?.focus()
  }

  const handleKey = (event: KeyboardEvent<HTMLDivElement>) => {
    const moves: Record<string, number> = {
      ArrowDown: selected + 1,
      ArrowRight: selected + 1,
      ArrowUp: selected - 1,
      ArrowLeft: selected - 1,
      Home: 0,
      End: projects.length - 1,
    }
    const target = moves[event.key]
    if (target === undefined) return
    event.preventDefault()
    move(target)
  }

  return (
    <div role="tablist" aria-orientation="vertical" aria-label="Projects" onKeyDown={handleKey} className="py-3">
      {projects.map((project, index) => (
        <ProjectTab
          key={project.slug}
          ref={(node) => {
            tabs.current[index] = node
          }}
          project={project}
          index={index}
          active={index === selected}
          baseId={baseId}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}
