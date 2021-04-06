---
title: 剑指 Offer 52. 两个链表的第一个公共节点
date: 2021-04-04
categories:
 - LeetCode
author: 青菜白玉汤
tag: 链表
---

## 题目
[这里](https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/)

输入两个链表，找出它们的第一个公共节点。

## 解决方案
使用双指针，P1指向第一个链表，P2指向第二个链表，当P1走到第一个链表的尽头时，将P1指向第二个链表的头，P2同理。当它们相遇时，即为第一个公共点

```javascript
var getIntersectionNode = function(headA, headB) {
  let pA = headA;
  let pB = headB;
  while(pA !== pB) {
      pA = pA === null ? headB : pA.next;
      pB = pB === null ? headA : pB.next;
  }
  return pA;
};
```