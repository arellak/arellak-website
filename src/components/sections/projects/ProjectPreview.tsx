import { AnimatePresence, motion } from "motion/react"
import type { Project } from "@/types/content"
import { StatusBadge } from "@/components/sections/projects/StatusBadge"
import { PreviewPlaceholder } from "@/components/sections/projects/PreviewPlaceholder"
import { projectAddress } from "@/components/sections/projects/projectFormat"
import { easeOutQuart } from "@/lib/motion"

type ProjectPreviewProps = {
  project: Project
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-edge bg-void">
      <AnimatePresence initial={false}>
        <motion.div
          key={project.slug}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: easeOutQuart }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="size-full object-cover object-top"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <PreviewPlaceholder title={project.title} caption={projectAddress(project)} />
          )}
        </motion.div>
      </AnimatePresence>
      <StatusBadge
        status={project.status}
        className="absolute top-3 right-3 rounded-full bg-void/90 px-3 py-1.5 backdrop-blur-sm"
      />
    </div>
  )
}
