<template>
    <div>
        <!-- 删除试试 顶部 -->
        <HeaderCompontent></HeaderCompontent>
        <!-- 渲染出口 -->
        <router-view></router-view>
        <!-- 删除试试 底部菜单 -->
        <FootComponent></FootComponent>
    </div>
</template>
<script>
    import HeaderCompontent from './components/header.vue'
    import FootComponent from './components/footer.vue'
    export default{
        components:{
            HeaderCompontent,
            FootComponent
        }
    }
</script>
<style>
    body, ul, h4{
        margin: 0;
		text-align: center;
    }
</style>