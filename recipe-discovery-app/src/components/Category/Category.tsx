import { type ReactNode } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import type { APIRecipesType } from "../../types"
import RecipeCard from "../Recipe/RecipeCard"
import Spinner from "../Spinner"

const Category = () => {
  const { categoryName } = useParams()
  const { data, loading, error } = useFetch({
    type: "filter",
    term: categoryName as string,
  })

  if (!categoryName) return <Navigate to="/not-found" />

  let recipeCards: ReactNode = null

  if (data) {
    recipeCards = (data as APIRecipesType).meals.map((recipe) => (
      <div key={recipe.idMeal} className="col-lg-3 col-md-4 col-sm-6 mb-3">
        <RecipeCard recipe={recipe} />
      </div>
    ))
  }

  if (!data && !loading) return <Navigate to="/not-found" />

  return (
    <>
      {/* TODO: Replace with spinner */}
      {loading && <Spinner />}

      {/* TODO: Make this is a console.error call instead? */}
      {error && <div className="text-danger text-center">{error}</div>}
      {recipeCards && !loading && !error && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <div className="my-4">
                <Link className="btn btn-primary btn-sm" to="/">
                  <i className="bi bi-arrow-left"></i> All Categories
                </Link>
              </div>
              <h1 className="text-center my-4">Category: {categoryName}</h1>
              <div className="row">{recipeCards}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Category
