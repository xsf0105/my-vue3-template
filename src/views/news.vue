<template>
	<div class="news">
		<h2>
			教你使用component！
		</h2>
		<uiselect :items.sync="items">
			<h3 slot="title">下面这个来自component</h3>
		</uiselect>
	</div>
</template>

<script>
	module.exports = {
		data:function(){
			return {
				items:[{text:'男',hover:false},{text:'女',hover:false}],
				title:'select模拟'
			}
		},
		components:{
			uiselect:require('../components/select.vue')
		},
		route:{
			activate:function(transition){
				transition.next();
			}
		}
	}
</script>

<style>
    .news{
        text-align: center;
    }
    .news h2{
        font-size: 28px;;
    }
</style>