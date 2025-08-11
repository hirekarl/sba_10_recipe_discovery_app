import type { ReactNode } from "react"
import { Navigate, useSearchParams } from "react-router-dom"
import type { APIRecipesType } from "../../types"
import { useFetch } from "../../hooks/useFetch"
import Spinner from "../Spinner"
import RecipeCard from "../Recipe/RecipeCard"

const Search = () => {
  const [searchParams] = useSearchParams()
  const searchTerm = searchParams.get("query") || ""

  const { data, loading, error } = useFetch({
    type: "search",
    term: (searchTerm as string).split(" ").join("+"),
  })

  let recipeCards: ReactNode = null
  if (data) {
    recipeCards = (data as APIRecipesType).meals?.map((recipe) => (
      <div key={recipe.idMeal} className="col-lg-3 col-md-4 col-sm-6 mb-3">
        <RecipeCard recipe={recipe} />
      </div>
    ))
  }

  if (!data && !loading) return <Navigate to="/not-found" />

  return (
    <>
      {loading && <Spinner />}

      {/* TODO: Make this is a console.error call instead? */}
      {error && <div className="text-danger text-center">{error}</div>}

      {!loading && !error && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              <h1 className="text-center my-4">
                Search Results (
                {data ? (data as APIRecipesType).meals?.length || 0 : 0})
              </h1>
              <h2 className="text-center mb-4">
                <code>&ldquo;{searchTerm}&rdquo;</code>
              </h2>
              <div className="row">
                {!recipeCards ? (
                  <p className="text-center">
                    <em>No results!</em>
                  </p>
                ) : (
                  recipeCards
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Search
