<template>
    <div>
        <h1>{{msg}}</h1>
        <button v-on:click="fn2()">点我看控制台</button>
    </div>
</template>
<script>
    // ajax 使用官方推荐的 axios
    import axios from 'axios'

    export default{
        data(){
            return{
                msg:'这个页面包含了使用axios去请求ajax数据和其他事件方法',
                otherData: '测试',
            }
        },
        created () {
            console.log("初始化加载数据开始...");
            axios.get('/json/test.json', {
              params: {

              }
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        },
        methods: {
            fn1: function(){
                console.log("这是点击事件!");
            },
            fn2: function(){
                console.log("点击事件2");
            }
        }
    }
</script>

<style>
  h1{
      font-size: 30px;
      text-align: center;
  }
  h4{
    font-size: 20px;
    text-align: center;
  }
  p,spa{
      font-size: 16px;
      text-align: center;
  }
  button{
      background: orange;
      display: block;
      margin: 80px auto;
      color: #fff;
      line-height: 30px;
  }
</style>
