import { useId } from "react"
import type { SocialGlyph } from "@/types/contact"

type HeartGlyphProps = {
  glyph: SocialGlyph
  className?: string
}

const fill =
  "fill-heart transition-[fill] duration-400 ease-out group-hover:fill-heart-dim group-focus-visible:fill-heart-dim"

export function HeartGlyph({ glyph, className = "" }: HeartGlyphProps) {
  const maskId = `heart-glyph-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      {glyph.shape === "solid" ? (
        <path d={glyph.path} className={fill} />
      ) : (
        <>
          <mask id={maskId}>
            <rect width="24" height="24" fill="white" />
            <path d={glyph.path} fill="black" fillRule="evenodd" />
          </mask>
          <circle cx="12" cy="12" r="12" mask={`url(#${maskId})`} className={fill} />
        </>
      )}
    </svg>
  )
}
