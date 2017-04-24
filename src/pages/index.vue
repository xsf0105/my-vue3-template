<template>
    <div class="container">
        <button v-on:click="loadList">click me</button>
        <ul>
            <li v-for="(item, index) in listArr">
                <a :href="item.alt">{{index}} 《{{item.title}}》</a>
            </li>
        </ul>
        <div class="loading" v-if="loading">
          Loading...
        </div>
    </div>
</template>
<script>
    // ajax 使用官方推荐的 axios
    import axios from 'axios'

    export default{
        data () {
            return{
                loading: false,
                listArr: [],
            }
        },
        methods: {
            loadList: function() {
                console.log("初始化加载数据开始...");
                var _this = this;
                _this.loading = true;
                axios.get('https://api.douban.com/v2/movie/top250', {
                  params: {
                    count: 11
                  }
                })
                .then(function (response) {
                  // console.log(response);
                  _this.loading = false;
                  _this.listArr = response.data.subjects;
                })
                .catch(function (error) {
                  console.log(error);
                });
            }
        }
    }
</script>

<style>
  h1{
    font-size: 22px;
    margin-bottom: 60px;
    font-weight: 400;
  }
  button{
    display: block;
    margin: 0 auto;
    line-height: 30px;
  }
  a{
    color: blue;
  }
  ul{
    margin-bottom: 60px;
  }
  li{
    line-height: 28px;
  }
</style>
