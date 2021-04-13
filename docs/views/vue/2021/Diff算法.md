---
title: diff算法原理
date: 2020-04-05
categories:
 - JavaScript
author: 青菜白玉汤
tags:
 - vue
---

## 算法原理
第一步，首先进入patch(oldNode, newOld)函数，进来之后判断oldNode和newOld是不是同一个节点，如果不是同一个节点，则对oldNode进行暴力删除，将newOld插入；如果是同一个节点，则进行第二步。

第二步，进入patchNode(oldNode, newOld)函数，进来后判断两者是不是同一个对象，如果是同一个对象，那此次diff结束；如果不是则进行第三步。

第三步，判断newOld没有text属性以及子节点，如果有则再判断oldNode和newOld的text属性是否相同，如果相同则此次diff结束，如果不同则将newOld的text替换掉oldNode的text，此时diff结束；回到这步的开头，如果没有的话，进行第四步

第四步，判断旧节点有没有children属性，如果没有，那就意味着oldNode有text属性，需要清空，换上newOld，此次diff结束；如果有的话，进入第五步

第五步：精细化比较，核心比较

#### 精细化比较
定义四个指针，新前和新后指针分别指向newOld的第一个子节点和最后一个子节点；旧前和旧后指针同理

然后进入循环，终止条件是