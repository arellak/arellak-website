import type { ArrowDirection } from "@/types/ui"

type ArrowIconProps = {
  direction?: ArrowDirection
  className?: string
}

const paths: Record<ArrowDirection, string> = {
  up: "M8 13V3M3.5 7.5 8 3l4.5 4.5",
  down: "M8 3v10M3.5 8.5 8 13l4.5-4.5",
  "up-right": "M4 12 12 4M5.5 4H12v6.5",
}

export function ArrowIcon({ direction = "up-right", className = "" }: ArrowIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="square"
      className={`shrink-0 ${className}`}
    >
      <path d={paths[direction]} />
    </svg>
  )
}
