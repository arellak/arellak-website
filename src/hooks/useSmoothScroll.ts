import { useEffect } from "react"
import Lenis from "lenis"

let instance: Lenis | null = null

export function getLenis() {
  return instance
}

export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 })
    instance = lenis
    let frame = 0

    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      instance = null
    }
  }, [])
}

export function scrollToTarget(target: string) {
  const lenis = getLenis()
  if (lenis) {
    lenis.scrollTo(target, { offset: 0, duration: 1.4 })
    return
  }
  document.querySelector(target)?.scrollIntoView({ behavior: "smooth" })
}
