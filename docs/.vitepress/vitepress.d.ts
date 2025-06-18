// vitepress.d.ts
import 'vitepress'

declare module 'vitepress' {
  interface ThemeConfig {
    locales?: {
      [key: string]: {
        label: string
        lang: string
        link?: string
      }
    }
  }
}
