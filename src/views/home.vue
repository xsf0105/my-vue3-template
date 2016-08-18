<template>
	<div>
		Welcome to Home router page!
	</div>
</template>

<script>
module.exports = {
	data:function(){
		return {
			msg:'aboutMessage',
			title:'home'
		}
	},
	route:{
		activate:function(transition){
			transition.next();
		}
	},
};
</script>