# 1. vscode 插件

1. 整洁
   1. eslint tslint prettier EditorConfig
   2. git commitizen
   3. better Comments
1. 提示
   1. element help
   2. copilot
1. 效率
   1. auto-rename
   1. json to TS
   1. css peek
   1. todo+
   1. project
   1. snippet
1. 优雅
   1. Nest Comments
   2. log
   3. htmlTagWrap
   4. Quokka.js
1. 扩展功能
   1. http
   2. sftp
   3. ssh

# 2. 功能

1. 重构

2. Emmet in vscode

# 3. attach 调试方式

## 3.1. 配置

1. vscode 配置

```
 {
      "name": "Attach to Chrome",
      "request": "attach",
      "type": "chrome",
      "port": 9222,
      "host": "127.0.0.1",
      "webRoot": "${workspaceFolder}/src",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*",
        "webpack:///./src/*": "${webRoot}/*"
      },
      "sourceMaps": true,
      "url": "http://127.0.0.1:9527",
      "userDataDir": true,
      "skipFiles": ["${workspaceFolder}/node_modules/**/*.js", "<node_internals>/**/*.js"]
 },
```

3. bat 文件启动端口 dos 命令

- .\chrome.exe
- "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222

4. 重启仍然生效

## 3.2. 查询是否配置成功

1. 端口查看
   > netstat -ano | findstr "9222"

## 3.3. 参考链接

1. [github](https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md#attach)
1. [stackoverflow](https://stackoverflow.com/questions/51563287/how-to-make-chrome-always-launch-with-remote-debugging-port-flag)
