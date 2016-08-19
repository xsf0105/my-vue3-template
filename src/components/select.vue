<template>
    <div>
        <!-- div.select_components_mask 类根据堆叠关系 不用设置z-index -->
        <div class="select_components_mask" v-show="show" @click.stop="show=false"></div>
            <slot name="title">default title</slot>

            <div class="select" @click.stop="show=!show">

                <div class="select-content">{{chooseval}}</div>

                <div class="select_arrow">
                    <span></span>
                </div>

                <ul class="select_wrap" :class="{ 'hide': !show }">
                    <li v-for="d in items" :class="{ 'hover': d.hover }" @mouseout="mouseout(d,$index)" @mouseover="mouseover(d,$index)" @click="choose"> {{ d.text }} </li>
                </ul>

            </div>
    </div>
</template>

<script>
	module.exports = {
		props: ['items'],
		data:function(){
			return {
				show : false,
				ishover:false,
				chooseval:'请选择'
			}
		},
		methods:{
            mouseover:function(item,index){
                item.hover = true;
            },
            mouseout:function(item,index){
                item.hover = false;
            },
            choose:function(e){
                this.chooseval = e.target.innerHTML;
            },
            hideWrap:function(){
            this.show = false;
                console.log('隐藏hideWrap');
            }
		}
	}
</script>

<style>
    .select_components_mask{
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background: transparent;
    }
    .select{
      height:40px;
      position: relative;
      border:1px solid #000;
      background:#fff;
      color:#949494;
    }
    .select-content{
      margin-top:12px;
      margin-left: 20px;
      cursor:default;
    }

    .select_arrow{
      width:38px;
      height:38px;
      position: absolute;
      right:1px;
      top:1px;
      background:#000;
    }
    .select_arrow span{
        position:absolute;
        margin: 13px -5px;
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 14px solid #fff;
    }
    .select_wrap{
      margin: 0 0 0 -1px;;
      padding: 0;
      position: absolute;
      z-index: 2;
      width: 100%;
      top: 100%;
      border:1px solid #000;
      background:#fff;
    }
    .select_wrap li{
      height:40px;
      line-height: 40px;
      padding-left:18px;
      color:#000;
      list-style: none;
    }
    .select_wrap li.hover{
      background:#949494;
    }
    .select_wrap.hide{
      display: none;
    }

</style>