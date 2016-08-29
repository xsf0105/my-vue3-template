<template>
    <div>
        <section class="panel" id="panelNav" :class="{ 'active': isShow }">
            <ul class="nav-aside">
                <li><a href="#">Home</a></li>
                <li><a href="#">List</a></li>
                <li><a href="#">Demo</a></li>
                <li><a href="#">Download</a></li>
            </ul>
        </section>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                isShow: false,
            };
        },
        methods:{
            showPanel: function () {
                console.log(1);
                this.isShow = !this.isShow;
            }
        }
    }
</script>

<style>
    /*.panel.active {*/
        /*-webkit-transform: translate3d(0, 0, 0);*/
        /*transform: translate3d(0, 0, 0);*/
    /*}*/
    /*.panel {*/
        /*position: absolute;*/
        /*top: -1px;*/
        /*bottom: -1px;*/
        /*left: 0;*/
        /*z-index: 980;*/
        /*width: 120px;*/
        /*background-color: #333;*/
        /*-webkit-transform: translate3d(-120px, 0, 0);*/
        /*transform: translate3d(-120px, 0, 0);*/
        /*-webkit-transition: -webkit-transform 0.3s ease-in-out;*/
        /*transition: transform 0.3s ease-in-out;*/
    /*}*/
    /*.nav-aside {*/
        /*line-height: 40px;*/
    /*}*/
    /*.nav-aside li {*/
        /*border-bottom: 1px solid #222;*/
        /*color: #fff;*/
    /*}*/
    /*.nav-aside li a {*/
        /*color: #fff;*/
        /*padding: 0 5px;*/
        /*display: block;*/
    /*}*/
</style>