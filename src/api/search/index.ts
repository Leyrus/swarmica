import { api } from '../api'
import { SearchArticlesParams, SearchArticlesResponse } from './type'

export const searchArticles = (params: SearchArticlesParams) =>
  api.get<SearchArticlesResponse>('/search/articles/', { params })
