import type { ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"
import { easeOutExpo } from "@/lib/motion"

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}

export function Reveal({ children, delay = 0, y = 24, className }: RevealProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, transform: `translateY(${y}px)` }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 1.1, ease: easeOutExpo, delay }}
    >
      {children}
    </motion.div>
  )
}
