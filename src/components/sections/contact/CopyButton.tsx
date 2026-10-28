import type { CopyStatus } from "@/types/contact"
import { useCopyFeedback } from "@/components/sections/contact/useCopyFeedback"

type CopyButtonProps = {
  text: string
  label: string
  className?: string
}

const captions: Record<CopyStatus, string> = {
  idle: "Copy",
  copied: "Copied",
  failed: "Failed",
}

const tones: Record<CopyStatus, string> = {
  idle: "text-snow [--face:var(--color-edge)] [--depth:#091f3d] hover:[--face:var(--color-edge-bright)]",
  copied: "text-void [--face:var(--color-mint)] [--depth:#128a74]",
  failed: "text-void [--face:var(--color-heart)] [--depth:var(--color-heart-dim)]",
}

const announcements: Record<CopyStatus, string> = {
  idle: "",
  copied: "Copied to clipboard",
  failed: "Copy failed, please copy it manually",
}

export function CopyButton({ text, label, className = "" }: CopyButtonProps) {
  const { status, copy } = useCopyFeedback(text)

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={label}
        className={`label pixel-btn mx-1 mb-1 min-w-18 cursor-pointer px-2.5 py-1 text-center hover:[--press:2px] active:[--press:4px] ${tones[status]} ${className}`}
      >
        {captions[status]}
      </button>
      <span className="sr-only" aria-live="polite">
        {announcements[status]}
      </span>
    </>
  )
}
