import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'Hello VuePress',
  description: 'Just playing around',
  // base: '/blog/',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
})