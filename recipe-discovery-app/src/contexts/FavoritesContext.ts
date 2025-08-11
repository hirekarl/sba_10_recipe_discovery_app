import { createContext } from "react"
import type { APIRecipeType } from "../types"

export interface FavoritesContextType {
  favorites: APIRecipeType[]
  addFavorite: (recipe: APIRecipeType) => void
  removeFavorite: (recipe: APIRecipeType) => void
  isFavorite: (recipe: APIRecipeType) => boolean
}

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => false
})

export default FavoritesContext
