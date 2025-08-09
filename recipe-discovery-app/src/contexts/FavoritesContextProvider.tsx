import type { ReactNode } from "react"
import type { RecipeType } from "../types"
import { useLocalStorage } from "../hooks/useLocalStorage"
import FavoritesContext from "./FavoritesContext"

const FavoritesContextProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useLocalStorage()

  const addFavorite = (recipe: RecipeType): void => {
    setFavorites((prevFavorites) => [...prevFavorites, recipe])
  }

  const removeFavorite = (recipe: RecipeType): void => {
    setFavorites((prevFavorites) =>
      prevFavorites.toSpliced(
        prevFavorites.findIndex((r) => r.id === recipe.id),
        1
      )
    )
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContextProvider
