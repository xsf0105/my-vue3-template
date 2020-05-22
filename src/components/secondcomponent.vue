<template>
	<div class="second-wrap">
		<h4>这是子组件</h4>
		<p>这是<span>来自父组件</span>的数据：{{myMessage}}</p>
	</div>
</template>

<script>
export default {
	name: 'child',
	props: [
		'myMessage',
	]
}
</script>

<style scoped>
	.second-wrap{
		margin-top: 30px;
		text-align: center;
	}
	h4,p{
		color: #41b883;;
		font-size: 20px;
	}
	p{
		font-size: 12px;
	}
	span{
		color: #35495e;
	}
</style>

