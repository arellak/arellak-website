import { useId } from "react"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { StackGroup } from "@/components/sections/stack/StackGroup"
import { profile } from "@/lib/content"

const groups = profile.toolkit
const total = groups.reduce((sum, { items }) => sum + items.length, 0)

export function Stack() {
  const titleId = useId()

  return (
    <section id="stack" aria-labelledby={titleId} className="gutter py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id={titleId} eyebrow="Tools I use" title="Stack" aside={`${total} tools`} />
        <Reveal className="mt-10 grid gap-5 md:mt-14 lg:grid-cols-3 lg:items-start lg:gap-6">
          {groups.map((group) => (
            <StackGroup key={group.group} group={group} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
