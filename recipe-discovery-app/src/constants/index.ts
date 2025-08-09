import type { APIEndpoint } from "../types"

const BASE_URL = "https://www.themealdb.com/api/json/v1/1"

export const ENDPOINT_URL: Record<APIEndpoint, string> = {
  categories: `${BASE_URL}/categories.php`,
  filter: `${BASE_URL}/filter.php?c=`,
  lookup: `${BASE_URL}/lookup.php?i=`,
  search: `${BASE_URL}/search.php?s=`,
} as const
