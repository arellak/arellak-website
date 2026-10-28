import type { MotionValue } from "motion/react"
import type { SimpleIcon } from "simple-icons"

export type NavItem = {
  id: string
  label: string
}

export type PixelButtonVariant = "primary" | "ghost"

export type AvatarSize = "sm" | "lg"

export type ArrowDirection = "up" | "down" | "up-right"

export type ToolIconMap = Partial<Record<string, SimpleIcon>>

export type ClockTime = {
  hours: string
  minutes: string
}

export type StarWander = {
  dx: number
  dy: number
  durationX: number
  durationY: number
  offsetX: number
  offsetY: number
}

export type Star = {
  x: number
  y: number
  depth: number
  size: number
  delay: number
  tone: "snow" | "heart" | "mint"
  wander: StarWander
}

export type StarBand = {
  min: number
  max: number
  parallax: number
}

export type PointerOffset = {
  x: MotionValue<number>
  y: MotionValue<number>
}
