import { Link } from "react-router-dom"

const ErrorMessage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <h1 className="text-center text-danger my-4">Error</h1>
          <p className="text-center">
            Uh-oh! There was an error on our end.
          </p>
          <p className="text-center">Would you like to back to the <Link to="/">homepage</Link>?</p>
        </div>
      </div>
    </div>
  )
}

export default ErrorMessage
