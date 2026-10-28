import type { ProjectStatus } from "@/types/content"

export type StatusStyle = {
  label: string
  text: string
  dot: string
}

export type StatusStyles = Record<ProjectStatus, StatusStyle>

export type ProjectFact = {
  label: string
  value: string
}
