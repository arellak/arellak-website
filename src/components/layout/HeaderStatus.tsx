import { profile } from "@/lib/content"

type HeaderStatusProps = {
  className?: string
}

export function HeaderStatus({ className = "" }: HeaderStatusProps) {
  if (!profile.availability.open) return null

  return (
    <p className={`label flex items-center gap-2.5 text-mint ${className}`}>
      <span aria-hidden="true" className="size-2 rounded-full bg-mint" />
      {profile.availability.label}
    </p>
  )
}
