import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'ChrisWang的文章合集',
  description: 'ChrisWang的文章合集',
  base: '/My-Article-collection/',
  themeConfig: {

    // 你也可以直接将它设置为一个 URL
    repo: 'https://github.com/SilverComet7/My-Article-collection',
    navbar: [
      // NavbarItem
      {
        text: '首页',
        link: '/',
      },
      // NavbarGroup
      {
        text: '好文222',
        children: [{ text: '有道笔记', children: [{ text: '2021-9', link: '/guide/近日好文.md' }, { text: 'vscode', link: '/guide/vscode.md' }] }],
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'GuideT',
          children: [{ text: '2021-9', link: '/guide/近日好文.md' }, { text: 'vscode', link: '/guide/vscode.md' }],
        },
      ]
    },
    contributors: false,
    logo: '/public/images/pikaqiu.png',
  },
})