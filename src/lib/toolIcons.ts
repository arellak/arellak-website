import {
  siBetterauth,
  siBun,
  siCplusplus,
  siDiscord,
  siDocker,
  siFastify,
  siGooglechrome,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siRadixui,
  siReact,
  siReactrouter,
  siShadcnui,
  siStrapi,
  siStripe,
  siTailwindcss,
  siTanstack,
  siTelegram,
  siTrpc,
  siTurborepo,
  siTypescript,
  siVite,
  siWebpack,
  siZod,
} from "simple-icons"
import type { ToolIconMap } from "@/types/ui"

export const toolIcons: ToolIconMap = {
  TypeScript: siTypescript,
  React: siReact,
  "React Router": siReactrouter,
  "Next.js": siNextdotjs,
  "Tailwind CSS": siTailwindcss,
  "TanStack Router": siTanstack,
  "TanStack Query": siTanstack,
  "shadcn/ui": siShadcnui,
  Radix: siRadixui,
  "Node.js": siNodedotjs,
  Fastify: siFastify,
  tRPC: siTrpc,
  Prisma: siPrisma,
  PostgreSQL: siPostgresql,
  "Better Auth": siBetterauth,
  Stripe: siStripe,
  Strapi: siStrapi,
  Vite: siVite,
  Turborepo: siTurborepo,
  Bun: siBun,
  Zod: siZod,
  Docker: siDocker,
  JavaScript: siJavascript,
  "C++": siCplusplus,
  Discord: siDiscord,
  Telegram: siTelegram,
  Webpack: siWebpack,
  "Chrome Extension": siGooglechrome,
}

export function monogram(name: string) {
  const words = name.split(/[\s./-]+/).filter(Boolean)
  const letters = words.length > 1 ? words.slice(0, 2).map((word) => word[0]) : [name[0]]

  return letters.join("").toUpperCase()
}
