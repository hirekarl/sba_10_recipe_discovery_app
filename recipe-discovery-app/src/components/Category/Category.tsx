import { Link, Navigate, useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import type { APIRecipesType } from "../../types"
import type { ReactNode } from "react"

const Category = () => {
  const { categoryName } = useParams()
  const { data, loading, error } = useFetch({
    type: "filter",
    term: categoryName as string,
  })

  if (!categoryName) return <Navigate to="/not-found" />

  let recipes: ReactNode = null

  if (data) {
    recipes = (data as APIRecipesType).meals.map((meal) => (
      <li key={meal.idMeal}>
        <Link to={`/recipe/${meal.idMeal}`}>{meal.strMeal}</Link>
      </li>
    ))
  }

  if (!data && !loading) return <Navigate to="/not-found" />

  return (
    <>
      <h1>{categoryName}</h1>
      {loading && <div>Loading&hellip;</div>}
      {error && <div className="text-danger">{error}</div>}
      <ul>{recipes}</ul>
    </>
  )
}

export default Category
