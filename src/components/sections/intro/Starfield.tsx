import type { StarBand } from "@/types/ui"
import { StarLayer } from "@/components/sections/intro/StarLayer"
import { createStars } from "@/components/sections/intro/stars"
import { usePointerParallax } from "@/hooks/usePointerParallax"

const stars = createStars(72)

const bands: StarBand[] = [
  { min: 0, max: 0.25, parallax: 4 },
  { min: 0.25, max: 0.5, parallax: 10 },
  { min: 0.5, max: 0.75, parallax: 18 },
  { min: 0.75, max: 1.01, parallax: 30 },
]

export function Starfield() {
  const pointer = usePointerParallax()

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {bands.map((band) => (
        <StarLayer
          key={band.min}
          stars={stars.filter((star) => star.depth >= band.min && star.depth < band.max)}
          parallax={band.parallax}
          pointer={pointer}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-b from-transparent to-void" />
    </div>
  )
}
