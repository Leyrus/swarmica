import { Box, Typography, Paper, Stack, Chip } from '@mui/material'
import { Article } from '../types'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

interface Props {
  article: Article
  isViewed: boolean
  onClick: () => void
}

export const ArticleCard = ({ article, isViewed, onClick }: Props) => {
  const title = article.highlight?.title || 'Без названия'
  const highlightBody = article.highlight?.body || ''

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderLeft: '6px solid',
        borderColor: isViewed ? 'success.main' : 'primary.main',
        cursor: 'pointer',
        transition: '0.2s',
        '&:hover': {
          boxShadow: 6,
        },
      }}
      onClick={onClick}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h6" color="text.primary">
          {article.highlight?.title || title}
        </Typography>
        {isViewed ? (
          <Chip label="Просмотрено" icon={<VisibilityIcon />} size="small" color="success" />
        ) : (
          <Chip label="Новое" icon={<VisibilityOffIcon />} size="small" color="default" />
        )}
      </Stack>

      {highlightBody && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
          dangerouslySetInnerHTML={{
            __html: highlightBody.replace(/<hl>(.*?)<\/hl>/g, '<mark>$1</mark>'),
          }}
        />
      )}

      <Box mt={2}>
        <Typography variant="caption" color="text.secondary">
          Обновлено: {new Date(article.updated_at).toLocaleDateString()}
        </Typography>
      </Box>
    </Paper>
  )
}
