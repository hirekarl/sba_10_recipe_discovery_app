import { useContext, type ReactNode } from "react"
import FavoritesContext, {
  type FavoritesContextType,
} from "../../contexts/FavoritesContext"
import RecipeCard from "../Recipe/RecipeCard"

const Favorites = () => {
  const { favorites } = useContext<FavoritesContextType>(FavoritesContext)

  let recipeCards: ReactNode
  if (favorites) {
    recipeCards = favorites.map((recipe) => (
      <div key={recipe.idMeal} className="col-lg-3 col-md-4 col-sm-6 mb-3">
        <RecipeCard recipe={recipe} />
      </div>
    ))
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <div className="my-4"></div>
          <h1 className="text-center my-4">Favorite Recipes</h1>
          <div className="row">
            {favorites.length === 0 ? (
              <p className="text-center">
                <em>No Favorites yet!</em>
              </p>
            ) : (
              recipeCards
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Favorites
