---
title: 工具库
date: 2021-04-06
categories:
 - JavaScript
author: 青菜白玉汤
tags:
 - 函数编程
---

### 函数柯里化
函数柯里化是将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术

```javascript
function curry(fn) {
  // 先判断fn函数的参数个数，如果参数只有一个直接执行
  if (fn.length <= 1) return fn;

  // 对参数进行柯里化
  const generator = (...args) => {
    // 当args的参数个数等于fn函数的个数时，说明参数已经输入完毕，执行fn函数
    if (fn.length === args.length) return fn(...args)

    // 对generator函数进行递归，读取下一个参数
    return (...args2) => generator(...args, ...args2)
  }
  return generator
}
```

## 偏函数
偏函数会固定你传入的几个参数，再一次性接受剩下的参数

```javascript
const partialFunc = (func, ...args) => {
  let placeholderNum = 0
  return (...args2) => {

    // 判断占位符的位置
    args2.forEach(arg => {
      let idx = args.finedIndex(item => item ==='_')
      if (idx < 0) return

      args[idx] = arg
      placeholderNum++
    })

    if (placeholderNum < args2.length) {
      args2 = args2.slice(placeholderNum, args2.length)
    }
    return func.apply(this, [...args, ...args2])
  }
}
```

## 图片懒加载
做法
1. 滚动触发后，遍历尚未展示的图片
2. 判断图片是否出现在视图窗口内
   1. 如果出现，则将data-src属性的值给src属性
   2. 将这个图片剔除出尚未展示列表
3. 所有的图片加载完毕后需要解绑监听事件

```javascript
let imgList = [...document.querySelectorAll('img')]
let num = imgList.length

const lazyLoad = (function() {
  let count = 0
  return function() {
    const deleteIndexList = []
    imgList.forEach((img, index) => {
      // 判断当前图片是否处于视图窗口内
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        // 将data-src属性的值给src
        img.src = img.dataset.src;
        count++;
        // 记录已经展示的图片的下标，用于之后的剔除
        deleteIndexList.push(index)
      }
    })
    // 剔除已经展示的图片
    imgList = imgList.filter((_, index) => !imgList.includes(index))

    if (num === count) {
      document.removeEventListener('scroll', lazyLoad)
    }
  }
})()
```