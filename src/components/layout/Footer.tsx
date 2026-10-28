import { ArrowIcon } from "@/components/ui/ArrowIcon"
import { RoundIcon } from "@/components/ui/RoundIcon"
import { handleAnchorClick } from "@/lib/anchorNavigation"
import { profile } from "@/lib/content"
import { socialGlyphs, socialIconLinks } from "@/lib/socialGlyphs"

function SocialIcons() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-4">
      {socialIconLinks.map((link) => (
        <li key={link.label}>
          <RoundIcon
            href={link.href}
            label={link.label}
            glyph={socialGlyphs[link.glyph]}
            external={link.external}
          />
        </li>
      ))}
    </ul>
  )
}

function BackToTop() {
  return (
    <a
      href="#top"
      onClick={(event) => handleAnchorClick(event, "#top")}
      className="group inline-flex items-center gap-2 text-dim transition-colors duration-200 hover:text-heart"
    >
      Back to top
      <ArrowIcon
        direction="up"
        className="size-3 transition-transform duration-300 ease-out-quart group-hover:-translate-y-0.5"
      />
    </a>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="gutter border-t border-edge py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
        <SocialIcons />
        <div className="label flex flex-col items-center gap-3 text-center text-ghost sm:flex-row sm:gap-6">
          <p>
            © {year} {profile.name} · arellak
          </p>
          <BackToTop />
        </div>
      </div>
    </footer>
  )
}
