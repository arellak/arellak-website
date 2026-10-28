type PreviewPlaceholderProps = {
  title: string
  caption?: string | null
}

export function PreviewPlaceholder({ title, caption }: PreviewPlaceholderProps) {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-4 bg-panel px-6 text-center">
      <span className="pixel-shadow text-[clamp(1.5rem,4vw,2.75rem)] leading-[1.1] text-heart">{title}</span>
      {caption ? <span className="label text-ghost">{caption}</span> : null}
    </div>
  )
}
