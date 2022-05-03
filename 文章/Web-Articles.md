- [起因](#起因)
- [选用 docsify](#选用-docsify)
  - [本地搭建与开发](#本地搭建与开发)
  - [部署 gh-pages 网站](#部署-gh-pages-网站)
- [vscode 插件 markdown all in one](#vscode-插件-markdown-all-in-one)
  - [插件市场](#插件市场)
- [网站链接](#网站链接)

# 起因

> 原先小王使用有道云笔记来记录文档, 最近在使用中发现一些不便, 如页内跳转, 预览查看等。在查看一些框架官网时发现这种文档展示方式有很多优点, 不仅目录**结构清晰**, 而且支持**站内搜索跳转, 外链跳转**。加上**可配置插件**, 增强了扩展性, 极大的提升了用户的阅读体验。小王准备打造一个专注于内容创作，网站实时更新的工作流。

markdown 编辑 ---> git 推送 ---> 网站实时更新

# 选用 docsify

> 初步查看发现 vue 官网使用的是 vuepress 框架, 小王立即去 vuepress 官网查看使用, 但在版本 2.0.0-beta.25 的使用中遇见了一些问题, 乱码和**config.js 配置无法热更新**。在查询以后发现热更是个遗留问题, 最后在官网中看到为什么不, 我尝试了 docsify, 感觉体验更好, 配置简单, 可以直接引入一系列插件。最后选择了 docsify

**选取标准**

1. 专注内容创作
2. 不需要 SEO
3. 开源

![为什么不](https://files.catbox.moe/5qyweg.png ":size=70%")

## 本地搭建与开发

1. npm i docsify-cli -g
1. docsify init ./docs
1. docsify serve docs

**详细配置和使用查看**

1. [docsify 官网](https://docsify.js.org/#/zh-cn/quickstart)
1. [参考本案例](https://github.com/SilverComet7/My-Article-collection)

## 部署 gh-pages 网站

**确保选择的分支目录中存在 index.html**

![配置](https://files.catbox.moe/l9jtwh.png ":size=90%")

# vscode 插件 markdown all in one

## [插件市场](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

vscode 内 markdown 编辑利器
使用方式 ： ctrl + shift + p 输入 markdown 可看到很多功能，比较常用的有创建章节序号和目录。

# [网站链接](https://silvercomet7.github.io/My-Article-collection/#/)
