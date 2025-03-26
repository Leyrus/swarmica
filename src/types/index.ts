export interface Category {
  id: number
  name: {
    [locale: string]: string
  }
  public: boolean
  image_path: string
}

export interface Article {
  id: number
  ext_id: number | null
  rank: number
  status: 'PUBLISHED' | string
  highlight?: {
    title?: string
    body?: string
  }
  public_urls: {
    [locale: string]: string
  }
  created_at: string
  updated_at: string
  published_at: string
  author: string
  title: {
    [locale: string]: string
  }
}
