<template>
    <div class="thirdComponent">
      <button v-on:click="increment">{{ counter }}</button>
    </div>
</template>

<script>
  export default {
    name: 'button-counter',
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      increment: function () {
        this.counter += 1
        this.$emit('increment')
      }
    }
  }
</script>

<style scoped>
  .thirdComponent{
    display: inline-block;
  }
  button{
    color: #41b883;
    border-color: #41b883;
  }
</style>