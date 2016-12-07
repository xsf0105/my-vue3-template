# Vue2-SPA

> A Vue.js project width axios/vue-router/webpack

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Lifecycle
![image](https://github.com/allan2coder/Vue2-SPA2/blob/master/screenShot/lifecycle.png)

``` bash
<template>
  <h2>lifecycle</h2>
</template>

<script>

  var lifecycle = []; //为了描述生命周期， 在 canActivate 阶段 还没有 this.lifecycle

  module.exports = {
    //props: ['父组建传的值'],
    data:function(){
      lifecycle.push("data");
      return {
        msg: '各个阶段，可以查看控制台输出，message from my-views',
        title:'my_views',
        lifecycle:lifecycle
      }
    },
    //这里才是route的生存周期
    route:{
      //waitForData: true, //数据加载完毕后再切换试图，也就是 点击之后先没反应，然后数据加载完，再出发过渡效果
      canActivate:function(transition){
        //canActivate阶段，可以做一些用户验证的事情
        lifecycle.push("route.canActivate <a href='http://vuejs.github.io/vue-router/zh-cn/pipeline/can-activate.html'>在验证阶段，当一个组件将要被切入的时候被调用。</a>");
        return true;
      },
      activate:function(transition){
        //console.log('active');
        this.lifecycle.push("route.activate <a href='http://vuejs.github.io/vue-router/zh-cn/pipeline/data.html'>在激活阶段被调用，在 activate 被断定（ resolved ，指该函数返回的 promise 被 resolve ）。用于加载和设置当前组件的数据。</a>");
//        this.$root.$set('header',this.title);

        transition.next();
        //此方法结束后，api会调用afterActivate 方法
        //在aftefActivate中 会给组件添加 $loadingRouteData 属性 并设置为true
      },
      data: function(transition) {
        var _this = this;

        this.lifecycle.push("route.data <a href='http://vuejs.github.io/vue-router/zh-cn/pipeline/data.html'>在激活阶段被调用，在 activate 被断定（ resolved ，指该函数返回的 promise 被 resolve ）。用于加载和设置当前组件的数据</a>");

        // 说明之前请求过 则不用再请求了
        if(this.$root.myViewsData){
          this.$data = this.$root.myViewsData;
          transition.next();
          console.log('已经请求过了不再请求数据');
          return;
        }

        //将数据同步到根节点
        this.$root.myViewsData = this.$data;
        setTimeout(function(){
          //这里 _this.$loadingRouteData 是 true
          transition.next({msg:'加载后的数据'});
          //在调用完transition.next 后，_this.$loadingRouteData 为 false
        }.bind(this),4000);
      },
      canDeactivate:function(transition){
        this.lifecycle.push("route.data <a href='http://vuejs.github.io/vue-router/zh-cn/pipeline/can-deactivate.html'>在验证阶段，当一个组件将要被切出的时候被调用。</a>");
        transition.next();
      },
      deactivate: function (transition) {
        this.lifecycle.push("route.deactivate  <a href='http://vuejs.github.io/vue-router/zh-cn/pipeline/deactivate.html'>在激活阶段，当一个组件将要被禁用和移除之时被调用。</a>");
        this.lifecycle = [];
        transition.next();
      }
    },

    created:function(){
      this.lifecycle.push("created <a href='http://cn.vuejs.org/api/options.html#created'>在实例被创建的时候同步调用。在这个阶段，实例已经完成了包含以下内容的准备工作：数据观察，计算属性，方法，以及事件回调。但 DOM 编译还没开始，vm.$el 此时尚不可用。</a>");
    },
    beforeCompile:function(){
      this.lifecycle.push("beforeCompile <a href='http://cn.vuejs.org/api/options.html#beforeCompile'>在编译开始之前调用。</a>");
    },
    compiled:function(){
      this.lifecycle.push("compiled <a href='http://cn.vuejs.org/api/options.html#compiled'>在编译完成后调用。在这个阶段，所有的指令都已经完成绑定，数据变化会触发DOM更新。但此时尚不能保证 $el 已经被插入到DOM中。</a>");
    },
    ready:function(){
      this.lifecycle.push("ready <a href='http://cn.vuejs.org/api/options.html#ready'>在编译完成后并且 $el 第一次插入文档时调用，也就是刚好在第一次 attached 钩子之后调用。注意只有通过指令或 Vue 实例方法，比如 $appendTo() 插入才会触发 ready。</a>");
    },
    attached:function(){
      this.lifecycle.push("attached <a href='http://cn.vuejs.org/api/options.html#attached'>当 vm.$el 被一个指令或是 vm 实例方法（例如$appendTo()）插入到DOM里的时候调用。注意直接操作 vm.$el 不会触发这个事件。</a>");
    },
    detached:function(){
      this.lifecycle.push("detached <a href='http://cn.vuejs.org/api/options.html#detached'>当 vm.$el 被一个指令或是 vm 实例方法从 DOM 里移除的时候调用。注意直接操作 vm.$el 不会触发这个事件。</a>");
    },
    beforeDestroy:function(){
      this.lifecycle.push("beforeDestroy  <a href='http://cn.vuejs.org/api/options.html#beforeDestroy'>在一个 Vue 实例被销毁之前调用。这个时候，实例的绑定和指令仍工作正常。</a>");
    },
    destroyed:function(){
      this.lifecycle.push("destroyed <a href='http://cn.vuejs.org/api/options.html#destroyed'>在一个 Vue 实例被销毁之后调用。当这个钩子被调用时，该 Vue 实例的所有指令都已经被解除绑定，所有子实例也已经被销毁。注意如果有一个离开过渡效果，destroyed 会在过渡效果结束之后才被调用。</a>");
    }
  }
</script>

```


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
// 我们晚点再讨论嵌套路由。
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

# Reference Articles
* [Vue-Router](http://router.vuejs.org/zh-cn/essentials/getting-started.html)
* [ECMAScript 6入门](http://es6.ruanyifeng.com/)
* [Webpack 入门指迷](https://segmentfault.com/a/1190000002551952)
* [webpack使用优化](https://github.com/lcxfs1991/blog/issues/2)
* [vue guide](http://vuejs-templates.github.io/webpack/)
* [docs for vue-loader](http://vuejs.github.io/vue-loader)
