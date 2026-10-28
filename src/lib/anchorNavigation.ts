import type { MouseEvent } from "react"
import { scrollToTarget } from "@/hooks/useSmoothScroll"

function isModifiedClick(event: MouseEvent<HTMLAnchorElement>) {
  return event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
}

function focusTarget(target: string) {
  const element = document.querySelector<HTMLElement>(target)
  if (!element) return
  if (!element.hasAttribute("tabindex")) element.setAttribute("tabindex", "-1")
  element.focus({ preventScroll: true })
}

export function navigateTo(target: string) {
  scrollToTarget(target)
  focusTarget(target)
}

export function handleAnchorClick(
  event: MouseEvent<HTMLAnchorElement>,
  target: string,
  onNavigate?: () => void,
) {
  if (event.defaultPrevented || isModifiedClick(event)) return
  event.preventDefault()

  if (onNavigate) {
    onNavigate()
    requestAnimationFrame(() => navigateTo(target))
    return
  }

  navigateTo(target)
}
