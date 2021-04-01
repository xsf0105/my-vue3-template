<template>
  <h1>{{ msg }}</h1>
  <button @click="state.count++">count is: {{ state.count }}</button>
</template>

<script setup>
  import { defineProps, reactive } from 'vue';

  defineProps({
    msg: String
  })

  const state = reactive({ count: 0 })
</script>

<style scoped>
  a {
    color: #42b983;
  }
</style>