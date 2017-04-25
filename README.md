# Vue2-SPA

> A Vue.js project with axios/vue-router/webpack


## Live Demo
The live demo can be found in [https://allan2coder.github.io/VUE2-SPA-Tutorial/](https://allan2coder.github.io/VUE2-SPA-Tutorial/) (移动端，请将浏览器调到手机屏幕浏览)


## How to use
You should clone the repo and install the dependencies, and then npm start.That is all.

```bash
$ git clone https://github.com/allan2coder/VUE2-SPA-Tutorial.git
$ cd VUE2-SPA-Tutorial
$ npm install
```
Then launch the project app.

```bash
$ npm start
```

You should see a new browser tap opening and a page of 'index.html' in http://localhost:8080.

## How to build the static files

``` bash
npm run build
```

## [Lifecycle](http://www.jianshu.com/p/e9f884b6ba6c)
![image](https://raw.githubusercontent.com/allan2coder/VUE2-SPA-Tutorial/master/screenShot/lifecycle.png)


## Router

HTML
``` bash

import Vue from 'vue'
import VueRouter from 'vue-router'

<template>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

or

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router"></script>

<div id="app">
  <p>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <router-view></router-view>
</div>
```

JavaScript
``` bash

// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 vue.use(vuerouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！
```

### 生产环境要注意的地方：

> 1、生产环境下若项目不是放在服务器的根目录下会访问不到静态资源，此时，你只需要修改下config文件夹内index.js的build中的assetsPublicPath即可

```
before：
assetsPublicPath: '/', 
```
```
after:
assetsPublicPath: '/wx/otherPath/static', 
```

> 2、在写静态资源的时候最好使用相对路径，如：

```
error:
background: url(../assets/img/icon.png);
```
```
right:
background: url(./../assets/img/icon.png);
```


## Other SPA(其他单页)
- [React.js 2.x](https://github.com/allan2coder/React-SPA-Tutorial) :fire: :fire: :fire:
- [Angularjs 2.x](https://github.com/allan2coder/Angular2-SPA)


# Reference Articles
* [Vue-Router](http://router.vuejs.org/zh-cn/essentials/getting-started.html)
* [ECMAScript 6入门](http://es6.ruanyifeng.com/)
* [Webpack 入门指迷](https://segmentfault.com/a/1190000002551952)
* [webpack使用优化](https://github.com/lcxfs1991/blog/issues/2)
* [vue guide](http://vuejs-templates.github.io/webpack/)
* [docs for vue-loader](http://vuejs.github.io/vue-loader)
