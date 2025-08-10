import { Routes, Route } from "react-router-dom"

import FavoritesContextProvider from "./contexts/FavoritesContextProvider"

import NavBar from "./components/NavBar"
import Home from "./components/Home/Home"
import Category from "./components/Category/Category"
import Recipe from "./components/Recipe/Recipe"
import Favorites from "./components/Favorites/Favorites"
import Search from "./components/Search/Search"
import NotFound from "./components/NotFound"
import Footer from "./components/Footer"

import "./App.css"

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route
          path="/recipe/:recipeId"
          element={
            <FavoritesContextProvider>
              <Recipe />
            </FavoritesContextProvider>
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesContextProvider>
              <Favorites />
            </FavoritesContextProvider>
          }
        />
        <Route path="/search" element={<Search />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
