import type { AvatarSize } from "@/types/ui"

type AvatarProps = {
  size?: AvatarSize
  ring?: boolean
  alt?: string
  className?: string
}

const sizes: Record<AvatarSize, string> = {
  sm: "size-8 border-2",
  lg: "size-[120px] border-[3px]",
}

export function Avatar({ size = "sm", ring = false, alt = "", className = "" }: AvatarProps) {
  return (
    <span className={`relative isolate inline-flex shrink-0 rounded-full ${className}`}>
      {ring ? <span aria-hidden="true" className="absolute inset-0 -z-10 animate-ring rounded-full bg-heart" /> : null}
      <img
        src="/avatar.png"
        alt={alt}
        width={120}
        height={120}
        className={`block rounded-full border-edge bg-panel object-cover ${sizes[size]}`}
      />
    </span>
  )
}
