import Hero from "@components/ui/hero"
import { BaseLayout } from "@components/ui/layout"
import Presentation from "@components/ui/presentation"

export default function Home() {
  return (
    <div>
      <Hero/>
      <Presentation/>
    </div>

  )
}

Home.Layout = BaseLayout