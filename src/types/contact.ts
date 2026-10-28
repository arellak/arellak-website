export type CopyStatus = "idle" | "copied" | "failed"

export type SocialGlyphName = "github" | "mail" | "telegram" | "linkedin" | "document"

export type SocialGlyphShape = "solid" | "cutout"

export type SocialGlyph = {
  shape: SocialGlyphShape
  path: string
}

export type SocialIconLink = {
  label: string
  href: string
  glyph: SocialGlyphName
  external: boolean
}

export type ContactLink = {
  id: string
  label: string
  value: string
  href: string
  glyph: SocialGlyphName
  external?: boolean
  copy?: string
}
