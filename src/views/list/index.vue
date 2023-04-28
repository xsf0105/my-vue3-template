<template>
  <quark-navbar :title="$t('tabbar.list')">
    <span slot="left">返回</span>
  </quark-navbar>
  <div class="list-item">
    <div class="img">
      <img :src="state.imgUrl" alt="" />
    </div>
    <div class="info">
      <div class="title">
        {{ state.title }}
      </div>
      <div class="price"> ¥ {{ state.price }} </div>
      <div class="link">
        {{ state.shopName }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import 'quarkd/lib/navbar';

  let state = reactive({
    imgUrl: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
    title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
    price: '388',
    vipPrice: '378',
    shopDesc: '自营',
    delivery: '厂商配送',
    shopName: '阳澄湖大闸蟹自营店>',
  });
</script>

<style scoped>
  .list-item {
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-gap: 10px;
  }
  .img {
    width: 150px;
    height: 150px;
    flex-shrink: 0;
    overflow: hidden;
  }
  img {
    width: 100%;
  }
  .title {
    font-size: 14px;
  }
  .price {
    color: red;
    font-size: 14px;
  }
  .link {
    font-size: 12px;
  }
</style>
