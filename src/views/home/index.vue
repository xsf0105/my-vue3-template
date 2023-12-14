<template>
  <p class="intro-header">{{ $t('introduction') }}</p>
  <div class="btn-wrap">
    <quark-button shape="square" size="small" type="primary" @click="changeLang('zh-cn')">
      {{ $t('language.zh') }}
    </quark-button>
    <quark-button shape="square" size="small" type="primary" @click="changeLang('en-us')">
      {{ $t('language.en') }}
    </quark-button>
  </div>
  {{ getUserInfo }}
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useUserStore } from '/@/store/modules/user';
  import { setLang } from '/@/i18n';
  import 'quarkd/lib/button';

  const userStore = useUserStore();
  const getUserInfo = computed(() => {
    const { name = '' } = userStore.getUserInfo || {};
    return name;
  });
  const changeLang = (type) => {
    setLang(type);
  };
</script>

<style lang="scss">
  .header {
    display: flex;
    justify-content: center;
    margin: 26px 0 10px;
    padding: 0 20px;
    height: 50px;
    height: 30px;
    font-size: 20px;
  }

  .intro-title {
    text-align: center;
  }

  .intro-header {
    height: 30px;
    font-size: 16px;
    text-align: center;
  }

  .supportList {
    margin: 0 16px;

    .nut-icon {
      color: green;
    }
  }

  .github-icon {
    margin-top: 4px;
    font-size: 24px;
  }

  .btn-wrap {
    margin: 20px;
  }
</style>
