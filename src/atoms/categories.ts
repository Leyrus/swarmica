import { selector } from 'recoil'
import { Category } from '../types'
import { fetchCategories } from '../api/category'

export const categoriesSelector = selector<Category[]>({
  key: 'categoriesSelector',
  get: async () => {
    const { data } = await fetchCategories({ public: true })
    return data.results
  },
})
