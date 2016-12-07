<template>
  <h4>啥玩意儿？</h4>
  {{lifecycle}}
</template>

<!-- 下面您就随便看看 帮助理解vue的生命周期 -->
<script>

	var lifecycle = []; //为了描述生命周期， 在 canActivate 阶段 还没有 this.lifecycle

	module.exports = {
		//props: ['父组建传的值'],
		data:function(){
			lifecycle.push("data");
			return {
				msg: '各个阶段，可以查看控制台输出，message from my-views',
				title:'my_views',
				lifecycle: lifecycle
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
//				this.$root.$set('header',this.title);

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
