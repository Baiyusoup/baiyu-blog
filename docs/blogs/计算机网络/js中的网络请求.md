---
title: JavaScript的网络请求
date: 2021-08-02
categories:
 - JavaScript
---

## XMLHttpRequest

使用
```javascript
// 创建ajax对象
const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function () {
  /**
    0: 还没调用open 方法
    1: 调用了open方法，但还没调用send方法
    2: 调用了send方法，还没收到响应
    3: 收到部分响应
    4：接收完全部响应
  */
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {} 
  }
}
// 或者
xhr.onload = function () {
  if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {} 
}

// 初始化请求 请求方法-URL-请求是否异步
xhr.open('get', 'http://baidu.com', true)

xhr.setHeader('Auth')
// 发送请求体
xhr.send(null)
```

如果想要在收到响应之前取消异步请求，可以调用`xhr.abort()`。

还可以给ajax对象设置超时`xhr.timeout`，指定多少毫秒之后中断请求，触发`xhr.ontimeout`事件。需要注意的是，在这个情况下`readyState`会变为4，此时访问status会报错，因此我们需要在处理响应那里进行异常处理。
```javascript
xhr.onload = function () {
  try {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {} 
  } catch(e) {
    console.log(e)
  }
}
```

### 进度事件
在浏览器接受数据期间，会一直触发`progress`事件，这个事件对象有两个属性`total`总共数据量和`loaded`已传输的数据量。

## Fetch
Fetch API能够执行XMLHttpRequest对象所有的任务，而且更容易使用，接口也更加现代化，支持Promise和服务线程（service worker）。在这个API中，只要服务器返回了响应，promise对象都是会变成fulfilled状态，只有在超时的时候，才会变成rejected状态，发生跨域、无网络连接、https错配以及其他浏览器情况也会变成rejected状态。

使用
```javascript
fetch('http://baidu.com').then(response => {
  // 获取纯文本格式的数据 response.text().then(data => {})

  
})

// 或者
fetch('')
  .then(response => response.text())
  .then(data => {})
```
## WebSocket