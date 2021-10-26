# 配置

1. shortIcon 配置

![快捷方式配置](https://files.catbox.moe/033st6.png)
```
--remote-debugging-port=9222 -- "%1"
```


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

3. bat文件启动端口  dos命令
- .\chrome.exe
- "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222

4. 重启仍然生效


# 查询是否配置成功

1. 端口查看  
>  netstat -ano  | findstr "9222"



# 参考链接



1. [github](https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md#attach)
1. [stackoverflow](https://stackoverflow.com/questions/51563287/how-to-make-chrome-always-launch-with-remote-debugging-port-flag)