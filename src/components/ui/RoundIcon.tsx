import { HeartGlyph } from "@/components/ui/HeartGlyph"
import type { SocialGlyph } from "@/types/contact"

type RoundIconProps = {
  href: string
  label: string
  glyph: SocialGlyph
  external?: boolean
  className?: string
}

export function RoundIcon({ href, label, glyph, external = false, className = "" }: RoundIconProps) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`group inline-flex size-12 shrink-0 rounded-full ${className}`}
    >
      <HeartGlyph glyph={glyph} className="size-full" />
    </a>
  )
}
