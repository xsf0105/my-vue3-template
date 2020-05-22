<template>
  <div>
    <button v-on:click="loadMore">click me</button>
    <div>
      <ul>
        <li v-for="(item, index) in listArr" :key="index">
          <a href="">{{ index }} 《{{ item.name }}》</a>
        </li>
      </ul>
    </div>
    <div class="loading" v-if="loading">
      Loading...
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
	loading: false,
	listArr: [],
  }),
  created() {
    this.loadList();
  },
  methods: {
    loadList() {
		let url = "https://api.github.com/search/code?q=addClass+in:file+language:js+repo:jquery/jquery";
		fetch(url, {
			method: "GET",
		}).then((res) => {
			const {data}  = res;
			console.log(res);
			this.listArr = data.items;
        })
        .catch();
    },
    loadMore() {
		console.log("load more");
		this.loadList();
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
}
ul {
  margin-bottom: 60px;
}
li {
  line-height: 32px;
  border-bottom: 1px solid #ddd;
  padding: 0 10px;
}
b {
  font-size: 12px;
  color: #35495e;
}
.loading {
  text-align: center;
}
</style>
