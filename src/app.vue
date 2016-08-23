<template>
    <div class="app">
        <router-view></router-view>
        <footer class="fixed-bottom clearfix">
            <div class="col4" v-for="item in items" v-link="item">
                <a class="cur" href="" v-text="item.name">{{$index}}</a>
            </div>
        </footer>
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
    methods:{
    }
}

</script>
