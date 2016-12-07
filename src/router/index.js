/* 路由配置全写这里 */
import Vue from 'vue'
import VueRouter from 'vue-router'

/* 开启debug模式 */
Vue.config.debug = true
Vue.use(VueRouter);

import secondcomponent from '../pages/otherPages.vue'
import Index from '../pages/index.vue'
import News from '../pages/news.vue'

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/index',
      component: Index
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
})
