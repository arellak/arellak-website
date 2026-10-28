import type { CSSProperties } from "react"
import type { Star } from "@/types/ui"

type StarDotProps = {
  star: Star
}

type WanderStyle = CSSProperties & {
  "--dx"?: string
  "--dy"?: string
}

const tones: Record<Star["tone"], string> = {
  snow: "bg-snow",
  heart: "bg-heart",
  mint: "bg-mint",
}

export function StarDot({ star }: StarDotProps) {
  const { wander } = star

  const horizontal: WanderStyle = {
    left: `${star.x}%`,
    top: `${star.y}%`,
    opacity: 0.35 + star.depth * 0.65,
    "--dx": `${wander.dx}px`,
    animationDuration: `${wander.durationX}s`,
    animationDelay: `${-wander.offsetX * wander.durationX * 2}s`,
  }

  const vertical: WanderStyle = {
    "--dy": `${wander.dy}px`,
    animationDuration: `${wander.durationY}s`,
    animationDelay: `${-wander.offsetY * wander.durationY * 2}s`,
  }

  return (
    <span className="absolute block animate-wander-x" style={horizontal}>
      <span className="block animate-wander-y" style={vertical}>
        <span
          className={`block animate-twinkle ${tones[star.tone]}`}
          style={{ width: star.size, height: star.size, animationDelay: `${star.delay}s` }}
        />
      </span>
    </span>
  )
}
