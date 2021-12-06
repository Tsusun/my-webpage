import useSWR from "swr"

const fetcher = async (url) => {
  const res = await fetch(url) // Response form the fetching
  const json = await res.json() // Grab json from the response
  return json.market_data.current_price.usd ?? null
}

export const useTokenPrice = (url) => {
  const swrRes = useSWR(url, fetcher, { refreshInterval: 1000 })

  return { ...swrRes }
}
