import type { ReactNode } from "react"
import type { APIRecipeType } from "../types"
import { useLocalStorage } from "../hooks/useLocalStorage"
import FavoritesContext from "./FavoritesContext"

const FavoritesContextProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useLocalStorage()

  const addFavorite = (recipe: APIRecipeType): void => {
    // Alphabetize favorites
    setFavorites((prevFavorites) =>
      [...prevFavorites, recipe].sort((a, b) =>
        a.strMeal.localeCompare(b.strMeal)
      )
    )
  }

  const removeFavorite = (recipe: APIRecipeType): void => {
    setFavorites((prevFavorites) =>
      prevFavorites.toSpliced(
        prevFavorites.findIndex((r) => r.idMeal === recipe.idMeal),
        1
      )
    )
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContextProvider
