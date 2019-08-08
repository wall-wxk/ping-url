# [![CircleCI](https://img.shields.io/circleci/build/github/wall-wxk/ping-url/master)](https://circleci.com/gh/wall-wxk/ping-url/tree/master) [![Coverage Status](https://coveralls.io/repos/github/wall-wxk/ping-url/badge.svg?branch=master)](https://coveralls.io/github/wall-wxk/ping-url?branch=master) [![NPM version](https://img.shields.io/npm/v/ping-url.svg)](https://www.npmjs.com/package/ping-url) [![download](https://img.shields.io/npm/dm/ping-url)](https://www.npmjs.com/package/ping-url) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/wall-wxk/ping-url/blob/master/LICENSE)

English | [中文简体](https://github.com/wall-wxk/ping-url/blob/master/README.zh_CN.md)

## :sparkles:Features

- Check the url is normally accessible or not.
- Check url network latency.

## :traffic_light:Environment Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |  
| --- | --- | --- | --- | --- |
| IE9, IE10, IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## :rocket:Install

Using npm, download and install the code.
```bash
npm install --save ping-url
```
For node environment：
```js
var base = require('ping-url');
```
For webpack or similar environment：
```js
import base from 'ping-url';
```
For requirejs environment:
```js
requirejs(['node_modules/ping-url/dist/ping-url.cjs.js'], function (base) {
    // do something...
})
```
For browser environment:
```html
<script src="node_modules/ping-url/dist/iping-url.min.js"></script>
```

## :books:API

### `Ping.config`
> Customize the protocol name

The default protocol for Ping is `http`. If customization is required, use this method to set it up before use.

- param {object} option    
    - option.protocol {string} protocol `values：['http', 'https']`
- return {string} The protocol name of the final setting

#### example
```javascript
import Ping from 'ping-url';

Ping.config({
    protocol: 'https'
});
```

### `Ping.check`
> Checks the availability of the url and returns the check information.

Check its accessibility and network latency by requesting the url.

- param {string} url the url to detect
- return {object} return `Promise` object
    - response(resolve status)
        - response.status {boolean} `true`: Can be accessed `false`: Can not be accessed
        - response.time {number} Network delay (millisecond), when inaccessible, the default is' -1 '
    - response(reject status)
        - response.status {boolean} `false`: Can not be accessed
        - response.msg {string} Error message

#### example
```javascript
import Ping from 'ping-url';

Ping.check('https://wangxiaokai.vip').then(res => {
    console.log(`status: ${res.status} and time: ${res.time}`);
}, res => {
    console.log(`error msg: ${res.msg}`);
});
```


## :page_facing_up:LICENSE
MIT

