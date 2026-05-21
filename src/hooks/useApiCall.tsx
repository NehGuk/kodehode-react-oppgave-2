import {useState, useEffect} from "react"

export default function useApiCall<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error (`Oops! An error occurred: ${response.status}`)
      const result = await response.json()
      setData(result)
    } catch (error) {
      setError(error as Error) 
    } finally {
      setLoading(false)
    }
  }
  fetchData()
  }, [url])
  return {data, loading, error}
}