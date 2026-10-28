import { Panel } from "@/components/ui/Panel"
import { ToolRow } from "@/components/sections/stack/ToolRow"
import type { ToolkitGroup } from "@/types/content"

type StackGroupProps = {
  group: ToolkitGroup
}

export function StackGroup({ group }: StackGroupProps) {
  return (
    <Panel as="article" className="p-6 sm:p-7">
      <h3 className="label text-ghost">{group.group}</h3>
      <ul className="mt-4 divide-y divide-edge/60">
        {group.items.map((name) => (
          <ToolRow key={name} name={name} />
        ))}
      </ul>
    </Panel>
  )
}
