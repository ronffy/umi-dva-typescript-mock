
# 基于umi+dva+typescript+mock的react框架
[![umi](https://img.shields.io/badge/umi-^1.2.6-orange.svg?style=flat-square)](https://github.com/umijs/umi)
[![dva](https://img.shields.io/badge/dva-^2.0.4-orange.svg?style=flat-square)](https://github.com/dvajs/dva)
[![TypeScript](https://img.shields.io/badge/TypeScript-^2.6.2-yellowgreen.svg?style=flat-square)](https://github.com/Microsoft/TypeScript)

## 介绍

-   [umi](https://github.com/umijs/umi)一个开发框架，目前包含工具 + 路由，已经包含了react、redux、router，不包含数据和视图。
-   [dva](https://github.com/dvajs/dva) 基于 [redux](https://github.com/reactjs/redux)、[redux-saga](https://github.com/redux-saga/redux-saga) 和 [react-router](https://github.com/ReactTraining/react-router) 的轻量级前端框架。
-   [typescript](https://github.com/Microsoft/TypeScript) JS的强类型版本
-   UI库可选[Ant Design](https://ant.design/docs/react/introduce-cn) 或 [ant-design-mobile](https://github.com/ant-design/ant-design-mobile)
-   用[tslint](https://github.com/palantir/tslint)做代码规范

-   umi内置PWA功能，默认开启，无需单独配置

## 安装

```bash
yarn
# or
npm install
```

## 开发

```bash
npm run dev
```

## 构建

```bash
npm run build
```

## 项目目录

```bash
├── /dist/             # 项目输出目录
├── /mock/             # 数据mock
├── /src/              # 项目源码目录
│ ├── /public/         # 公共文件，编译时copy至dist目录
│ ├── /components/     # UI组件及UI相关方法
│ │ ├── /Component/    # 单个UI组件目录
│ │ │ ├── index.less   # 单个UI组件的样式
│ │ │ └── index.tsx    # 单个UI组件
│ │ └── index.tsx      # UI组件对外输出口
│ ├── /layouts/        # 定义布局文件的目录
│ │ └── index.less     # 定义布局组件的样式
│ │ └── index.ts       # 定义布局组件
│ ├── /pages/          # 路由组件，umi会自动引入该文件夹下的文件为路由组件
│ │ ├── /page1/        # 对应path为‘/page1’
│ │ │ ├── /models/     # '/page1’对应的dva的model，通过umi-plugin-dva自动引入
│ │ │ │ └── index.ts   # 定义'/page1’对应的dva的model
│ │ │ ├── /services/   # '/page1’的services服务文件
│ │ │ │ └── index.ts   # '/page1’某个services
│ │ │ ├── index.less   # 样式
│ │ │ └── index.tsx    # 定义路由组件的文件
│ │ └── index.tsx      # 对应path为根路径‘/’
│ ├── /models/         # dva数据模型
│ ├── /services/       # 数据接口
│ ├── /themes/         # 项目样式
│ ├── /interfaces/     # TS接口文件目录
│ │ └── index.ts      # 定义全局TS接口，如models的接口等
│ ├── /configs/        # 项目常规配置
│ │ └── apis.ts        # api配置
│ ├── /utils/          # 工具函数
│ │ ├── commonModel.ts # 公共model方法，包含reducer - updateState等
│ │ └── request.js     # 异步请求函数
│ ├── global.less      # 全局样式
│ └── dva.ts           # 配置dva的入口，默认使用umi-plugin-dva插件的配置
├── package.json       # 项目信息
├── tsconfig.json      # TypeScript配置
├── .umirc.mock.js     # 配置mock
├── globals.d.ts       # 配置TS全局的声明文件
├── tslint.json        # TSlint配置
├── .webpackrc.js      # webpack配置
└── .umirc.js          # umi配置
```

## 其他

-  alias统一通过tsconfig.json配置，不用再单独创建alias.config.js通过.webpackrc.js引入了
