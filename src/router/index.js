import Vue from 'vue'
import VueRouter from 'vue-router'

/* 开启debug模式 */
Vue.config.debug = true
Vue.use(VueRouter);

import Index from '../pages/index'
import News from '../pages/news'
import SecondComponent from '../pages/otherPages'
import ThirdComponent from '../pages/otherPages2'

export default new VueRouter({
	mode: 'hash', // 还有 history 等
	base: __dirname,
	routes: [
		{
			path: '/index',
			component: Index,
		},
		{
			path: '/news',
			component: News,
		},
		{
			path: '/second',
			component: SecondComponent,
		},
		{
			path: '/third',
			component: ThirdComponent,
		}
	]
})
