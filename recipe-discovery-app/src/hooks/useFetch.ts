import { useEffect, useState } from "react"
import type { APIEndpoint, APICategory, APIRecipe } from "../types"
import { ENDPOINT_URL } from "../constants"

interface fetchOption {
  type: APIEndpoint
  term: string | null
}

interface categoriesFetchOption extends fetchOption {
  type: "categories"
  term: null
}

interface otherFetchOption extends fetchOption {
  type: "filter" | "lookup" | "search"
  term: string
}

export type useFetchOption = categoriesFetchOption | otherFetchOption

export const useFetch = (option: useFetchOption) => {
  const [data, setData] = useState<APICategory[] | APIRecipe[] | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  let url: string = ""

  switch (true) {
    case option.type === "categories":
      url = ENDPOINT_URL.categories
      break
    case option.type === "filter":
      url = `${ENDPOINT_URL.filter}${option.term}`
      break
    case option.type === "lookup":
      url = `${ENDPOINT_URL.lookup}${option.term}`
      break
    case option.type === "search":
      url = `${ENDPOINT_URL.search}${option.term}`
      break
    default:
      url = ""
      break
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url)
        const responseJSON = await response.json()
        switch (true) {
          case option.type === "categories":
            setData(responseJSON.categories)
            break
          case option.type === "filter":
          case option.type === "lookup":
          case option.type === "search":
            setData(responseJSON.meals)
            break
          default:
            setData(null)
            break
        }
        setData(responseJSON)
      } catch (error) {
        setError(String(error))
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url, option.type])

  return { data, loading, error }
}
