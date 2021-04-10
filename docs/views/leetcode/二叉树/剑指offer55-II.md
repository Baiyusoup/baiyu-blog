---
title: 剑指 Offer 55 - II. 平衡二叉树
date: 2021-04-10
categories:
 - LeetCode
author: 青菜白玉汤
tags:
 - 二叉树
 - 后序遍历
---

## 题目
输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 解决方案
[大神解法](https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/solution/mian-shi-ti-55-ii-ping-heng-er-cha-shu-cong-di-zhi/)

思路是对二叉树做后序遍历，从底至顶返回子树深度，若判断某个子树不是平衡树则“剪枝”，直接向上返回。

对于recur函数来说：

当节点root左/右子数的深度差小于2时，返回当前子树的深度，即节点root的左/右子树的深度max + 1

当节点root左/右子数的深度差大于等于2时，则返回-1，因为不是平衡树

```javascript
var isBalanced = function(root) {
    return recur(root) !== -1;
};
function recur(root) {
  if (!root) return 0;
  let left = recur(root.left);
  if (left === -1) return -1;
  let right = recur(root.right);
  if (right === -1) return -1;
  return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
}
```