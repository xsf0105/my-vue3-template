// 项目启动
import Vue from "vue";
import App from "./App";

new Vue({
    // router: router, // 注册路由
    render: (h) => h(App),
}).$mount("#app"); // 渲染挂载
