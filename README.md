
## 启动步骤

```
npm install
npm run serve  // 开发模式
npm run build  // 打包
```


## 目录结构说明

```
ui-vue-pc
├── README.md
├── babel.config.js
├── doc               // 组件使用演示
│   ├── doc-item.vue  // 文档模板组件
│   ├── doc.vue       // 组件文档集合
│   └── ...
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue     // 根组件
│   ├── assets      // 静态资源文件夹
│   │   ├── iconfont
│   │   │   └── ...
│   │   ├── images
│   │   │   └── ...
│   │   └── sass
│   │       ├── _common.scss  // 全局公用样式
│   │       ├── _mixin.scss   // 所有的公用 mixin
│   │       ├── _resetPc.scss // 重置样式
│   │       └── main.scss     // 样式主入口
│   ├── components  // 公共组件 本项目的重点文件夹，组件源码都在这里
│   │   └── ...
│   ├── main.js     // 脚本主入口
│   ├── router.js   // 路由
│   ├── store       // vuex
│   │   ├── actions.js
│   │   ├── index.js
│   │   ├── modules
│   │   └── mutations.js
│   ├── views  // 视图文件夹，存放所有的页面文件
│   │   └── ...
└── test       // 测试文件夹
    └── ...
```


## Git使用
 - 开发新功能时，分支命名形如 `feature/xxx`，第一个commit message形如 `init xxx`
 - 修复问题时，分支命名形如 `fix/xxx`，commit message形如 `fix: 组件名/xxx`
 - 代码优化时，分支命名形如 `style/xxxx`，commit message形如 `style: 组件名/xxx`
 - 整理commit可使用 `git reset --soft commit-hash`
 - 拉取远程代码使用 git pull --rebase，rebase可以避免绝大多数冲突问题

> If you want to go fast, go alone. If you want to go far, go together. And that's the spirit of teamwork.
