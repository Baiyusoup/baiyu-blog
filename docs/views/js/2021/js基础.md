---
title: js基础
date: 2021-04-01
categories:
 - javascript
author: 青菜白玉汤
---

## 语言基础
在js中共有7种类型，`number`,`string`,`boolean`,`undefined`,`null`,`symbol`,`object`。
其中六种为原始值类型，`object`为引用值类型。两者的区别在于原始值类型的存储长度都是64位，按值访问；而引用值类型是由多个值组成的对象，是按引用访问的。


`var`, `let`, `const`用来声明变量的，后两种是ES6语法，用来取代`var`。
let和const是块级作用域，且不会变量提升，所声明的变量只会在其所在的代码块内有效

`暂时性死区TDZ`: 只要块级作用域内存在let命令，它所声明的变量就会绑定这个区域，不再受外部的影响，即在let声明变量之前，这个变量在这块作用域内都不可用。

### 类型转换
1. 原始值转布尔：undefined、null、+0、-0、NaN、""
2. 原始值转数字
   1. undefined -> NaN
   2. Null -> +0
   3. true/false -> 1 / +0
   4. 字符串
      1. Number试图将其转换成一个整数或浮点数，而且会忽略所有前导的 0，如果有一个字符不是数字，结果都会返回 NaN
      2. parseInt和parseFloat 会跳过任意数量的**前导**空格，尽可能解析更多**数值字符**，并**忽略后面的内容**。如果第一个非空格字符是非法的数字直接量，将最终返回 NaN
3. 对象转字符串或数字
   1. toString
   2. valueOf 默认返回这个对象本身，而日期则是返回毫秒数

### 函数
函数分为`标准函数`和`箭头函数`

```javascript
// 函数声明
function foo() {}
// 函数表达式
const foo = function foo() {}
// new
const foo = new Function()
// 箭头函数
const foo = () => {}
```
这四种方式的结果都是一样的，但是js引擎在处理的时候，却有些差别。js引擎在执行的时候，会第一时间寻找函数声明，将其提升到源代码树的顶部，添加到执行上下文，这样即使在这个函数声明的代码前调用这个函数也会成功调用。但是函数表达式则不同，只有代码运行到哪一行代码的时候，函数才会被添加执行上下文，因此在那之前调用，会报错。

在标准函数中，有个类数组对象`arguments`，保存着传进来的参数，反映着函数的命名参数，需要注意的是命名参数保存的地址和`argument`指向的内存地址是不一样的，但是`argument`属性的改变会影响到命名参数，而命名参数的值改变却不会影响`arguments`的属性。

`arguments`内部属性还有一个`callee`属性，指向函数本身。

函数还有个`caller`的内部属性，指向调用该函数的对象。

:::tip
在标准函数中，this指向将该函数当作方法调用的作用域对象，而在箭头函数中，this指向定义该箭头函数时的作用域对象
:::

### 集合类型
#### Map
是一种以键值对为存储方式的集合类型，只要是js的数据类型都可作为Map的键。会维护插入的顺序

#### WeakMap
和Map一样的以建值为存储方式的集合类型，只不过只能用js对象作为key，js的垃圾回收机制不会将该对象考虑在内，而且当这个对象没有被引用的时候，WeakMap里保存的对象key-value就会自动消息，该对象所占用的内存也会被释放，不需要我们手动删除。

和map在API上的区别在于没有遍历操作，也没有size属性

#### Set
一个类似数字的集合类型，但是保存的值是唯一的，Set内部判断两个值是否不同，使用了一种类型`===`的算法，和`===`主要的区别在于Set认为`NaN`等于自身，而`===`认为`NaN`不等于自身。

#### WeakSet
弱引用

#### Array
```javascript
const arr = [];
arr.push() 将元素添加到末尾
arr.unshift() 将元素添加到头部
arr.pop() 将末尾元素删除并返回
arr.shift() 将头部元素删除并返回
arr.sort()
arr.splice() 根据参数个数来进行删除还是添加
arr.reverse() 反转

arr.concat() 返回合并后的数组
arr.join() 变成字符串
arr.slice() 抽出子数组

arr.indexOf() // 返回下标
arr.lastIndexOf()

arr.forEach()
arr.every() 当所有元素都返回true的时候才true
arr.some() 当存在满足测试的元素时，终止并返回true
arr.map() 返回由测试函数的返回值组成的新数组
arr.filter() 返回满足测试条件的元素组成的新数组
arr.reduce((acc, cur, idx) => {}, initV) 
```

## 执行上下文、作用域和作用域链

每个执行上下文都有三个重要属性
1. 变量对象VO
2. 作用域链Scope chain
3. this



当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到就会从父级执行上下文的变量对象中查找，一直找到全局上下文的变量对象，这样有多个执行上下文的变量对象构成的链表就叫作用域链。

