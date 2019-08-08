# [![CircleCI](https://img.shields.io/circleci/build/github/wall-wxk/ping-url/master)](https://circleci.com/gh/wall-wxk/ping-url/tree/master) [![Coverage Status](https://coveralls.io/repos/github/wall-wxk/ping-url/badge.svg?branch=master)](https://coveralls.io/github/wall-wxk/ping-url?branch=master) [![NPM version](https://img.shields.io/npm/v/ping-url.svg)](https://www.npmjs.com/package/ping-url) [![download](https://img.shields.io/npm/dm/ping-url)](https://www.npmjs.com/package/ping-url) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/wall-wxk/ping-url/blob/master/LICENSE)

[English](https://github.com/wall-wxk/ping-url/blob/master/README.md) | 中文简体

## :sparkles:特性

- 检测url是否可正常访问
- 检测url网络延时

## :traffic_light:兼容性

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |  
| --- | --- | --- | --- | --- |
| IE9, IE10, IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## :rocket:安装

通过npm安装
```bash
npm install --save ping-url
```
node环境
```js
var base = require('ping-url');
```
webpack及其类似的环境
```js
import base from 'ping-url';
```
require.js环境
```js
requirejs(['node_modules/ping-url/dist/ping-url.cjs.js'], function (base) {
    // do something...
})
```
浏览器环境
```html
<script src="node_modules/ping-url/dist/iping-url.min.js"></script>
```

## :books:文档

### `Ping.config`
> 自定义协议名

Ping的默认协议是`http`。如果需要自定义，在使用之前用该方法进行设置即可。

- param {object} option    
    - option.protocol {string} 协议 `取值：['http', 'https']`
- return {string} 最终设置的协议名

#### 例子
```javascript
import Ping from 'ping-url';

Ping.config({
    protocol: 'https'
});
```

### `Ping.check`
> 检测url的可用性，并返回检测信息

通过请求url，检测其可访问性和网络延时。

- param {string} url 要检测的url
- return {object} 返回`Promise`对象
    - response(resolve状态)
        - response.status {boolean} `true`：可访问 `false`：不可访问
        - response.time {number} 网络延时（毫秒），不可访问时，默认为`-1`
    - response(reject状态)
        - response.status {boolean} `false`：不可访问
        - response.msg {string} 错误信息

#### 例子
```javascript
import Ping from 'ping-url';

Ping.check('https://wangxiaokai.vip').then(res => {
    console.log(`status: ${res.status} and time: ${res.time}`);
}, res => {
    console.log(`error msg: ${res.msg}`);
});
```


## :page_facing_up:许可证
MIT

