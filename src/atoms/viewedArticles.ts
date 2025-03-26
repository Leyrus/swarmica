import { atom } from 'recoil'

const localStorageKey = 'viewed_articles'

const getInitialViewed = (): string[] => {
  const stored = localStorage.getItem(localStorageKey)
  return stored ? JSON.parse(stored) : []
}

export const viewedArticlesAtom = atom<string[]>({
  key: 'viewedArticlesAtom',
  default: getInitialViewed(),
  effects: [
    ({ onSet }) => {
      onSet((newValue) => {
        localStorage.setItem(localStorageKey, JSON.stringify(newValue))
      })
    },
  ],
})
