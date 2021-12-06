import Hero from "@components/ui/hero"
import { BaseLayout } from "@components/ui/layout"

export default function Home() {
  return (
    <section>
      <Hero/>
    </section>
  )
}

Home.Layout = BaseLayout