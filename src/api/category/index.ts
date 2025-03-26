import { api } from '../api'
import { CategoriesParams, CategoriesResponse } from './type'

export const fetchCategories = (params: CategoriesParams) =>
  api.get<CategoriesResponse>('/categories/', { params })
