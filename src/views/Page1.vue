<template>
  <!-- use components -->
  <Chart />
</template>

<script setup>
  import { reactive } from 'vue';
  import Chart from '../components/chart.vue'

  // reactive data
  const state = reactive({ count: 0 })
</script>

<style>
  .btn {
    background-color: #42b983;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    line-height: 45px;
  }
</style>