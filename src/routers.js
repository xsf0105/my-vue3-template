module.exports = function(router){
	router.map({
		'/':{
			name:'index',
			component: require('./views/index.vue')
		},
		'/news':{
			name:'news',
			component: function(reslove){
				return require(['./views/news.vue'],reslove)
			}
		},
		'/search': {
			name:'search',
			component: require('./views/search.vue')
		},
		'/about/:viewId': {
			name:'about',
			component: require('./views/about.vue'),
			auth: true // 此页面需要用户登录
		},
        '/my_views': {
            name:'my_views',
            component: require('./views/my_views.vue'),
        },
        '/login': {
            name:'login',
            component: require('./views/login.vue'),
        },
	});

	window.routeList=[];

	router.beforeEach(function(transition){
		console.log('before---------------');
		//可以通过在路由中的自定义字段来验证用户是否需要登陆
		// console.log('通过配置路由中自定义的字段验证是否需要登陆');
		if(transition.to.auth){
			if(localStorage.userId) {
				transition.next();
			} else {
				var redirect = encodeURIComponent(transition.to.path);
            	transition.redirect('/login?redirect=' + redirect);
			}
		} else {
			transition.next();
		}

	});

	//可以记录访问路径
	router.afterEach(function(transition){
		console.log('-----------------after');
		for (var i = 0; i < routeList.length; i++) {
			console.log(routeList[i].name);
		};
	});
}