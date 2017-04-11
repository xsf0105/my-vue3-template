<template>
    <div class="container">
        <h1>{{msg}}</h1>
        <button v-on:click="fn1()">点我看控制台</button>
        <li v-for="item in listArr">
            <a href="javascript:;">{{item.name}}</a>
        </li>
    </div>
</template>
<script>
    // ajax 使用官方推荐的 axios
    import axios from 'axios'

    export default{
        data () {
            return{
                msg:'这个页面包含了使用axios去请求ajax数据和其他事件方法',
                listArr: [],
            }
        },
        created () {
            this.init();
        },
        methods: {
            init: function() {
                var _this = this;
                console.log("初始化加载数据开始...");
                axios.get('https://api.github.com/repos/typecho-fans/plugins/contents/At', {
                  params: {
                    // 需要的参数
                  }
                })
                .then(function (response) {
                  console.log(response,2);
                  _this.listArr = response.data;
                })
                .catch(function (error) {
                  console.log(error);
                });
            },
            fn1: function() {
                console.log("这是点击事件!");
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

</style>
