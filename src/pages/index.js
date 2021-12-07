import Donation from "@components/ui/donation"
import Hero from "@components/ui/hero"
import { BaseLayout } from "@components/ui/layout"
import Presentation from "@components/ui/presentation"
import Head from "next/head"
import { useTokenPrice } from "@components/hooks/web3/useTokenPrice"
import { ETH_COINGECKO_URL, AVAX_COINGECKO_URL, BNB_COINGECKO_URL } from "@utils/constants"
import Projects from "@components/ui/projects"
import { getAllProjects } from "@content/projects/fetcher"

export default function Home({ project, services }) {
  const ethPrice = useTokenPrice(ETH_COINGECKO_URL)
  const avaxPrice = useTokenPrice(AVAX_COINGECKO_URL)
  const bnbPrice = useTokenPrice(BNB_COINGECKO_URL)

  return (
    <div>
      <Head>
        <title>Silvan Reigue - Homepage</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/SR.png" />
      </Head>
      <Hero />
      <Presentation />
      <Donation
        className="mx-4"
        ethPrice={ethPrice.data}
        avaxPrice={avaxPrice.data}
        bnbPrice={bnbPrice.data}
      />
      <Projects
      
      project={project} />
    </div>
  )
}

export function getStaticProps() {
  const { data } = getAllProjects()
  return {
    props: {
      project: data
    }
  }
}

Home.Layout = BaseLayout
