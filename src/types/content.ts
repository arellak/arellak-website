export type Link = {
  label: string
  href: string
}

export type ToolkitGroup = {
  group: string
  items: string[]
}

export type Availability = {
  open: boolean
  label: string
}

export type Profile = {
  name: string
  role: string
  location: string
  timezone: string
  email: string
  availability: Availability
  headline: string
  intro: string
  toolkit: ToolkitGroup[]
  socials: Link[]
  cv?: string
}

export type ProjectStatus = "live" | "in-progress" | "archived"

export type Project = {
  slug: string
  title: string
  year: string
  role: string
  client?: string
  summary: string
  description: string
  stack: string[]
  links: Link[]
  status: ProjectStatus
  image?: string
  accent?: string
}
