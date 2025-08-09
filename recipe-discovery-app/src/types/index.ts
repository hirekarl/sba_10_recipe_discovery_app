export interface Ingredient {
  measure: string
  name: string
}

export interface Recipe {
  id: number
  name: string
  category: string
  locale: string
  instructions: string
  thumbnail: string
  tags: string[]
  youtube: string
  ingredients: Ingredient[]
}
