import { useId, useState } from "react"
import { Panel } from "@/components/ui/Panel"
import { Reveal } from "@/components/ui/Reveal"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ProjectList } from "@/components/sections/projects/ProjectList"
import { ProjectPreview } from "@/components/sections/projects/ProjectPreview"
import { ProjectDetailStack } from "@/components/sections/projects/ProjectDetailStack"
import { projects } from "@/lib/content"

export function Projects() {
  const [selected, setSelected] = useState(0)
  const baseId = useId()
  const project = projects[selected]

  if (!project) return null

  return (
    <section id="work" aria-labelledby={`${baseId}-title`} className="gutter py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id={`${baseId}-title`}
          eyebrow="Selected work"
          title="Projects"
          aside={`${projects.length} projects`}
        />
        <Reveal className="mt-10 md:mt-14">
          <Panel className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]">
            <div className="min-w-0 border-b border-edge lg:border-r">
              <ProjectList projects={projects} selected={selected} onSelect={setSelected} baseId={baseId} />
            </div>
            <div className="min-w-0 border-b border-edge p-5 sm:p-7 lg:p-8">
              <ProjectPreview project={project} />
            </div>
            <div
              role="tabpanel"
              id={`${baseId}-panel`}
              aria-labelledby={`${baseId}-tab-${selected}`}
              className="min-w-0 p-5 sm:p-7 lg:col-span-2 lg:p-8"
            >
              <ProjectDetailStack projects={projects} selected={selected} />
            </div>
          </Panel>
        </Reveal>
      </div>
    </section>
  )
}
