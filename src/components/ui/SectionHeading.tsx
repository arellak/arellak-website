import type { ReactNode } from "react"
import { Reveal } from "@/components/ui/Reveal"

type SectionHeadingProps = {
  title: string
  eyebrow?: string
  aside?: ReactNode
  id?: string
}

export function SectionHeading({ title, eyebrow, aside, id }: SectionHeadingProps) {
  return (
    <Reveal className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
      <div>
        {eyebrow ? <p className="label text-mint">{eyebrow}</p> : null}
        <h2 id={id} className={`text-title leading-[1.1] text-snow ${eyebrow ? "mt-3" : ""}`}>
          {title}
        </h2>
      </div>
      {aside ? <div className="label text-ghost">{aside}</div> : null}
    </Reveal>
  )
}
