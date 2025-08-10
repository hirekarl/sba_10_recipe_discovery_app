import { Link, Navigate, useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import type { APIRecipesType, APIRecipeType } from "../../types"

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

  const ingredients: string[] = []
  if (recipe) {
    for (let i = 1; i <= 20; i++) {
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

  const ingredientsList = ingredients.map((ingredient) => (
    <li className="list-group-item" key={ingredient}>
      {ingredient}
    </li>
  ))

  return (
    <>
      {loading && <div className="text-center">Loading&hellip;</div>}
      {error && <div className="text-danger text-center">{error}</div>}
      {recipe && (
        <div className="container-fluid">
          <div className="row">
            <article className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
              <div className="mb-4">
                <Link
                  className="btn btn-primary btn-sm"
                  to={`/category/${recipe.strCategory}`}>
                  <i className="bi bi-arrow-left"></i> {recipe.strCategory}
                </Link>
              </div>
              <h1 className="text-center mb-4">{recipe.strMeal}</h1>
              {recipe.strMealAlternate && (
                <h2 className="text-center">{recipe.strMealAlternate}</h2>
              )}
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

              <section className="text-center mb-4" aria-label="Photograph">
                <img
                  className="rounded-3 shadow"
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  style={{ height: "50dvh", width: "100%", objectFit: "cover" }}
                />
              </section>
              <section className="mb-4">
                <h3>Ingredients</h3>
                <ul className="list-group">{ingredientsList}</ul>
              </section>
              <section className="mb-4">
                <h3>Directions</h3>
                {recipe.strInstructions.split("\r\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </section>
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
