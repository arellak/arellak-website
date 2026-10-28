import type { ReactNode } from "react"

type IntroStatProps = {
  label: string
  value: ReactNode
}

export function IntroStat({ label, value }: IntroStatProps) {
  return (
    <div className="bg-panel px-5 py-4 text-left">
      <dt className="label text-ghost">{label}</dt>
      <dd className="mt-1.5 text-[0.9375rem] text-snow tabular-nums">{value}</dd>
    </div>
  )
}
