import { PixelButton } from "@/components/ui/PixelButton"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { profile } from "@/lib/content"
import { Availability } from "@/components/sections/contact/Availability"

type ContactIntroProps = {
  titleId: string
}

export function ContactIntro({ titleId }: ContactIntroProps) {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeading eyebrow="Contact" title="Let's work together" id={titleId} />
      <Reveal delay={0.06} className="flex flex-col items-start gap-6 px-1">
        <Availability availability={profile.availability} />
        <p className="max-w-md text-dim">
          Have a project in mind or a role to fill? Send me a message and let's talk.
        </p>
        <PixelButton href={`mailto:${profile.email}`}>Email me</PixelButton>
      </Reveal>
    </div>
  )
}
