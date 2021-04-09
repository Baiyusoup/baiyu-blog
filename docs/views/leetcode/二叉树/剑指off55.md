---
title: 剑指 Offer 55 - I. 二叉树的深度
date: 2021-04-08
categories:
 - LeetCode
author: 青菜白玉汤
tags:
 - 二叉树
 - 递归
---

## 题目
输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 解决方案

1. 树的深度等于最深的子数 + 1
```javascript
var maxDepth = function(root) {
    if (root) {
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
    }
    return 0;
};
```

## 涉及知识点
1. 递归
2. 二叉树
