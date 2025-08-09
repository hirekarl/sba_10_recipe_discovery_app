import { createContext } from "react"

export interface FavoritesContextType {
  value: null
}

const FavoritesContext = createContext<FavoritesContextType>({ value: null })

export default FavoritesContext
