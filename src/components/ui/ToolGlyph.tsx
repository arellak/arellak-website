import { monogram, toolIcons } from "@/lib/toolIcons"

type ToolGlyphProps = {
  name: string
  className?: string
}

export function ToolGlyph({ name, className = "" }: ToolGlyphProps) {
  const icon = toolIcons[name]

  if (!icon) {
    return (
      <span aria-hidden="true" className={`flex items-center justify-center leading-none ${className}`}>
        {monogram(name)}
      </span>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={`shrink-0 fill-current ${className}`}>
      <path d={icon.path} />
    </svg>
  )
}
