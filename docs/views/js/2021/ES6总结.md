---
title: ES6总结
date: 2021-04-07
categories:
 - javascript
author: 青菜白玉汤
tags:
 - ES6
---
## 概述
我将ES6的变化总结为以下几种：变量声明、作用域、数据类型、异步编程、面向对象、模块化、Proxy和Reflect

### 1. 变量声明与作用域
在es5中，var声明的变量会在编译阶段进行声明提升，即在变量声明之前使用这个变量也不会报错。ES6为了解决这个问题，新增了let和const这两个关键字。
`const` 关键字用于声明那些只读变量，一旦声明，常量的值不再改变。

`let`关键字用于声明那些可读写的变量。

在es6之前，js只有全局作用域和函数作用，而const和let为js带来看块级作用域，在块级作用域中使用let或const声明的变量会绑定在这个作用域上，不会受外部的影响，因此在块级作用域的开始到let或const声明变量的那行代码之间存在着`暂时性死区TDZ`，即在这中间无法使用那个变量，即便在外部作用域声明了这个变量。

### 2. 数据类型
#### 原始值类型
number 新增isNaN方法、isFinite方法、isInteger()，将全局方法parseInt和parseFloat移到Number对象上

string 对一些方法进行了增强，添加了遍历器接口和模板字符串，添加了includes、startWith和endWith方法

function 方面增加了箭头函数、参数默认值（需要注意，使用默认值后，length属性就会失真）和rest参数，进行了尾递归优化

新增了Symbol类型，用于表示独一无二的名称，用于解决对象的属性名冲突
##### 引用值类型
正则表达式，增强了写法

Object类型，实现了属性和方法的简写，添加了5种遍历可枚举属性的方法以及 assign方法、is方法

数组方面，添加了扩展运算符，两个创建数组的方法from和of
实例方法：copyWithin、find、findIndex、fill、entries、keys、values、includes、flat、flatMap

新增了Set和Map两个集合类型以及其子类型WeakSet和WeakMap
### 3. 异步编程

添加了Promise
Generator函数
async函数

### 4. 面向对象
添加了class 关键字，用于声明一个类型，同时添加了extends关键字用于继承，其原理是寄生组合式继承，还有添加了super关键字用于调用父类的属性和方法

### 5. 模块化
在es6之前，js的模块化方案是commonjs和amd，前者是运行在服务端，后者运作在浏览器，但是它们只有运行时才能确定模块的依赖关系和输入输出变量

ES6的模块是在编译阶段就执行，其设计思想是尽量的静态化，使得编译阶段就能够确定模块的依赖关系以及输入和输出的变量

ES6通过export和import命令实现模块化的

### 6. 其他

#### Proxy和Reflect
Proxy用于修改某些操作的默认行为，可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此我们可以在外界操作目标对象前，可以做一些操作

在es5有Object.definePrototype()api和Proxy的功能一样，但是没有Proxy强大

#### 变量的解构赋值

#### Decorator
装饰器