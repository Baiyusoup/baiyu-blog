---
title: Function的简单了解
date: 2020-12-06
categories:
 - JavaScript
author: 青菜白玉汤
---
::: tip
在JavaScript里面，函数是通过`function`关键字来声明的，声明函数的方式共有四种
:::
<!-- more -->

## 一、声明方式

```javascript
// 第一种
function foo () {}

// 第二种 函数表达式
const foo = function () {}
const foo = function bar() {}

// 第三种 箭头函数
const foo = () => {}

// 第四种
const foo = new Function()
```
虽然上述四种方式的作用都是一样的，但是JS引擎在解析第一种和另外几种的时候却有些差异。我们知道，js引擎在解析脚本的时候，首先会寻找函数声明，然后将其提升到源码树的顶部（[hoisting](https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting)）。因此就算在函数声明之前也能成功调用。但是另外几种是函数表达式，是赋值行为，因此只有js引擎解析到那行代码时，函数才会被添加到执行上下文。

## 二、Function内部对象

#### 2.0 this
该属性指向调用该函数的上下文对象，在箭头函数里，指向的是定义该箭头函数的上下文对象。

#### 2.1 arguments对象
```javascript
function foo (a, b){
    arguments[0] === a // true
}
arguments = {
    0: a,
    1: b
    ...
    length； 2
    caller: Function
}
```
arguments是一个类数组对象，保存着命名参数（a，b）的值，需要注意的是，即便我们不声明形参，只要我们调用的时候，放上了实参，就可以通过arguments获取到。arguments对象的caller属性保存着函数本身的引用，在严格模式下为undefined。

::: warning
arguments保存命名参数的地址和命名参数的地址是不一样的!
:::
具体表现为在函数里，通过arguments对象修改值，会反映到命名参数上，但是通过命名参数修改值，却不会反映到arguments对象里面保存的值。
```javascript
function foo(a, b) {
    arguments[0] = 4 // arguments[0]变为4后， a也变成了4而不是1
    b = 3			 // arguments[1]还是2，即便b变为了3
}
foo(1, 2)
```

#### 2.2 new.target
该属性指向函数的构造函数，如果函数使用了new关键词，那么该属性指向该函数的构造函数。平常情况下为undefined，可用来判断函数是不是被作为构造函数使用。

#### 2.3 caller
该属性会指向调用该函数的函数，如果该函数是在全局作用域下被调用，则该函数的caller属性的值为null。
```javascript
function foo() {
    console.log(foo.caller)
}
function foo2() {
    foo() // foo2{}
}
foo() // null
```
::: warning
该属性非标准属性，在严格模式下不可用！
:::

#### 2.4 apply/call/bind
这三个都是用来指定函数的this值。但前两者是用来调用函数，并指定函数的this值，这两者的区别在于前者的第二个参数必须为数组。第三者的作用是返回该函数的一个实例并指定this。
```javascript
const foo = function (a, b) {}
foo.apply(window, [1, 2])
foo.call(window, 1, 2)

const foo2 = foo.bind(window)
foo2(1, 2)
```

## 三、立即调用函数

```javascript
(function (a, b) {})(1, 2)

(function (a, b) {} (1, 2))
```

立即调用函数会被解析成函数表达式，因此在运行完后，占用的内存会立即被销毁掉，原因在于执行完后，没有变量引用这个函数