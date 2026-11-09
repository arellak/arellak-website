import { ArrowIcon } from "@/components/ui/ArrowIcon"
import { PixelButton } from "@/components/ui/PixelButton"
import { handleAnchorClick } from "@/lib/anchorNavigation"
import { profile } from "@/lib/content"
import { CvDropdown } from "./CvDropdown"

export function IntroActions() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-5">
      <PixelButton href="#work" onClick={(event) => handleAnchorClick(event, "#work")}>
        View projects
        <ArrowIcon direction="down" className="size-3.5" />
      </PixelButton>
      {profile.cv ? (
        <CvDropdown english={profile.cv} german={profile.cvDe} />
      ) : null}
    </div>
  )
}
