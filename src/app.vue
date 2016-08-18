<style>
    .fixed-bottom {
        position: fixed;
        background: #fff;
        width: 100%;
        bottom: 0;
        z-index: 99;
        border-top: 1px solid #ccc;
    }
    .fixed-bottom div {
        display: inline-block;
        float: left;
        text-align: center;
    }
    .fixed-bottom a {
        width: 100%;
        display: inline-block;
        font-size: 12px;
        color: #7a7a7a;
        line-height: 50px;
    }
</style>

<template>
  <div class="app">
      <!--v-text="item.name"-->
    <!--<footer class="fixed-bottom clearfix">-->
      <!--<a v-for="item in items" v-link="item" v-text="item.name">{{$index}}</a>-->
    <!--</footer>-->

      <footer class="fixed-bottom clearfix">
          <div class="col4" v-for="item in items" v-link="item">
              <a class="cur" href="" v-text="item.name">{{$index}}</a>
          </div>
      </footer>

    <router-view></router-view>

  </div>
</template>
<script>

module.exports = {
    data: function() {
      return {
        items:{
          '/':{
            name:'index'
          },
          '/news': {
            name:'news'
          },
          '/search/:viewId': {
            name:'search'
          },
          '/about':{
            name:'about'
          }

        }

      };
    },
    components:{
//      modal:require('./components/modal.vue'),
    },
    created:function(){

    },
    methods:{}
}

</script>
