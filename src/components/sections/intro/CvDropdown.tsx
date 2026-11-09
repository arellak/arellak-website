import { useEffect, useId, useRef, useState } from "react"
import { ArrowIcon } from "@/components/ui/ArrowIcon"

type CvDropdownProps = {
  english: string
  german?: string
}

export function CvDropdown({ english, german }: CvDropdownProps) {
  const [open, setOpen] = useState(false)
  const container = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const id = useId()

  useEffect(() => {
    if (!open) return

    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !container.current?.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("pointerdown", closeOutside)
    return () => document.removeEventListener("pointerdown", closeOutside)
  }, [open])

  return (
    <div
      ref={container}
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault()
          event.stopPropagation()
          setOpen(false)
          trigger.current?.focus()
        }
      }}
    >
      <button
        ref={trigger}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
        className="pixel-btn inline-flex cursor-pointer items-center gap-3 px-5 py-2.5 text-[0.9375rem] leading-none text-snow [--face:var(--color-edge)] [--depth:#091f3d] hover:[--face:var(--color-edge-bright)] hover:[--press:2px] active:[--press:4px]"
      >
        Show CV
        <ArrowIcon direction={open ? "up" : "down"} className="size-3.5" />
      </button>
      <div
        id={id}
        hidden={!open}
        className="absolute right-0 top-full z-20 mt-4 min-w-48 border-2 border-edge-bright bg-panel p-1 text-left shadow-card"
      >
        {[
          ...(german ? [{ label: "Deutsch", lang: "de", href: german }] : []),
          { label: "English", lang: "en", href: english },
        ].map(({ label, lang, href }) => (
          <a
            key={lang}
            href={href}
            hrefLang={lang}
            lang={lang}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="flex min-h-11 items-center justify-between gap-5 px-3 py-3 text-sm text-snow hover:bg-edge focus-visible:bg-edge"
          >
            {label}
            <span className="text-xs text-ghost">.pdf<span className="sr-only"> (opens in a new tab)</span></span>
          </a>
        ))}
      </div>
    </div>
  )
}
