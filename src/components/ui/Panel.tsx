import type { ReactNode } from "react"

type PanelProps = {
  children: ReactNode
  as?: "div" | "article" | "aside"
  className?: string
}

export function Panel({ children, as: Tag = "div", className = "" }: PanelProps) {
  return <Tag className={`rounded-card bg-panel shadow-card ${className}`}>{children}</Tag>
}
