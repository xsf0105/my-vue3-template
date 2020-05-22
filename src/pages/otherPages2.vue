<template>
  <div class="container">

	<!-- 这是父组件内容 -->
    <h4>子组件数据传递给父组件</h4>
	  <p>方式：用自定义事件</p>
	  <p class="parent-title">这是父组件</p>

		<!-- 父组件可以在使用子组件的地方直接用 v-on 来监听子组件触发的事件。 -->
		<h2 class="text-center">{{ total }}</h2>


		<!-- 这是子组件内容 -->
		<div class="text-center">
			<p>这是子组件</p>
			<buttonCounter v-on:increment="incrementTotal"></buttonCounter>
		  	<buttonCounter v-on:increment="incrementTotal"></buttonCounter>
		</div>

  </div>
</template>

<script>
	 import buttonCounter from '../components/thirdcomponent.vue'

	 export default {
		data: () => ({
			parentMsg: '子组件传递信息给父元素',
			total: 0,
		}),
		methods: {
			incrementTotal: function () {
			this.total += 1
			}
		},
	    components: {
	   	  	buttonCounter
	    }
	 }
</script>

<style scoped>
	.parent-title{
		margin-top: 30px;
	}
	h4{
		font-size: 20px;
	}
	h2{
		margin: 0 0 40px;
	}
	.text-center p {
		color: #41b883;
	}
</style>
