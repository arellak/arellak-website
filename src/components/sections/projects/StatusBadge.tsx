import type { ProjectStatus } from "@/types/content"
import { statusStyles } from "@/components/sections/projects/projectFormat"

type StatusBadgeProps = {
  status: ProjectStatus
  compact?: boolean
  className?: string
}

export function StatusBadge({ status, compact = false, className = "" }: StatusBadgeProps) {
  const style = statusStyles[status]

  return (
    <span className={`label inline-flex items-center gap-2 ${style.text} ${className}`}>
      <span aria-hidden="true" className={`size-2 rounded-full ${style.dot}`} />
      <span className={compact ? "sr-only" : undefined}>{style.label}</span>
    </span>
  )
}
