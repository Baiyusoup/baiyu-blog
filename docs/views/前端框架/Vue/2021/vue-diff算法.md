---
title: Diff算法
date: 2021-06-30
categories:
 - Vue
author: 青菜白玉汤
---

当数据发生改变时，set方法会调用Dep.notify通知所有订阅者Watcher，watcher就会调用patch函数处理，更新视图

## 原理

---tips
patch(oldVnode, vnode)
---tip
在这里，会判断这两个vnode是不是同一个节点，如果是同一个节点，就调用patchVnode方法。

如果不是同一个节点的话，就将vnode替换掉oldVnode

---tips
patchVnode(odlNode, vnode)
---
1. 判断两者是否是同一个对象，如果是就退出
2. 如果
