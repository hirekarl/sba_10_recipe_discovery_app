import { useEffect, useState, type Dispatch, type SetStateAction } from "react"

import type { RecipeType } from "../types"

export const useLocalStorage = (): [
  RecipeType[],
  Dispatch<SetStateAction<RecipeType[]>>
] => {
  const [favorites, setFavorites] = useState<RecipeType[]>([])

  // Initial state (get from localStorage)
  useEffect(() => {
    const localStorageFavorites = localStorage.getItem("karlFavorites")
    if (localStorageFavorites) {
      const savedFavorites = JSON.parse(localStorageFavorites)
      setFavorites(savedFavorites)
    } else {
      localStorage.setItem("karlFavorites", JSON.stringify([]))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("karlFavorites", JSON.stringify(favorites))
  }, [favorites])

  return [favorites, setFavorites]
}
