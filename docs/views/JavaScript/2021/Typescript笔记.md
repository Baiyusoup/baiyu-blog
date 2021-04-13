---
title: Typescript笔记
date: 2021-03-30
categories:
 - JavaScript
author: 青菜白玉汤
tags:
 - ts
---

## Ts
因为js是一门非常灵活的编程语言，因此在类型方面没有任何约束，在开发大型应用或多人合作开发的时候，就很容易出现问题。
而Typescript的类型系统在很大程度上弥补了这个缺点，还有ts的提示功能在多人开发中提高了效率

### 数据类型
1. number/Number
```typescript
let a: number = 10
let b: Number = new Number(10)
```
2. string/String
```typescript
let a: string = 'abc'
let b: String = new String('abc')
```

3. boolean
```typescript
let a: boolean = false
let b: Boolean = new Boolean(false)
```
4. void
```typescript
let a: void = undefined
let b: void = null
```

5. undefined
```typescript
let a: undefined = undefined
```

6. null
```typescript
let a: null = null
```
:::tip
在js中，没有空值(void)的概念，在ts中用void表示没有任何返回值的函数
undefined、null两者与void的区别是前两者是所有类型的子类型
即undefined类型可以赋值给number类型的变量，null类型可以赋值给Number类型的变量
但是void类型不能赋值给number类型的变量
:::

7. any任意值
```typescript
let a: any = undefined;
console.log(a.name)
console.log(a.getName())
```
:::tip
在任意值上访问任何属性、调用任何方法都是允许的，声明一个变量为`any`类型后，对它的任何操作的返回值都是`any`
如果一个变量在声明的时候，没有指定类型以及初值，那个这个变量会被识别成`any`类型
:::

8. 联合类型
```typescript
// 联合类型表示变量的类型可以是多种类型中的一种
let a: number|boolean
a = 1
a = false
```
:::tip
当一个联合类型变量不确定是哪个类型的时候，只能访问所有类型里面的共有属性或方法
而联合类型的变量在被赋值的时候，会根据类型推论推断出一个类型
:::

### 类型推论
一个变量在声明的时候如果没有指明类型的话，会根据给定的初值来推断出其类型，如果也没给定初值，那就为`any`

### 接口
```typescript
interface IPerson {
  // 只读属性，只能赋值一次，且只能是在给对象赋值的时候
  readonly id: number;
  name: string;
  age: number;
  run(): void;
}
// 请注意：属性不能多也不能少
let tom: IPerson = {
  name: 'tom',
  age: 18
}


// 如果有些属性是可有可无的，可以设置为可选属性
interface IPerson {
  name: string;
  age?: number;
}
let tom: IPerson = {
  name: 'tom'
}
// 但仍不能添加未定义的属性！


// 如果希望有个任意值的属性，可以使用任意属性
interface IPerson {
  name: string;
  [prop: string]: any
}
let tom: IPerson = {
  name: 'tom',
  gender: '男'
}
```
:::tip
需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
而且一个接口只能定义一个任意类型，如果想要有多个任意类型的属性，可以在任意属性中使用联合类型
:::

### 数组类型
```typescript
let a: number[] = []
let b: Array<number> = []
```


用接口表示数组
```typescript
interface CustomArr {
  [index: number]: number;
}
let a: CustomArr = [1, 2]

// 一般不用接口来表示数组，而是描述类数组
```
常见的类数组类型：`IArguments`、`NodeList`、`HTMLCollection `

### 函数类型
```typescript
// 可选参数、默认值
function foo(x: number, y: number = 0,  f?: number): number {
  return x * x;
}

// 函数表达式
let square: (x: number) => number = function (x: number): number {
  return x * x;
}
```
:::tip
注意：可选参数必须在必需参数的后面，而给参数添加默认值后，会变成可选参数，但是不会有可选参数的位置限制
:::


使用接口来定义函数
```typescript
interface ISquare {
  (x: number): number;
}

let square: ISquare = function(x: number): number {
  return x * x;
};
```

**重载**
有些场合联合类型不能够精确地表达的

```typescript
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number|string): number|string {
  if (typeof x ==='number') {
    return x;
  } else if (typeof x === 'string') {
    return x;
  }
}
// 注意：ts优先从最前面的函数定义开始匹配
```

### 类型断言
手动指定一个类型（通常是联合类型）的值
`值 as 类型` 或 `<类型>值`

:::tip
在使用`instanceof`判断类型的时候需要注意是不是接口，因为接口不是一个真正的值，会在编译结果中被删去
因此无法使用`instanceof`来判断, 这时只能用类型断言来判断
:::

有时候断言成`any`也是允许的
```typescript
// 给window添加一个临时变量， 不这样做是无法添加的
(window as any).foo = 1;
```

而有时候也是需要将`any`类型断言成具体类型
```typescript
// 别人写的
function getData(key: string): any {
  return (window as any).cache[key];
}

// 自己要用
interface Data {
  name: string;
  url: string;
}
const data:Data = getData('key') as Data;
// 这样做的目的是减少any的滋生
```
:::tip
**并非所有类型都可以相互断言**
1. 联合类型可以被断言为其中一个类型
2. 父类可以被断言为子类
3. 任何类型和any可相互被断言
:::


### 类型别名
给一个新类型取一个新名字，一般用于联合类型
```typescript
type S = string|number;
type getName = (id: number) => string;
```