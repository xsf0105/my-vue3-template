<template>
  <router-link to="/">Page1</router-link> ｜ 
  <router-link to="/page2">Page2</router-link>

  <router-view />
</template>

<script setup>
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  //set tmp token when setting isNeedLogin false
})

</script>

<style>
  a {
    color: #42b983;
  }
</style>