import { Box, Typography, CircularProgress, Alert, Grid2 } from '@mui/material'
import { useRecoilValue, useRecoilState, useRecoilValueLoadable } from 'recoil'
import { filtersAtom, viewedArticlesAtom, articlesSelector } from '../atoms'
import { Article } from '../types'
import { ArticleCard } from './AtricleCard'

export const ArticleList = () => {
  const articles = useRecoilValueLoadable(articlesSelector)
  const [viewedArticles, setViewedArticles] = useRecoilState(viewedArticlesAtom)
  const filter = useRecoilValue(filtersAtom)

  const handleClick = (article: Article) => {
    if (!viewedArticles.includes(String(article.id))) {
      setViewedArticles([...viewedArticles, String(article.id)])
    }
    window.open(article.public_urls[filter.locale] || article.public_urls['ru'], '_blank')
  }

  if (articles.state === 'loading') {
    return (
      <Box textAlign="center" mt={4}>
        <CircularProgress />
      </Box>
    )
  }

  if (articles.state === 'hasError') {
    return (
      <Box mt={4}>
        <Alert severity="error">Произошла ошбибка пр изагрузке данных</Alert>
      </Box>
    )
  }

  if (!articles.contents.length) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h6" color="text.secondary">
          Ничего не найдено. Попробуйте изменить фильтры.
        </Typography>
      </Box>
    )
  }

  return (
    <Grid2 container spacing={2}>
      {articles.contents.map((article) => (
        <Grid2 key={article.id} size={{ xs: 12 }}>
          <ArticleCard
            article={article}
            isViewed={viewedArticles.includes(String(article.id))}
            onClick={() => handleClick(article)}
          />
        </Grid2>
      ))}
    </Grid2>
  )
}
