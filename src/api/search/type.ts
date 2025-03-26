import { Article } from '../../types'

export interface SearchArticlesParams {
  search: string
  category?: string
  locale?: string
  status?: string
  limit?: number
  offset?: number
}

export interface SearchArticlesResponse {
  count: number
  next: string | null
  previous: string | null
  results: Article[]
}
