## Setup
``` bash
npm install
npm start
```
访问 localhost:8080

如果想在手机上查看

```
npm run ip
```
访问 你本地的ip:9000

## 版本控制，打包压缩
MAC

```
npm run mb
```

windows

```
npm run wb
```

## 目录结构
<pre>
│  .gitignore          # 忽略无需git控制的文件  比如 node_modules
│  package.json        # 项目配置
│  readme.md           # 项目说明
│  index.html          # 首页
│  index.tpl           # 首页模板  在发布的时候 执行 PRODUCTION=1 webpack 会生成一个d.html并注入脚本，样式，达到版本控制的目的
│  webpack.config.js   # webpack 配置文件
│
├─node_modules
└─src
    │  app.js          # 启动配置，配置路由，过滤器
    │  app.vue         # 主vue
    │  filters.js      # 过滤器
    │  routers.js      # 路由
    │
    ├─components       # 组件
    │      my-component.vue
    │
    ├─css              # 公用样式
    │      common.css
    │
    └─views            # 页面
            about.vue
            home.vue
            not-found.vue
</pre>

##学习参考：
待续

