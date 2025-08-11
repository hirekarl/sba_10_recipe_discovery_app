import { useContext } from "react"
import FavoritesContext, {
  type FavoritesContextType,
} from "../contexts/FavoritesContext"
import type { APIRecipeType } from "../types"

export interface FavoriteButtonProps {
  recipe: APIRecipeType
}

const FavoriteButton = ({ recipe }: FavoriteButtonProps) => {
  const { addFavorite, removeFavorite, isFavorite } =
    useContext<FavoritesContextType>(FavoritesContext)

  const recipeIsFavorite = isFavorite(recipe)

  const button = recipeIsFavorite ? (
    <button
      type="button"
      onClick={() => removeFavorite(recipe)}
      className="btn btn-danger w-100">
      <i className="bi bi-star-fill"></i> Remove from Favorites
    </button>
  ) : (
    <button
      type="button"
      onClick={() => addFavorite(recipe)}
      className="btn btn-primary w-100">
      <i className="bi bi-star"></i> Add to Favorites
    </button>
  )
  return button
}

export default FavoriteButton
