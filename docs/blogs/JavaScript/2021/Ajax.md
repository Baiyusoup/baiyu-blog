---
title: Ajax
date: 2021-04-05
categories:
 - JavaScript
author: 青菜白玉汤
tags:
 - 网络请求
---

## 使用
```javascript
function ajax(options) {
  const { type, url, params, headers} = options;

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    // 0 未初始化
    // 1 已open，未send
    // 2 已open，已send
    // 3 收到部分数据
    // 4 数据接收完毕
    if (xhr.readyState === 4) {

      // xhr.statusText 状态码描述
      if (xhr.status => 200 && xhr.status < 300 || xhr.status === 304) {

        // responseTyp 决定response是什么类型
        console.log(xhr.response)

        // responseText 响应的文本数据
      }
    }
  }
  // 使用onload代替onreadystatechange
  xhr.onload = function() {
    if (xhr.status => 200 && xhr.status < 300 || xhr.status === 304) {
        // responseTyp 决定response是什么类型
        console.log(xhr.response)

        // responseText 响应的文本数据
      }
  }

  if (type.toLowerCase() === 'get') {
    url = `${url}?${paramEncode(params)}`;
    params = null;
  }
  //                   async 是否异步操作，默认true
  xhr.open(type, url, true);

  /**
   * 默认的头部信息
   * Accept
   * Accept-Encoding
   * Accept-Language
   * Accept-Charset
   * Connection
   * Cookie
   * Host
   * Referrer
   * User-Agent
   * */
  Object.keys(headers).forEach(key => {
    xhr.setRequestHeader(key, headers[key])
  })

  // 超时事件 毫秒
  xhr.timeout = 10000;

  xhr.send(params);

}

function paramEncode(params) {
  let p = '';
  Object.keys(params).forEach(key => {
    p += `${encodeURIComponent(key)}=${encodeURLComponent(params[key])}`;
  })
  return p;
} 
```

## 方法
1. abort 取消xhr的异步请求

## 进度事件
1. xhr.loadStart
2. xhr.progress
3. xhr.error
4. xhr.abort
5. xhr.load