import { createContext } from "react"
import type { APIRecipeType } from "../types"

interface FavoritesContextType {
  favorites: APIRecipeType[]
  addFavorite: (recipe: APIRecipeType) => void
  removeFavorite: (recipe: APIRecipeType) => void
}

const FavoritesContext = createContext<FavoritesContextType | null>(null)

export default FavoritesContext
