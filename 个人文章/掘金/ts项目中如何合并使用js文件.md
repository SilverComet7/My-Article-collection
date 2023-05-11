# 在 ts 项目中用上 js 文件

背景：当一个 ts 项目中想要用 js 的库，但不想改造 js 文件为 ts 文件时，有以下几种方法能让 js 文件与 ts 项目共存

1. 提供类型

1.1 将 JavaScript 文件保留为.js 文件，并将其放置在 TypeScript 项目的适当位置。这些 JavaScript 文件将会被视为外部模块，您可以通过 import 语句来引入它们。

1.2 在 TypeScript 项目中创建类型定义文件（.d.ts），以描述您想要使用的 JavaScript 代码库。这可以让编译器知道库的 API 并提供类型检查和自动完成功能。

1.3 使用第三方类型定义库。例如，DefinitelyTyped 是一个开源的类型定义库，其中包含数千个流行的 JavaScript 库的类型定义文件。

1. 开启 ts 编译选项 "allowJs": true

这个选项允许 TypeScript 编译器处理 JavaScript 文件，并生成相应的类型定义文件。当您需要使用现有的 JavaScript 库或模块时，可以将其保留为.js 文件并在 TypeScript 项目中引用它们。
