import { type ReactNode } from "react"
import { Link } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import type { APICategoriesType } from "../../types"

const Home = () => {
  const { data, loading, error } = useFetch({ type: "categories", term: null })

  let categories: ReactNode = null

  if (data) {
    categories = (data as APICategoriesType).categories.map((category) => (
      <li key={category.idCategory}>
        <Link to={`/category/${category.strCategory}`}>
          {category.strCategory}
        </Link>
      </li>
    ))
  }

  return (
    <div>
      <h1>Categories</h1>
      {loading && <div>Loading&hellip;</div>}
      {error && <div className="text-danger">{error}</div>}
      <ul>{categories}</ul>
    </div>
  )
}

export default Home
