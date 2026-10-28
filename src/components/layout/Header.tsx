import { Avatar } from "@/components/ui/Avatar"
import { Nav } from "@/components/layout/Nav"
import { HeaderStatus } from "@/components/layout/HeaderStatus"
import { useScrolled } from "@/hooks/useScrolled"
import { handleAnchorClick } from "@/lib/anchorNavigation"

export function Header() {
  const scrolled = useScrolled()

  return (
    <header
      className={`gutter fixed inset-x-0 top-0 z-40 border-b transition-colors duration-200 ${
        scrolled ? "border-edge bg-void/90 backdrop-blur-sm" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4">
        <a
          href="#top"
          onClick={(event) => handleAnchorClick(event, "#top")}
          className="flex items-center gap-3 text-[1.0625rem] text-heart transition-colors hover:text-heart-dim"
        >
          <Avatar size="sm" />
          <span className="max-[420px]:sr-only">arellak</span>
        </a>
        <div className="flex items-center gap-8">
          <Nav />
          <HeaderStatus className="max-lg:hidden" />
        </div>
      </div>
    </header>
  )
}
