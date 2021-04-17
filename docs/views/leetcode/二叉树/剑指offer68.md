---
title: 剑指 Offer 68 - II. 二叉树的最近公共祖先
date: 2021-04-17
categories:
 - LeetCode
author: 青菜白玉汤
tags:
 - 二叉树
 - 后序遍历
---

## 题目
[连接](https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/)
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”


## 解决方案
大佬的思路

root是pq的最近公共祖先，分成三种情况
1. pq在root的子树中，且分别在左右子树中
2. p == root，且q在root的子树中
3. q == root，且p在root的子树中

进行后序遍历，当遇到节点p或q时返回，从底至顶回溯，当节点p、q分别在root两侧时，root即为最近公共节点，则向上返回root

```javascript
var lowestCommonAncestor = function(root, p, q) {
  // 终止条件
  // if (root === null) return root;
  // if (root === right || root === left) return root;
  if (root === null || root === right || root === left) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  // 如果left为null，则表明qp都不在左子树中
  if (left === null) return right;
  // 如果right为null，则表明qp都不在右子树中
  else if (right === null) return left;
  // 两边都不为null，说明qp分别在left和right里
  else return root;
}

```