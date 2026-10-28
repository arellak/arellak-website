import type { ReactNode } from "react"
import { IntroStat } from "@/components/sections/intro/IntroStat"
import { useClock } from "@/hooks/useClock"
import { profile, projects } from "@/lib/content"
import { pad } from "@/lib/pad"

type StatItem = {
  label: string
  value: ReactNode
}

export function IntroStats() {
  const time = useClock(profile.timezone)
  const tools = profile.toolkit.reduce((total, group) => total + group.items.length, 0)

  const stats: StatItem[] = [
    { label: "Based in", value: profile.location },
    {
      label: "Local time",
      value: time ? (
        <>
          {time.hours}
          <span className="animate-blink">:</span>
          {time.minutes}
        </>
      ) : (
        "--:--"
      ),
    },
    { label: "Projects", value: pad(projects.length) },
    { label: "Tools", value: pad(tools) },
  ]

  return (
    <dl className="grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-card bg-edge shadow-card md:grid-cols-4">
      {stats.map((stat) => (
        <IntroStat key={stat.label} label={stat.label} value={stat.value} />
      ))}
    </dl>
  )
}
