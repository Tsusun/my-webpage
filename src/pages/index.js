import Donation from "@components/ui/donation"
import Hero from "@components/ui/hero"
import { BaseLayout } from "@components/ui/layout"
import Presentation from "@components/ui/presentation"
import Head from "next/head"
import { useTokenPrice } from "@components/hooks/web3/useTokenPrice"
import { ETH_COINGECKO_URL, AVAX_COINGECKO_URL, BNB_COINGECKO_URL } from "@utils/constants"

export default function Home() {
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
        className="mt-2"
        ethPrice={ethPrice.data}
        avaxPrice={avaxPrice.data}
        bnbPrice={bnbPrice.data}
      />
    </div>
  )
}

Home.Layout = BaseLayout
