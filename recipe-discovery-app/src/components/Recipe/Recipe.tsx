import { Link, Navigate, useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import type { APIRecipesType, APIRecipeType } from "../../types"

const MAX_INGREDIENTS_COUNT = 20

const Recipe = () => {
  const { recipeId } = useParams()
  const { data, loading, error } = useFetch({
    type: "lookup",
    term: recipeId as string,
  })

  if (!recipeId) return <Navigate to="/not-found" />

  let recipe: APIRecipeType | null = null
  if (data) {
    recipe = (data as APIRecipesType).meals[0]
  }

  if (!data && !loading) return <Navigate to="/not-found" />

  // Zip measures and ingredients
  const ingredients: string[] = []
  if (recipe) {
    for (let i = 1; i <= MAX_INGREDIENTS_COUNT; i++) {
      const measureKey = `strMeasure${i}` as keyof APIRecipeType
      const ingredientKey = `strIngredient${i}` as keyof APIRecipeType

      let measure: string | null = null
      let ingredient: string | null = null

      if (measureKey in recipe) {
        measure = `${recipe[measureKey]} `
      }

      if (
        ingredientKey in recipe &&
        recipe[ingredientKey] !== null &&
        recipe[ingredientKey] !== ""
      ) {
        ingredient = recipe[ingredientKey]
        ingredients.push(`${measure}${ingredient}`)
      } else {
        break
      }
    }
  }

  // Make ingredients list items
  const ingredientsList = ingredients.map((ingredient) => (
    <li className="list-group-item" key={ingredient}>
      {ingredient}
    </li>
  ))

  return (
    <>
      {/* TODO: Replace with spinner */}
      {loading && <div className="text-center">Loading&hellip;</div>}

      {/* TODO: Make this is a console.error call instead? */}
      {error && <div className="text-danger text-center">{error}</div>}

      {recipe && (
        <div className="container-fluid">
          <div className="row">
            <article className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
              {/* Category Button */}
              <div className="mb-4">
                <Link
                  className="btn btn-primary btn-sm"
                  to={`/category/${recipe.strCategory}`}>
                  <i className="bi bi-arrow-left"></i> {recipe.strCategory}
                </Link>
              </div>

              {/* Meal Name */}
              <h1 className="text-center mb-4">{recipe.strMeal}</h1>

              {/* Alternate Name */}
              {recipe.strMealAlternate && (
                <h2 className="text-center">{recipe.strMealAlternate}</h2>
              )}

              {/* Tags */}
              {recipe.strTags && (
                <section
                  className="d-flex justify-content-center gap-2 mb-4"
                  aria-label="Tags">
                  {recipe.strTags?.split(",").map((tag, i) => (
                    <span
                      className="btn btn-outline-light btn-sm disabled"
                      key={i}>
                      <small>{tag}</small>
                    </span>
                  ))}
                </section>
              )}

              {/* Photograph */}
              <section className="text-center mb-4" aria-label="Photograph">
                <img
                  className="rounded-3 shadow"
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  style={{ height: "50dvh", width: "100%", objectFit: "cover" }}
                />
              </section>

              {/* Ingredients */}
              <section className="mb-4">
                <h3>Ingredients</h3>
                <ul className="list-group">{ingredientsList}</ul>
              </section>

              {/* Directions */}
              <section className="mb-4">
                <h3>Directions</h3>
                {recipe.strInstructions.split("\r\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </section>

              {/* YouTube Button */}
              {recipe.strYoutube && (
                <div className="text-center">
                  <a
                    className="btn btn-primary btn-sm"
                    href={recipe.strYoutube}>
                    YouTube
                  </a>
                </div>
              )}
            </article>
          </div>
        </div>
      )}
    </>
  )
}

export default Recipe
