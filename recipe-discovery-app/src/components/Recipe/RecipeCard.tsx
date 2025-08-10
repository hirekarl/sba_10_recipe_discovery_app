import { useNavigate } from "react-router-dom"
import type { APIRecipeType } from "../../types"

const RecipeCard = ({ recipe }: { recipe: APIRecipeType }) => {
  const navigate = useNavigate()

  return (
    <div
      className="card"
      onClick={() => navigate(`/recipe/${recipe.idMeal}`)}
      style={{ cursor: "pointer" }}>
      <img
        className="card-img-top"
        src={
          recipe.strMealThumb ||
          "https://placehold.co/700/transparent/DEE2E6?text=Image+Not+Found"
        }
        alt=""
      />
      <div className="card-body">
        <h2 className="card-title text-center fs-5">{recipe.strMeal}</h2>
      </div>
    </div>
  )
}

export default RecipeCard
