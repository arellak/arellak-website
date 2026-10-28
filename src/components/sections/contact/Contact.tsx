import { Reveal } from "@/components/ui/Reveal"
import { ContactIntro } from "@/components/sections/contact/ContactIntro"
import { ContactList } from "@/components/sections/contact/ContactList"
import { contactLinks } from "@/components/sections/contact/contactLinks"

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="gutter py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-16">
        <ContactIntro titleId="contact-title" />
        <Reveal delay={0.1}>
          <ContactList links={contactLinks} />
        </Reveal>
      </div>
    </section>
  )
}
