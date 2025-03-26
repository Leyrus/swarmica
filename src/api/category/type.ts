import { Category } from '../../types'

export interface CategoriesParams {
  public: boolean
  limit?: number
  offset?: number
}

export interface CategoriesResponse {
  count: number
  next: string | null
  previous: string | null
  results: Category[]
}
