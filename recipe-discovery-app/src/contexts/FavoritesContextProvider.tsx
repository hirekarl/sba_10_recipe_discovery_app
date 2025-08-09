import type { ReactNode } from "react"
import FavoritesContext from "./FavoritesContext"

const FavoritesContextProvider = ({ children }: { children: ReactNode }) => {
  const value = null
  return (
    <FavoritesContext.Provider value={{ value }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesContextProvider
