import Hero from "@components/ui/hero"
import { BaseLayout } from "@components/ui/layout"
import Presentation from "@components/ui/presentation"
import Head from 'next/head'

export default function Home() {
  return (

      <div>
        <Head>
        <title>Silvan Reigue - Homepage</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/SR.png" />
 
      </Head>
        <Hero />
        <Presentation />
      </div>
  )
}

Home.Layout = BaseLayout