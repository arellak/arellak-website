import { ToolGlyph } from "@/components/ui/ToolGlyph"

type ProjectToolsProps = {
  stack: string[]
  className?: string
}

export function ProjectTools({ stack, className = "" }: ProjectToolsProps) {
  if (stack.length === 0) return null

  return (
    <div className={className}>
      <p className="label text-ghost">Built with</p>
      <ul className="mt-4 flex flex-wrap gap-2.5">
        {stack.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 rounded-full border border-edge bg-void/60 px-3 py-1.5 text-[0.8125rem] leading-none text-snow"
          >
            <ToolGlyph name={item} className="size-3.5 text-[0.625rem] text-dim" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
