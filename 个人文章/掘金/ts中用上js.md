

# 在ts项目中用上js文件

背景：当一个ts项目中想要用js的库，但不想改造js文件为ts文件时，有以下几种方法能让js文件与ts项目共存

1. 提供类型

1.1 将JavaScript文件保留为.js文件，并将其放置在TypeScript项目的适当位置。这些JavaScript文件将会被视为外部模块，您可以通过import语句来引入它们。

1.2  在TypeScript项目中创建类型定义文件（.d.ts），以描述您想要使用的JavaScript代码库。这可以让编译器知道库的API并提供类型检查和自动完成功能。

1.3 使用第三方类型定义库。例如，DefinitelyTyped是一个开源的类型定义库，其中包含数千个流行的JavaScript库的类型定义文件。



1. 开启ts编译选项  "allowJs": true 

这个选项允许TypeScript编译器处理JavaScript文件，并生成相应的类型定义文件。当您需要使用现有的JavaScript库或模块时，可以将其保留为.js文件并在TypeScript项目中引用它们。

举个例子：可以将vue2+js的文件无缝在vue3+ts的项目使用


