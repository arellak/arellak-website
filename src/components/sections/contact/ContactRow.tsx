import { Fragment } from "react"
import { ArrowIcon } from "@/components/ui/ArrowIcon"
import { HeartGlyph } from "@/components/ui/HeartGlyph"
import { socialGlyphs } from "@/lib/socialGlyphs"
import type { ContactLink } from "@/types/contact"
import { CopyButton } from "@/components/sections/contact/CopyButton"

type ContactRowProps = {
  link: ContactLink
}

export function ContactRow({ link }: ContactRowProps) {
  return (
    <li className="group relative flex items-center gap-4 px-5 py-4 transition-colors duration-200 hover:bg-void/40 sm:px-6 md:py-5">
      <HeartGlyph glyph={socialGlyphs[link.glyph]} className="size-9 shrink-0" />
      <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <a
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noreferrer" : undefined}
          className="leading-tight text-snow transition-colors duration-200 after:absolute after:inset-0 group-hover:text-heart focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-mint"
        >
          {link.label}
          {link.external ? <span className="sr-only"> (opens in a new tab)</span> : null}
        </a>
        <span className="text-[0.875rem] text-dim [overflow-wrap:anywhere] sm:truncate">
          {link.value.split(/(?<=[@/])/).map((part, index) => (
            <Fragment key={part}>
              {index > 0 ? <wbr /> : null}
              {part}
            </Fragment>
          ))}
        </span>
      </div>
      {link.copy ? <CopyButton text={link.copy} label={`Copy ${link.copy}`} className="relative z-10" /> : null}
      <ArrowIcon
        direction="up-right"
        className="size-3.5 text-ghost transition-[color,translate] duration-300 ease-out-quart group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-heart"
      />
    </li>
  )
}
