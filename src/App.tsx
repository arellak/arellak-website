import { useSmoothScroll } from "@/hooks/useSmoothScroll"
import { Header } from "@/components/layout/Header"

export function App() {
  useSmoothScroll()

  return (
    <>
      <Header />
      <main />
    </>
  )
}
