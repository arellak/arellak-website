import { useEffect, useState } from "react"
import type { ClockTime } from "@/types/ui"

function readClock(formatter: Intl.DateTimeFormat): ClockTime {
  const parts = formatter.formatToParts(new Date())
  const pick = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? "00"
  return { hours: pick("hour"), minutes: pick("minute") }
}

export function useClock(timeZone: string) {
  const [time, setTime] = useState<ClockTime | null>(null)

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("de-DE", { hour: "2-digit", minute: "2-digit", hourCycle: "h23", timeZone })
    const tick = () => setTime(readClock(formatter))
    tick()
    const timer = window.setInterval(tick, 10_000)
    return () => window.clearInterval(timer)
  }, [timeZone])

  return time
}
