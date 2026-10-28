import type { Availability as AvailabilityStatus } from "@/types/content"

type AvailabilityProps = {
  availability: AvailabilityStatus
}

export function Availability({ availability }: AvailabilityProps) {
  if (!availability.open) return null

  return (
    <p className="flex items-center gap-2.5 text-[0.875rem] text-dim">
      <span aria-hidden="true" className="size-2 rounded-full bg-mint" />
      {availability.label}
    </p>
  )
}
