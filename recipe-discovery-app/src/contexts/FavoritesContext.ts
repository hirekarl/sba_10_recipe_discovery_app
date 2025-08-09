import { createContext } from "react"
import type { RecipeType } from "../types"

interface FavoritesContextType {
  favorites: RecipeType[]
  addFavorite: (recipe: RecipeType) => void
  removeFavorite: (recipe: RecipeType) => void
}

const FavoritesContext = createContext<FavoritesContextType | null>(null)

export default FavoritesContext
