import { useSmoothScroll } from "@/hooks/useSmoothScroll"
import { Header } from "@/components/layout/Header"
import { Intro } from "@/components/sections/intro/Intro"
import { Projects } from "@/components/sections/projects/Projects"

export function App() {
  useSmoothScroll()

  return (
    <>
      <Header />
      <main>
        <Intro />
        <Projects />
      </main>
    </>
  )
}
