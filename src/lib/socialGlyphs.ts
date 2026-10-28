import { siGithub, siTelegram } from "simple-icons"
import { profile } from "@/lib/content"
import type { SocialGlyph, SocialGlyphName, SocialIconLink } from "@/types/contact"

export const socialGlyphs: Record<SocialGlyphName, SocialGlyph> = {
  github: { shape: "solid", path: siGithub.path },
  telegram: { shape: "solid", path: siTelegram.path },
  mail: {
    shape: "cutout",
    path: "M6 7.2h12v9.6H6zM7.2 7.2 12 11.4l4.8-4.2v1.4L12 12.8 7.2 8.6z",
  },
  linkedin: {
    shape: "cutout",
    path: "M5.6 6.4h2.6V9H5.6zM5.6 10.3h2.6v7.3H5.6zM10 10.3h2.5v1.2c.5-.8 1.5-1.4 2.8-1.4 2.1 0 3.1 1.3 3.1 3.6v3.9h-2.6v-3.5c0-1.1-.4-1.7-1.3-1.7s-1.4.6-1.4 1.7v3.5H10z",
  },
  document: {
    shape: "cutout",
    path: "M7.4 5.4h6.2l3 3v10.2H7.4zM13 6.4v2.6h2.6z",
  },
}

function fromSocial(label: string, glyph: SocialGlyphName): SocialIconLink[] {
  const social = profile.socials.find((item) => item.label === label)
  return social ? [{ label: social.label, href: social.href, glyph, external: true }] : []
}

export const socialIconLinks: SocialIconLink[] = [
  ...fromSocial("GitHub", "github"),
  { label: "Email", href: `mailto:${profile.email}`, glyph: "mail", external: false },
  ...fromSocial("Telegram", "telegram"),
  ...fromSocial("LinkedIn", "linkedin"),
]
