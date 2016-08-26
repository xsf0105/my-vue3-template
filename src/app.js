//加载公共样式
require('./css/common.css');
require('./css/main.css');
require('./css/animate.css');

const Vue = require('vue');
const VueRouter = require('vue-router');
const filters = require('./common/filters');  // register filters 自定义过滤器
const _config = require('./common/config');   // API接口 可以在需要的页面引入,此页面可以不引入!

var App = Vue.extend(require('./app.vue'));
    Vue.use(VueRouter);
    
var router = new VueRouter({
	  hashbang: true,  //为true的时候 example.com/#!/foo/bar ， false的时候 example.com/#/foo/bar
	  //abstract:true,  //地址栏不会有变化
	  linkActiveClass:'custom-active-class' //全局设置连接匹配时的类名 参考http://vuejs.github.io/vue-router/en/link.html
});

require('./routers')(router);

router.start(App,'#app');