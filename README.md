# Vue2-SPA

# 可能是全网最干净的 `vue` 脚手架

> A Vue.js project with `Webpack 4.x`

- 所有第三方包都已更新到最新
- 没有多余代码，让你自己搭建，自己玩

## Live Demo
The live demo can be found in [https://allan2coder.github.io/VUE2-SPA-Tutorial/](https://allan2coder.github.io/VUE2-SPA-Tutorial/) (移动端，打开浏览器开发者工具并调到手机窗口浏览。注：该项目同时适合PC端)


## How to use
You should clone the repo and install the dependencies, and then npm start.That is all.

```bash
$ git clone https://github.com/allan2coder/VUE2-SPA-Tutorial.git
$ cd VUE2-SPA-Tutorial
$ npm install
```
Then launch the project app.

```bash
$ npm run dev
```

You should see a new browser tap opening and a page of 'index.html' in http://localhost:8080.

## How to build the static files

``` bash
npm run build
```

## Screenshot
![Screenshot0](http://h0.beicdn.com/open202021/f6a79f0be3b70c67_355x636.png)
![Screenshot1](http://h0.beicdn.com/open202021/3bf11dc0efbfb4ab_355x637.png)

### 有关打包优化
第三方库单独打包
```
npm i autodll-webpack-plugin -D
```
webpack 配置：
```
new AutoDllPlugin({
  inject: true, // will inject the DLL bundle to index.html
  debug: true,
  filename: '[name]_[hash].js',
  path: './dll',
  entry: {
    vendor: ['vue', 'vue-router'] // webpack 会去 `node_modules` 去找
  }
})
```
每次打包，这个插件都会检查注册在 `entry` 中的第三方库。如果没有变化，插件就会使用缓存中的打包文件，减少了打包的时间，这时 Hash 也不会变化。



## Other SPA(其他单页)
- [React.js](https://github.com/allan2coder/React-SPA) :fire: :fire: :fire:


## License
MIT
