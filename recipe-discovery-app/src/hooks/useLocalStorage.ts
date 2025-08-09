import { useEffect, useState, type Dispatch, type SetStateAction } from "react"

import type { RecipeType } from "../types"

export const useLocalStorage = (): [
  RecipeType[],
  Dispatch<SetStateAction<RecipeType[]>>
] => {
  const [favorites, setFavorites] = useState<RecipeType[]>([])

  useEffect(() => {
    const localStorageFavorites = localStorage.getItem("karlFavorites")
    if (localStorageFavorites) {
      const savedFavorites = JSON.parse(localStorageFavorites)
      setFavorites(savedFavorites)
    } else {
      localStorage.setItem("karlFavorites", JSON.stringify([]))
    }
  }, [])

  return [favorites, setFavorites]
}
