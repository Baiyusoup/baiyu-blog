---
title: Ajax
date: 2021-04-05
categories:
 - 手撕代码
author: 青菜白玉汤
---

## 属性
1. xhr.timeout 过期时间

## 方法
1. abort 取消xhr的异步请求

## 进度事件
1. xhr.loadStart
2. xhr.progress
3. xhr.error
4. xhr.abort
5. xhr.load
6. xhr.loadend

## 创建

```javascript
let xhr = new XMLHttpRequest()
/**
 * 监听readyState属性，readyState = 
 * 0：未初始化，尚未调用open
 * 1：已open，尚未调用send
 * 2：已send，尚未收到响应
 * 3：接收中，尚未接收完毕
 * 4：完毕
 */
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    // xhr.status 状态码
    // xhr.statusText 状态描述
    if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
      console.log(xhr.response)
    }
  }
}
```

## GET请求
```javascript
let url = `www.baidu.com?${encodeURIComponent('keyword')}=${encodeURIComponent("雷姆")}`
xhr.open('get', url, false)
xhr.setRequestHeader('Authentication', 'hello world')
xhr.send(null) // 如果没有数据，必须设null
```

## POST
在XMLHttpRequest Level2之前，需要对表单数据进行序列化，并设置头部Content-Type="application/x-www-formurlencoded"

```javascript
const formData = new FormData();
formData.append('username', 'bai')
let url = `www.baidu.com?${encodeURIComponent('keyword')}=${encodeURIComponent("雷姆")}`
xhr.open('get', url, false)
xhr.setRequestHeader('Authentication', 'hello world')
xhr.send(formData) // 如果没有数据，必须设null
```


# Fetch