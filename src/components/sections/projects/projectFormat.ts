import type { Project } from "@/types/content"
import type { ProjectFact, StatusStyles } from "@/types/projects"

export const statusStyles: StatusStyles = {
  live: { label: "Live", text: "text-mint", dot: "bg-mint" },
  "in-progress": { label: "In progress", text: "text-heart", dot: "bg-heart" },
  archived: { label: "Archived", text: "text-ghost", dot: "bg-ghost" },
}

export function projectHost(project: Project) {
  const href = project.links[0]?.href
  if (!href) return project.title
  try {
    return new URL(href).hostname.replace(/^www\./, "")
  } catch {
    return project.links[0]?.label ?? project.title
  }
}

export function projectAddress(project: Project) {
  const href = project.links[0]?.href
  if (!href) return null
  try {
    const url = new URL(href)
    return `${url.hostname.replace(/^www\./, "")}${url.pathname.replace(/\/$/, "")}`
  } catch {
    return null
  }
}

export function projectCta(project: Project) {
  const host = projectHost(project)
  return host === "github.com" ? "View on GitHub" : `Visit ${host}`
}

export function projectFacts(project: Project): ProjectFact[] {
  return [
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
    ...(project.client ? [{ label: "Client", value: project.client }] : []),
  ]
}
