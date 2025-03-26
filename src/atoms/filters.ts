import { atom } from 'recoil'

export const filtersAtom = atom({
  key: 'filtersAtom',
  default: {
    search: '',
    category: '',
    locale: 'ru',
  },
})
