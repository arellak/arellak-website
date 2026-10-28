import { Panel } from "@/components/ui/Panel"
import type { ContactLink } from "@/types/contact"
import { ContactRow } from "@/components/sections/contact/ContactRow"

type ContactListProps = {
  links: ContactLink[]
}

export function ContactList({ links }: ContactListProps) {
  return (
    <Panel className="overflow-hidden">
      <ul aria-label="Contact options" className="divide-y divide-edge">
        {links.map((link) => (
          <ContactRow key={link.id} link={link} />
        ))}
      </ul>
    </Panel>
  )
}
