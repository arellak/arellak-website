import { useSmoothScroll } from "@/hooks/useSmoothScroll"
import { Header } from "@/components/layout/Header"
import { Intro } from "@/components/sections/intro/Intro"

export function App() {
  useSmoothScroll()

  return (
    <>
      <Header />
      <main>
        <Intro />
      </main>
    </>
  )
}
