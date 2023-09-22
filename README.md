## zzj-utils

- 年轻人的搭建的第一个 JavaScript 工具库，可作为脚手架快速使用

## 特性

- 使用 rollup 打包构建（webpack 大而全，rollup 小而精）
- 支持 ES6+或 TypeScript 编写源码
- 第三方依赖自动注入（自动剔除第三方依赖无用代码 tree shaking）
- 多环境支持（支持浏览器原生，支持 AMD，CMD，支持 Webpack，Rollup，fis 等，支持 Node）
- 集成文档自动生成(JSDoc)
- 集成代码风格校验(eslint)
- 集成单元测试环境和测试覆盖率(jest)
- 支持监听构建

#### 方法文档

![点击查看方法文档](./docs/index.html)

## 使用

```bash
# 安装
$ npm install zzj-utils
```

## 下面是脚手架快速搭建

#### Down

```
git clone https://github.com/TsangTszKin/zzj-utils.git
```

#### 安装

```
npm install
```

#### 构建

第一次运行需要打包 build，仅运行一次。当依赖改变时需重新打包。

```
npm run build
```

#### 单元测试

```
npm test
```

#### 测试打包后的文件效果

```bash
# 打开example/index.html文档控制台查看效果
```

#### 自动生成说明文档

```
$ npm run doc
```

#### 发布到自己的 npm

```
$ npm version patch && npm publish
```
