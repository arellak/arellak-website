import { motion } from "motion/react"
import { useActiveSection } from "@/hooks/useActiveSection"
import { handleAnchorClick } from "@/lib/anchorNavigation"
import { navItems } from "@/lib/navItems"
import { easeOutQuart } from "@/lib/motion"

const sectionIds = navItems.map((item) => item.id)

export function Nav() {
  const active = useActiveSection(sectionIds)

  return (
    <nav aria-label="Sections">
      <ul className="flex items-center gap-5 sm:gap-7">
        {navItems.map((item) => {
          const current = active === item.id
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={current ? "true" : undefined}
                onClick={(event) => handleAnchorClick(event, `#${item.id}`)}
                className={`relative block py-1.5 text-[0.875rem] transition-colors sm:text-[0.9375rem] ${
                  current ? "text-heart" : "text-snow hover:text-heart"
                }`}
              >
                {item.label}
                {current ? (
                  <motion.span
                    layoutId="nav-underline"
                    transition={{ duration: 0.4, ease: easeOutQuart }}
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-heart"
                  />
                ) : null}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
