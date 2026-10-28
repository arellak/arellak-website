import type { MouseEvent, ReactNode } from "react"
import type { PixelButtonVariant } from "@/types/ui"

type PixelButtonProps = {
  href: string
  children: ReactNode
  variant?: PixelButtonVariant
  external?: boolean
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
  className?: string
}

const variants: Record<PixelButtonVariant, string> = {
  primary: "text-void [--face:var(--color-heart)] [--depth:var(--color-heart-dim)] hover:[--face:#f25a74]",
  ghost: "text-snow [--face:var(--color-edge)] [--depth:#091f3d] hover:[--face:var(--color-edge-bright)]",
}

export function PixelButton({
  href,
  children,
  variant = "primary",
  external = false,
  onClick,
  className = "",
}: PixelButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      onClick={onClick}
      className={`pixel-btn inline-flex items-center gap-3 px-5 py-2.5 text-[0.9375rem] leading-none hover:[--press:2px] active:[--press:4px] ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