### 闭包
是指那些能够访问另一个函数中的变量的函数

`例题`
```javascript
var data = [];
for(var i = 0;i < 3; i++) {
  data[i] = function () { console.log(i) }
}
data[0]() //3
data[1]() //3
data[2]() //3
```
`分析`
```javascript
// 执行到data[0]函数之前的执行上下文
globalContext = {
  VO: {
    data: [...],
    i: 3
  }
}

// 当执行到data[0]的时候，data[0]函数的作用域链为
data[0]Context = {
  Scope: [AO, globalContext.VO]
}
```
可以看到data[0]Context的AO并没有i值，那么就会沿着作用域链向上来到globalContext.VO中查找，发现i值为3，其他的同理。

改成闭包的形式：
```javascript
for(var i = 0;i < 3; i++) {
  data[i] = (function (i) { console.log(i) })(i)
}
```

全局上下文的VO没变，但是data[0]函数的作用域链变了
```javascript
data[0]Context = {
  Scope: [AO, 匿名函数Context.AO, globalContext.VO]
}

// 匿名函数的执行上下文
匿名函数Context = {
  AO: {
    arguments: {
      0: 0,
      length: 1
    },
    i: 0
  }
}
```
当沿着作用域链查找时，先找到了匿名函数上下文中的i值，而不是全局上下文中的i值

## 原型和原型链
`prototype`：每个**函数**都有该属性，指向调用该构造函数而创建的实例的原型

`__proto__`：每个j**s对象**（null除外）都有的一个属性，指向该对象的原型

`constructor`：每个**原型**都有一个constructor属性，指向关联的构造函数

由相互关联的原型组成的链状结构就是原型链

### 继承

#### 1.原型链继承
1. 这种继承方式的缺点是原型中包含的引用值会在实例间共享，即修改原型中的属性时，会影响所有实例。
2. 子类型在实例化的时候无法给夫类型的构造函数传参

```javascript
function SuperType() {
  this.colors = ['red', 'white']
}

function SubType() {}

SubType.prototype = new SuperType();
const instance1 = new SubType();
```
#### 2. 盗用构造函数继承
`思路`：在子类的构造函数中调用父类的构造函数

`原理`：改变父类this的指向
```javascript
function SuperType(...args) {
  this.colors = ['red', 'white']
}

function SubType(...args) {
  SuperType.apply(this, args)
}

const instance1 = new SubType();
```
缺点：
1. 必须是在构造函数中定义方法，导致原型不能复用
2. 子类不能访问父类原型的方法


#### 3. 组合继承
`思路`：使用原型链继承原型上的属性和方法，通过盗用构造函数继承实例属性

```javascript
function SuperType(...args) {
  this.colors = ['red', 'white']
}
SuperType.prototype.sayHi = function () {}

function SubType(...args) {
  // 继承属性
  SuperType.call(this, args)
}
// 继承方法
SubType.prototype = new SuperType();

const instance1 = new SubType();
```
优点
1. 保留了instanceof操作符和isPrototypeOf() 识别对象的能力
2. 每个实例都有自己的属性，还共享原型的方法


#### 4. 原型式继承
`思路`：通过创建一个临时构造函数，将传入的对象作为构造函数的原型，返回这个构造函数的实例。

`场景`：有一个对象，想在其基础上再创建一个对象

```javascript
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}
let person = {
  friends: ['tom']
}
let otherPerson = object(person)
```
:::tip
ES5通过Object.create() 方法将原型式继承的概念规范化了
:::
`缺点`：和普通继承一样的缺点

#### 5. 寄生式继承
```javascript
function create(original) {
  let clone = object(original);
  clone.sayHi = function() {}
  return clone;
}
```
`缺点`：create函数难以复用

#### 6. 寄生式组合继承
```javascript
function SuperType(...args) {
  this.colors = ['red', 'white']
}
SuperType.prototype.sayHi = function () {}
function SubType(...args) {
  // 继承属性
  SuperType.call(this, args)
}

function inherit(subType, superType) {
  let prototype = object(superType.prototype)
  prototype.constructor = subType
  subType.prototype = prototype
}

inherit(SubType, SuperType)
```
优点
1. 解决了组合继承需要调用两次原型的构造函数的效率问题
2. 引用类型继承的最佳实践


## 垃圾回收
在js中有两种垃圾回收机制：`引用计数`和`标记清理`

**标记清理**：垃圾回收程序运行时，会将内存中存储的所有变量都打上标记，然后将所有在上下文中、被在上下文中的变量引用的变量的标记去掉，在这之后还有标记的变量就是需要回收的变量了。

**引用计数**：对每个值都记录它被引用的次数，当引用次数为0的时候就可以回收了，缺点在于如果有两个变量相互引用，那么无法进行回收，造成内存泄漏。


## 存储

### sessionStorage

### localStorage

### indexDB

### Cookie