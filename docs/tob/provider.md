# AI 内容合规性

> 国家对AIGC的管理办法参考资料
>
> - [生成式人工智能服务管理暂行办法](https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm)

在内容管控方面，LangBot 内置了`关键词检测`、`百度智能云审核`等内容过滤器，具体请查看配置文件章节。

在实践中，应该辅以群内管理员禁言之类的方式管控内容，模型方面，以下是推荐的方案（按推荐顺序）：

1. 使用国产模型
2. 使用严格的内容过滤器（可自行实现，详细参考插件功能章节）
3. 在使用境外模型时辅以严格的 Prompt