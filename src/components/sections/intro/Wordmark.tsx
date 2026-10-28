import { useReducedMotion } from "motion/react"
import { WordmarkLetter } from "@/components/sections/intro/WordmarkLetter"

type WordmarkProps = {
  text: string
}

export function Wordmark({ text }: WordmarkProps) {
  const reduce = useReducedMotion() ?? false

  return (
    <span aria-hidden="true" className="pixel-shadow flex justify-center text-mega leading-[0.9] text-heart">
      {[...text].map((char, index) => (
        <WordmarkLetter key={`${char}-${index}`} char={char} index={index} reduce={reduce} />
      ))}
    </span>
  )
}
