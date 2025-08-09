import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import type { RecipeType } from "../types"

const LOCAL_STORAGE_KEY = "karlFavorites"

export const useLocalStorage = (): [
  RecipeType[],
  Dispatch<SetStateAction<RecipeType[]>>
] => {
  // Initial state (get from localStorage)
  const [favorites, setFavorites] = useState<RecipeType[]>(() => {
    try {
      const localStorageFavorites = localStorage.getItem(LOCAL_STORAGE_KEY)
      return localStorageFavorites
        ? (JSON.parse(localStorageFavorites) as RecipeType[])
        : []
    } catch (error) {
      console.error("Couldn't get favorites from localStorage:", error)
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites))
    } catch (error) {
      console.error("Couldn't save favorites to localStorage:", error)
    }
  }, [favorites])

  return [favorites, setFavorites]
}
