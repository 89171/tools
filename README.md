#### 日常使用的小工具
> 如果想在本地使用这些小工具，clone之后在代码目录执行 npm i && npm link即可
##### macOS

- typora 使用Typora打开
- chrome 使用Chrome打开
- code 使用VSCode打开

```bash
typora dirName | fileName
```
>实际上是通过执行open命令打开了应用(也可以通过npm包open 使用默认应用打开指定文件)。
```bash
open -a Typora fileName
open -a Google\ Chrome fileName
```

- img2webp 将图片转换为webp格式输出到同目录

recent是一个管理本地工作区/文件的小工具，每次添加/访问之后 会把该工作区位置前置
- recent 选择打开的工作区
- recent ls 查看所有数据
- recent add dirName | fileName 添加
- recent del dirName | fileName 删除
- recent filter dirName | filterName 筛选并打开工作区

rename 文件批量重命名(将文件夹中指定字符串替换)
- rename test 删除当前文件夹及子文件夹，文件名中的test
- rename test abtest 将当前文件夹及其子文件夹，文件名中的test替换为abtest