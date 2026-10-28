import { profile } from "@/lib/content"
import type { Link } from "@/types/content"
import type { ContactLink, SocialGlyphName } from "@/types/contact"

const socialGlyphNames: Partial<Record<string, SocialGlyphName>> = {
  GitHub: "github",
  LinkedIn: "linkedin",
  Telegram: "telegram",
}

function displayUrl(href: string) {
  const url = new URL(href)
  return `${url.hostname.replace(/^www\./, "")}${url.pathname.replace(/\/$/, "")}`
}

function socialLinks(socials: Link[]): ContactLink[] {
  return socials.flatMap((social) => {
    const glyph = socialGlyphNames[social.label]
    if (!glyph) return []

    return [
      {
        id: glyph,
        label: social.label,
        value: displayUrl(social.href),
        href: social.href,
        glyph,
        external: true,
      },
    ]
  })
}

const cvLinks: ContactLink[] = profile.cv
  ? [
      {
        id: "cv",
        label: "CV",
        value: "View PDF",
        href: profile.cv,
        glyph: "document",
        external: true,
      },
    ]
  : []

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    glyph: "mail",
    copy: profile.email,
  },
  ...socialLinks(profile.socials),
  ...cvLinks,
]
