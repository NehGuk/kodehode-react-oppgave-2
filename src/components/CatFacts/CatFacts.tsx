import useApiCall from "../../hooks/useApiCall"

type CatFact = {
  fact: string
  length: number
}

type CatFactsResponse = {
  current_page: number
  data: CatFact[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: object[]
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
}

export default function CatFacts() {
  const {data, loading, error} = useApiCall<CatFactsResponse>("https://catfact.ninja/facts?limit=5")
  const catFacts: CatFact[] = data?.data ?? []
  
  return (
    <section>
    <h2>Cat Facts</h2>
    {loading && <p>Loading...</p>}
    {error && <p>Oh, no! Something went wrong.</p>}
    <ul>
      {catFacts.map((catFact, i) => {
        return (
            <li key={i}>{catFact.fact}</li> 
        )
      })}
    </ul>
    </section>
  )
}