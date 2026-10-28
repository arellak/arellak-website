import type { Project } from "@/types/content"
import { ArrowIcon } from "@/components/ui/ArrowIcon"
import { PixelButton } from "@/components/ui/PixelButton"
import { projectCta } from "@/components/sections/projects/projectFormat"

type ProjectActionsProps = {
  project: Project
}

export function ProjectActions({ project }: ProjectActionsProps) {
  const [primary, ...rest] = project.links

  if (!primary) return <p className="label text-ghost">Coming soon</p>

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-5 px-1 pb-2">
      {rest.map((link) => (
        <PixelButton key={link.href} href={link.href} variant="ghost" external>
          {link.label}
        </PixelButton>
      ))}
      <PixelButton href={primary.href} external>
        {projectCta(project)}
        <ArrowIcon className="size-3.5" />
      </PixelButton>
    </div>
  )
}
