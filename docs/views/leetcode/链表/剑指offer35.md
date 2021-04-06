---
title: 剑指 Offer 35. 复杂链表的复制
date: 2021-04-06
categories:
 - LeetCode
author: 青菜白玉汤
tags:
 - 链表
 - 深度优先遍历
 - 广度优先遍历
---

## 题目
请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 解决方案
将输入的链表当成图来看待，链表节点当成图节点，next和random当成边

1. 由于一个节点可能被多个指针直到，因此如果该节点已经被复制过了，就不需要再重复复制
2. 如果还没被复制过，就创建一个新节点进行复制，将复制过的节点保存再哈希表中
3. 使用递归复制所有的next节点，再递归复制所有的random节点
### 1. 深度优先
```javascript
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  const hash = new WeakMap();
  const dfs = (head) => {
      if (!head) return null
      if (hash.has(head)) {
          return hash.get(head)
      }
      const cp = new Node(head.val, null, null);
      hash.set(head, cp)
      cp.next = dfs(head.next)
      cp.random = dfs(head.random)
      return cp
  }
  return dfs(head)
};
```
### 2. 广度优先
```javascript
var copyRandomList = function(head) {
  const visited = new WeakMap();
  const bfs = (head) => {
    if (!head) return head;

    const clone = new Node(head.val, null, null);
    const queue = [head];
    visited.set(head, clone)
    while(queue.length) {
      let tmp = queue.pop();
      if (tmp.next && !visited.has(tmp.next)) {
        visited.set(tmp.next, new Node(temp.next.val, [], []))
        queue.shift(tmp.next)
      }
      if (tmp.random && !visited.has(tmp.random)) {
        visited.set(tmp.random, new Node(temp.random.val, [], []))
        queue.shift(tmp.random)
      }
      visited.get(tmp).next = visited.get(tmp.next)
      visited.get(tmp).random = visited.get(tmp.random)
    }
    return clone
  }
  return bfs(head)
};
```

## 涉及知识点
1. 链表
2. 深度优点遍历
3. 广度优点遍历