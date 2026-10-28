import { motion, useTransform } from "motion/react"
import type { PointerOffset, Star } from "@/types/ui"
import { StarDot } from "@/components/sections/intro/StarDot"

type StarLayerProps = {
  stars: Star[]
  parallax: number
  pointer: PointerOffset
}

export function StarLayer({ stars, parallax, pointer }: StarLayerProps) {
  const x = useTransform(pointer.x, (value) => value * -parallax)
  const y = useTransform(pointer.y, (value) => value * -parallax)

  return (
    <motion.div style={{ x, y }} className="absolute -inset-8">
      {stars.map((star, index) => (
        <StarDot key={index} star={star} />
      ))}
    </motion.div>
  )
}
