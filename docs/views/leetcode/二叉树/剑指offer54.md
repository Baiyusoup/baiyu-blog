---
title: 剑指 Offer 54. 二叉搜索树的第k大节点
date: 2021-04-08
categories:
 - LeetCode
author: 青菜白玉汤
tags:
 - 二叉树
 - 中序遍历
---

## 题目
给定一棵二叉搜索树，请找出其中第k大的节点。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 解决方案
思路：二叉树的中序遍历结果是一个递增序列，我们可以改变左右子数的访问顺序，就可以得到一个递减序列

```javascript
var kthLargest = function(root, k) {
    let num = 0;
    let res;
    function inOrder(node) {
      if (node) {
        inOrder(node.right)
        num++;
        if (num === k) {
          res = node.val
          return
        }
        inOrder(node.left)
      }
    }
    inOrder(root)
    return res;
};
```