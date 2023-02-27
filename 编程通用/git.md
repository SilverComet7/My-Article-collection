# git 工作流程

![](https://secure2.wostatic.cn/static/s7UkSZjLh3tew7dtkJKaCM/image.png?auth_key=1677470498-j7seVrAMxy13Dpic3zhjD1-0-362d58d9d59a21f3d334ec5399d1e2e7)

# 常用指令

1. [工作中的 git](https://juejin.cn/post/6974184935804534815#heading-20)
1. [book](https://git-scm.com/book/zh/v2)
1. [book 总结](https://bingohuang.gitbooks.io/progit2/content/02-git-basics/sections/undoing.html)

- stash status
- revert reset
- rebase merge
- cherry-pick
- add commit push pull fetch
- branch
  - checkout
- log

# git commit 分类

feat: 增加功能
fix: 修复 bug
ux: 用户体验，使用体验
clean:删除无用代码
style: 代码 format，CSS 样式
refactor: 重构
pref: 性能
config: 配置
ci: 自动部署，持续集成
dep: 依赖相关
chore: 杂项 README ，package 等

# .gitignore 配置指南

- 以斜杠“/”开头表示目录；
- 以星号“\*”通配多个字符；
- 以问号“?”通配单个字符；
- 以方括号“[]”包含单个字符的匹配列表；
- 以叹号“!”表示不忽略(跟踪)匹配到的文件或目录；
