<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
	<div class="about">
		<h2>you're in {{title}} page!</h2>
		<p>{{content}}</p>
		<p>
			<img :src="imageSrc">
		</p>
	</div>
</template>

<script>
	require('../css/testInAbout.css');
	module.exports = {
		data:function(){
			return {
				imageSrc:require('../images/logo.png'),
				content:'aboutMessage',
				title:'about'
			}
		},
		route:{
			activate:function(transition){
				transition.next();
			}
		}
	};
</script>