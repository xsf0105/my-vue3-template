<template>
  <div class="main-page">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>

  <quark-tabbar @change="tabSwitch">
    <quark-tabbar-item>{{$t('tabbar.home')}}</quark-tabbar-item>
    <quark-tabbar-item>{{$t('tabbar.list')}}</quark-tabbar-item>
    <quark-tabbar-item>{{$t('tabbar.member')}}</quark-tabbar-item>
  </quark-tabbar>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import 'quarkd/lib/tabbar';

  const router = useRouter();

  const tabSwitch = (item) => {
    switch (+item.detail.value) {
      case 0:
        router.push('/home');
        break;
      case 1:
        router.push('/list');
        break;
      case 2:
        router.push('/member');
        break;
    }
  };
</script>

<style scoped lang="scss">
  .main-page {
    height: calc(100vh - 50px);
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
