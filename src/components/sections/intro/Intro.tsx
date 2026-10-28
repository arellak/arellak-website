import { Avatar } from "@/components/ui/Avatar"
import { Reveal } from "@/components/ui/Reveal"
import { Starfield } from "@/components/sections/intro/Starfield"
import { Wordmark } from "@/components/sections/intro/Wordmark"
import { IntroActions } from "@/components/sections/intro/IntroActions"
import { IntroStats } from "@/components/sections/intro/IntroStats"
import { profile } from "@/lib/content"

export function Intro() {
  return (
    <section
      id="top"
      className="gutter relative isolate flex min-h-svh flex-col items-center justify-center pt-24 pb-14 text-center"
    >
      <Starfield />
      <Reveal y={12}>
        <Avatar size="lg" ring alt={`${profile.name}'s avatar`} />
      </Reveal>
      <h1 className="mt-8 flex flex-col items-center md:mt-10">
        <span className="sr-only">arellak, </span>
        <Wordmark text="arellak" />
        <span className="mt-5 text-[1.0625rem] text-snow md:mt-7 md:text-[1.375rem]">
          {profile.name}
          <span className="px-3 text-ghost">·</span>
          {profile.role}
        </span>
      </h1>
      <Reveal delay={0.6} y={12} className="mt-5 max-w-[46rem] md:mt-6">
        <p className="text-[0.9375rem] leading-[1.8] text-dim">{profile.intro}</p>
      </Reveal>
      <Reveal delay={0.75} y={12} className="mt-10">
        <IntroActions />
      </Reveal>
      <Reveal delay={0.9} y={12} className="mt-12 flex w-full justify-center">
        <IntroStats />
      </Reveal>
    </section>
  )
}
