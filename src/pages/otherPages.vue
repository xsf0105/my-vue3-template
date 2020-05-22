<template>
  <div class="container">

  	<!-- 父组件内容 -->
    <h4>这是父组件</h4>
	<p>这是父组件正在渲染的数据：{{parentMsg}}</p>
	<input type="" v-model="parentMsg" autofocus="autofocus" placeholder="type something" />

	<!-- 子组件内容 -->
	<child :my-message="parentMsg"></child>

  </div>
</template>

<script>
	import Child from '../components/secondcomponent.vue'

	export default {
		data: () => ({
			parentMsg: '',
		}),
		components: {	// 挂载组件
			Child
		}
	}
</script>

<style scoped>
	h4,p{
		color: #35495e;
		font-size: 20px;
	}
	p{
		font-size: 14px;
	}
	input{
		margin: 4px;
		outline: none;
		border: 1px solid #ddd;
		line-height: 24px;
		min-width: 300px;
		padding-left: 10px;
	}
</style>