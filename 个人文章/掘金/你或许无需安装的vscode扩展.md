# [或许你不必安装的 VSCode 扩展](https://medium.com/coding-beauty/unnecessary-vscode-extensions-e72cb637f1cf)

![](https://miro.medium.com/v2/resize:fit:700/0*rFGa1UHcEOePNnG1.png)

您安装的 VSCode 扩展数量是您可能会发现编辑器缓慢且耗电的主要原因之一，因为添加的每个新扩展都会增加应用程序的内存和 CPU 使用率。

市场中有大量扩展提供 VSCode 已内置的功能。通常，它们是在尚未添加该功能时开发的，但随着 vscode 更新不再如此，它们现在在很大程度上是多余的添加，并且其中一些因此已被弃用。

下面，我们将介绍这些集成的 VSCode 功能的列表以及提供这些功能的扩展。卸载这些现在可有可无的扩展将提高编辑器的性能和效率。

我们将列出控制这些功能行为的设置。如果您不知道如何更改设置，[本指南](https://code.visualstudio.com/docs/getstarted/settings)将有所帮助。

# 1\. Automatically close HTML tag

添加新的 HTML 标记时，此功能会自动添加相应的结束标记。

![](https://miro.medium.com/v2/resize:fit:649/0*NlGoAkqO00Cl8TUR.gif)

将自动添加 的结束标记。`div`

# 扩展

这些扩展将自动关闭功能添加到 VSCode：

- 自动[关闭标签](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)（8.6M 下载）：“自动添加 HTML / XML 关闭标签，与 Visual Studio IDE 或 Sublime Text 相同”。

# 特征

这些设置启用/禁用 VSCode 中标签的自动关闭：

- `HTML: Auto Closing Tags`：“启用/禁用 HTML 标记的自动关闭”。它是默认的。`true`
- `JavaScript: Auto Closing Tags`：“启用/禁用 JSX 标记的自动关闭”。它是默认的。`true`
- `TypeScript: Auto Closing Tags`：“启用/禁用 JSX 标记的自动关闭”。它是默认的。`true`

![](https://miro.medium.com/v2/resize:fit:428/0*_A9vG1Om8B5DdP7S.png)

设置 UI 中的自动关闭设置。

将以下内容添加到您的文件中以将其打开：`settings.json`

`settings.json`

{  
 "html.autoClosingTags": true,  
 "javascript.autoClosingTags": true,  
 "typescript.autoClosingTags": true  
}

**注意：** VSCode 没有对 vue 文件的自动关闭支持。您可以通过安装 [Vue 语言功能（Volar）](https://marketplace.visualstudio.com/items?itemName=Vue.volar)扩展来启用它。`.vue`

# 2 \. Path autocompletion

The path autocompletion feature provides a list of files in your project to choose from when importing a module or linking a resource in HTML.

# Extensions

These extensions add the path autocompletion feature to VSCode:

1.  [Path IntelliSense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense&ssr=false#overview) (8.5M downloads): “Visual Studio Code Plugin that autocompletes filenames”.
2.  [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete) (1.2M downloads): “Provides path completion for Visual Studio Code and VS Code for the web”.

# Feature

VS 代码已经具有本机路径自动完成。当您打算输入文件名以导入（通常在打开开头报价时）时，将建议建议一个文件列表，从中选择该文件将自动插入文件名。

![](https://miro.medium.com/v2/resize:fit:681/0*67VhBwM_q7tbRIMI.gif)

# 3\. Settings Sync

跨设备同步支持

# Extensions

- [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) (3.5M downloads): “Synchronize Settings, Snippets, Themes, File Icons, Launch, Keybindings, Workspaces, and Extensions Across Multiple Machines Using GitHub Gist”.

# Feature

You can read all about the built-in Settings Sync feature [here](https://code.visualstudio.com/docs/editor/settings-sync).

Here are the Setting Sync options shown in the Settings UI.

![](https://miro.medium.com/v2/resize:fit:544/0*HSs9I02aOsKLod7-.png)

设置 UI 中的设置同步选项。

您可以将设置数据与 Microsoft 或 GitHub 帐户链接，并且可以自定义保存的设置。

![](https://miro.medium.com/v2/resize:fit:655/0*tW8pwY4Dswdy73jL.png)

# 4\. Bracket pair colorization

括号对着色是一种流行的语法突出显示功能，可根据括号的顺序为括号着色。它使识别范围变得更加容易，并有助于编写涉及许多括号的表达式，例如单语句函数组合。

![](https://miro.medium.com/v2/resize:fit:515/0*pPviVcc_OcKUBWZq.png)

# Extensions

Until VSCode had it built-in, these extensions helped enable the feature in the editor:

1.  [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2) (5.4M downloads): “A customizable extension for colorizing matching brackets”. It has now been deprecated.
2.  [Rainbow Brackets](https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets): (1.9M downloads): “A rainbow brackets extension for VS Code”.

# Feature

- `Editor > Bracket Pair Colorization`

![](https://miro.medium.com/v2/resize:fit:548/0*vb2ajWgn-g7QuzLR.png)

The bracket pair colorization option in the Settings UI.

# 5\. Auto importing of modules

使用自动象征功能，当文件中引用模块的函数，变量或其他成员时，该模块会自动导入到文件中，从而节省了时间和精力。

![](https://miro.medium.com/v2/resize:fit:700/0*7NPn0JOIjO8kZ7Gh.gif)

引用时，将自动从文件中导入该函数。

如果移动模块文件，该功能将有助于自动更新它们。

![](https://miro.medium.com/v2/resize:fit:700/0*RDuy08i0CuQnMKVV.gif)

文件的导入会在移动时自动更新。

# 扩展

以下是一些为 VSCode 用户提供该功能的最流行的扩展：

- [自动导入](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)（2.7M 下载）：“自动查找、解析并提供所有可用导入的代码操作和代码完成。适用于 Typescript 和 TSX”。

# 特征

您可以使用以下设置在 VSCode 中启用或禁用自动导入模块。

- `JavaScript > Suggest: Auto Imports`：“启用/禁用自动导入建议”。它是默认的。`true`
- `TypeScript > Suggest: Auto Imports`：“启用/禁用自动导入建议”。它是默认的。`true`
- `JavaScript > Update Imports on File Move`：“在 VS Code 中重命名或移动文件时启用/禁用导入路径的自动更新”。默认值为 ，表示将显示一个对话框，询问您是否要更新已移动文件的导入。将其设置为 将导致跳过对话框，并将完全关闭该功能。` prompt``always``never `
- `TypeScript > Update Imports on File Move`：“在 VS Code 中重命名或移动文件时启用/禁用导入路径的自动更新”。与前面的设置一样，它可能的值为 、 和 ，默认值为 。` prompt``always``never``prompt `

![](https://miro.medium.com/v2/resize:fit:553/0*XCbmsoAuBn7hQ7aI.png)

设置 UI 中的自动导入设置之一。

您可以使用以下属性控制这些设置：`settings.json`

{  
 "javascript.suggest.autoImports": true,  
 "typescript.suggest.autoImports": true,  
 "javascript.updateImportsOnFileMove.enabled": "prompt",  
 "typescript.updateImportsOnFileMove.enabled": "prompt"  
}

如果您希望在保存文件时随时组织导入，也可以添加此设置。

"editor.codeActionsOnSave": {  
 "source.organizeImports": true  
}

这将删除未使用的导入语句，并在顶部排列具有绝对路径的导入语句，从而提供一种无需干预的方式来清理代码。

# 结论

这些扩展在过去可能起到了至关重要的作用，但在大多数情况下不再如此，因为它们提供的许多功能都是作为内置 VSCode 功能添加的。删除它们以减少膨胀并提高 Visual Studio Code 的效率。


# [origin link](https://medium.com/coding-beauty/unnecessary-vscode-extensions-e72cb637f1cf)