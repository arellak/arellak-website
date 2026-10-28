import { useCallback, useEffect, useRef, useState } from "react"
import { copyText } from "@/lib/copyText"
import type { CopyStatus } from "@/types/contact"

export function useCopyFeedback(text: string, resetAfter = 1600) {
  const [status, setStatus] = useState<CopyStatus>("idle")
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = useCallback(async () => {
    const copied = await copyText(text)
    setStatus(copied ? "copied" : "failed")
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setStatus("idle"), resetAfter)
  }, [text, resetAfter])

  return { status, copy }
}
