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
    import 'mint-ui/lib/style.css';

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
        methods:{
            /* do someThing */
        }
    }

</script>
