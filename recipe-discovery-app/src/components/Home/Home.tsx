import { type ReactNode } from "react"
import { useNavigate } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import type { APICategoriesType } from "../../types"

const Home = () => {
  const { data, loading, error } = useFetch({ type: "categories", term: null })
  const navigate = useNavigate()

  let categories: ReactNode = null

  if (data) {
    categories = (data as APICategoriesType).categories.map((category) => (
      <div
        className="col-lg-3 col-md-4 col-sm-6 mb-3"
        key={category.idCategory}>
        <div
          className="card"
          onClick={() => navigate(`/category/${category.strCategory}`)}
          style={{ cursor: "pointer" }}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title={category.strCategoryDescription}>
          <img
            className="card-img-top p-1"
            src={
              category.strCategoryThumb ||
              "https://placehold.co/700/transparent/DEE2E6?text=Image+Not+Found"
            }
            alt=""
          />
          <div className="card-body">
            <h2 className="card-title text-center fs-5">
              {category.strCategory}
            </h2>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <>
      {loading && <div>Loading&hellip;</div>}
      {error && <div className="text-danger">{error}</div>}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
            <h1 className="text-center my-4">Recipe Categories</h1>
            <div className="row">{categories}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
