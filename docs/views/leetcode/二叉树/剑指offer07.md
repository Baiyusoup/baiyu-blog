---
title: 剑指 Offer 07. 重建二叉树
date: 2021-04-14
categories:
 - LeetCode
author: 青菜白玉汤
tags:
 - 二叉树
 - 前序遍历
 - 中序遍历
 - 递归
---

## 题目
输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

链接：https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/

## 解决方案
大佬的解题思路：
1. 前序遍历性质：节点按照`[根节点| 左子树 | 右子树]`排序
2. 中序遍历性质：节点按照`[左子树| 根节点 | 右子树]`排序

根据以上性质，得到结论：
1. 前序遍历的首元素为树的根节点的值
2. 根据根节点在中序遍历中的下标，将中序遍历划分为`[左子树|根节点|右子树]`
3. 根据中序遍历中左/右子树的节点数量，将前序遍历划分为`[根节点| 左子树 | 右子树]`

由此可以看出，将左/右子树看成其子数的根节点，那么处理过程都是一样的。

```javascript
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }
    if (preorder.length === inorder.length) {
        return null;
    }
    const root = new TreeNode(preorder[0]);
    let pos = inorder.indexOf(preorder[0]);
    const inorder_left = inorder.slice(0, pos);
    const inorder_right = inorder.slice(pos + 1);
    const preorder_left = preorder.slice(1, pos + 1);
    const preorder_right = preorder.slice(pos +1);

    root.left = buildTree(preorder_left, inorder_left);
    root.right = buildTree(preorder_right, inorder_right);
    return root;
};
```