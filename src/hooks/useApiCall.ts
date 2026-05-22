import {useState, useEffect } from "react"

export default function useApiCall<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(url)
        if (!response.ok) throw new Error(`Oops, something didn't go right this time: ${response.status}`)
        const fetchedData = await response.json()
        setData(fetchedData)
      } catch (error) {
        if (error instanceof Error) setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])
  return { data, loading, error }
}

