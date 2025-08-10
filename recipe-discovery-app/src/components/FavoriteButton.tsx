import { useContext } from "react"
import FavoritesContext, {
  type FavoritesContextType,
} from "../contexts/FavoritesContext"
import type { APIRecipeType } from "../types"

export interface FavoriteButtonProps {
  recipe: APIRecipeType
}

const FavoriteButton = ({ recipe }: FavoriteButtonProps) => {
  const { favorites, addFavorite, removeFavorite } =
    useContext<FavoritesContextType>(FavoritesContext)

  const isFavorite = favorites.find((r) => r.idMeal === recipe.idMeal)

  const button = isFavorite ? (
    <button
      type="button"
      onClick={() => removeFavorite(recipe)}
      className="btn btn-danger w-100">
      <i className="bi bi-trash"></i> Remove Favorite
    </button>
  ) : (
    <button
      type="button"
      onClick={() => addFavorite(recipe)}
      className="btn btn-primary w-100">
      <i className="bi bi-plus"></i> Add Favorite
    </button>
  )
  return button
}

export default FavoriteButton
