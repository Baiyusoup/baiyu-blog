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
websocket是一个全双工的通信协议，允许服务器主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话。
特点是：
1. 建立在 TCP 协议之上，服务器端的实现比较容易。
2. 与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
3. 数据格式比较轻量，性能开销小，通信高效。
4. 可以发送文本，也可以发送二进制数据。
5. 没有同源限制，客户端可以与任意服务器通信。
6. 协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。

websocket和http2的服务器推送的区别：
1. websocket是基于http1.1协议
2. http2的服务器推送虽然支持服务器推送资源给客户端，但是应用程序是不能感知到的，这个功能主要是让浏览器提前缓存静态资源。
3. websocket有api来让应用程序进行操作


```javascript
const ws = new WebSocket('ws://localhost:8080')

// 属性
switch (ws.readyState) {
  case WebSocket.CONNECTING:
    // 0 表示正在连接
    break;
  case WebSocket.OPEN:
    // 1 表示连接成功，可以进行通信
    break;
  case WebSocket.CLOSING:
    // 2 表示连接正在关闭
    break;
  case WebSocket.CLOSED:
    // 3 表示连接已经关闭或打开连接失败
    break;
  default:
    // this never happens
    break;
}

wx.onopen = function () {} // 指定连接成功后的回调函数
wx.onclose = function () {} 
wx.addEventListener('close', function () {})

wx.onmessage = function () {} // 收到服务器数据后的回调函数

wx.send() // 向服务器发送数据
wx.onerror = function () {}
```