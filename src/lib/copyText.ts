function legacyCopy(text: string) {
  const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null
  const textarea = document.createElement("textarea")
  textarea.value = text
  textarea.setAttribute("readonly", "")
  textarea.style.position = "fixed"
  textarea.style.top = "0"
  textarea.style.left = "0"
  textarea.style.opacity = "0"
  document.body.appendChild(textarea)
  textarea.select()

  let copied = false
  try {
    copied = document.execCommand("copy")
  } catch {
    copied = false
  }

  textarea.remove()
  previous?.focus({ preventScroll: true })
  return copied
}

export async function copyText(text: string) {
  if (!navigator.clipboard || !window.isSecureContext) return legacyCopy(text)

  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return legacyCopy(text)
  }
}
