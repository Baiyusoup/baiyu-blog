---
title: CSS篇-position
date: 2021-04-15
categories:
 - CSS
author: 青菜白玉汤
---

## 概述
`position`属性用于指定元素在文档中的位置，通过`left`、`right`、`top`、`bottom`这四个属性设置设置该元素的最终位置。

## 属性值
position定位共有static、relative、absolute、fixed和sticky五个属性值，其中static是默认值

::: tip
相对定位 relative
:::
该属性值设置时，元素会先放置在它未添加定位前的位置，然后在不影响布局的前提下调整位置。因此设置该属性值并不会让元素脱离文档流，在页面中仍会占据着空间。当我们设置left等属性时，它是以自己未添加定位前的位置作为参考系。

`不影响布局是指：元素在调整位置时，不会影响其他元素的偏移`

::: tip
绝对定位 absolute
:::
设置该属性时，元素会被移出文档流，不会占据任何文档空间，它的偏移是以最近的非static的祖先作为参考系，如果这样的祖先不存在的话，就以`初始包含块ICB`作为参考系。

`ICB`：根元素html所在的包含块就叫做初始包含块，指的是以整个 canvas (渲染内容的空间) 的坐标原点(左上)为基准，以 viewport为大小的矩形

::: tip
固定定位 fixed
:::
设置该属性，元素会被移出文档流，不会占据文档空间，它的偏移是以viewport视口作为参考系。

效果为元素会被定位在相对于视口的某个偏移位置，无论怎么滚动都不会影响其位置。

::: tip
粘性定位 sticky
:::
设置该属性值时，它的表现为relative和fixed的混合，当元素未跨过指定阈值(left之类指定值)，为relative，而跨过指定阈值后，就变成fixed。

## 包含块
可以简单理解包含块就是这个元素最近的祖先块元素的内容区

元素的width/height、padding、margin以及使用absolute或fixed定位为的元素的偏移量的百分比值都是根据元素的包含块进行计算的

height、top、bottom的百分比值是通过包含块的height值计算的，而width、left、right、padding、margin的百分比值是通过包含块的width值计算的