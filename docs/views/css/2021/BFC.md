---
title: BFC
date: 2021-04-12
categories:
 - CSS
author: 青菜白玉汤
---

::: tip
BFC全称叫做块级格式化上下文，是用于布局块级盒子的一块渲染区域，在这个区域内遵守着一套独特的规则。
:::

<!-- more -->

## BFC渲染规则

1. BFC区域内的元素外边距会发出重叠
2. BFC区域内的元素不会与区域外的浮动元素重叠
3. 计算BFC区域的高度时，区域内浮动元素也参与计算
4. BFC内部元素不会影响到外部，同样外部元素也不会影响内部

## 触发方式

1. float不为none，浮动元素所在的区域就是一个BFC区域
2. position不为static，或者relative的元素所在的区域就是一个BFC区域
3. display：inline-block、table-cells、flex
4. overflow不为visible的元素所在区域也是一个BFC区域
5. body根元素

## 应用

1. 清除浮动，父元素设置overflow：hidden触发BFC，
2. 消除垂直方向上两个相邻元素的边距重叠，在第二个相邻元素套上一次
3. 消除父子元素边距重叠，父元素设置overflow：hidden

