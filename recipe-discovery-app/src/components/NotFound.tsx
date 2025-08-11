import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <h1 className="text-center text-danger my-4">Not Found</h1>
          <p className="text-center">
            Uh-oh! The resource you requested doesn't exist.
          </p>
          <p>
            Would you like to back to the <Link to="/">homepage</Link>?
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
