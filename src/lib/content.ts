import profileJson from "@/content/profile.json"
import projectsJson from "@/content/projects.json"
import type { Profile, Project } from "@/types/content"

export const profile: Profile = profileJson as Profile
export const projects: Project[] = projectsJson as Project[]
