<template>
  <div class="header">
    <img src="../assets/logo.png">
  </div>
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
    .header{
        width: 100%;
        margin: 0 auto;
    }
    .header img{
        width: 50%;
        margin: 30px auto 0;
        display: block;
    }
</style>
