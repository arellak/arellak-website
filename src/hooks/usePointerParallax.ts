import { useEffect } from "react"
import { useMotionValue, useReducedMotion, useSpring } from "motion/react"
import type { PointerOffset } from "@/types/ui"

const spring = { stiffness: 40, damping: 18, mass: 1 }

export function usePointerParallax(): PointerOffset {
  const reduce = useReducedMotion() ?? false
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, spring)
  const y = useSpring(rawY, spring)

  useEffect(() => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return

    const handleMove = (event: PointerEvent) => {
      rawX.set((event.clientX / window.innerWidth) * 2 - 1)
      rawY.set((event.clientY / window.innerHeight) * 2 - 1)
    }

    window.addEventListener("pointermove", handleMove, { passive: true })
    return () => window.removeEventListener("pointermove", handleMove)
  }, [reduce, rawX, rawY])

  return { x, y }
}
