import { motion } from "motion/react"
import { easeOutExpo } from "@/lib/motion"

type WordmarkLetterProps = {
  char: string
  index: number
  reduce: boolean
}

const hop = { type: "spring", stiffness: 520, damping: 16 } as const

export function WordmarkLetter({ char, index, reduce }: WordmarkLetterProps) {
  const delay = 0.35 + index * 0.06

  return (
    <motion.span
      className="inline-block cursor-default will-change-transform"
      initial={reduce ? false : { transform: "translateY(-0.6em)", opacity: 0 }}
      animate={{ transform: "translateY(0em)", opacity: 1 }}
      whileHover={reduce ? undefined : { transform: "translateY(-0.14em)", transition: hop }}
      transition={{
        transform: { duration: 0.9, ease: easeOutExpo, delay },
        opacity: { duration: 0.4, ease: "easeOut", delay },
        default: hop,
      }}
    >
      {char}
    </motion.span>
  )
}
