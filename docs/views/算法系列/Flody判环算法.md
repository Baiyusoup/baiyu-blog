---
title: Floyd判圈算法
date: 2021-07-17
categories:
 - 算法系列
author: 青菜白玉汤
---

## Floyd判圈算法
Floyd判圈算法，又称龟兔赛跑算法(Tortoise and Hare Algorithm)，是一个可以在有限状态机、迭代函数或者链表上判断是否存在环，求出该环的起点与长度的算法。

假设有环，那么设两个快慢指针。两者相遇时，让其中一个指针留在相遇节点，另一个指针返回出发点，此时两者之间距离为环长度的整数倍。然后再次让两者同速前进，当两者再次相遇时，所在的节点为环的起点。

## 证明
[GO](https://www.jianshu.com/p/9b6a9bf31144)

## 练手
[GO](https://leetcode-cn.com/problems/linked-list-cycle-lcci/)