# vue3-h5-template

基于 vue3 + vite + quark design + sass + viewport 适配方案 +axios 封装，构建手机端模板脚手架

### 启动项目

```bash
npm install

npm run dev
```

<span id="top">目录</span>

- [√ vite](#)
- [√ 配置多环境变量](#env)
- [√ viewport 适配方案](#viewport)
- [√ Pinia 状态管理](#Pinia)
- [√ Vue-router4](#router)
- [√ Axios 封装及接口管理](#axios)
- [√ vite.config.ts 基础配置](#base)
- [√ alias](#alias)
- [√ proxy 跨域](#proxy)
- [√ Eslint+Pettier+stylelint 统一开发规范 ](#lint)

### <span id="env">✅ 配置多环境变量 </span>

`package.json` 里的 `scripts` 配置 `dev` `dev:test` `dev:prod` ，通过 `--mode xxx` 来执行不同环境

- 通过 `npm run dev` 启动本地环境参数 , 执行 `development`
- 通过 `npm run dev:test` 启动测试环境参数 , 执行 `test`
- 通过 `npm run dev:prod` 启动正式环境参数 , 执行 `prod`

```javascript
"scripts": {
    "dev": "vite",
    "dev:test": "vite --mode test",
    "dev:prod": "vite --mode production",
}
```

[▲ 回顶部](#top)

### <span id="viewport">✅ viewport 适配方案 </span>

不用担心，项目已经配置好了 `viewport` 适配, 下面仅做介绍：

- [postcss-px-to-viewport-8-plugin](https://github.com/xian88888888/postcss-px-to-viewport-8-plugin) 是一款 `postcss` 插件，用于将单位转化为 `vw`, 现在很多浏览器对`vw`的支持都很好。

##### PostCSS 配置

下面提供了一份基本的 `postcss` 配置，可以在此配置的基础上根据项目需求进行修改

```javascript
// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  plugins: {
    'postcss-px-to-viewport-8-plugin': {
      unitToConvert: 'px', // 要转化的单位
      viewportWidth: 375, // UI设计稿的宽度
      unitPrecision: 6, // 转换后的精度，即小数点位数
      propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
      exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
    },
  },
};
```

更多详细信息： [quark](https://quark-design.hellobike.com/#/zh-CN/component/button)

[▲ 回顶部](#top)

### <span id="quarkd">✅ quarkd 组件按需加载 </span>

https://quark-design.hellobike.com/#/

#### 安装插件

```bash
npm i quarkd
```

[▲ 回顶部](#top)

### <span id="Pinia">✅ Pinia 状态管理</span>

下一代 vuex，使用极其方便，ts 兼容好

目录结构

```bash
├── store
│   ├── modules
│   │   └── user.js
│   ├── index.js
```

使用

```html
<script lang="ts" setup>
  import { useUserStore } from '@/store/modules/user';
  const userStore = useUserStore();
  userStore.login();
</script>
```

[▲ 回顶部](#top)

### <span id="router">✅ Vue-router </span>

本案例采用 `hash` 模式，开发者根据需求修改 `mode` `base`

**注意**：如果你使用了 `history` 模式， `vue.config.js` 中的 `publicPath` 要做对应的**修改**

前往:[vue.config.js 基础配置](#base)

```javascript
import Vue from 'vue';
import { createRouter, createWebHistory, Router } from 'vue-router';

Vue.use(Router);
export const router = [
  {
    name: 'root',
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/basic/index.vue'),
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
```

更多:[Vue Router](https://router.vuejs.org/zh/introduction.html)

[▲ 回顶部](#top)

### <span id="axios">✅ Axios 封装及接口管理</span>

`utils/request.js` 封装 axios , 开发者需要根据后台接口做修改。

- `service.interceptors.request.use` 里可以设置请求头，比如设置 `token`
- `config.hideloading` 是在 api 文件夹下的接口参数里设置，下文会讲
- `service.interceptors.response.use` 里可以对接口返回数据处理，比如 401 删除本地信息，重新登录

```javascript
import axios from 'axios';
import store from '@/store';
import Toast from 'quarkd/lib/toast';
// 根据环境不同引入不同api地址
import { baseApi } from '@/config';
// create an axios instance
const service = axios.create({
  baseURL: baseApi, // url = base api url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});

// request 拦截器 request interceptor
service.interceptors.request.use(
  (config) => {
    // 不传递默认开启loading
    if (!config.hideloading) {
      // loading
      Toast.loading('loading');
    }
    if (store.getters.token) {
      config.headers['X-Token'] = '';
    }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  },
);
// respone拦截器
service.interceptors.response.use(
  (response) => {
    Toast.clear();
    const res = response.data;
    if (res.status && res.status !== 200) {
      // 登录超时,重新登录
      if (res.status === 401) {
        store.dispatch('FedLogOut').then(() => {
          location.reload();
        });
      }
      return Promise.reject(res || 'error');
    } else {
      return Promise.resolve(res);
    }
  },
  (error) => {
    Toast.clear();
    console.log('err' + error); // for debug
    return Promise.reject(error);
  },
);
export default service;
```

#### 接口管理

在 `src/api` 文件夹下统一管理接口

- 你可以建立多个模块对接接口, 比如 `home.js` 里是首页的接口这里讲解 `user.js`
- `url` 接口地址，请求的时候会拼接上 `config` 下的 `baseApi`
- `method` 请求方法
- `data` 请求参数 `qs.stringify(params)` 是对数据系列化操作
- `hideloading` 默认 `false`, 设置为 `true` 后，不显示 loading ui 交互中有些接口不需要让用户感知

```javascript
import qs from 'qs';
// axios
import request from '@/utils/request';
//user api

// 用户信息
export function getUserInfo(params) {
  return request({
    url: '/user/userinfo',
    method: 'post',
    data: qs.stringify(params),
    hideloading: true, // 隐藏 loading 组件
  });
}
```

#### 如何调用

```javascript
// 请求接口
import { getUserInfo } from '@/api/user.js';

const params = {
  user: 'sunnie',
};
getUserInfo(params)
  .then(() => {})
  .catch(() => {});
```

[▲ 回顶部](#top)

### <span id="base">✅ vite.config.ts 基础配置 </span>

如果你的 `Vue Router` 模式是 hash

```javascript
publicPath: './',
```

如果你的 `Vue Router` 模式是 history 这里的 publicPath 和你的 `Vue Router` `base` **保持一直**

```javascript
publicPath: '/app/',
```

```javascript
export default function ({ command }: ConfigEnv): UserConfigExport {
  const isProduction = command === 'build';
  return {
    server: {
      host: '0.0.0.0',
    },
    plugins: [
      vue(),
      vueJsx(),
      eruda(),
      viteMockServe({
        mockPath: './src/mock',
        localEnabled: command === 'serve',
        logger: true,
      }),
    ],
  };
}
```

[▲ 回顶部](#top)

### <span id="alias">✅ 配置 alias 别名 </span>

```javascript
resolve: {
    alias: [{
            find: 'vue-i18n',
            replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
        // /@/xxxx => src/xxxx
        {
            find: /\/@\//,
            replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
            find: /\/#\//,
            replacement: pathResolve('types') + '/',
        },
    ],
},
```

[▲ 回顶部](#top)

### <span id="proxy">✅ 配置 proxy 跨域 </span>

```javascript
server: {
    proxy: {
        '/api': {
            target: 'https://baidu.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
        }
    }
},
```

[▲ 回顶部](#top)

### <span id="lint">✅ Eslint+Pettier+stylelint 统一开发规范 </span>

根目录下的`.eslintrc.js`、`.stylelint.config.js`、`.prettier.config.js`内置了 lint 规则，帮助你规范地开发代码，有助于提高团队的代码质量和协作性，可以根据团队的规则进行修改
