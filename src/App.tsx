import { Box, Container } from '@mui/material'

import { ArticleList } from './components/AtricleList'
import { FilterComponent } from './components/FilterComponents'

const App = () => {
  return (
    <Container>
      <Box component="h1">Swarmica</Box>
      <FilterComponent />
      <ArticleList />
    </Container>
  )
}

export default App
