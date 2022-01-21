<template>
  <div class="btn" @click="state.count++">Click me</div>

  <h4>{{ state.count }}</h4>
</template>

<script setup>
  import { reactive } from 'vue';

  // reactive data
  const state = reactive({ count: 0 })
</script>

<style>
  .btn {
    margin-top: 50px;
  }
  h4{
    text-align: center;
  }
</style>