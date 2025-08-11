import { Link, NavLink } from "react-router-dom"
import SearchBar from "./Search/SearchBar"

const NavBar = () => {
  return (
    <nav className="sticky-top navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <i className="bi bi-fork-knife"></i> My Recipes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navLinks"
          aria-controls="#navLinks"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navLinks">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }>
                Categories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }>
                <i className="bi bi-star-fill"></i> Favorites
              </NavLink>
            </li>
          </ul>
          <SearchBar />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
