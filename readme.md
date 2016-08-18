# Example VUE-SPA 
- 有问题请联系qq：416175716

## How to use
``` bash
$ git clone git@github.com:allan2coder/Vue-SPA.git <yourAppName>
$ cd <yourAppName>
$ npm install
```

launch the project app.
``` bash
$ npm start
```

Then, You should see a new browser tap opening and a page of "index.html" in http://127.0.0.1:8080.

-watch on your mobile

```
npm run ip
```
访问 你本地的ip:9000

## Release
MAC

```
npm run mb
```

windows

```
npm run wb
```

## Construction
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
待续...

