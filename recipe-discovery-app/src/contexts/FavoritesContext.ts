import { createContext } from "react"
import type { APIRecipeType } from "../types"

export interface FavoritesContextType {
  favorites: APIRecipeType[]
  addFavorite: (recipe: APIRecipeType) => void
  removeFavorite: (recipe: APIRecipeType) => void
}

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
})

export default FavoritesContext
