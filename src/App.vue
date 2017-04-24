<!-- 首页内容渲染 -->
<template>
  <div>

    <!-- 可以删掉 顶部 -->
    <HeaderCompontent></HeaderCompontent>

    <!-- 渲染出口 -->
    <router-view></router-view>

    <!-- 可以删除 底部菜单 -->
    <FootComponent></FootComponent>

  </div>
</template>
<script>
    import HeaderCompontent from './components/header.vue'
    import FootComponent from './components/footer.vue'
    export default{
        data(){
            return{
                msg:'Hello vue',
            }
        },
        components:{
            HeaderCompontent,
            FootComponent
        }
    }
</script>
