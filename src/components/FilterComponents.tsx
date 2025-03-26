import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  CircularProgress,
  Alert,
  Grid2,
} from '@mui/material'
import { useRecoilState, useRecoilValueLoadable } from 'recoil'
import { categoriesSelector, filtersAtom, instanceSelector } from '../atoms'
import { Category } from '../types'
import { useEffect } from 'react'

export const FilterComponent = () => {
  const [filters, setFilters] = useRecoilState(filtersAtom)
  const categoriesLoadable = useRecoilValueLoadable(categoriesSelector)
  const instanceLoadable = useRecoilValueLoadable(instanceSelector)
  const isLoading = [categoriesLoadable.state, instanceLoadable.state].includes('loading')
  const isError = [categoriesLoadable.state, instanceLoadable.state].includes('hasError')

  useEffect(() => {
    if (instanceLoadable.state !== 'hasValue') return

    const { locales } = instanceLoadable.contents
    if (!filters.locale && locales.length > 0) {
      setFilters((prev) => ({ ...prev, locale: locales[0] }))
    }
  }, [instanceLoadable.state, instanceLoadable.contents, filters.locale, setFilters])
  const handleChange = (name: string, value: string) => {
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  if (isLoading) {
    return (
      <Box mt={4} textAlign="center">
        <CircularProgress />
      </Box>
    )
  }

  if (isError) {
    return (
      <Box mt={4}>
        <Alert severity="error">Ошибка при загрузке данных</Alert>
      </Box>
    )
  }

  const categories = categoriesLoadable.contents as Category[]
  const locales = instanceLoadable.contents.locales as string[]

  return (
    <Box mb={4}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Поиск"
            value={filters.search}
            onChange={(e) => handleChange('search', e.target.value)}
          />
        </Grid2>

        <Grid2 size={{ xs: 12, md: 6 }}>
          <FormControl fullWidth>
            <InputLabel>Категория</InputLabel>
            <Select
              label="Категория"
              value={filters.category || ''}
              onChange={(e) => handleChange('category', e.target.value)}
            >
              <MenuItem value="">Все</MenuItem>
              {categories.map(({ id, name }) => (
                <MenuItem key={id} value={String(id)}>
                  {name[filters.locale] || name['en'] || `Категория ${id}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 6 }}>
          <FormControl fullWidth>
            <InputLabel>Язык</InputLabel>
            <Select
              label="Язык"
              value={filters.locale || ''}
              onChange={(e) => handleChange('locale', e.target.value)}
            >
              {locales.map((locale) => (
                <MenuItem key={locale} value={locale}>
                  {locale}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid2>
      </Grid2>
    </Box>
  )
}
