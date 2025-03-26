export interface InstanceResponse {
  plan: string
  locales: string[]
  default_locale: string
  currency: string
  base_url: string
  brand: string
  logo: string
  favicon: string
  spinner: string | null
  html_title: string
  authentication_providers: string[]
  ai_provider: string | null
  issue_tracker: string
  n_weekly_aqi: number
  n_weekly_lai: number
  ticket_form: number
  features: string[]
  license: {
    code: string
    expires_at: string
    status: string
    features: string[]
    limits: {
      agents: number
    }
  }
}
