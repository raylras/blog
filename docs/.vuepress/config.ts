import { defineUserConfig } from 'vuepress'
import { hopeTheme } from 'vuepress-theme-hope'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'RAYLRAS ZONE',
  base: '/blog/',
  theme: hopeTheme({
    author: {
      name: 'RAYLRAS',
    },
    blog: {
      description: 'Stay Curious'
    },
    plugins: {
      blog: true
    }
  })
})
