<template>
  <div>
    <button v-on:click="loadMore">click me</button>
	<ul>
		<li v-for="(item, index) in listArr" :key="index">
			<a href="">{{ index }} 《{{ item.name }}》</a>
		</li>
	</ul>
  </div>
</template>
<script>
let mock = require('../mock'); // 模拟请求

export default {
	data: () => ({
		listArr: [],
		page: 1,
	}),
	created() {
		this.loadList();
	},
	methods: {
		loadList(page) {
			const {data, success} = mock.data;
			if (this.page > 1) {
				console.log("page is:", this.page);
				return this.listArr = this.listArr.concat(data);
			}
			this.listArr = data;
		},
		loadMore() {
			this.loadList(this.page++);
		},
	},
};
</script>

<style>
button {
	display: block;
	margin: 0 auto;
	line-height: 30px;
	border: 1px solid #ddd;
	color: #41b883;
}
a {
	color: #35495e;
	font-size: 16px;
	text-decoration: none;
}
ul {
	margin-bottom: 60px;
}
li {
	line-height: 32px;
	border-bottom: 1px solid #ddd;
	padding: 0 10px;
	text-align: left;
	list-style: none;
}
b {
	font-size: 12px;
	color: #35495e;
}
.loading {
  	text-align: center;
}
</style>
