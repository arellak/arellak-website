import { useSmoothScroll } from "@/hooks/useSmoothScroll"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Intro } from "@/components/sections/intro/Intro"
import { Projects } from "@/components/sections/projects/Projects"
import { Stack } from "@/components/sections/stack/Stack"
import { Contact } from "@/components/sections/contact/Contact"

export function App() {
  useSmoothScroll()

  return (
    <>
      <Header />
      <main>
        <Intro />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
