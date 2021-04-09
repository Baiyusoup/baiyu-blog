---
title: 剑指 Offer 32 - I. 从上到下打印二叉树
date: 2021-04-08
categories:
 - LeetCode
author: 青菜白玉汤
tags:
 - 二叉树
 - 广度优先遍历
---

## 题目
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 解决方案
既然是层次遍历，肯定使用BFS

```javascript
var levelOrder = function(root) {
    if (root === null) return []
    const result = [];
    const queue = [root];
    while(queue.length) {
        const p = queue.pop();
        result.push(p.val)
        if (p.left) {
            queue.unshift(p.left)
        }
        if (p.right) {
            queue.unshift(p.right)
        }
    }
    return result;
};
```

## 涉及知识
1. 队列：先进先出的数据结构