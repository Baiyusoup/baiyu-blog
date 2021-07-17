---
title: Fetch
date: 2021-04-13
categories:
 - JavaScript
author: 青菜白玉汤
tags:
 - 网络请求
---

## 创建

```javascript
let url = '';
fetch(url, {
  method: 'get',
  headers: {},
  body: {}
}).then(response => {

}).catch() {

}
```

## Fetch和XMLHttpRequest的区别
1. Fetch的兼容性没XMLHttpRequest好
2. Fetch不会默认发送cookie
3. Http错误不会让Fetch返回的Promise标记reject
4. Fetch不支持超时
5. Fetch不支持进度事件