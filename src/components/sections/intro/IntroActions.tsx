import { ArrowIcon } from "@/components/ui/ArrowIcon"
import { PixelButton } from "@/components/ui/PixelButton"
import { handleAnchorClick } from "@/lib/anchorNavigation"
import { profile } from "@/lib/content"

export function IntroActions() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-5">
      <PixelButton href="#work" onClick={(event) => handleAnchorClick(event, "#work")}>
        View projects
        <ArrowIcon direction="down" className="size-3.5" />
      </PixelButton>
      {profile.cv ? (
        <PixelButton href={profile.cv} variant="ghost" external>
          View CV
          <span className="text-ghost">.pdf</span>
        </PixelButton>
      ) : null}
    </div>
  )
}
