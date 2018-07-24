
Workflow
----

Based on React, immer, emotion, and a customized router.

### Usage

Dev:

```bash
yarn dev
```

Release:

```bash
yarn release
# yarn serve
```


### 代码规范

命名

* 代码方便复制粘贴使用
* 文件名方便搜索跳转
* 组件方法命名简化, 面向代码复制粘贴
* 文件名驼峰写法, 组件和模型大写与类名对应
* CSS 样式用 emotion, 变量命名 `styleXyz`

数据流:

* 优先基于组件 props 传递数据
* Store 缓存全局数据
