<template>
    <footer class="fixed-bottom clearfix">
        <div class="col4">
          <router-link to="/index">index</router-link>
        </div>
        <div class="col4">
          <router-link to="/news">news</router-link>
        </div>
        <div class="col4">
          <router-link to="/second">menu3</router-link>
        </div>
        <div class="col4">
          <router-link to="/third">menu4</router-link>
        </div>
    </footer>
</template>
<script>
    export default{
        data(){
            return{
                msg: 'Hello vue'
            }
        }
    }
</script>
<style>
    .fixed-bottom {
        position: fixed;
        background: #fff;
        width: 100%;
        bottom: 0;
        z-index: 99;
        border-top: 1px solid #ccc;
        display: grid;
        text-align: center;
        grid-template-columns: 25% 25% 25% 25%;
    }
    .fixed-bottom a {
        width: 100%;
        display: inline-block;
        font-size: 12px;
        color: #7a7a7a;
        line-height: 50px;
    }
</style>
