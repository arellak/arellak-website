import { ToolGlyph } from "@/components/ui/ToolGlyph"

type ToolRowProps = {
  name: string
}

export function ToolRow({ name }: ToolRowProps) {
  return (
    <li className="group flex items-center gap-3.5 py-2.5">
      <ToolGlyph
        name={name}
        className="size-5 text-[0.75rem] text-dim transition-colors duration-300 ease-out group-hover:text-heart"
      />
      <span className="text-[0.9375rem] leading-snug text-snow">{name}</span>
    </li>
  )
}
