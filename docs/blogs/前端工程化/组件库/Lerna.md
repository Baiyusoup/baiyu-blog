---
title: 组件库前置工作-Lerna
date: 2021-07-17
categories:
 - 组件库
author: 青菜白玉汤
---

## Lerna
Lerna是一个用于管理包含多个软件包（package）的JS项目的管理工具。

`单体仓库（monorepo）`：由Lerna管理的仓库

优点
1. 组件级别解耦，独立版本控制，每个组件都有版本记录可以回溯
2. 组件单独发布，支持灰度、版本回滚以及平滑升降级
3. 按需引用，用户安装具体某个组件包，无需配置即可实现按需加载的效果

## 使用

### 初始化项目
```shell
lerna init
# 或者
lerna init --independent
```
这个允许我们使用固定模式还是独立模式来管理项目
