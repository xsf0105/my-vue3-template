/* 项目启动 */
import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({
  router: router,
  render: h => h(App)
  // components: { firstcomponent, secondcomponent }
}).$mount('#app')
