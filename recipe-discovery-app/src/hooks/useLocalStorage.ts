import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import type { APIRecipeType } from "../types"

const LOCAL_STORAGE_KEY = "karlFavorites"

export const useLocalStorage = (): [
  APIRecipeType[],
  Dispatch<SetStateAction<APIRecipeType[]>>
] => {
  // Initial state (get from localStorage)
  const [favorites, setFavorites] = useState<APIRecipeType[]>(() => {
    try {
      const localStorageFavorites = localStorage.getItem(LOCAL_STORAGE_KEY)
      return localStorageFavorites
        ? (JSON.parse(localStorageFavorites) as APIRecipeType[])
        : []
    } catch (error) {
      console.error("Couldn't get favorites from localStorage:", error)
      return []
    }
  })

  // Update localStorage when favorites change.
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites))
    } catch (error) {
      console.error("Couldn't save favorites to localStorage:", error)
    }
  }, [favorites])

  return [favorites, setFavorites]
}
