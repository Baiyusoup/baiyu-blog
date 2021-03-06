---
title: Promise A+规范实现
date: 2021-04-03
categories:
 - JavaScript
author: 青菜白玉汤
---
## 规范
[规范](https://mp.weixin.qq.com/s/qdJ0Xd8zTgtetFdlJL3P1g)

### 术语
`promise`   是一个包含then方法的对象或者函数

`thenable`  是一个包含then方法和对象或者函数

`value`     任意合法值

`exception` throw语句抛出的值

`reason`    一个只是promise为什么被rejected的值

### 状态
`pending`: 此状态下，promise可以切换到fulfilled或者rejected状态，切换后，状态不再改变。

`fulfilled`：此状态下，必须有一个不可变的value

`rejected`：此状态下，必须有一个不可变的reason

### Then方法
Promise必须有Then方法，接受onFulfilled和onRejected两个参数，如果这两个参数都是函数，则必须最多执行一次，onFulfilled函数的参数是value，而onRejected函数的参数为reason。

Then方法可以被调用很多次，每次注册一组onFulfilled和onRejected的callback，它们如果被调用，必须按照注册顺序调用

Then方法必须返回promise

### 特殊value处理


## 代码
```javascript
const PENDING     = 'pending'
const FULFILLED   = 'fulfilled'
const REJECTED    = 'rejected'

function Promise() {
  this.state = PENDING
  this.result = null

  this.callbacks = []

  let onFulfilled = vale => transition(this, FULFILLED, vale)
  let onRejected = reason => transition(this, REJECTED, reason)

  // 保证resolve/reject只有一个调用作用
  let ignore = false
  let resolve = value => {
    if (ignore) return
    ignore = true
    resolvePromise(this, value, onFulfilled, onRejected)
  }

  let reject = reason => {
    if (ignore) return
    ignore = true
    onRejected(reason)
  }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
  return new Promise((resolve, reject) => {
    let callback = { onFulfilled, onRejected, resolve, reject }
    if (this.state == PENDING) {
      this.callbacks.push(callback)
    } else {
      setTimeout(() => handleCallback(callback, this.state, this.result), 0)
    }
  })
}

const transition = (promise, state, result) => {
  if (promise.state !== PENDING) return
  promise.state = state
  promise.result = result

  setTimeout(() => handleCallbacks(promise.callbacks, state, result), 0)
}

const handleCallback = (callback, state, result) => {
  let { onFulfilled, onRejected, resolve, reject } = callback

  try {
    if (state === FULFILLED) {
      isFunction(onFulfilled) ? resolve(onFulfilled(result)) : resolve(result)
    } else if (state === REJECTED) {
      isFunction(onRejected) ? resolve(onRejected(result)) : reject(result)
    }
  } catch(error) {
    reject(error)
  }
}

// 处理特殊值
const resolvePromise = (promise, result, resolve, reject) => {
  if (result === promise) {
    let reason = new TypeError('Can not fufill promise with itself')
    return reject(reason)
  }

  if (isPromise(result)) {
    return result.then(resolve, reject)
  }

  if (isThenable(result)) {
    try {
      let then = result.then
      if (isFunction(then)) {
        return new CustomPromise(then.bind(result)).then(resolve, reject)
      }
    } catch(error) {
      return reject(error)
    }
  }

  resolve(result)
}

const handleCallbacks = (callbacks, state, result) => {
  while (callbacks.length) handleCallback(callbacks.shift(), state, result)
}
```