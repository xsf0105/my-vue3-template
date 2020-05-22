/*
 * @Description: 
 * @Autor: shunfa.xu
 * @Date: 2020-05-21 15:55:54
 * @LastEditors: shunfa.xu
 * @LastEditTime: 2020-05-22 15:07:20
 */ 
const webpack = require('webpack');
const config = require('./webpack.prod.conf');

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    // 在这里处理错误
    console.error(err);
    return;
  }
  // 处理完成
  console.log(stats.toString({
    chunks: false,  // 使构建过程更静默无输出
    colors: true    // 在控制台展示颜色
  }));
});
