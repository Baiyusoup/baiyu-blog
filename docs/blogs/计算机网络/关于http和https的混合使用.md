---
title: 关于http和https的混合使用问题
date: 2021-08-29
categories:
 - 计算机网络
---

写这篇文章的缘由是在面试的时候，面试官问浏览器使用http，但服务器却使用的是https，那么请求会不会成功？如果反着来呢？

原本以为是同源策略的限制，所以不能成功。但是面试官却说浏览器使用https而服务器使用http是可以的，但是反过来却不行。啊这...

首先先来理解一下什么叫做`混合内容`：

当使用者用HTTPS浏览网站的时候，它们和服务器之间的连接会通过TLS进行加密的。一个含有HTTP明文内容页面成为混合内容，这种页面只有部分加密。

混合内容的类型有两种：被动/显示型混合内容和主动型混合内容。能够发送被动型混合内容的HTTP请求主要有img、audio、video和object的src。而主动型

对于这些混合内容，现代主流浏览器都已经block掉https页面上的http请求了。

## 改进
为了解决https页面加载http资源出现的问题，可以通过一下几个方法来解决。

1. 将全站的http都改成https请求，但是这种方式只适合http资源规模较小的场景，而且有些资源未必支持https请求。
2. 使用`meta`标签将http升级为https，之后所有http资源的地址都被自动替换成https地址再发起请求，以及所有站内连接，点击后，也会被替换为https地址再跳转。
```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
```

3. 使用相对协议，将资源的url的协议头去掉，由浏览器根据当前是https还是http来判断使用哪个协议。
4. 使用相对url


https://developer.mozilla.org/zh-TW/docs/Web/Security/Mixed_content