import { selector } from 'recoil'
import { filtersAtom } from './filters'
import { searchArticles } from '../api/search'
import { Article } from '../types'

export const articlesSelector = selector<Article[]>({
  key: 'articlesSelector',
  get: async ({ get }) => {
    const filters = get(filtersAtom)

    if (!filters.search) return []

    const { data } = await searchArticles(filters)
    return data.results
  },
})
