---
title: Sass预处理器字典
date: 2021-05-15
categories:
 - CSS
author: 青菜白玉汤
tags:
 - css预处理
---

鉴于官网没有搜索功能，查知识点的时候有些痛苦
<!-- more -->

## 说明
这篇文章我打算跟随我看ElementUI库知道的知识点来更新

## Sass特色功能
- 完全兼容CSS3
- 在CSS基础上添加了变量、嵌套、混合等功能
- 通过函数进行颜色值和属性值的运算
- 提供控制指令等高级功能
- 自定义输出格式

## 语法

### 0. @import
通过指令`@import`我们可以导入指定sass文件的内容，如果该文件是以下划线开头如`_btn.scss`，那么在生成css文件时，下划线开头的sass文件将不会生成相应的css文件。

### 1. $自定义变量
我们可以通过`$`来声明一个变量，变量支持块级作用域
```css
#main {
  $width: 100px !global;
  width: $width;
}

#section {
  width: $width; /* 无效 */
}
```
### 2. @mixin 混入和@include 引入
可以用来提取公共样式

```css
@mixin large-text {
  font: {
    size: 20px;
    weight: 700;
  }
  color: #eee;
}

.page-title {
  @include large-text;
}
```

可以在最外层引用mixin，不会直接定义属性，也不可以使用父选择器
```css
@mixin silly-links {
  a {
    color: blue;
  }
}

@include silly-links;
```
mixin里面也可以使用include

除此之外mixin还可以使用参数
```css
@mixin sexy($color, $width: 1px) {
  border: {
    color: $color;
    width: $width;
  }
}

p {
  @include sexy(blue, 10px);
}
```

还可以向混合样式中导入内容
```css
@mixin apply {
  * html {
    @content;
  }
}
@include apply {
  #logo {
    color: #eee;
  }
}

/* 编译成 */
* html #logo { color: #eee; }
```

### 3. @function
自定义函数

```css
@function containsModifier($selector) {
  $selector: selectorToString($selector);

  @if str-index($selector, $modifier-separator) {
    @return true;
  } @else {
    @return false;
  }
}
```
### 4. @at-root
取消嵌套，将@at-root的样式都放到最外层去
```css
.parent {
  @at-root .child { }
}

/* 编译后 */
.parent {  }
.child {  }
```
### 5. @when