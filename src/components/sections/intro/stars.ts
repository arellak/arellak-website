import type { Star } from "@/types/ui"

function random(seed: number) {
  let state = seed
  return () => {
    state = (state + 0x6d2b79f5) | 0
    let value = Math.imul(state ^ (state >>> 15), 1 | state)
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296
  }
}

export function createStars(count: number, seed = 1337): Star[] {
  const next = random(seed)
  const between = (min: number, max: number) => min + next() * (max - min)
  const signed = (amount: number) => (next() > 0.5 ? amount : -amount)

  return Array.from({ length: count }, () => {
    const depth = next()
    const tint = next()
    const reach = 16 + depth * 90
    const pace = 1.5 - depth

    return {
      x: next() * 100,
      y: next() * 100,
      depth,
      size: depth > 0.82 ? 4 : depth > 0.45 ? 3 : 2,
      delay: next() * 3.2,
      tone: tint > 0.93 ? "heart" : tint > 0.86 ? "mint" : "snow",
      wander: {
        dx: signed(between(0.35, 1) * reach),
        dy: signed(between(0.35, 1) * reach),
        durationX: between(14, 30) * pace,
        durationY: between(16, 34) * pace,
        offsetX: next(),
        offsetY: next(),
      },
    }
  })
}
